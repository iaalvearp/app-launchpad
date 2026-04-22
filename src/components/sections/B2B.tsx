import { GraduationCap, Building2, Zap } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { FeatureCard } from "../FeatureCard";
import { useI18n } from "@/i18n/I18nProvider";

const ICONS = [GraduationCap, Building2, Zap];

export const B2B = () => {
  const { t } = useI18n();
  return (
    <section id="b2b" className="py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          eyebrow={t.b2b.eyebrow}
          title={<>{t.b2b.title1}<span className="text-primary">{t.b2b.titleAccent}</span>{t.b2b.titleDot}</>}
          subtitle={t.b2b.subtitle}
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.b2b.cards.map((card, i) => (
            <FeatureCard
              key={card.title}
              icon={ICONS[i]}
              title={card.title}
              items={card.items}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
