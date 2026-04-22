import { motion } from "framer-motion";
import { Check, LucideIcon } from "lucide-react";
import { CTAButton } from "./CTAButton";

export interface PlanCardProps {
  icon: LucideIcon;
  tier: string;
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  popularLabel?: string;
  index?: number;
}

export const PlanCard = ({
  icon: Icon,
  tier,
  name,
  tagline,
  price,
  priceNote,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
  popularLabel = "Most popular",
  index = 0,
}: PlanCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`relative rounded-3xl p-7 flex flex-col border transition-all ${
      highlighted
        ? "border-primary/50 bg-gradient-card shadow-glow"
        : "border-border/60 bg-gradient-card hover:border-primary/30"
    }`}
  >
    {highlighted && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-mono uppercase tracking-wider shadow-glow">
        {popularLabel}
      </span>
    )}

    <div className="flex items-center justify-between mb-5">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{tier}</p>
        <h3 className="text-xl font-bold text-foreground mt-1 tracking-tight">{name}</h3>
      </div>
      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
        <Icon className="w-5 h-5 text-primary" />
      </div>
    </div>

    <p className="text-xs text-muted-foreground mb-5 min-h-[36px] leading-relaxed">{tagline}</p>

    <div className="mb-6 pb-6 border-b border-border/60">
      <span className="text-4xl font-bold text-foreground tracking-tight">{price}</span>
      {priceNote && <span className="text-muted-foreground ml-1 text-sm">{priceNote}</span>}
    </div>

    <ul className="space-y-3 mb-8 flex-1">
      {features.map((f) => (
        <li key={f} className="flex gap-3 text-[13px] text-foreground/85 leading-relaxed">
          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <span>{f}</span>
        </li>
      ))}
    </ul>

    <CTAButton href={ctaHref} variant={highlighted ? "primary" : "outline"} className="w-full justify-center">
      {ctaLabel}
    </CTAButton>
  </motion.article>
);
