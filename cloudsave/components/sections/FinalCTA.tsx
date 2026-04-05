"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Shield, Lock, Infinity as InfinityIcon, Smartphone } from "lucide-react";
import { DEEP_LINK_CONFIG } from "@/lib/deeplink";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient opacity-10" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      {/* Top blend for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline">
            <Shield className="w-3.5 h-3.5" />
            Zero-Knowledge
          </Badge>
          <Badge variant="outline">
            <Lock className="w-3.5 h-3.5" />
            End-to-End Encrypted
          </Badge>
          <Badge variant="outline">
            <InfinityIcon className="w-3.5 h-3.5" />
            Truly Unlimited
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to Experience
          <br />
          <span className="gradient-text">True Cloud Freedom?</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join thousands who&apos;ve switched to BLVCK. Your files deserve
          better than limits and surveillance.
        </motion.p>

        {/* App Download Section */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Available on mobile</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* App Store Button */}
            <a
              href={DEEP_LINK_CONFIG.iosAppStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-foreground" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-muted-foreground leading-tight">Download on the</p>
                <p className="text-base font-semibold text-foreground leading-tight">App Store</p>
              </div>
            </a>

            {/* Play Store Button */}
            <a
              href={DEEP_LINK_CONFIG.androidPlayStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-foreground" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-muted-foreground leading-tight">GET IT ON</p>
                <p className="text-base font-semibold text-foreground leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Trust Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Card variant="bordered" className="inline-block bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span>No GB limits</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span>No compression</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span>No surveillance</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
