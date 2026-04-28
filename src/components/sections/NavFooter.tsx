import { Languages, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { useActiveSection } from "@/hooks/use-active-section";
import { Wordmark } from "../Wordmark";
import logoAlpy from "@/assets/logo-alpy.svg";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["por-que", "planes", "testimonios", "b2b", "descargar"];

export const Navbar = () => {
  const { lang, setLang, t } = useI18n();
  const active = useActiveSection(SECTION_IDS);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: "por-que", label: t.nav.why },
    { id: "planes", label: t.nav.plans },
    { id: "testimonios", label: t.nav.testimonials },
    { id: "b2b", label: t.nav.b2b },
    { id: "descargar", label: t.nav.download },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logoAlpy} alt="AlPy logo" className="w-8 h-8" />
          <Wordmark size="md" />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={cn(
                  "transition-colors relative",
                  isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
                {isActive && (
                  <span className="absolute -bottom-[22px] left-0 right-0 h-px bg-primary" />
                )}
              </a>
            );
          })}
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

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col animate-in fade-in duration-200">
          <div className="container flex items-center justify-between h-16 border-b border-border/50">
            <a href="#" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
              <img src={logoAlpy} alt="AlPy logo" className="w-8 h-8" />
              <Wordmark size="md" />
            </a>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-border text-foreground hover:border-primary/60 transition"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 container flex flex-col justify-center gap-2 -mt-16">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-3xl font-bold tracking-tight py-3 border-b border-border/40 transition-colors",
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  )}
                >
                  {l.label}
                </a>
              );
            })}
            <div className="mt-8 flex flex-col gap-3">
              <button
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border text-sm font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-primary/50 transition"
              >
                <Languages className="w-4 h-4" />
                {lang === "en" ? "Switch to ES" : "Cambiar a EN"}
              </button>
              <a
                href="enlace_real_aquí"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow hover:brightness-110 transition"
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
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <img src={logoAlpy} alt="AlPy" className="w-6 h-6" />
          <span>
            © {new Date().getFullYear()} <Wordmark size="sm" className="!text-sm align-baseline" /> · {t.footer.tagline}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a href="enlace_real_aquí" className="hover:text-foreground transition">www.alpy.dev</a>
          <a href="enlace_real_aquí" className="hover:text-foreground transition">sales@alpy.dev</a>
          <a href="enlace_real_aquí" className="hover:text-foreground transition">{t.footer.privacy}</a>
        </div>
      </div>
    </footer>
  );
};
