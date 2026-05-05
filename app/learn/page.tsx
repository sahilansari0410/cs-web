"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import {
  GraduationCap,
  Smartphone,
  Upload,
  FolderPlus,
  Share2,
  Lock,
  Users,
  TrendingUp,
  DollarSign,
  BarChart3,
  Calendar,
  Wallet,
  BadgeCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Eye,
  UserPlus,
  FileText,
  CreditCard,
  AlertCircle,
  Coins,
  Globe,
  Zap,
  HelpCircle,
  PlayCircle,
  Settings,
  Bell,
  ChevronRight,
} from "lucide-react";

const gettingStartedSteps = [
  {
    step: "1",
    title: "Download the App",
    description: "Get 100X from the App Store or Google Play Store",
    icon: Smartphone,
  },
  {
    step: "2",
    title: "Create Account",
    description: "Sign up with your email or continue with Google/Apple",
    icon: UserPlus,
  },
  {
    step: "3",
    title: "Start Uploading",
    description: "Upload your files with unlimited storage and zero-knowledge encryption",
    icon: Upload,
  },
];

const channelSteps = [
  {
    step: "1",
    title: "Create Your Channel",
    description: "Go to Channels tab and tap 'Create Channel'. Choose a unique name and description.",
  },
  {
    step: "2",
    title: "Upload Content",
    description: "Add files, photos, videos, or any digital assets to your channel.",
  },
  {
    step: "3",
    title: "Share Your Link",
    description: "Share your unique channel link on social media to grow your audience.",
  },
  {
    step: "4",
    title: "Grow to 1,000",
    description: "Once you reach 1,000 subscribers, you become eligible for monetization.",
  },
];

const analyticsFeatures = [
  { icon: Users, label: "Total Subscribers", description: "Track your subscriber count in real-time" },
  { icon: Eye, label: "Channel Views", description: "See how many times your channel is viewed" },
  { icon: TrendingUp, label: "Growth Trends", description: "Monitor your audience growth over time" },
  { icon: Globe, label: "Audience Location", description: "Understand where your subscribers are from" },
];

