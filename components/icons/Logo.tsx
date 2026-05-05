"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const text = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  }[size];

  return (
    <motion.div
      className={cn("flex items-center", className)}
      whileHover={{ scale: 1.02 }}
    >
      <span className={cn("font-bold tracking-tight leading-none", text)}>
        <span className="text-foreground">100</span>
        <span style={{ color: "#007BFF" }}>X</span>
      </span>
    </motion.div>
  );
}
