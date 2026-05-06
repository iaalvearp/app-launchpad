import { motion } from "framer-motion";
import { Download, ChevronRight, Smartphone } from "lucide-react";
import logoAlpy from "@/assets/logo-alpy.svg";
import { CTAButton } from "../CTAButton";
import { Wordmark } from "../Wordmark";
import { useI18n } from "@/i18n/I18nProvider";

export const Hero = () => {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-hero">
      <div className="absolute inset-0 triangle-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-7">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                {t.hero.badge}
              </span>
            </div>

            <Wordmark size="xl" className="mb-5 block !text-7xl md:!text-8xl" />

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-foreground">
              {t.hero.title1}
              <span className="bg-gradient-primary bg-clip-text text-transparent glow-text">
                {t.hero.titleAccent}
              </span>
              {t.hero.title2}
              <br />
              <span className="font-bold text-foreground/90">{t.hero.title3}</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-normal">
              {t.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <CTAButton href="enlace_real_aquí" variant="primary">
                <Download className="w-4 h-4" />
                {t.hero.ctaPrimary}
              </CTAButton>
              <CTAButton href="#planes" variant="outline" external={false}>
                {t.hero.ctaSecondary} <ChevronRight className="w-4 h-4" />
              </CTAButton>
            </div>

            <div className="mt-9 flex items-center gap-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="text-primary font-medium">{t.hero.metaRating}</span>
              </span>
              <span>{t.hero.metaDevs}</span>
              <span className="hidden sm:inline">{t.hero.metaOffline}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-primary/15 blur-3xl rounded-full" />
            <img
              src={heroPhones}
              alt="AlPy corriendo en dos teléfonos Android: editor de código Python y pantalla de ajustes"
              loading="eager"
              className="relative w-full max-w-[560px] mx-auto drop-shadow-[0_30px_60px_hsl(var(--primary)/0.25)] animate-float"
            />
          </motion.div>
