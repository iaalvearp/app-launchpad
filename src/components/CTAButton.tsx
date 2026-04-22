import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
}

export const CTAButton = ({
  href,
  children,
  variant = "primary",
  className,
  external = true,
}: CTAButtonProps) => {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const variants = {
    primary:
      "bg-gradient-primary text-primary-foreground shadow-glow hover:scale-[1.03] hover:brightness-110",
    outline:
      "border border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/70",
    ghost: "text-foreground/80 hover:text-foreground hover:bg-secondary",
  } as const;

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </a>
  );
};
