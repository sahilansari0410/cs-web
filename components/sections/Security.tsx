"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import SecurityFlowAnimation from "@/components/ui/SecurityFlowAnimation";
import {
  Lock,
  Scissors,
  ShieldCheck,
  Globe,
  EyeOff,
} from "lucide-react";

const encryptionSteps = [
  {
    icon: Lock,
    title: "Client-Side Encryption",
    description: "Your file is encrypted on your device before it ever leaves.",
    detail: "AES-256 encryption happens locally",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Scissors,
    title: "File Chunking",
    description: "Encrypted file is split into multiple secure chunks.",
    detail: "100MB file → 20 encrypted chunks",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: ShieldCheck,
    title: "Server Re-Encryption",
    description: "Each chunk is encrypted again on our secure servers.",
    detail: "Double-layer encryption per chunk",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description: "Chunks are stored across different global locations.",
    detail: "No single location holds your complete file",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: EyeOff,
    title: "Zero Knowledge",
    description: "Even BLVCK cannot access or view your files.",
    detail: "True zero-knowledge architecture",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function Security() {
  return (
    <section id="security" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Blend overlays for smooth transitions */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="success" className="mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Military-Grade Security
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How Your Files Stay <span className="gradient-text">Secure</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our multi-layer encryption architecture ensures your files are
            protected at every step. Not even we can access them.
          </p>
        </motion.div>

        {/* Animated Security Flow Visualization */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SecurityFlowAnimation />
        </motion.div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {encryptionSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card variant="bordered" className="h-full">
                <CardContent className="pt-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center mb-4`}
                  >
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                  <div className="text-xs font-medium text-muted-foreground mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {step.description}
                  </p>
                  <p className={`text-xs font-medium ${step.color}`}>
                    {step.detail}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Zero Knowledge Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border shadow-lg">
            <EyeOff className="w-6 h-6 text-primary" />
            <span className="text-lg font-medium">
              Even BLVCK cannot access your data
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
