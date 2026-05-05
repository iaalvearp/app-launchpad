import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}

export const PageHeader = ({ eyebrow, title, subtitle }: PageHeaderProps) => (
  <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-hero opacity-70 pointer-events-none" />
    <div className="absolute inset-0 triangle-pattern opacity-15 pointer-events-none" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        {eyebrow && (
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.28em] font-semibold text-primary/80 mb-5">
            {eyebrow}
          </span>
        )}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  </section>
);
