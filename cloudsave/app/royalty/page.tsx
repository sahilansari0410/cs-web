"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import {
  Crown,
  Users,
  TrendingUp,
  Infinity as InfinityIcon,
  Gift,
  Shield,
  CheckCircle2,
  ArrowRight,
  Calculator,
  DollarSign,
  Gem,
  Award,
  Star,
  Sparkles,
  Heart,
  Zap,
  Target,
  Coins,
  Lock,
  RefreshCw,
  UserCheck,
  Tv,
} from "lucide-react";

const PREMIUM_PRICE = 49.99;

const tiers = [
  {
    name: "Silver",
    icon: Award,
    range: "10 – 1,000",
    min: 10,
    max: 1000,
    percentage: 10,
    color: "text-slate-400",
    bgColor: "bg-slate-400",
    borderColor: "border-slate-400/20",
    gradientFrom: "from-slate-400/10",
    gradientTo: "to-slate-400/5",
  },
  {
    name: "Gold",
    icon: Star,
    range: "1,001 – 10,000",
    min: 1001,
    max: 10000,
    percentage: 15,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500",
    borderColor: "border-yellow-500/20",
    gradientFrom: "from-yellow-500/10",
    gradientTo: "to-yellow-500/5",
  },
  {
    name: "Platinum",
    icon: Gem,
    range: "10,001 – 50,000",
    min: 10001,
    max: 50000,
    percentage: 20,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400",
    borderColor: "border-cyan-400/20",
    gradientFrom: "from-cyan-400/10",
    gradientTo: "to-cyan-400/5",
  },
  {
    name: "Diamond",
    icon: Crown,
    range: "50,001+",
    min: 50001,
    max: Infinity,
    percentage: 25,
    color: "text-purple-400",
    bgColor: "bg-purple-400",
    borderColor: "border-purple-400/20",
    gradientFrom: "from-purple-400/10",
    gradientTo: "to-purple-400/5",
  },
];

function getTier(referrals: number) {
  if (referrals < 10) return null;
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (referrals >= tiers[i].min) return tiers[i];
  }
  return null;
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatNumber(num: number) {
  return new Intl.NumberFormat("en-US").format(num);
}

