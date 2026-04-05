"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import ShareLinkAnimation from "@/components/ui/ShareLinkAnimation";
import {
  Link,
  Globe,
  Files,
  Clock,
  Shield,
  ExternalLink,
  Smartphone,
  Zap,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Link,
    title: "One Secure Link",
    description: "Share any file with a single encrypted link. Recipients open it in the BLVCK app for secure viewing.",
  },
  {
    icon: Smartphone,
    title: "BLVCK App Required",
    description: "Recipients need the BLVCK app to decrypt and view shared files. This ensures end-to-end security.",
  },
  {
    icon: Globe,
    title: "Works Globally",
    description: "Your links work everywhere. Fast, reliable downloads from any location in the world.",
  },
  {
    icon: Files,
    title: "Up to 20 Files",
    description: "Bundle multiple files in one share link. Currently supports up to 20 files per link.",
  },
  {
    icon: Shield,
    title: "End-to-End Encrypted",
    description: "Every shared file remains encrypted during transfer. Your recipients get the same military-grade security.",
  },
  {
    icon: Lock,
    title: "Zero-Knowledge Sharing",
    description: "Even BLVCK cannot see what you share. Your files stay private between you and your recipients.",
  },
];

const stats = [
  { value: "256-bit", label: "AES Encryption" },
  { value: "20", label: "Files per Link" },
  { value: "∞", label: "No Expiry" },
  { value: "0", label: "Data Collected" },
];

export function Share() {
  return (
    <section id="share" className="py-24 md:py-32 relative overflow-hidden">
      {/* Blend overlays for smooth transitions */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="primary" className="mb-4">
            <Link className="w-3.5 h-3.5" />
            Cloud Share
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Share <span className="gradient-text">Securely</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Send files to anyone with one secure link. Recipients open in the BLVCK app
            for encrypted, private access.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-2xl bg-card border border-border"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Animated Share Link Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <ShareLinkAnimation />
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* How It Works */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                How Cloud Share Works
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Select & Share</p>
                    <p className="text-sm text-muted-foreground">Choose up to 20 files and generate a secure share link</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Send the Link</p>
                    <p className="text-sm text-muted-foreground">Share the link via any messaging app or email</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Open in BLVCK App</p>
                    <p className="text-sm text-muted-foreground">Recipients open the link in BLVCK app for secure decryption</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Important Notice */}
            <Card variant="bordered" className="mb-8">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      BLVCK App Required
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      For security, recipients must have the BLVCK app installed to view shared files.
                      This ensures files remain encrypted and only authorized users can access them.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limits Notice */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted mb-8">
              <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                File limits are actively increasing. More files per link coming soon.
              </p>
            </div>

            <div className="flex justify-center">
              <a href="https://cloudsave.onelink.me/XbPw/zo6gwssl" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg">
                  Download
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
