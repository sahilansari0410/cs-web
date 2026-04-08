"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import {
  Building2,
  Target,
  Eye,
  Heart,
  Shield,
  Globe,
  Zap,
  Users,
  Lightbulb,
  Lock,
  Infinity,
  Rocket,
  Calendar,
  ArrowRight,
  Sparkles,
  Server,
  Code2,
  Palette,
} from "lucide-react";

export default function AboutPage() {
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
              <Building2 className="w-3.5 h-3.5" />
              About BLVCK
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building the Future of{" "}
              <span className="gradient-text">Cloud Storage</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;re on a mission to give everyone access to truly unlimited,
              private cloud storage without compromises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Our Story - Large Card */}
            <Card variant="bordered" className="md:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 overflow-hidden">
              <CardContent className="p-6 md:p-8 relative">
                <div className="absolute top-4 right-4 opacity-10">
                  <Lightbulb className="w-32 h-32 text-primary" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="primary">Our Story</Badge>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Born from a Simple Question
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Why should cloud storage come with limits, high costs, and privacy concerns?
                    In 2025, we set out to answer this question by building BLVCK—a platform
                    that puts users first.
                  </p>
                  <p className="text-muted-foreground">
                    Our zero-knowledge encryption ensures that your files remain private—not even
                    we can see what you store. Today, BLVCK serves users worldwide who trust
                    us with their most important files.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Founded Stats */}
            <Card variant="bordered" className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-5xl font-bold text-foreground mb-2">2025</p>
                  <p className="text-muted-foreground">Year Founded</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    AXSA INNOVATIONS LLP
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm">
                  To democratize cloud storage by providing unlimited, secure, and private
                  storage that everyone can afford. Digital storage is a fundamental need—it
                  should be accessible to all.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm">
                  A world where everyone has access to secure, unlimited cloud storage without
                  sacrificing privacy or breaking the bank. Your digital life, truly yours.
                </p>
              </CardContent>
            </Card>

            {/* Global Presence */}
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                  <Globe className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Global Presence</h3>
                <p className="text-muted-foreground text-sm">
                  Distributed infrastructure worldwide
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Serving users in 190+ countries
                </p>
              </CardContent>
            </Card>

            {/* Core Values - Full Width */}
            <Card variant="bordered" className="lg:col-span-3">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Our Core Values</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Privacy First</h4>
                    <p className="text-sm text-muted-foreground">
                      Your data belongs to you. Zero-knowledge encryption means only you can access your files.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/10">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                      <Zap className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Innovation</h4>
                    <p className="text-sm text-muted-foreground">
                      Pushing boundaries of cloud technology to deliver the best experience possible.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-success/5 border border-success/10">
                    <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center mb-3">
                      <Users className="w-5 h-5 text-success" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">User-Centric</h4>
                    <p className="text-sm text-muted-foreground">
                      Every decision starts with: How does this benefit our users?
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-warning/5 border border-warning/10">
                    <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center mb-3">
                      <Globe className="w-5 h-5 text-warning" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Accessibility</h4>
                    <p className="text-sm text-muted-foreground">
                      Cloud storage for everyone, regardless of technical expertise or budget.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Makes Us Different - Wide Card */}
            <Card variant="bordered" className="md:col-span-2">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">What Makes Us Different</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl bg-muted/50">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Infinity className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground">Truly Unlimited</p>
                    <p className="text-xs text-muted-foreground mt-1">No storage caps, ever</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-muted/50">
                    <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                      <Lock className="w-6 h-6 text-success" />
                    </div>
                    <p className="font-semibold text-foreground">Zero-Knowledge</p>
                    <p className="text-xs text-muted-foreground mt-1">We can&apos;t see your files</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-muted/50">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                      <Rocket className="w-6 h-6 text-secondary" />
                    </div>
                    <p className="font-semibold text-foreground">Creator Economy</p>
                    <p className="text-xs text-muted-foreground mt-1">100% revenue share</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline Highlights */}
            <Card variant="bordered" className="bg-gradient-to-b from-muted/50 to-transparent">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Our Journey</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-success">
                      &apos;25
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Founded</p>
                      <p className="text-xs text-muted-foreground">BLVCK launched</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                      &apos;25
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Channels Launch</p>
                      <p className="text-xs text-muted-foreground">Creator monetization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-secondary">
                      &apos;26
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Global Expansion</p>
                      <p className="text-xs text-muted-foreground">Multi-continent infra</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Section - Full Width */}
            <Card variant="bordered" className="lg:col-span-3 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">Our Team</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Behind BLVCK is a passionate team of engineers, designers, and privacy
                      advocates who believe in building technology that respects users.
                    </p>
                    <p className="text-muted-foreground">
                      We&apos;re a diverse group united by our commitment to creating the best
                      cloud storage experience possible.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center p-4 rounded-xl bg-background/50">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                        <Code2 className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">Engineers</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-background/50">
                      <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mx-auto mb-2">
                        <Palette className="w-6 h-6 text-pink-500" />
                      </div>
                      <p className="text-xs text-muted-foreground">Designers</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-background/50">
                      <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-2">
                        <Server className="w-6 h-6 text-green-500" />
                      </div>
                      <p className="text-xs text-muted-foreground">DevOps</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card variant="bordered" className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Join Our Journey
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                  We&apos;re always looking for talented individuals who share our passion
                  for privacy and innovation. Help us build the future of cloud storage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/careers"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    View Open Positions
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/support"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
                  >
                    Contact Us
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
