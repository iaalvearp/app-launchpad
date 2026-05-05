import { motion } from "framer-motion";
import { GraduationCap, LineChart, Users, Rocket, LucideIcon } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";

const ICONS: LucideIcon[] = [GraduationCap, LineChart, Users, Rocket];

export const UseCases = () => {
  const { t } = useI18n();
  return (
    <section id="casos-de-uso" className="py-24 lg:py-32 relative">
      <div className="container">
        <SectionHeading
          eyebrow={t.useCases.eyebrow}
          title={<>{t.useCases.title1}<span className="text-primary">{t.useCases.titleAccent}</span>{t.useCases.titleDot}</>}
          subtitle={t.useCases.subtitle}
        />
        <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.useCases.items.map((item, i) => {
            const Icon = ICONS[i] ?? Rocket;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-border/60 bg-gradient-card p-7 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="text-sm text-foreground/85 flex gap-2">
                      <span className="text-primary mt-0.5">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
