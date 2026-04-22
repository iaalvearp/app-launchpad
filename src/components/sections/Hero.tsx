import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import logoAlpy from "@/assets/logo-alpy.svg";
import { CTAButton } from "../CTAButton";
import { CodeBlock } from "../CodeBlock";
import { Wordmark } from "../Wordmark";
import { useI18n } from "@/i18n/I18nProvider";

const SAMPLE = `# AlPy · native Python 3.11, offline
import numpy as np
import pandas as pd

df = pd.DataFrame({
    'model': ['Pixel', 'Galaxy', 'Xiaomi'],
    'score': [98.4, 96.1, 95.7]
})
print(df.sort_values('score', ascending=False))`;

export const Hero = () => {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-hero">
      <div className="absolute inset-0 triangle-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                {t.hero.badge}
              </span>
            </div>

            <Wordmark size="xl" className="mb-4 block" />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
              {t.hero.title1}
              <span className="bg-gradient-primary bg-clip-text text-transparent glow-text">
                {t.hero.titleAccent}
              </span>
              {t.hero.title2}
              <br />
              {t.hero.title3}
            </h1>

            <p className="mt-5 text-base md:text-[15px] text-muted-foreground max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="enlace_real_aquí" variant="primary">
                <Download className="w-4 h-4" />
                {t.hero.ctaPrimary}
              </CTAButton>
              <CTAButton href="#planes" variant="outline" external={false}>
                {t.hero.ctaSecondary} <ChevronRight className="w-4 h-4" />
              </CTAButton>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="text-primary">{t.hero.metaRating}</span>
              </span>
              <span>{t.hero.metaDevs}</span>
              <span className="hidden sm:inline">{t.hero.metaOffline}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative">
              <img
                src={logoAlpy}
                alt="AlPy logo — Python IDE for Android"
                className="w-28 h-28 mx-auto mb-6 animate-float drop-shadow-[0_20px_40px_hsl(var(--primary)/0.4)]"
              />
              <CodeBlock code={SAMPLE} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
