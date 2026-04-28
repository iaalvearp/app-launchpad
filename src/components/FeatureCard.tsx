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
    className="card-glow rounded-xl p-7 border border-border/60"
  >
    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 ring-1 ring-primary/20">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 tracking-tight">{title}</h3>
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="text-sm text-muted-foreground flex gap-2 leading-relaxed">
          <span className="text-primary mt-0.5">›</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);
