import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";

const isPositive = (v: string) =>
  /^(yes|sí|si|100%|incluidos|bundled)/i.test(v.trim());
const isNegative = (v: string) => /^no$/i.test(v.trim());

const Cell = ({ value, accent = false }: { value: string; accent?: boolean }) => {
  const Icon = isPositive(value) ? Check : isNegative(value) ? X : null;
  return (
    <div className={`flex items-start gap-2 text-sm ${accent ? "text-foreground font-medium" : "text-muted-foreground"}`}>
      {Icon && <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${isPositive(value) ? (accent ? "text-primary" : "text-foreground/70") : "text-destructive/80"}`} />}
      <span>{value}</span>
    </div>
  );
};

export const Comparison = () => {
  const { t } = useI18n();
  return (
    <section id="comparativa" className="py-24 lg:py-32 relative">
      <div className="container">
        <SectionHeading
          eyebrow={t.comparison.eyebrow}
          title={<>{t.comparison.title1}<span className="text-primary">{t.comparison.titleAccent}</span>{t.comparison.titleDot}</>}
          subtitle={t.comparison.subtitle}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 max-w-5xl mx-auto w-full rounded-xl border border-border/60 bg-gradient-card overflow-hidden"
        >
          {/* Header — solo tablet y desktop */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 px-6 py-4
            border-b border-border/60 bg-[hsl(var(--surface-2))]">
            <span className="font-mono text-[11px] uppercase
              tracking-[0.2em] text-muted-foreground">Feature</span>
            <span className="font-mono text-[11px] uppercase
              tracking-[0.2em] text-primary">
              {t.comparison.headerAlpy}
            </span>
            <span className="font-mono text-[11px] uppercase
              tracking-[0.2em] text-muted-foreground">
              {t.comparison.headerOther}
            </span>
            <span className="font-mono text-[11px] uppercase
              tracking-[0.2em] text-muted-foreground">
              {t.comparison.headerWeb}
            </span>
          </div>

          {t.comparison.rows.map((row, i) => (
            <div
              key={row.feature}
              className={i !== 0 ? "border-t border-border/40" : ""}
            >
              {/* Móvil: card apilada con etiquetas */}
              <div className="md:hidden px-5 py-4 space-y-3">
                <p className="text-sm font-semibold text-foreground">
                  {row.feature}
                </p>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[10px] uppercase
                    tracking-widest text-primary w-24 shrink-0 pt-0.5">
                    {t.comparison.headerAlpy}
                  </span>
                  <Cell value={row.alpy} accent />
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[10px] uppercase
                    tracking-widest text-muted-foreground w-24 shrink-0 pt-0.5">
                    {t.comparison.headerOther}
                  </span>
                  <Cell value={row.other} />
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[10px] uppercase
                    tracking-widest text-muted-foreground w-24 shrink-0 pt-0.5">
                    {t.comparison.headerWeb}
                  </span>
                  <Cell value={row.web} />
                </div>
              </div>

              {/* Tablet y desktop: fila de tabla 4 columnas */}
              <div className="hidden md:grid md:grid-cols-4 gap-4
                px-6 py-5 items-start">
                <span className="text-sm font-semibold text-foreground">
                  {row.feature}
                </span>
                <Cell value={row.alpy} accent />
                <Cell value={row.other} />
                <Cell value={row.web} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
