import { Unlock, Shield, Cpu } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { PlanCard } from "../PlanCard";
import { useI18n } from "@/i18n/I18nProvider";

export const Plans = () => {
  const { t } = useI18n();
  const plans = [
    {
      icon: Unlock,
      tier: t.plans.free.tier,
      name: t.plans.free.name,
      tagline: t.plans.free.tagline,
      price: t.plans.free.price,
      features: t.plans.free.features,
      ctaLabel: t.plans.free.cta,
      ctaHref: "enlace_real_aquí",
    },
    {
      icon: Shield,
      tier: t.plans.pro.tier,
      name: t.plans.pro.name,
      tagline: t.plans.pro.tagline,
      price: t.plans.pro.price,
      features: t.plans.pro.features,
      ctaLabel: t.plans.pro.cta,
      ctaHref: "enlace_real_aquí",
      highlighted: true,
      popularLabel: t.plans.pro.popular,
    },
    {
      icon: Cpu,
      tier: t.plans.premium.tier,
      name: t.plans.premium.name,
      tagline: t.plans.premium.tagline,
      price: t.plans.premium.price,
      features: t.plans.premium.features,
      ctaLabel: t.plans.premium.cta,
      ctaHref: "enlace_real_aquí",
    },
  ];

  return (
    <section id="planes" className="py-24 lg:py-32 relative">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-primary/5 blur-3xl pointer-events-none" />
      <div className="container relative">
        <SectionHeading
          eyebrow={t.plans.eyebrow}
          title={<>{t.plans.title1}<span className="text-primary">{t.plans.titleAccent}</span>{t.plans.titleDot}</>}
          subtitle={t.plans.subtitle}
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <PlanCard key={plan.tier} {...plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
