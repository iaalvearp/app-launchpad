import logoAlpy from "@/assets/logo-alpy.svg";

export const Navbar = () => (
  <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/50">
    <div className="container flex items-center justify-between h-16">
      <a href="#" className="flex items-center gap-2.5">
        <img src={logoAlpy} alt="ALPY" className="w-8 h-8" />
        <span className="font-display font-bold text-lg tracking-tight">ALPY</span>
      </a>
      <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
        <a href="#por-que" className="hover:text-foreground transition">¿Por qué ALPY?</a>
        <a href="#planes" className="hover:text-foreground transition">Planes</a>
        <a href="#b2b" className="hover:text-foreground transition">B2B</a>
        <a href="#descargar" className="hover:text-foreground transition">Descargar</a>
      </nav>
      <a
        href="enlace_real_aquí"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow hover:brightness-110 transition"
      >
        Google Play
      </a>
    </div>
  </header>
);

export const Footer = () => (
  <footer className="border-t border-border/60 py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <img src={logoAlpy} alt="ALPY" className="w-6 h-6" />
        <span>© {new Date().getFullYear()} ALPY · Tu estudio de Python.</span>
      </div>
      <div className="flex items-center gap-5">
        <a href="enlace_real_aquí" className="hover:text-foreground transition">www.alpy.dev</a>
        <a href="enlace_real_aquí" className="hover:text-foreground transition">sales@alpy.dev</a>
        <a href="enlace_real_aquí" className="hover:text-foreground transition">Privacidad</a>
      </div>
    </div>
  </footer>
);
