import { UseCases } from "@/components/sections/UseCases";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n/I18nProvider";
import { useSeo } from "@/hooks/use-seo";

const UseCasesPage = () => {
  const { t } = useI18n();
  useSeo({ title: t.seo.useCases.title, description: t.seo.useCases.description, canonical: "enlace_real_aquí" });
  return (
    <>
      <PageHeader eyebrow={t.useCases.eyebrow} title={<>{t.useCases.title1}<span className="text-primary">{t.useCases.titleAccent}</span>{t.useCases.titleDot}</>} subtitle={t.useCases.subtitle} />
      <UseCases />
      <Testimonials />
      <FinalCTA />
    </>
  );
};
export default UseCasesPage;
