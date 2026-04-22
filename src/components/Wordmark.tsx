import { cn } from "@/lib/utils";

interface WordmarkProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-4xl",
  xl: "text-6xl md:text-7xl",
} as const;

/**
 * AlPy brand wordmark. The "Al" is foreground, "Py" uses the accent gradient.
 * Used everywhere we mention the product to enforce brand hierarchy.
 */
export const Wordmark = ({ size = "md", className }: WordmarkProps) => (
  <span
    className={cn(
      "font-display font-bold tracking-tight leading-none inline-flex items-baseline",
      sizes[size],
      className
    )}
  >
    <span className="text-foreground">Al</span>
    <span className="bg-gradient-primary bg-clip-text text-transparent">Py</span>
  </span>
);
