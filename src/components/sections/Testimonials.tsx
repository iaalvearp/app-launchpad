import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";

export const Testimonials = () => {
  const { t } = useI18n();
  return (
    <section id="testimonios" className="py-24 lg:py-32 relative">
      <div className="container">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={
            <>
              {t.testimonials.title1}
              <span className="text-primary">{t.testimonials.titleAccent}</span>
              {t.testimonials.titleDot}
            </>
          }
          subtitle={t.testimonials.subtitle}
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {t.testimonials.items.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-xl border border-border/60 bg-gradient-card p-7 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
            >
              <Quote className="w-5 h-5 text-primary/70 mb-4" />
              <blockquote className="text-base text-foreground/90 leading-relaxed flex-1">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/50">
                <h3 className="text-base font-bold text-foreground tracking-tight">{item.name}</h3>
                <div className="text-xs text-muted-foreground mt-1">{item.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
