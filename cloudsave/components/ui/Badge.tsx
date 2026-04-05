"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BadgeProps {
  variant?: "default" | "success" | "primary" | "secondary" | "outline";
  className?: string;
  children: React.ReactNode;
}

function Badge({ variant = "default", className, children }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium";

  const variants = {
    default: "bg-muted text-muted-foreground",
    success: "bg-success/10 text-success border border-success/20",
    primary: "bg-primary/10 text-primary border border-primary/20",
    secondary: "bg-secondary/10 text-secondary border border-secondary/20",
    outline: "bg-transparent border border-border text-foreground",
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </motion.span>
  );
}

export { Badge };
