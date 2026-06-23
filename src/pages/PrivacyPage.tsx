import { motion } from "framer-motion";
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
    t.privacy.sections.notCollected,
    t.privacy.sections.collected,
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            {t.privacy.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t.privacy.lastUpdated}
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((s, i) => (
            <motion.section
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <h2 className="text-xl font-semibold tracking-tight mb-3">
                {s.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {s.body}
              </p>
            </motion.section>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PrivacyPage;