export default function RoyaltyPage() {
  const [referralCount, setReferralCount] = useState(100);

  const calculation = useMemo(() => {
    const tier = getTier(referralCount);
    if (!tier) {
      return { tier: null, monthly: 0, yearly: 0, perUser: 0 };
    }
    const perUser = (PREMIUM_PRICE * tier.percentage) / 100;
    const monthly = perUser * referralCount;
    const yearly = monthly * 12;
    return { tier, monthly, yearly, perUser };
  }, [referralCount]);

  const SLIDER_STOPS = [
    { slider: 0, value: 10 },
    { slider: 250, value: 1000 },
    { slider: 500, value: 10000 },
    { slider: 750, value: 50000 },
    { slider: 1000, value: 100000 },
  ];

  function snapToNiceNumber(value: number): number {
    if (value <= 100) return Math.round(value);
    if (value <= 1000) return Math.round(value / 10) * 10;
    if (value <= 10000) return Math.round(value / 100) * 100;
    return Math.round(value / 1000) * 1000;
  }

  function sliderToValue(sliderPos: number) {
    for (let i = 1; i < SLIDER_STOPS.length; i++) {
      if (sliderPos <= SLIDER_STOPS[i].slider) {
        const prev = SLIDER_STOPS[i - 1];
        const curr = SLIDER_STOPS[i];
        const fraction = (sliderPos - prev.slider) / (curr.slider - prev.slider);
        return snapToNiceNumber(prev.value + fraction * (curr.value - prev.value));
      }
    }
    return 100000;
  }

  function valueToSlider(value: number) {
    const v = Math.max(10, value);
    for (let i = 1; i < SLIDER_STOPS.length; i++) {
      if (v <= SLIDER_STOPS[i].value) {
        const prev = SLIDER_STOPS[i - 1];
        const curr = SLIDER_STOPS[i];
        const fraction = (v - prev.value) / (curr.value - prev.value);
        return Math.round(prev.slider + fraction * (curr.slider - prev.slider));
      }
    }
    return 1000;
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-20 left-1/4 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-purple-500/20 rounded-full blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-1/4 w-32 sm:w-44 md:w-56 h-32 sm:h-44 md:h-56 bg-primary/20 rounded-full blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-500/15 rounded-full blur-3xl"
            animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" className="mb-4">
              <Crown className="w-3.5 h-3.5" />
              Royalty Program
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Earn <span className="gradient-text">Lifetime Royalty</span>
              <br />
              for Every Referral
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
              Refer users to BLVCK and earn up to 25% royalty every month for life.
              No expiry. No cap. No short commitments – just lifetime passive income.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20">
                <InfinityIcon className="w-4 h-4 text-success" />
                <span className="text-sm font-medium text-success">Lifetime Earnings</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Up to 25% Royalty</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <Shield className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-purple-500">No Hidden Terms</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Four simple steps to start earning lifetime passive income
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card variant="bordered" className="relative overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Get Your Referral Link</h3>
                <p className="text-sm text-muted-foreground">
                  Open the BLVCK app and grab your unique referral link and referral code
                  from the Referral section. Share it anywhere.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered" className="relative overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-7 h-7 text-success" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-success">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">They Sign Up</h3>
                <p className="text-sm text-muted-foreground">
                  The referred person enters your referral code during signup.
                  They get permanently mapped under your account for life.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered" className="relative overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-7 h-7 text-yellow-500" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-yellow-500">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">They Go Premium</h3>
                <p className="text-sm text-muted-foreground">
                  When your referred user subscribes to BLVCK Premium at $49.99/month,
                  your royalty kicks in automatically.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered" className="relative overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-7 h-7 text-purple-500" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-purple-500">4</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Earn for Life</h3>
                <p className="text-sm text-muted-foreground">
                  Royalty is instantly credited to your Creator Payout page in BLVCK
                  on every premium purchase. For life, forever.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Referral Mechanics */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Referral Code Card - Wide */}
            <Card variant="bordered" className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 overflow-hidden">
              <CardContent className="p-6 md:p-8 relative">
                <div className="absolute top-4 right-4 opacity-10">
                  <Gift className="w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 text-primary" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Gift className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="primary">Referral Code</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    How Referral Mapping Works
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Share your unique referral link or referral code from the BLVCK app. When a new user
                    signs up and enters your referral code during registration, they are permanently mapped
                    under your account. This mapping is for life – it never expires and cannot be changed.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-primary/10">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground">Code entered once at signup – mapped forever</p>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-primary/10">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground">Link found in the BLVCK app Referral section</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 200 Coins Card */}
            <Card variant="bordered" className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border-yellow-500/20">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                  <Coins className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">200 Coins per Referral</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  For every successful referral signup, you receive an automated 200 coins
                  credit instantly – even before they go premium.
                </p>
                <div className="p-3 rounded-lg bg-yellow-500/10">
                  <p className="text-xs text-muted-foreground">Coins are credited automatically, no action needed</p>
                </div>
              </CardContent>
            </Card>

            {/* Re-subscription Counts */}
            <Card variant="bordered" className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center mb-4">
                  <RefreshCw className="w-5 h-5 text-success" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Every Purchase Counts</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Even if your referred user cancels their subscription and re-joins later,
                  every single premium purchase is counted. This is not a one-time deal –
                  every renewal and re-subscription earns you royalty.
                </p>
                <div className="p-3 rounded-lg bg-success/10">
                  <p className="text-xs text-muted-foreground">Cancel &amp; rejoin? You still earn. Always.</p>
                </div>
              </CardContent>
            </Card>

            {/* Zero Knowledge Privacy */}
            <Card variant="bordered" className="md:col-span-2 lg:col-span-2">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Privacy-First: Zero Knowledge Policy</h3>
                    <p className="text-sm text-muted-foreground">Your referred users&apos; data stays private</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Due to BLVCK&apos;s zero-knowledge encryption and privacy commitment, you cannot
                  track or view who your referred users are. You will not see names, emails, or any
                  personal information of the people you refer. This is by design – we protect
                  everyone&apos;s privacy equally.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-muted/50 text-center">
                    <p className="text-2xl font-bold text-foreground">200</p>
                    <p className="text-xs text-muted-foreground">Coins auto-credited per referral signup</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 text-center">
                    <p className="text-2xl font-bold text-success">Monthly</p>
                    <p className="text-xs text-muted-foreground">Invoice generated every month</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 text-center">
                    <p className="text-2xl font-bold text-purple-400">Private</p>
                    <p className="text-xs text-muted-foreground">Zero knowledge – no user tracking</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Royalty <span className="gradient-text">Tiers</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The more users you refer, the higher your royalty percentage.
              Minimum 10 referred premium users to become eligible.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              const perUser = (PREMIUM_PRICE * tier.percentage) / 100;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    variant="bordered"
                    hover
                    className={`bg-gradient-to-br ${tier.gradientFrom} ${tier.gradientTo} ${tier.borderColor} h-full`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${tier.bgColor}/20 flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${tier.color}`} />
                        </div>
                        <Badge variant="outline" className={`${tier.color} border-current/20`}>
                          {tier.name}
                        </Badge>
                      </div>
                      <div className="mb-4">
                        <p className={`text-3xl sm:text-4xl font-bold ${tier.color}`}>{tier.percentage}%</p>
                        <p className="text-sm text-muted-foreground mt-1">Royalty per user</p>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground">{tier.range} referrals</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground">{formatCurrency(perUser)}/user/mo</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <InfinityIcon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-muted-foreground">Lifetime duration</span>
                        </div>
                      </div>
                      <div className={`p-3 rounded-lg ${tier.bgColor}/10`}>
                        <p className="text-xs text-muted-foreground">
                          Earn {formatCurrency(perUser)} for every referred premium user, every month, forever.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              <span className="gradient-text">Revenue</span> Calculator
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              See how much you could earn. Slide to adjust your referral count.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card variant="bordered" className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20 overflow-hidden">
              <CardContent className="p-4 sm:p-6 md:p-10">
                {/* Slider Section */}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Calculator className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Referred Premium Users</p>
                        <p className="text-2xl sm:text-3xl font-bold text-foreground">{formatNumber(referralCount)}</p>
                      </div>
                    </div>
                    {calculation.tier && (
                      <Badge variant="primary" className={`${calculation.tier.color} bg-current/10 border border-current/20`}>
                        <span className={calculation.tier.color}>{calculation.tier.name} Tier</span>
                      </Badge>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="range"
                      min={0}
                      max={1000}
                      value={valueToSlider(referralCount)}
                      onChange={(e) => {
                        const val = sliderToValue(Number(e.target.value));
                        setReferralCount(Math.max(10, val));
                      }}
                      className="w-full h-2 rounded-full appearance-none cursor-pointer bg-muted accent-primary
                        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6
                        [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-lg
                        [&::-webkit-slider-thumb]:shadow-primary/30 [&::-webkit-slider-thumb]:cursor-grab
                        [&::-webkit-slider-thumb]:active:cursor-grabbing [&::-webkit-slider-thumb]:transition-shadow
                        [&::-webkit-slider-thumb]:hover:shadow-primary/50 [&::-webkit-slider-thumb]:hover:shadow-xl"
                    />
                    <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                      <span>10</span>
                      <span>1K</span>
                      <span>10K</span>
                      <span>50K</span>
                      <span>100K</span>
                    </div>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="p-4 sm:p-5 rounded-2xl bg-card border border-border text-center">
                    <p className="text-sm text-muted-foreground mb-1">Per User / Month*</p>
                    <p className="text-2xl sm:text-3xl font-bold text-foreground">
                      {calculation.tier ? formatCurrency(calculation.perUser) : "$0.00"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {calculation.tier ? `${calculation.tier.percentage}% of $${PREMIUM_PRICE}` : "Min 10 referrals needed"}
                    </p>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-success/10 to-success/5 border border-success/20 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Monthly Royalty*</p>
                    <p className="text-2xl sm:text-3xl font-bold text-success">
                      {formatCurrency(calculation.monthly)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatNumber(referralCount)} users &times; {formatCurrency(calculation.perUser || 0)}
                    </p>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Yearly Royalty*</p>
                    <p className="text-2xl sm:text-3xl font-bold text-purple-400">
                      {formatCurrency(calculation.yearly)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Passive income, every year
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-muted-foreground text-center mb-6">
                  * The above figures represent your actual revenue generated from referrals. However, App Store (Apple) and Play Store (Google) platform deductions are additionally applicable as a minimum deduction. The exact deduction amount will be reflected on your invoice once the payout is generated.
                </p>

                {/* Tier Breakdown Bar */}
                <div className="p-3 sm:p-4 md:p-5 rounded-2xl bg-muted/50 border border-border">
                  <p className="text-sm font-medium text-foreground mb-4">Tier Progression</p>
                  <div className="space-y-3">
                    {tiers.map((tier) => {
                      const Icon = tier.icon;
                      const isActive = calculation.tier?.name === tier.name;
                      const isPast = calculation.tier
                        ? tiers.indexOf(calculation.tier) > tiers.indexOf(tier)
                        : false;
                      return (
                        <div key={tier.name} className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isActive ? `${tier.bgColor}/20` : isPast ? `${tier.bgColor}/10` : "bg-muted"
                          }`}>
                            <Icon className={`w-4 h-4 ${isActive || isPast ? tier.color : "text-muted-foreground/50"}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className={`text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                                {tier.name}
                                {isActive && (
                                  <span className={`ml-2 text-xs ${tier.color}`}>Current</span>
                                )}
                              </span>
                              <span className={`text-sm ${isActive ? tier.color : "text-muted-foreground"} font-semibold`}>
                                {tier.percentage}%
                              </span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${
                                  isActive || isPast ? `${tier.bgColor}` : "bg-muted"
                                }`}
                                style={{
                                  width: isActive
                                    ? `${Math.min(100, ((referralCount - tier.min) / (tier.max === Infinity ? 100000 - tier.min : tier.max - tier.min)) * 100)}%`
                                    : isPast
                                    ? "100%"
                                    : "0%",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Channel Revenue Bonus */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Channel Revenue <span className="gradient-text">Bonus</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Your referred users grow, you grow. Earn from their channel
              monetization too – up to 5% of their channel revenue, forever.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Main Explanation Card */}
            <Card variant="bordered" className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20 overflow-hidden">
              <CardContent className="p-6 md:p-8 relative">
                <div className="absolute top-4 right-4 opacity-10">
                  <Tv className="w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 text-orange-500" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                      <Tv className="w-5 h-5 text-orange-500" />
                    </div>
                    <Badge variant="primary">Channel Bonus</Badge>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    Earn From Their Channel Success Too
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    When your referred user creates a channel on BLVCK and starts earning
                    through monetization (ads, subscriptions, tips, or any other revenue stream),
                    you automatically receive up to <span className="text-orange-500 font-semibold">5% of their total channel revenue</span> –
                    on top of your existing premium subscription royalty. This is a straight, flat 5% with no tiers or conditions.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-orange-500/10">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground">Automatic – no action needed from you</p>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-lg bg-orange-500/10">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground">Stacks on top of premium subscription royalty</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works Mini Card */}
            <Card variant="bordered" className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-amber-500">1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Your referred user creates a channel on BLVCK</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-amber-500">2</span>
                    </div>
                    <p className="text-sm text-muted-foreground">They start earning through channel monetization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-amber-500">3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">You automatically earn 5% of their channel revenue</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Example Earnings Card */}
            <Card variant="bordered" className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-orange-500/5 to-amber-500/5 border-orange-500/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Channel Earnings Examples</h3>
                    <p className="text-sm text-muted-foreground">See what 5% looks like at different levels</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-card border border-border text-center">
                    <div className="w-9 h-9 rounded-lg bg-slate-400/20 flex items-center justify-center mx-auto mb-3">
                      <Tv className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Small Creator</p>
                    <p className="text-sm text-muted-foreground">Channel earns <span className="text-foreground font-medium">$500/mo</span></p>
                    <p className="text-2xl sm:text-3xl font-bold text-orange-500 mt-2">$25</p>
                    <p className="text-xs text-muted-foreground mt-1">Your monthly bonus</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 text-center">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/20 flex items-center justify-center mx-auto mb-3">
                      <Tv className="w-4 h-4 text-orange-500" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Mid Creator</p>
                    <p className="text-sm text-muted-foreground">Channel earns <span className="text-foreground font-medium">$5,000/mo</span></p>
                    <p className="text-2xl sm:text-3xl font-bold text-orange-500 mt-2">$250</p>
                    <p className="text-xs text-muted-foreground mt-1">Your monthly bonus</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 text-center">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center mx-auto mb-3">
                      <Tv className="w-4 h-4 text-amber-500" />
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">Top Creator</p>
                    <p className="text-sm text-muted-foreground">Channel earns <span className="text-foreground font-medium">$50,000/mo</span></p>
                    <p className="text-2xl sm:text-3xl font-bold text-amber-500 mt-2">$2,500</p>
                    <p className="text-xs text-muted-foreground mt-1">Your monthly bonus</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Channel Benefits Card */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Channel Bonus Benefits</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground"><span className="text-foreground font-medium">Lifetime duration</span> – same as premium royalty, never expires</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground"><span className="text-foreground font-medium">Stacks with royalty</span> – earn both premium + channel bonus</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground"><span className="text-foreground font-medium">No cap</span> – unlimited channel earnings, no ceiling</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground"><span className="text-foreground font-medium">All revenue streams</span> – ads, subs, tips, and more</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Lifetime Section */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Why <span className="gradient-text">Lifetime</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Most programs expire after 30–90 days. We believe your effort deserves
              permanent recognition.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card variant="bordered" className="md:col-span-2 bg-gradient-to-br from-success/10 to-success/5 border-success/20 overflow-hidden">
              <CardContent className="p-6 md:p-8 relative">
                <div className="absolute top-4 right-4 opacity-10">
                  <InfinityIcon className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 text-success" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-success" />
                    </div>
                    <Badge variant="success">Our Promise</Badge>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
                    No Expiry. No Fine Print. Ever.
                  </h3>
                  <p className="text-muted-foreground max-w-lg">
                    Your royalty earnings continue for as long as your referred users remain
                    premium subscribers. We don&apos;t cut you off after a few months –
                    this is a lifetime partnership.
                  </p>
                  <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-6">
                    <div className="text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-success">Forever</p>
                      <p className="text-sm text-muted-foreground">Duration</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-muted-foreground">$0</p>
                      <p className="text-sm text-muted-foreground">Joining Fee</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Monthly Invoice</h3>
                <p className="text-muted-foreground text-sm">
                  Your royalty earnings are compiled into a monthly invoice and
                  credited to your Creator Payout page every billing cycle.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Tier Upgrades</h3>
                <p className="text-muted-foreground text-sm">
                  As your referrals grow, you automatically move to higher tiers.
                  Your percentage increases retroactively for all users.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Protected Earnings</h3>
                <p className="text-muted-foreground text-sm">
                  Your referral links are permanently tied to your account.
                  No one can steal your referrals or earnings.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">No Limits</h3>
                <p className="text-muted-foreground text-sm">
                  There is no cap on how many users you can refer or how much you
                  can earn. The sky is the limit.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              BLVCK vs Others
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              See why BLVCK&apos;s Royalty Program stands out
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card variant="bordered" className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                        <th className="p-4 text-center">
                          <span className="gradient-text font-bold">BLVCK</span>
                        </th>
                        <th className="p-4 text-center text-muted-foreground font-medium">Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: "Royalty Duration", cs: "Lifetime", other: "30–90 days" },
                        { feature: "Max Commission", cs: "25%", other: "5–15%" },
                        { feature: "Tier System", cs: "4 Progressive Tiers", other: "Flat rate" },
                        { feature: "Earning Cap", cs: "Unlimited", other: "Often capped" },
                        { feature: "Retroactive Upgrade", cs: "Yes", other: "No" },
                        { feature: "Joining Fee", cs: "Free", other: "Varies" },
                        { feature: "Cookie Duration", cs: "Permanent link", other: "30–90 days" },
                        { feature: "Re-subscription", cs: "Every purchase counts", other: "First purchase only" },
                      ].map((row, i) => (
                        <tr key={row.feature} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                          <td className="p-4 font-medium text-foreground">{row.feature}</td>
                          <td className="p-4 text-center">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              {row.cs}
                            </span>
                          </td>
                          <td className="p-4 text-center text-muted-foreground">{row.other}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="bordered" className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Eligibility Requirements</h3>
                    <p className="text-sm text-muted-foreground">Everything you need to get started</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "BLVCK Premium Account",
                      desc: "You must be a premium subscriber to earn royalty — free users are not eligible",
                    },
                    {
                      title: "Minimum 10 Referrals",
                      desc: "At least 10 referred users must convert to premium",
                    },
                    {
                      title: "Valid Referral Code",
                      desc: "Referred users must enter your code during signup to be permanently mapped",
                    },
                    {
                      title: "No Fraudulent Activity",
                      desc: "Real users only — bot/fake signups are not counted",
                    },
                    {
                      title: "Active Account Required",
                      desc: "If you cancel your premium account, future royalty payouts will stop",
                    },
                    {
                      title: "Re-subscriptions Count",
                      desc: "If a referred user cancels and re-joins, every purchase still earns you royalty",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-success/5">
                      <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="bordered" className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-secondary/10 border-primary/20 overflow-hidden relative">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 bg-purple-500/20 rounded-full blur-3xl" />
              </div>
              <CardContent className="p-5 sm:p-8 md:p-12 relative z-10 text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Crown className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  Start Earning Lifetime Royalty Today
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto mb-6 sm:mb-8">
                  Join the BLVCK Royalty Program and turn every referral into a
                  permanent source of passive income. No commitments, no expiry – just earnings.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="/#pricing"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/support"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
                <p className="text-xs text-muted-foreground mt-6">
                  By participating in the Royalty Program, you agree to the{" "}
                  <Link href="/terms#royalty-program" className="gradient-link">
                    Royalty Program Terms &amp; Conditions
                  </Link>.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
