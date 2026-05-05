import { Languages, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useI18n } from "@/i18n/I18nProvider";
import { Wordmark } from "../Wordmark";
import logoAlpy from "@/assets/logo-alpy.svg";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { lang, setLang, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: t.nav.home, end: true },
    { to: "/como-funciona", label: t.nav.how },
    { to: "/precios", label: t.nav.plans },
    { to: "/casos-de-uso", label: t.nav.useCases },
    { to: "/blog", label: t.nav.blog },
    { to: "/contacto", label: t.nav.contact },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // close mobile on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoAlpy} alt="AlPy logo" className="w-8 h-8" />
          <Wordmark size="md" />
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => cn(
                "relative transition-all duration-300 ease-in-out py-1",
                isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span className={cn(
                    "absolute -bottom-[18px] left-0 right-0 h-px bg-primary transition-all duration-300 ease-in-out",
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  )} />
                </>
              )}
            </NavLink>
          ))}
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

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md animate-in fade-in duration-200">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 z-[110] w-11 h-11 inline-flex items-center justify-center rounded-md border border-border bg-background/40 text-foreground hover:border-primary/60 hover:text-primary transition-all duration-300 ease-in-out"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
          <nav className="h-full w-full flex flex-col items-center justify-center space-y-6 px-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => cn(
                  "text-2xl font-medium tracking-tight transition-all duration-300 ease-in-out",
                  isActive ? "text-primary" : "text-foreground/90 hover:text-primary"
                )}
              >
                {l.label}
              </NavLink>
            ))}
            <div className="pt-6 flex flex-col items-center gap-3 w-full max-w-xs">
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
          </nav>
        </div>
      )}
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
          <p className="text-muted-foreground leading-relaxed">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 mb-4">{t.footer.nav}</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition">{t.nav.home}</Link></li>
            <li><Link to="/como-funciona" className="hover:text-foreground transition">{t.nav.how}</Link></li>
            <li><Link to="/precios" className="hover:text-foreground transition">{t.nav.plans}</Link></li>
            <li><Link to="/casos-de-uso" className="hover:text-foreground transition">{t.nav.useCases}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 mb-4">{t.footer.resources}</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/blog" className="hover:text-foreground transition">{t.nav.blog}</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground transition">{t.nav.contact}</Link></li>
            <li><a href="enlace_real_aquí" className="hover:text-foreground transition">{t.footer.privacy}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70 mb-4">{t.footer.company}</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="mailto:hello@alpy.dev" className="hover:text-foreground transition">hello@alpy.dev</a></li>
            <li><a href="mailto:sales@alpy.dev" className="hover:text-foreground transition">sales@alpy.dev</a></li>
            <li><a href="enlace_real_aquí" className="hover:text-foreground transition">www.alpy.dev</a></li>
          </ul>
        </div>
      </div>
      <div className="container mt-10 pt-6 border-t border-border/40 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} AlPy. {t.footer.rights}</span>
        <span>Made for builders who refuse to wait for a laptop.</span>
      </div>
    </footer>
  );
};
