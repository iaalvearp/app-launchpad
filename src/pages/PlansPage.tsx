import { Plans } from "@/components/sections/Plans";
import { FAQ } from "@/components/sections/FAQ";
import { B2B } from "@/components/sections/B2B";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n/I18nProvider";
import { useSeo } from "@/hooks/use-seo";

const PlansPage = () => {
  const { t } = useI18n();
  useSeo({ title: t.seo.plans.title, description: t.seo.plans.description, canonical: "enlace_real_aquí" });
  return (
    <>
      <PageHeader eyebrow={t.plans.eyebrow} title={<>{t.plans.title1}<span className="text-primary">{t.plans.titleAccent}</span>{t.plans.titleDot}</>} subtitle={t.plans.subtitle} />
      <Plans />
      <B2B />
      <FAQ />
      <FinalCTA />
    </>
  );
};
export default PlansPage;
