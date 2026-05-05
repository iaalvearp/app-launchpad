import { motion } from "framer-motion";
import { SectionHeading } from "../SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";

export const HowItWorks = () => {
  const { t } = useI18n();
  return (
    <section id="como-funciona" className="py-24 lg:py-32 relative">
      <div className="container">
        <SectionHeading
          eyebrow={t.how.eyebrow}
          title={<>{t.how.title1}<span className="text-primary">{t.how.titleAccent}</span>{t.how.titleDot}</>}
          subtitle={t.how.subtitle}
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {t.how.steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-xl border border-border/60 bg-gradient-card p-7 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary/80">{s.step}</span>
              <h3 className="mt-4 text-lg md:text-xl font-bold tracking-tight text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
