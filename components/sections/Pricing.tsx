"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Check,
  X,
  Infinity as InfinityIcon,
  Shield,
  Upload,
  Users,
  Share2,
  Sparkles,
  DollarSign,
  TrendingUp,
  Zap,
  Lock,
  HardDrive,
  Eye,
  EyeOff,
} from "lucide-react";

const includedFeatures = [
  { icon: InfinityIcon, text: "Unlimited storage" },
  { icon: Upload, text: "Unlimited uploads" },
  { icon: Shield, text: "Zero-knowledge encryption" },
  { icon: Users, text: "Cloud Channels access" },
  { icon: Share2, text: "Cloud Share links" },
  { icon: Sparkles, text: "All future features" },
];

const comparisonItems = [
  {
    feature: "Storage",
    cloudsave: "Unlimited",
    others: "2GB - 2TB",
    cloudsaveWins: true,
  },
  {
    feature: "Encryption",
    cloudsave: "Zero-Knowledge",
    others: "Server-side only",
    cloudsaveWins: true,
  },
  {
    feature: "File Size Limit",
    cloudsave: "Up to 30GB+",
    others: "Up to 50GB",
    cloudsaveWins: true,
  },
  {
    feature: "Data Access",
    cloudsave: "Only You",
    others: "Provider can view",
    cloudsaveWins: true,
  },
];

const valueStats = [
  { value: "$0.00", label: "Per GB", subtext: "vs $0.02-0.10/GB elsewhere" },
  { value: "100%", label: "Private", subtext: "Zero-knowledge architecture" },
  { value: "∞", label: "Storage", subtext: "No caps, no limits, no tricks" },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-muted/30" />

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
          <Badge variant="primary" className="mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Simple Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            One Plan. <span className="gradient-text">Everything.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            No tiers. No upsells. No surprises. Just unlimited everything for
            one honest price.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Pricing Card - Takes 1 column on large screens */}
          <motion.div
            className="lg:row-span-2"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card
              variant="default"
              hover={false}
              className="h-full overflow-hidden relative group"
            >
              {/* Modern glassmorphic background */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-muted/50" />
              <div className="absolute inset-0 opacity-50">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              </div>
              <div className="absolute inset-0 border border-border/50 rounded-[inherit]" />

              <CardContent className="p-0 h-full flex flex-col relative z-10">
                {/* Header */}
                <div className="p-6 text-center border-b border-border/30">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    BLVCK Unlimited
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Everything you need. Nothing you don&apos;t.
                  </p>
                </div>

                {/* Pricing */}
                <div className="p-6 text-center border-b border-border/30">
                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="text-5xl font-bold gradient-text">
                      $49.99
                    </span>
                    <span className="text-lg text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Billed monthly. Cancel anytime.
                  </p>
                </div>

                {/* Features */}
                <div className="p-6 flex-1">
                  <h4 className="text-sm font-semibold text-foreground mb-4">
                    What&apos;s included:
                  </h4>
                  <div className="space-y-3 mb-6">
                    {includedFeatures.map((feature, index) => (
                      <motion.div
                        key={feature.text}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-success" />
                        </div>
                        <span className="text-sm text-foreground">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="primary" size="lg" className="w-full">
                    Go Unlimited
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Value Stats - Horizontal Card */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card variant="bordered" className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">The BLVCK Advantage</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {valueStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 p-4 rounded-xl bg-muted/50"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="text-3xl sm:text-2xl md:text-3xl font-bold gradient-text sm:mb-1 min-w-[80px] text-center">
                        {stat.value}
                      </div>
                      <div className="flex-1 sm:flex-none">
                        <div className="text-sm font-medium text-foreground sm:mb-1">
                          {stat.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.subtext}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Why Others Charge More - Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card variant="bordered" className="h-full bg-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Eye className="w-5 h-5 text-destructive" />
                  <h3 className="font-semibold text-foreground">Others Charge Less?</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  &quot;Free&quot; cloud storage comes at a cost:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Your data is scanned for ads</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Files can be accessed by provider</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Storage limits force upgrades</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">You are the product</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* BLVCK Difference - Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card variant="bordered" className="h-full bg-success/5 border-success/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <EyeOff className="w-5 h-5 text-success" />
                  <h3 className="font-semibold text-foreground">BLVCK Difference</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  You pay for true privacy:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Zero-knowledge encryption</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">We can&apos;t see your files</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">No storage anxiety</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">You own your data</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Comparison Table - Full Width Below */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">BLVCK vs. The Rest</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Feature</th>
                        <th className="text-center py-3 px-4 text-sm font-medium text-primary">BLVCK</th>
                        <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonItems.map((item, index) => (
                        <motion.tr
                          key={item.feature}
                          className="border-b border-border/50 last:border-0"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + index * 0.05 }}
                        >
                          <td className="py-3 px-4 text-sm text-foreground">{item.feature}</td>
                          <td className="py-3 px-4 text-center">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                              <Check className="w-3.5 h-3.5" />
                              {item.cloudsave}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className="text-sm text-muted-foreground">{item.others}</span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border">
            <Lock className="w-5 h-5 text-primary" />
            <span className="text-foreground">
              One plan. One price. <span className="font-semibold">Unlimited everything.</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
