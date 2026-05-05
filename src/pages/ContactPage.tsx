import { useState, FormEvent } from "react";
import { Mail, Send, Building2, LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n/I18nProvider";
import { useToast } from "@/hooks/use-toast";
import { useSeo } from "@/hooks/use-seo";

const ContactPage = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  useSeo({ title: t.seo.contact.title, description: t.seo.contact.description, canonical: "enlace_real_aquí" });

  const [form, setForm] = useState({ name: "", email: "", topic: t.contact.topics[0], message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: t.contact.toastTitle, description: t.contact.toastDesc });
    setForm({ name: "", email: "", topic: t.contact.topics[0], message: "" });
  };

  return (
    <>
      <PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle} />
      <section className="pb-24">
        <div className="container max-w-5xl grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-border/60 bg-gradient-card p-7 md:p-9 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label={t.contact.nameLabel}>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[hsl(var(--surface-1))] border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary/60 transition" />
              </Field>
              <Field label={t.contact.emailLabel}>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[hsl(var(--surface-1))] border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary/60 transition" />
              </Field>
            </div>
            <Field label={t.contact.topicLabel}>
              <select value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })}
                className="w-full bg-[hsl(var(--surface-1))] border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary/60 transition">
                {t.contact.topics.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </Field>
            <Field label={t.contact.messageLabel}>
              <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[hsl(var(--surface-1))] border border-border rounded-lg px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary/60 transition resize-y" />
            </Field>
            <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow hover:brightness-110 transition-all duration-300 ease-in-out hover:scale-[1.02]">
              <Send className="w-4 h-4" />{t.contact.submit}
            </button>
            <p className="text-xs text-muted-foreground">{t.contact.note}</p>
          </motion.form>

          <aside className="rounded-xl border border-border/60 bg-gradient-card p-7 md:p-9 h-fit">
            <h2 className="text-lg font-bold tracking-tight">{t.contact.infoTitle}</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <InfoItem icon={Mail} label={t.contact.infoEmail} href={`mailto:${t.contact.infoEmail}`} />
              <InfoItem icon={Building2} label={t.contact.infoSales} href={`mailto:${t.contact.infoSales}`} />
              <InfoItem icon={LifeBuoy} label={t.contact.infoSupport} href={`mailto:${t.contact.infoSupport}`} />
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</span>
    {children}
  </label>
);

const InfoItem = ({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href: string }) => (
  <li>
    <a href={href} className="flex items-center gap-3 text-foreground/85 hover:text-primary transition-colors">
      <span className="w-9 h-9 rounded-lg bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
        <Icon className="w-4 h-4 text-primary" />
      </span>
      <span>{label}</span>
    </a>
  </li>
);

export default ContactPage;
