"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import {
  DollarSign,
  TrendingUp,
  Users,
  Coins,
  Clock,
  Wallet,
  Shield,
  Zap,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Landmark,
  Smartphone,
  CircleDollarSign,
  Bitcoin,
  ArrowRightLeft,
  UserCheck,
  BarChart3,
  Globe,
  Sparkles,
} from "lucide-react";

export default function MonetizationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-success/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" className="mb-4">
              <DollarSign className="w-3.5 h-3.5" />
              Creator Monetization
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Earn from Your{" "}
              <span className="gradient-text">Cloud Channel</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Turn your content into income. Create a Channel, build your audience,
              and earn 100% of your revenue with BLVCK&apos;s creator-first monetization program.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Bento Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 100% Revenue - Large Card */}
            <Card variant="bordered" className="md:col-span-2 bg-gradient-to-br from-success/10 to-success/5 border-success/20 overflow-hidden">
              <CardContent className="p-6 md:p-8 relative">
                <div className="absolute top-4 right-4 opacity-10">
                  <DollarSign className="w-32 h-32 text-success" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-success" />
                    </div>
                    <Badge variant="success">Industry Leading</Badge>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    100% Revenue Share
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-md">
                    Keep every penny you earn. Unlike other platforms that take 30-45%,
                    BLVCK lets you keep 100% of your monetization revenue.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-success">100%</p>
                      <p className="text-sm text-muted-foreground">You Keep</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-muted-foreground">0%</p>
                      <p className="text-sm text-muted-foreground">Platform Fee</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 15-Unlock Rule */}
            <Card variant="bordered" className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">The 15-Unlock Rule</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Earn from subscribers who unlock your Channel 15+ times per month.
                  Quality engagement = quality earnings.
                </p>
                <div className="p-3 rounded-lg bg-primary/10">
                  <p className="text-xs text-muted-foreground">Active Subscriber = 15+ unlocks/month</p>
                </div>
              </CardContent>
            </Card>

            {/* 12-Hour Access Window */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">12-Hour Access</h3>
                <p className="text-muted-foreground text-sm">
                  Each unlock grants 12 hours of full Channel access.
                  This creates recurring engagement and consistent earnings.
                </p>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card variant="bordered" className="lg:col-span-2">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center mb-4">
                  <UserCheck className="w-5 h-5 text-warning" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Eligibility</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-success/5">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Premium Users</p>
                      <p className="text-xs text-muted-foreground">1,000+ subscribers, 90 days active</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Free Users</p>
                      <p className="text-xs text-muted-foreground">10,000+ subscribers, apply manually</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods - Wide Card */}
            <Card variant="bordered" className="lg:col-span-3">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Multiple Payout Options</h3>
                    <p className="text-sm text-muted-foreground">Choose how you want to receive your earnings</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRightLeft className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-medium text-foreground text-sm">Wire Transfer</p>
                    <p className="text-xs text-muted-foreground">SWIFT</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Landmark className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-medium text-foreground text-sm">Bank Transfer</p>
                    <p className="text-xs text-muted-foreground">ACH, Local</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-success" />
                    </div>
                    <p className="font-medium text-foreground text-sm">UPI</p>
                    <p className="text-xs text-muted-foreground">Instant</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-medium text-foreground text-sm">AirTM</p>
                    <p className="text-xs text-muted-foreground">Global</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <CircleDollarSign className="w-6 h-6 text-emerald-500" />
                    </div>
                    <p className="font-medium text-foreground text-sm">USDT</p>
                    <p className="text-xs text-muted-foreground">TRC20/ERC20</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Bitcoin className="w-6 h-6 text-orange-500" />
                    </div>
                    <p className="font-medium text-foreground text-sm">Bitcoin</p>
                    <p className="text-xs text-muted-foreground">BTC</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payout Schedule */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Monthly Payouts</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Earnings calculated by the 7th, paid by the 15th of each month.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Min. Payout (US)</span>
                    <span className="font-medium text-foreground">$50</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Min. Payout (IN)</span>
                    <span className="font-medium text-foreground">₹4,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Dashboard */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <BarChart3 className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Creator Dashboard</h3>
                <p className="text-muted-foreground text-sm">
                  Real-time analytics, subscriber insights, unlock statistics,
                  and earnings tracking all in one place.
                </p>
              </CardContent>
            </Card>

            {/* Fraud Protection */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Fraud Protection</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced monitoring protects your earnings from fake engagement
                  and ensures you get paid for real subscribers.
                </p>
              </CardContent>
            </Card>

            {/* How It Works - Full Width */}
            <Card variant="bordered" className="lg:col-span-3 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">How It Works</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-primary">1</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Create Channel</h4>
                    <p className="text-sm text-muted-foreground">Set up your Channel and upload content</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-primary">2</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Grow Audience</h4>
                    <p className="text-sm text-muted-foreground">Build your subscriber base</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-primary">3</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Get Monetized</h4>
                    <p className="text-sm text-muted-foreground">Meet eligibility and activate</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-success">4</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Earn 100%</h4>
                    <p className="text-sm text-muted-foreground">Keep all your earnings</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Earnings Formula */}
            <Card variant="bordered" className="md:col-span-2">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <Coins className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Earnings Formula</h3>
                <div className="p-4 rounded-xl bg-muted/50 font-mono text-center mb-4">
                  <p className="text-sm text-muted-foreground mb-1">Your Monthly Earnings =</p>
                  <p className="text-lg font-bold text-foreground">Active Subscribers × RPAS</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  RPAS (Revenue Per Active Subscriber) varies based on ad market conditions.
                  Current rates are always displayed on your Creator Dashboard.
                </p>
              </CardContent>
            </Card>

            {/* Fast Payouts */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Fast Payouts</h3>
                <p className="text-muted-foreground text-sm">
                  Funds arrive within 5-15 business days depending on your payment method and region.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card variant="bordered" className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to Start Earning?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                  Join thousands of creators who are building their audience and earning
                  100% of their revenue on BLVCK.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#channels"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    Learn About Channels
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/monetization-policy"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
                  >
                    View Full Policy
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
