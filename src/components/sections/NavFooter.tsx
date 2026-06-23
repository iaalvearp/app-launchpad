import { Languages, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useI18n } from "@/i18n/I18nProvider";
import { useActiveSection } from "@/hooks/use-active-section";
import { Wordmark } from "../Wordmark";
import logoAlpy from "@/assets/logo-alpy.svg";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

type LinkItem =
  | { kind: "hash"; hash: string; label: string }
  | { kind: "route"; to: string; label: string };

export const Navbar = () => {
  const { lang, setLang, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const sectionIds = ["inicio", "como-funciona", "precios", "testimonios", "faq", "casos-de-uso", "descargar"];
  const active = useActiveSection(isHome ? sectionIds : []);

  const links: LinkItem[] = [
    { kind: "hash", hash: "inicio", label: t.nav.home },
    { kind: "hash", hash: "como-funciona", label: t.nav.how },
    { kind: "hash", hash: "casos-de-uso", label: t.nav.useCases },
    { kind: "hash", hash: "precios", label: t.nav.plans },
    { kind: "hash", hash: "testimonios", label: t.nav.community },
    { kind: "hash", hash: "faq", label: t.nav.faq },
    { kind: "route", to: "/blog", label: t.nav.blog },
    { kind: "route", to: "/contacto", label: t.nav.contact },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Scroll to hash when landing on home with a hash
  useEffect(() => {
    if (isHome && location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el)
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          60,
        );
    }
  }, [isHome, location.hash]);

  const goHash = (hash: string) => {
    setMobileOpen(false);
    if (isHome) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${hash}`);
    } else {
      navigate(`/#${hash}`);
    }
  };

  const isHashActive = (hash: string) => isHome && active === hash;

  const linkClass = (activeState: boolean) =>
    cn(
      "relative transition-all duration-300 ease-in-out py-1",
      activeState
        ? "text-primary font-medium"
        : "text-muted-foreground hover:text-foreground",
    );

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoAlpy} alt="AlPy logo" className="w-8 h-8" />
          <Wordmark size="md" />
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) =>
            l.kind === "hash" ? (
              <button
                key={l.hash}
                onClick={() => goHash(l.hash)}
                className={linkClass(isHashActive(l.hash))}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute -bottom-[18px] left-0 right-0 h-px bg-primary transition-all duration-300 ease-in-out",
                    isHashActive(l.hash)
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0",
                  )}
                />
              </button>
            ) : (
              <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) => linkClass(isActive || (l.to === "/contacto" && isHashActive("descargar")))}
                >
                  {({ isActive }) => {
                    const routeActive = isActive || (l.to === "/contacto" && active === "descargar");
                    return (
                      <>
                        {l.label}
                        <span
                          className={cn(
                            "absolute -bottom-[18px] left-0 right-0 h-px bg-primary transition-all duration-300 ease-in-out",
                            routeActive
                              ? "opacity-100 scale-x-100"
                              : "opacity-0 scale-x-0",
                          )}
                        />
                      </>
                    );
                  }}
                </NavLink>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-primary/50 transition"
            aria-label="Toggle language"
          >
            <Languages className="w-3.5 h-3.5" />
            {lang === "en" ? "EN" : "ES"}
          </button>
          <a
            href="enlace_real_aquí"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow hover:brightness-110 transition"
          >
            {t.nav.cta}
          </a>
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden w-10 h-10 inline-flex items-center justify-center rounded-md border border-border text-foreground hover:border-primary/60 transition"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ===== MENÚ MÓVIL ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop - z-50 para estar por encima de todo excepto el panel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[50] bg-background/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel del menú - z-[9999] máximo absoluto, full viewport */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 z-[9999] flex flex-col bg-background"
              style={{ height: "100vh", width: "100vw" }}
            >
              {/* Header del menú */}
              <div className="flex items-center justify-between h-16 px-4 shrink-0 border-b border-border/60 bg-background/50 backdrop-blur-md">
                <Link
                  to="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setMobileOpen(false)}
                >
                  <img src={logoAlpy} alt="AlPy logo" className="w-8 h-8" />
                  <Wordmark size="md" />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-border text-foreground hover:border-primary/60 hover:text-primary transition"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contenido - min-h-0 es CRÍTICO para que flex funcione */}
              <div className="flex-1 min-h-0 flex flex-col items-center justify-center px-6 overflow-y-auto">
                <nav className="flex flex-col items-center space-y-8 w-full max-w-xs py-10">
                  {links.map((l) => {
                    if (l.kind === "hash") {
                      return (
                        <button
                          key={l.hash}
                          onClick={() => goHash(l.hash)}
                          className={cn(
                            "text-3xl font-medium tracking-tight transition-all duration-300 ease-in-out",
                            isHashActive(l.hash)
                              ? "text-primary"
                              : "text-foreground/90 hover:text-primary",
                          )}
                        >
                          {l.label}
                        </button>
                      );
                    }
                    return (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }: { isActive: boolean }) =>
                          cn(
                            "text-3xl font-medium tracking-tight transition-all duration-300 ease-in-out",
                            isActive
                              ? "text-primary"
                              : "text-foreground/90 hover:text-primary",
                          )
                        }
                      >
                        {l.label}
                      </NavLink>
                    );
                  })}
                </nav>

                <div className="flex flex-col items-center gap-3 w-full max-w-xs pb-10">
                  <button
                    onClick={() => setLang(lang === "en" ? "es" : "en")}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 ease-in-out"
                  >
                    <Languages className="w-4 h-4" />
                    {lang === "en" ? "Switch to ES" : "Cambiar a EN"}
                  </button>
                  <a
                    href="enlace_real_aquí"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow hover:brightness-110 transition-all duration-300 ease-in-out"
                  >
                    {t.nav.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border/60 py-14 mt-10">
      <div className="container grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <img src={logoAlpy} alt="AlPy" className="w-7 h-7" />
            <Wordmark size="md" />
          </Link>
          <p className="text-muted-foreground leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 mb-4">
            {t.footer.nav}
          </h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/#inicio" className="hover:text-foreground transition">
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link
                to="/#como-funciona"
                className="hover:text-foreground transition"
              >
                {t.nav.how}
              </Link>
            </li>
            <li>
              <Link to="/#precios" className="hover:text-foreground transition">
                {t.nav.plans}
              </Link>
            </li>
            <li>
              <Link
                to="/#casos-de-uso"
                className="hover:text-foreground transition"
              >
                {t.nav.useCases}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 mb-4">
            {t.footer.resources}
          </h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/blog" className="hover:text-foreground transition">
                {t.nav.blog}
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-foreground transition">
                {t.nav.contact}
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-foreground transition"
              >
                {t.footer.privacy}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 mb-4">
            {t.footer.company}
          </h4>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a
                href="mailto:hello@alpy.dev"
                className="hover:text-foreground transition"
              >
                hello@alpy.dev
              </a>
            </li>
            <li>
              <a
                href="mailto:sales@alpy.dev"
                className="hover:text-foreground transition"
              >
                sales@alpy.dev
              </a>
            </li>
            <li>
              <a
                href="enlace_real_aquí"
                className="hover:text-foreground transition"
              >
                www.alpy.dev
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-10 pt-6 border-t border-border/40 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
        <span>
          © {new Date().getFullYear()} AlPy. {t.footer.rights}
        </span>
        <span>Made for builders who refuse to wait for a laptop.</span>
      </div>
    </footer>
  );
};
