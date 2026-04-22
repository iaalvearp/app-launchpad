import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    {eyebrow && (
      <span className="inline-block font-mono text-[11px] uppercase tracking-[0.22em] text-primary mb-4">
        {eyebrow}
      </span>
    )}
    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);
