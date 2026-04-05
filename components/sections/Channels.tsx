"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Users,
  DollarSign,
  Share2,
  Rocket,
  TrendingUp,
  Ban,
  Check,
  Zap,
  Globe,
  Shield,
  Clock,
  Heart,
  Star,
  ArrowRight,
  Coins,
  UserPlus,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "$0", label: "Paywall for Users*", subtext: "No real money required*", hasAsterisk: true },
  { value: "$5", label: "Per Subscriber", subtext: "Up to (location-based)" },
  { value: "∞", label: "Subscribers", subtext: "No limits on audience" },
  { value: "24/7", label: "Passive Income", subtext: "Earn while you sleep" },
];

const howItWorks = [
  {
    step: "1",
    title: "Create Channel",
    description: "Set up your channel in seconds with a unique link",
  },
  {
    step: "2",
    title: "Upload Content",
    description: "Share files, assets, and resources with your audience",
  },
  {
    step: "3",
    title: "Grow & Earn",
    description: "Reach 1,000 subscribers and start earning passively",
  },
];

const whyCreatorsChoose = [
  { icon: DollarSign, text: "Simple, transparent pricing" },
  { icon: Shield, text: "Your content stays yours" },
  { icon: Globe, text: "Global audience reach" },
  { icon: Clock, text: "Instant payouts available" },
];

const noItems = [
  { icon: Ban, text: "No CPM calculations" },
  { icon: Ban, text: "No analytics tracking" },
  { icon: Ban, text: "No engagement metrics" },
  { icon: Ban, text: "No algorithm games" },
];

const earningsTiers = [
  { subscribers: "1,000", earnings: "$5,000" },
  { subscribers: "10,000", earnings: "$50,000" },
  { subscribers: "100,000", earnings: "$500,000" },
  { subscribers: "1,000,000", earnings: "$5,000,000" },
];

export function Channels() {
  return (
    <section
      id="channels"
      className="py-24 md:py-32 relative overflow-hidden bg-muted/30"
    >
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
          <Badge variant="secondary" className="mb-4">
            <Rocket className="w-3.5 h-3.5" />
            For Creators
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Cloud <span className="gradient-text">Channels</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Share files and assets with unlimited subscribers while earning passive income.
            Simple math. Real money. No games.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`text-center p-6 rounded-2xl bg-card border ${index === 0 ? 'border-success/30 bg-success/5' : 'border-border'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className={`text-3xl md:text-4xl font-bold mb-1 ${index === 0 ? 'text-success' : 'gradient-text'}`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label.replace('*', '')}<span className="text-[10px] font-light align-top">{stat.label.includes('*') ? '*' : ''}</span>
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.subtext.replace('*', '')}<span className="text-[9px] font-light">{stat.subtext.includes('*') ? '*' : ''}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Earnings Calculator - Main Card */}
          <motion.div
            className="lg:row-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="default" className="h-full overflow-hidden relative group">
              {/* Modern glassmorphic background */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-muted/50" />
              <div className="absolute inset-0 opacity-50">
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              </div>
              <div className="absolute inset-0 border border-border/50 rounded-[inherit]" />

              <CardContent className="p-0 h-full flex flex-col relative z-10">
                {/* Header */}
                <div className="p-6 border-b border-border/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Earnings Calculator</span>
                      <h3 className="text-xl font-bold text-foreground">
                        Simple Math. Real Money.
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Calculator Display */}
                <div className="p-6 flex-1">
                  <div className="text-center mb-6 py-2">
                    <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                      1 = $5<sup className="text-xl">*</sup>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      1 subscriber = up to $5 in earnings
                    </p>
                  </div>

                  {/* Earnings Tiers */}
                  <div className="space-y-3">
                    {earningsTiers.map((tier, index) => (
                      <motion.div
                        key={tier.subscribers}
                        className="flex justify-between items-center py-2 px-3 rounded-lg bg-muted/50"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                      >
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">
                            {tier.subscribers}
                          </span>
                        </div>
                        <span className="font-bold text-success text-sm">
                          up to {tier.earnings}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      <span className="font-medium">*</span> Rates range from $0.9 to $5 per subscriber based on location. Min. 1,000 subscribers required.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* No Real Money Paywall - Key Advantage */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card variant="bordered" className="h-full border-2 border-success/30 bg-gradient-to-br from-success/5 to-transparent">
              <CardContent className="p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">No Real Money Paywall*</h3>
                    <p className="text-xs text-success font-medium">Maximum conversions, minimum friction</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <UserPlus className="w-5 h-5 text-success" />
                      <span className="font-semibold text-foreground">Easy Subscriber Growth</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Users subscribe without paying real money. Remove the biggest barrier to growing your audience.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="w-5 h-5 text-success" />
                      <span className="font-semibold text-foreground">Higher Conversion Rates</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      No payment friction means more subscribers. More subscribers means more earnings for you.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                  <Check className="w-4 h-4 text-success flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Your audience grows faster when there&apos;s no wallet barrier. You still earn real money.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* How It Works */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Card variant="bordered" className="h-full">
              <CardContent className="p-6 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-5 h-5 text-secondary" />
                  <h3 className="font-semibold text-foreground">How It Works</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {howItWorks.map((step, index) => (
                    <motion.div
                      key={step.title}
                      className="relative"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="flex flex-col items-center text-center p-4 rounded-xl bg-muted/50">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold mb-3">
                          {step.step}
                        </div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                      {index < howItWorks.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Combined Row: Why Creators + What You Won't Find + Feature */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Why Creators Choose Us */}
              <Card variant="bordered" className="h-full bg-success/5 border-success/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-5 h-5 text-success" />
                    <h3 className="font-semibold text-foreground">Why Creators Choose Us</h3>
                  </div>
                  <ul className="space-y-3">
                    {whyCreatorsChoose.map((item, index) => (
                      <li
                        key={item.text}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-success" />
                        </div>
                        <span className="text-muted-foreground">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* What You Won't Find */}
              <Card variant="bordered" className="h-full bg-destructive/5 border-destructive/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Ban className="w-5 h-5 text-destructive" />
                    <h3 className="font-semibold text-foreground">What You Won&apos;t Find</h3>
                  </div>
                  <ul className="space-y-3">
                    {noItems.map((item, index) => (
                      <li
                        key={item.text}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-3.5 h-3.5 text-destructive" />
                        </div>
                        <span className="text-muted-foreground">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* What You Can Share */}
              <Card variant="bordered" className="h-full bg-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Share2 className="w-5 h-5 text-secondary" />
                    <h3 className="font-semibold text-foreground">What You Can Share</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <span className="text-muted-foreground">Photos & videos</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <span className="text-muted-foreground">Presets & templates</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <span className="text-muted-foreground">Digital assets & files</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <span className="text-muted-foreground">Any file type</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Bottom Features Row */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Global Reach
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Your channel is accessible worldwide. Build an international audience effortlessly.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Scale Infinitely
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        1,000 or 10 million subscribers - our infrastructure handles it seamlessly.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Premium Experience
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Fast downloads, beautiful interface, and encrypted sharing for your audience.
                      </p>
                    </div>
                  </div>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://cloudsave.onelink.me/XbPw/zo6gwssl" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Download App
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a href="/monetization" className="w-full sm:w-auto">
              <Button variant="tertiary" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </a>
          </div>

          {/* Virtual Currency Note */}
          <p className="mt-6 text-xs text-muted-foreground font-light px-4">
            * Subscribers use optional in-app virtual currency. No real money required from your audience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
