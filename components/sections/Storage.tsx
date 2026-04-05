"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Infinity as InfinityIcon,
  FileType,
  HardDrive,
  Zap,
  Check,
  X,
  Upload,
  Download,
  Shield,
  Smartphone,
  Monitor,
  Cloud,
  Lock,
  FileCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const comparisonData = [
  { feature: "Storage", cloudsave: "Unlimited", others: "15GB - 2TB" },
  { feature: "File Size", cloudsave: "Up to 30GB+", others: "Up to 5GB" },
  { feature: "Compression", cloudsave: "Never", others: "Auto-compress" },
  { feature: "Quality", cloudsave: "100% Original", others: "Reduced" },
  { feature: "File Types", cloudsave: "All Formats", others: "Limited types" },
];

const platforms = [
  { icon: Smartphone, label: "iOS & Android", available: true },
  { icon: Monitor, label: "Web App", available: false, comingSoon: true },
  { icon: Cloud, label: "API Access", available: false, comingSoon: true },
];

export function Storage() {
  return (
    <section id="storage" className="py-24 md:py-32 relative overflow-hidden">
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
            <InfinityIcon className="w-3.5 h-3.5" />
            Unlimited Storage
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Store <span className="gradient-text">Everything</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Photos. Videos. Any file type. No storage limits, no compression
            tricks, all formats supported. One price for everything.
          </p>
        </motion.div>

        {/* Infinite Symbol Visual */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="relative">
            <motion.div
              className="text-[120px] md:text-[180px] font-bold gradient-text leading-none"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ∞
            </motion.div>
            <motion.div
              className="absolute inset-0 blur-3xl bg-primary/20 -z-10"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* No Storage Limits - Main Card */}
          <motion.div
            className="lg:row-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card variant="default" className="h-full overflow-hidden relative group">
              {/* Modern glassmorphic background */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-muted/50" />
              <div className="absolute inset-0 opacity-50">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
              </div>
              <div className="absolute inset-0 border border-border/50 rounded-[inherit]" />

              <CardContent className="p-0 h-full flex flex-col relative z-10">
                {/* Header with subtle gradient border bottom */}
                <div className="p-6 border-b border-border/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <HardDrive className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Storage</span>
                      <h3 className="text-xl font-bold text-foreground">
                        Truly Unlimited
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <div className="text-center mb-6 py-4">
                    <div className="text-5xl font-bold gradient-text mb-2">∞ GB</div>
                    <p className="text-sm text-muted-foreground">No caps. No limits. Ever.</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-success" />
                      </div>
                      <span className="text-muted-foreground">Upload unlimited photos</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-success" />
                      </div>
                      <span className="text-muted-foreground">Upload unlimited videos</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-success" />
                      </div>
                      <span className="text-muted-foreground">No storage anxiety</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-success" />
                      </div>
                      <span className="text-muted-foreground">One flat monthly price</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* No Compression */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card variant="bordered" className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">No Compression</h3>
                    <p className="text-xs text-success font-medium">100% Original Quality</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Your photos and videos stay exactly as you captured them. Full resolution, full quality, always.
                </p>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                  <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">We never touch your originals</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* File Size Limit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card variant="bordered" className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Up to 30GB+ per File</h3>
                    <p className="text-xs text-secondary font-medium flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Limit increasing
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload large files up to 30GB+ each. Perfect for 4K videos, RAW photos, and project files.
                </p>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                  <Zap className="w-4 h-4 text-secondary flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">Higher limits coming soon</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* All Formats Supported */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card variant="bordered" className="h-full bg-success/5 border-success/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">All Formats Supported</h3>
                    <p className="text-xs text-success font-medium">Any file extension works</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  We don&apos;t restrict file types. Upload any file regardless of extension - photos, videos, documents, archives, project files, or anything else. If your device can create it, BLVCK can store it.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center p-3 rounded-xl bg-muted/50">
                    <FileType className="w-5 h-5 text-primary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Photos</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-muted/50">
                    <FileType className="w-5 h-5 text-secondary mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Videos</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-muted/50">
                    <FileType className="w-5 h-5 text-accent mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Documents</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-muted/50">
                    <FileType className="w-5 h-5 text-success mx-auto mb-1" />
                    <p className="text-xs text-muted-foreground">Anything</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Comparison Table */}
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
                  <h3 className="font-semibold text-foreground">BLVCK vs. Others</h3>
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
                      {comparisonData.map((item, index) => (
                        <tr key={item.feature} className="border-b border-border/50 last:border-0">
                          <td className="py-3 px-4 text-sm text-foreground">{item.feature}</td>
                          <td className="py-3 px-4 text-center">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                              <Check className="w-3.5 h-3.5" />
                              {item.cloudsave}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                              <X className="w-3.5 h-3.5 text-destructive" />
                              {item.others}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-xs text-muted-foreground font-light">
                  * File size limit actively increasing.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Access Anywhere */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card variant="bordered" className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Download className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Access Anywhere</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Your files are always accessible from any device. Upload from one, download from another.
                </p>
                <div className="flex flex-wrap gap-3">
                  {platforms.map((platform) => (
                    <div
                      key={platform.label}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl ${platform.available ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50 opacity-70'}`}
                    >
                      <platform.icon className={`w-4 h-4 ${platform.available ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={`text-sm ${platform.available ? 'text-foreground' : 'text-muted-foreground'}`}>{platform.label}</span>
                      {platform.comingSoon && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">Soon</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Encrypted Storage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card variant="bordered" className="h-full bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Encrypted at Rest</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Every file is encrypted with AES-256 before storage. Your data stays private.
                </p>
                <div className="text-2xl font-bold gradient-text">256-bit</div>
                <p className="text-xs text-muted-foreground">Military-grade encryption</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border">
            <InfinityIcon className="w-5 h-5 text-primary" />
            <span className="text-foreground">
              Others charge per GB or TB. <span className="font-semibold">BLVCK doesn&apos;t.</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
