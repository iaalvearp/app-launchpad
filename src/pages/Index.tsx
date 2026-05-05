import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCases } from "@/components/sections/UseCases";
import { Comparison } from "@/components/sections/Comparison";
import { Plans } from "@/components/sections/Plans";
import { Testimonials } from "@/components/sections/Testimonials";
import { B2B } from "@/components/sections/B2B";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { useI18n } from "@/i18n/I18nProvider";
import { useSeo } from "@/hooks/use-seo";

const Index = () => {
  const { t, lang } = useI18n();
  useSeo({
    title: t.seo.home.title,
    description: t.seo.home.description,
    canonical: "enlace_real_aquí",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "AlPy",
        operatingSystem: "ANDROID",
        applicationCategory: "DeveloperApplication",
        description: t.seo.home.description,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1200" },
        downloadUrl: "enlace_real_aquí",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: lang,
        mainEntity: t.faq.items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      },
    ],
  });

  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <UseCases />
      <Comparison />
      <Plans />
      <Testimonials />
      <B2B />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default Index;
