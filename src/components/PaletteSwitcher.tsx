import { useEffect, useState } from "react";
import { Palette, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PALETTES = [
  { id: "alpy", name: "ALPY Original", swatch: ["hsl(215 40% 7%)", "hsl(199 75% 75%)"] },
  { id: "python", name: "Midnight Python", swatch: ["hsl(222 45% 6%)", "hsl(50 100% 60%)"] },
  { id: "ocean", name: "Deep Ocean", swatch: ["hsl(215 50% 6%)", "hsl(14 90% 65%)"] },
  { id: "mono", name: "Monochrome Pro", swatch: ["hsl(0 0% 5%)", "hsl(270 100% 70%)"] },
] as const;

const STORAGE_KEY = "alpy-palette";

export const PaletteSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("alpy");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || "alpy";
    setActive(saved);
    document.documentElement.dataset.palette = saved;
  }, []);

  const apply = (id: string) => {
    setActive(id);
    document.documentElement.dataset.palette = id;
    localStorage.setItem(STORAGE_KEY, id);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-64 rounded-2xl bg-[hsl(var(--surface-2))] border border-border shadow-elevated p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="font-mono text-xs uppercase tracking-wider text-primary">
                Prueba paletas
              </p>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-1.5">
              {PALETTES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => apply(p.id)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                    active === p.id ? "bg-primary/10" : "hover:bg-secondary"
                  }`}
                >
                  <span className="flex -space-x-1.5">
                    {p.swatch.map((c, i) => (
                      <span
                        key={i}
                        className="w-5 h-5 rounded-full border-2 border-[hsl(var(--surface-2))]"
                        style={{ background: c }}
                      />
                    ))}
                  </span>
                  <span className="text-sm text-foreground flex-1 text-left">{p.name}</span>
                  {active === p.id && <Check className="w-4 h-4 text-primary" />}
                </button>
              ))}
            </div>
            <p className="mt-3 pt-3 border-t border-border text-[11px] text-muted-foreground leading-relaxed">
              Sugerencias para evaluar el lanzamiento. Tu selección se guarda local.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="w-12 h-12 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="Abrir selector de paletas"
      >
        <Palette className="w-5 h-5" />
      </button>
    </div>
  );
};
