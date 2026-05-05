import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "../SectionHeading";
import { useI18n } from "@/i18n/I18nProvider";

export const FAQ = () => {
  const { t } = useI18n();
  return (
    <section id="faq" className="py-24 lg:py-32 relative">
      <div className="container">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={<>{t.faq.title1}<span className="text-primary">{t.faq.titleAccent}</span>{t.faq.titleDot}</>}
          subtitle={t.faq.subtitle}
        />
        <div className="mt-12 max-w-3xl mx-auto rounded-xl border border-border/60 bg-gradient-card px-6 md:px-8">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/40">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:text-primary transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
