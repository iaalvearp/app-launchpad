import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  index?: number;
}

export const FeatureCard = ({ icon: Icon, title, items, index = 0 }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="card-glow rounded-2xl p-6 border border-border/60"
  >
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ring-1 ring-primary/20">
      <Icon className="w-4.5 h-4.5 text-primary" />
    </div>
    <h3 className="text-base font-semibold text-foreground mb-3 tracking-tight">{title}</h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-xs md:text-[13px] text-muted-foreground flex gap-2 leading-relaxed">
          <span className="text-primary mt-0.5">›</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);
