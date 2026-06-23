import { useI18n } from "@/i18n/I18nProvider";
import { useSeo } from "@/hooks/use-seo";

const PrivacyPage = () => {
  const { t } = useI18n();

  useSeo({
    title: `${t.privacy.title} · AlPy`,
    description: t.privacy.sections.who.body.slice(0, 120),
  });

  const sections = [
    t.privacy.sections.who,
    t.privacy.sections.data,
    t.privacy.sections.purpose,
    t.privacy.sections.storage,
    t.privacy.sections.rights,
    t.privacy.sections.cookies,
    t.privacy.sections.changes,
    t.privacy.sections.contact,
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight mb-2">{t.privacy.title}</h1>
        <p className="text-sm text-muted-foreground mb-10">{t.privacy.lastUpdated}</p>
        {sections.map((s) => (
          <section key={s.title} className="mb-8">
            <h2 className="text-xl font-semibold tracking-tight mb-3">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPage;
