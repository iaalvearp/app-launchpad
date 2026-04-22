import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import logoAlpy from "@/assets/logo-alpy.svg";
import { CTAButton } from "./CTAButton";
import { CodeBlock } from "./CodeBlock";

const SAMPLE = `# ALPY · Python 3.11 nativo, offline
import numpy as np
import pandas as pd

df = pd.DataFrame({
    'modelo': ['Pixel', 'Galaxy', 'Xiaomi'],
    'score':  [98.4, 96.1, 95.7]
})
print(df.sort_values('score', ascending=False))`;

export const Hero = () => (
  <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-hero">
    <div className="absolute inset-0 triangle-pattern opacity-40 pointer-events-none" />
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
            <span className="font-mono text-xs uppercase tracking-wider text-primary">
              Lanzamiento · Android
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
            Tu estudio de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent glow-text">
              Python
            </span>
            .
            <br />
            En cualquier lugar.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            ALPY es el único IDE móvil que blinda tu productividad. Motor Python 3.11 nativo,
            offline, con todo el arsenal de ciencia de datos en tu bolsillo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="enlace_real_aquí" variant="primary">
              <Download className="w-4 h-4" />
              Descargar en Google Play
            </CTAButton>
            <CTAButton href="#planes" variant="outline" external={false}>
              Ver planes <ChevronRight className="w-4 h-4" />
            </CTAButton>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="text-primary">★ 4.8</span> en Play Store
            </span>
            <span>+1.200 desarrolladores</span>
            <span className="hidden sm:inline">100% offline</span>
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
              alt="Logo de ALPY, IDE de Python para Android"
              className="w-32 h-32 mx-auto mb-6 animate-float drop-shadow-[0_20px_40px_hsl(var(--primary)/0.4)]"
            />
            <CodeBlock code={SAMPLE} />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