const payoutMethods = [
  { name: "Bank Transfer", description: "Direct to your bank account" },
  { name: "UPI", description: "Instant transfer (India)" },
  { name: "Wire Transfer", description: "SWIFT international" },
  { name: "USDT/Bitcoin", description: "Cryptocurrency options" },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="primary" className="mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              Learn 100X
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Master <span className="gradient-text">100X</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about using 100X, creating channels,
              earning money, and managing your payouts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a href="#getting-started" className="p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors text-center">
              <PlayCircle className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium text-foreground">Getting Started</span>
            </a>
            <a href="#channels" className="p-4 rounded-xl bg-secondary/5 border border-secondary/20 hover:bg-secondary/10 transition-colors text-center">
              <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
              <span className="text-sm font-medium text-foreground">Cloud Channels</span>
            </a>
            <a href="#analytics" className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 transition-colors text-center">
              <BarChart3 className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <span className="text-sm font-medium text-foreground">Analytics</span>
            </a>
            <a href="#payouts" className="p-4 rounded-xl bg-success/5 border border-success/20 hover:bg-success/10 transition-colors text-center">
              <Wallet className="w-6 h-6 text-success mx-auto mb-2" />
              <span className="text-sm font-medium text-foreground">Payouts</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <PlayCircle className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Getting Started</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Main Getting Started Card */}
              <Card variant="bordered" className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {gettingStartedSteps.map((step, index) => (
                      <div key={step.title} className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                          <step.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                          <span className="text-sm font-bold text-primary">{step.step}</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upload Files Card */}
              <Card variant="bordered">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <Upload className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Upload Files</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tap the + button to upload any file type. Photos, videos, documents - everything is encrypted before upload.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      No file size limits (up to 30GB+ per file)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      Automatic encryption
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Create Folders Card */}
              <Card variant="bordered">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <FolderPlus className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Organize with Folders</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Create folders to organize your files. Long press on files to move them between folders.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      Nested folder support
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      Drag and drop organization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Share Files Card */}
              <Card variant="bordered">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center mb-4">
                    <Share2 className="w-5 h-5 text-success" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Cloud Share</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Share files securely with anyone. Generate encrypted links that only recipients can access.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      Password protection available
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success" />
                      Expiring links option
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cloud Channels Section */}
      <section id="channels" className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Cloud Channels</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* What are Channels */}
              <Card variant="bordered" className="md:col-span-2 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <CardContent className="p-6 md:p-8">
                  <Badge variant="secondary" className="mb-4">For Creators</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3">What are Cloud Channels?</h3>
                  <p className="text-muted-foreground mb-4">
                    Cloud Channels let you share files with subscribers and earn money. Think of it as your personal
                    content hub where fans can access your exclusive files, presets, templates, and digital assets.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <DollarSign className="w-5 h-5 text-success mb-2" />
                      <p className="text-sm font-medium text-foreground">100% Revenue</p>
                      <p className="text-xs text-muted-foreground">Keep all your earnings</p>
                    </div>
                    <div className="p-3 rounded-lg bg-card border border-border">
                      <Users className="w-5 h-5 text-primary mb-2" />
                      <p className="text-sm font-medium text-foreground">Unlimited Subscribers</p>
                      <p className="text-xs text-muted-foreground">No audience caps</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Eligibility */}
              <Card variant="bordered">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center mb-4">
                    <BadgeCheck className="w-5 h-5 text-warning" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Monetization Eligibility</h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-success/5 border border-success/20">
                      <p className="text-sm font-medium text-foreground">Premium Users</p>
                      <p className="text-xs text-muted-foreground">1,000+ subscribers, 90 days active</p>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-sm font-medium text-foreground">Free Users</p>
                      <p className="text-xs text-muted-foreground">10,000+ subscribers, 180 days active</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* How to Create Channel - Steps */}
              <Card variant="bordered" className="lg:col-span-3">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">How to Create & Grow Your Channel</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {channelSteps.map((step, index) => (
                      <div key={step.title} className="relative">
                        <div className="p-4 rounded-xl bg-muted/50 h-full">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                            <span className="text-sm font-bold text-primary">{step.step}</span>
                          </div>
                          <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                        {index < channelSteps.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                            <ChevronRight className="w-4 h-4 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* How Subscribers Access */}
              <Card variant="bordered" className="md:col-span-2">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">The 12-Hour Access System</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    When subscribers unlock your channel, they get 12 hours of full access to all your content.
                    This creates recurring engagement and consistent earnings for you.
                  </p>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">The 15-Unlock Rule:</span> You earn from subscribers who
                      unlock your channel 15+ times per month. Quality engagement = quality earnings.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Earnings Formula */}
              <Card variant="bordered">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center mb-4">
                    <Coins className="w-5 h-5 text-success" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Your Earnings</h3>
                  <div className="p-4 rounded-xl bg-muted/50 text-center mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Monthly Earnings =</p>
                    <p className="text-lg font-bold text-foreground">Active Subscribers × RPAS</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    RPAS (Revenue Per Active Subscriber) ranges from $0.9 to $5 based on subscriber location.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <section id="analytics" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-purple-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Channel Analytics</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Analytics Overview */}
              <Card variant="bordered" className="md:col-span-2 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Channel Info Page</h3>
                  <p className="text-muted-foreground mb-6">
                    Every channel has an Info page where owners can view detailed analytics about their
                    channel performance, subscriber activity, and earnings data.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {analyticsFeatures.map((feature, index) => (
                      <div key={feature.label} className="p-3 rounded-lg bg-card border border-border text-center">
                        <feature.icon className="w-5 h-5 text-purple-500 mx-auto mb-2" />
                        <p className="text-sm font-medium text-foreground">{feature.label}</p>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Update Schedule */}
              <Card variant="bordered" className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center mb-4">
                    <Calendar className="w-5 h-5 text-warning" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Analytics Update Schedule</h3>
                  <div className="p-4 rounded-lg bg-card border border-border mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">Updates: 15th - 20th of each month</p>
                    <p className="text-xs text-muted-foreground">
                      Analytics show previous month&apos;s data. For example, January data appears between February 15-20.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-warning/10">
                    <AlertCircle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      Real-time subscriber counts are always available. Detailed earnings analytics follow the monthly schedule.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* How to Access Analytics */}
              <Card variant="bordered" className="lg:col-span-3">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Settings className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">How to Access Your Analytics</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Open Your Channel</p>
                        <p className="text-sm text-muted-foreground">Go to the Channels tab and select your channel</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Tap Info Button</p>
                        <p className="text-sm text-muted-foreground">Look for the info icon (i) at the top of your channel</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">View Analytics</p>
                        <p className="text-sm text-muted-foreground">See all your channel stats, earnings, and subscriber data</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payouts Section */}
      <section id="payouts" className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-success" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Payouts & Verification</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Payout Overview */}
              <Card variant="bordered" className="md:col-span-2 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">Getting Paid</h3>
                  <p className="text-muted-foreground mb-6">
                    Access your earnings and request payouts directly from your Profile page. 100X offers
                    multiple payout methods to ensure you can receive your money wherever you are.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {payoutMethods.map((method, index) => (
                      <div key={method.name} className="p-3 rounded-lg bg-card border border-border text-center">
                        <p className="text-sm font-medium text-foreground">{method.name}</p>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Payout Schedule */}
              <Card variant="bordered">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Payout Schedule</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">Earnings Calculated</span>
                      <span className="text-sm font-medium text-foreground">By 7th</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">Payouts Processed</span>
                      <span className="text-sm font-medium text-foreground">By 15th</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-muted-foreground">Funds Arrive</span>
                      <span className="text-sm font-medium text-foreground">5-15 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Verification Process */}
              <Card variant="bordered" className="lg:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BadgeCheck className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Verification for Payouts</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    To receive payouts, you need to complete verification. This helps us ensure secure and
                    compliant payments to all creators.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <FileText className="w-5 h-5 text-primary mb-2" />
                      <p className="font-medium text-foreground mb-1">Identity Verification</p>
                      <p className="text-xs text-muted-foreground">
                        Upload a government-issued ID (passport, driver&apos;s license, or national ID)
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50">
                      <CreditCard className="w-5 h-5 text-primary mb-2" />
                      <p className="font-medium text-foreground mb-1">Payment Information</p>
                      <p className="text-xs text-muted-foreground">
                        Add your bank account, UPI, or cryptocurrency wallet details
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Minimum Payout */}
              <Card variant="bordered">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center mb-4">
                    <DollarSign className="w-5 h-5 text-warning" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Minimum Payout</h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="text-sm font-medium text-foreground">United States</p>
                      <p className="text-lg font-bold text-success">$50</p>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/50">
                      <p className="text-sm font-medium text-foreground">India</p>
                      <p className="text-lg font-bold text-success">₹4,000</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Earnings below minimum roll over to the next month.
                  </p>
                </CardContent>
              </Card>

              {/* How to Request Payout */}
              <Card variant="bordered" className="lg:col-span-3">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-success" />
                    <h3 className="text-lg font-bold text-foreground">How to Request a Payout</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-success">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Go to Profile</p>
                        <p className="text-sm text-muted-foreground">Open the Profile tab in the app</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-success">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Tap Earnings</p>
                        <p className="text-sm text-muted-foreground">View your available balance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-success">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Complete Verification</p>
                        <p className="text-sm text-muted-foreground">If not done, verify your identity</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-success">4</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Request Payout</p>
                        <p className="text-sm text-muted-foreground">Choose method and confirm</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="bordered" className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                  Our support team is here to help. Check out our FAQ or reach out directly
                  for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/support"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    Visit Support Center
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
