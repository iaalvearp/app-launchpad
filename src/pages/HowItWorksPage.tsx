import { HowItWorks } from "@/components/sections/HowItWorks";
import { Comparison } from "@/components/sections/Comparison";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n/I18nProvider";
import { useSeo } from "@/hooks/use-seo";

const HowPage = () => {
  const { t } = useI18n();
  useSeo({ title: t.seo.how.title, description: t.seo.how.description, canonical: "enlace_real_aquí" });
  return (
    <>
      <PageHeader eyebrow={t.how.eyebrow} title={<>{t.how.title1}<span className="text-primary">{t.how.titleAccent}</span>{t.how.titleDot}</>} subtitle={t.how.subtitle} />
      <HowItWorks />
      <Comparison />
      <FinalCTA />
    </>
  );
};
export default HowPage;
