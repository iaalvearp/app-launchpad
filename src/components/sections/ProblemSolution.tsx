import { AlertTriangle, Sparkles } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { FeatureCard } from "../FeatureCard";
import { useI18n } from "@/i18n/I18nProvider";

export const ProblemSolution = () => {
  const { t } = useI18n();
  return (
    <section id="por-que" className="py-24 lg:py-32 relative">
      <div className="container">
        <SectionHeading
          eyebrow={t.problem.eyebrow}
          title={<>{t.problem.title1}<span className="text-primary">{t.problem.titleAccent}</span>{t.problem.titleDot}</>}
          subtitle={t.problem.subtitle}
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <FeatureCard
            icon={AlertTriangle}
            title={t.problem.problemTitle}
            items={t.problem.problemItems}
          />
          <FeatureCard
            icon={Sparkles}
            title={t.problem.solutionTitle}
            items={t.problem.solutionItems}
            index={1}
          />
        </div>
      </div>
    </section>
  );
};
