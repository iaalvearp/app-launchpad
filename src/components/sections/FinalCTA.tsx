import { useState, FormEvent } from "react";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { CTAButton } from "../CTAButton";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/i18n/I18nProvider";

export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { t } = useI18n();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({ title: t.cta.toastTitle, description: t.cta.toastDesc });
    setEmail("");
  };

  return (
    <section id="descargar" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      <div className="absolute inset-0 triangle-pattern opacity-30" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
            {t.cta.eyebrow}
          </span>
          <h2 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            {t.cta.title1}
            <span className="bg-gradient-primary bg-clip-text text-transparent glow-text">
              {t.cta.titleAccent}
            </span>
            {t.cta.titleDot}
          </h2>
          <p className="mt-5 text-base text-muted-foreground">{t.cta.subtitle}</p>

          <div className="mt-10 flex justify-center">
            <CTAButton href="enlace_real_aquí" variant="primary" className="text-base px-8 py-4">
              <Download className="w-5 h-5" />
              {t.cta.button}
            </CTAButton>
          </div>

          <form
            onSubmit={submit}
            className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-2 p-2 rounded-2xl bg-[hsl(var(--surface-2))] border border-border"
          >
            <div className="flex items-center gap-2 flex-1 px-3">
              <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.cta.placeholder}
                className="flex-1 bg-transparent py-2.5 outline-none text-sm text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition"
            >
              {t.cta.submit}
            </button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">{t.cta.note}</p>
        </motion.div>
      </div>
    </section>
  );
};
