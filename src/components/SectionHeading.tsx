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
      <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
        {eyebrow}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
    )}
  </motion.div>
);
