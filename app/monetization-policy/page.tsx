"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import {
  DollarSign,
  TrendingUp,
  Users,
  Check,
  Shield,
  Clock,
  Wallet,
  FileText,
  Calculator,
  CreditCard,
  Scale,
  Ban,
  AlertTriangle,
  RefreshCw,
  Mail,
  UserCheck,
  Tv,
  Lock,
  Eye,
  Settings,
  XCircle,
  MessageSquare,
  Building2,
  Landmark,
  Smartphone,
  CircleDollarSign,
  Bitcoin,
  ArrowRightLeft,
} from "lucide-react";

export default function MonetizationPage() {
  const lastUpdated = "February 1, 2026";

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
              <DollarSign className="w-3.5 h-3.5" />
              Creator Program
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Monetization{" "}
              <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Addendum to <Link href="/terms" className="gradient-link">Terms of Service</Link>. These terms govern your participation in the BLVCK Channel system and Monetization Program.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Last Updated: {lastUpdated}</p>
              <p>Effective Date: {lastUpdated}</p>
              <p>Version: 2.0</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Monetization at a Glance */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="bordered" className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  Monetization at a Glance
                </h2>
                <p className="text-muted-foreground mb-4">Before reading the full terms, here are the key points you should know:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Creator Eligibility</p>
                      <p className="text-sm text-muted-foreground">Premium users: 1,000+ subscribers, 90 days activity. Free users: 10,000+ subscribers, must apply.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">The 15-Unlock Rule</p>
                      <p className="text-sm text-muted-foreground">Earn revenue only from &quot;Active Subscribers&quot; who unlock your Channel 15+ times per month.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">12-Hour Access Window</p>
                      <p className="text-sm text-muted-foreground">When subscribers unlock your Channel, they get 12 hours of access before it re-locks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Variable Revenue Rates</p>
                      <p className="text-sm text-muted-foreground">Earnings per Active Subscriber may change based on ad market conditions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Minimum Payout: $50 USD</p>
                      <p className="text-sm text-muted-foreground">Earnings below threshold roll over. Monthly payouts within 30 days.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">You Own Your Content</p>
                      <p className="text-sm text-muted-foreground">Retain ownership of everything you upload. Grant BLVCK a license to display it.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Non-Exclusive</p>
                      <p className="text-sm text-muted-foreground">You can publish your content on other platforms too.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Independent Contractor</p>
                      <p className="text-sm text-muted-foreground">You are an independent contractor, not a BLVCK employee.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-destructive">Important:</strong> Prohibited content (illegal content, copyright infringement, hate speech) will result in immediate removal. Fraud (artificially inflating metrics) will result in termination and potential clawback of earnings.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Card variant="bordered">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-foreground mb-4">Table of Contents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <a href="#introduction" className="hover:text-primary transition-colors">1. Introduction and Scope</a>
                  <a href="#definitions" className="hover:text-primary transition-colors">2. Definitions</a>
                  <a href="#channel-creation" className="hover:text-primary transition-colors">3. Channel Creation and Management</a>
                  <a href="#content-requirements" className="hover:text-primary transition-colors">4. Content Requirements and Guidelines</a>
                  <a href="#content-licensing" className="hover:text-primary transition-colors">5. Content Licensing and Ownership</a>
                  <a href="#access-mechanics" className="hover:text-primary transition-colors">6. Channel Access Mechanics</a>
                  <a href="#eligibility" className="hover:text-primary transition-colors">7. Monetization Program Eligibility</a>
                  <a href="#revenue" className="hover:text-primary transition-colors">8. Revenue Calculation</a>
                  <a href="#payment" className="hover:text-primary transition-colors">9. Payment Terms</a>
                  <a href="#tax" className="hover:text-primary transition-colors">10. Tax Obligations</a>
                  <a href="#promotional" className="hover:text-primary transition-colors">11. Promotional Rights</a>
                  <a href="#obligations" className="hover:text-primary transition-colors">12. Creator Obligations and Representations</a>
                  <a href="#prohibited" className="hover:text-primary transition-colors">13. Prohibited Content and Conduct</a>
                  <a href="#fraud" className="hover:text-primary transition-colors">14. Fraud Prevention and Enforcement</a>
                  <a href="#modification" className="hover:text-primary transition-colors">15. Modification of Program Terms</a>
                  <a href="#suspension" className="hover:text-primary transition-colors">16. Suspension and Termination</a>
                  <a href="#appeals" className="hover:text-primary transition-colors">17. Appeals Process</a>
                  <a href="#effect-termination" className="hover:text-primary transition-colors">18. Effect of Termination</a>
                  <a href="#contractor" className="hover:text-primary transition-colors">19. Independent Contractor Status</a>
                  <a href="#liability" className="hover:text-primary transition-colors">20. Limitation of Liability</a>
                  <a href="#indemnification" className="hover:text-primary transition-colors">21. Indemnification</a>
                  <a href="#miscellaneous" className="hover:text-primary transition-colors">22. Miscellaneous</a>
                  <a href="#contact" className="hover:text-primary transition-colors">23. Contact Information</a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Terms Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* 1. Introduction */}
            <Card variant="bordered" id="introduction">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  1. Introduction and Scope
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.1 Purpose</h3>
                    <p>These Channel and Monetization Terms (&quot;Creator Terms&quot;) govern your participation in the BLVCK Channel system and Monetization Program. They establish the rules for creating Channels, publishing content, and earning revenue through the platform.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.2 Applicability</h3>
                    <p>These Creator Terms apply to any user who:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Creates a Channel on BLVCK</li>
                      <li>Uploads content for subscriber access</li>
                      <li>Applies for or participates in the Monetization Program</li>
                      <li>Earns or attempts to earn revenue through the platform</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.3 Relationship to Main Terms</h3>
                    <p>These Creator Terms are an addendum to and incorporated into the main BLVCK <Link href="/terms" className="gradient-link">Terms of Service</Link>. By creating a Channel or applying for monetization, you agree to both documents.</p>
                    <p className="mt-2">In the event of a conflict:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>These Creator Terms prevail for Channel and monetization matters</li>
                      <li>The main <Link href="/terms" className="gradient-link">Terms of Service</Link> prevail for all other matters</li>
                      <li>Jurisdiction-specific provisions in the main Terms apply to these Creator Terms</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.4 Acceptance</h3>
                    <p>You accept these Creator Terms by creating a Channel, uploading content to a Channel, applying for the Monetization Program, or receiving any payment through the Monetization Program.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. Definitions */}
            <Card variant="bordered" id="definitions">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  2. Definitions
                </h2>
                <div className="text-muted-foreground space-y-3">
                  <p>In addition to definitions in the main <Link href="/terms#definitions" className="gradient-link">Terms of Service</Link>:</p>
                  <p><strong className="text-foreground">&quot;Active Subscriber&quot;</strong> means a subscriber who has unlocked your Channel at least 15 times within a single calendar month.</p>
                  <p><strong className="text-foreground">&quot;Channel&quot;</strong> means a creator-managed content collection accessible to other users through the unlock system.</p>
                  <p><strong className="text-foreground">&quot;Channel Content&quot;</strong> means all photos, videos, text, audio, and other materials you upload to your Channel.</p>
                  <p><strong className="text-foreground">&quot;Channel Metadata&quot;</strong> means your Channel name, description, profile picture, category tags, and publicly displayed statistics.</p>
                  <p><strong className="text-foreground">&quot;Creator&quot;</strong> means a user who has created one or more Channels.</p>
                  <p><strong className="text-foreground">&quot;Creator Dashboard&quot;</strong> means the section of the BLVCK application where you manage your Channel(s) and view monetization metrics.</p>
                  <p><strong className="text-foreground">&quot;Monetization Program&quot;</strong> means BLVCK&apos;s revenue-sharing program for eligible Creators.</p>
                  <p><strong className="text-foreground">&quot;Monthly Earnings&quot;</strong> means the total revenue attributed to your Channel(s) for a calendar month.</p>
                  <p><strong className="text-foreground">&quot;Net Revenue&quot;</strong> means gross revenue minus applicable fees, refunds, chargebacks, and adjustments.</p>
                  <p><strong className="text-foreground">&quot;Payout&quot;</strong> means the transfer of earned revenue to your designated payment method.</p>
                  <p><strong className="text-foreground">&quot;Revenue Per Active Subscriber&quot; or &quot;RPAS&quot;</strong> means the variable rate used to calculate your earnings per Active Subscriber.</p>
                  <p><strong className="text-foreground">&quot;Subscriber&quot;</strong> means a user who has followed or subscribed to your Channel.</p>
                  <p><strong className="text-foreground">&quot;Unlock&quot;</strong> means a single instance of a subscriber gaining access to your Channel by spending Cloud Coins or watching a Rewarded Ad.</p>
                </div>
              </CardContent>
            </Card>

            {/* 3. Channel Creation */}
            <Card variant="bordered" id="channel-creation">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Tv className="w-6 h-6 text-primary" />
                  3. Channel Creation and Management
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.1 Creating a Channel</h3>
                    <p>Any eligible BLVCK user may create a Channel, subject to account in good standing, compliance with these Creator Terms, and completion of required profile information.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.2 Channel Types</h3>
                    <p>Channels are one-way broadcasting features where you, as the Creator, are the sole publisher. Subscribers consume content but do not contribute to your Channel.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.3 Channel Settings</h3>
                    <p>You control Channel name and description, profile picture and banner, content organization and presentation, and pricing tier (within platform guidelines).</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.4 Multiple Channels</h3>
                    <p>You may create multiple Channels, subject to each Channel having distinct content or purpose, no use of multiple Channels to circumvent platform rules, and BLVCK&apos;s right to limit the number of Channels per account.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-warning/10 border border-warning/20">
                    <h3 className="font-semibold text-foreground mb-2">3.5 Channel Metadata Visibility</h3>
                    <p>You acknowledge and agree that Channel Metadata is:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Publicly visible to all BLVCK users</li>
                      <li>Indexed and searchable within the platform</li>
                      <li><strong>NOT</strong> protected by end-to-end encryption</li>
                      <li>Potentially used for platform recommendations and discovery</li>
                    </ul>
                    <p className="mt-2 text-sm">This differs from your private storage, which is zero-knowledge encrypted.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 4. Content Requirements */}
            <Card variant="bordered" id="content-requirements">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  4. Content Requirements and Guidelines
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.1 Content Standards</h3>
                    <p>All Channel Content must comply with the <Link href="/terms#acceptable-use" className="gradient-link">Acceptable Use Policy</Link> in the main Terms of Service, be appropriate for the category and audience you select, accurately match your Channel Metadata, and not mislead subscribers about what they will access.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.2 Quality Standards</h3>
                    <p>While we do not mandate specific technical requirements, we recommend clear, viewable images and videos, readable text content, functional file formats, and regular content updates to maintain subscriber interest.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.3 Content Featuring Other Individuals</h3>
                    <p>If your content features identifiable individuals other than yourself:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>You must have their written consent (model release)</li>
                      <li>They must be at least 18 years old</li>
                      <li>You must maintain records of consent for at least 3 years</li>
                      <li>You must provide consent documentation upon BLVCK&apos;s request</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.4 Content Featuring Minors</h3>
                    <p>Content featuring individuals under 18 years of age must be appropriate, non-exploitative family content, must have verifiable parental/guardian consent, must not be monetized if it features minors as the primary subject in a way that could attract inappropriate attention, and is subject to enhanced review and may be removed at our discretion.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.5 Third-Party Content</h3>
                    <p>If your Channel includes third-party content (music, images, clips, etc.), you must have proper licenses or permissions, comply with the terms of any licenses, are responsible for any licensing fees, and BLVCK may remove content upon copyright claims.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.6 Content Accuracy</h3>
                    <p>You must not use misleading thumbnails or titles (clickbait), misrepresent the nature or quantity of content, promise content you do not deliver, or artificially pad content to appear more substantial.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5. Content Licensing */}
            <Card variant="bordered" id="content-licensing">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  5. Content Licensing and Ownership
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                    <h3 className="font-semibold text-foreground mb-2">5.1 Your Ownership</h3>
                    <p>You retain full ownership of all Channel Content you create and upload. <strong className="text-foreground">BLVCK does not claim ownership of your content.</strong></p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5.2 License Grant to BLVCK</h3>
                    <p>By uploading Channel Content, you grant BLVCK a:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Non-exclusive license</li>
                      <li>Worldwide scope</li>
                      <li>Royalty-free (revenue share is separate compensation)</li>
                      <li>Sublicensable (to service providers necessary for platform operation)</li>
                    </ul>
                    <p className="mt-2">License to: store, process, and transmit your content; display your content to subscribers who unlock your Channel; create thumbnails, previews, and promotional clips; include your content in platform marketing (subject to Section 11); and adapt content format for different devices and bandwidths.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5.3 License Duration</h3>
                    <p>This license continues for as long as your content remains on the platform, plus a reasonable period for cached content to expire, backup systems to cycle, and ongoing subscriber access windows to complete.</p>
                    <p className="mt-2">Upon content deletion, we will remove your content within 30 days from active systems and 90 days from backup systems.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5.4 License to Subscribers</h3>
                    <p>When a subscriber unlocks your Channel, you grant them a limited license to view and consume your content for personal, non-commercial use, during the access window only, without the right to download, copy, redistribute, or create derivative works.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-2">5.5 Non-Exclusivity</h3>
                    <p>These Creator Terms are <strong className="text-foreground">non-exclusive</strong>. You may:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Publish the same or similar content on other platforms</li>
                      <li>Maintain presences on competing services</li>
                      <li>Enter into agreements with other content platforms</li>
                    </ul>
                    <p className="mt-2">BLVCK does not restrict your ability to distribute your content elsewhere.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5.6 Content After Termination</h3>
                    <p>Upon termination of your account or Channel, you may download your content before termination takes effect, BLVCK&apos;s license to your content terminates (subject to Section 5.3), existing subscriber access windows will complete naturally, and we may retain content as required for legal compliance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 6. Channel Access Mechanics */}
            <Card variant="bordered" id="access-mechanics">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary" />
                  6. Channel Access Mechanics
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">6.1 The Paywall System</h3>
                    <p>Channel Content is protected by a paywall. Subscribers must spend Cloud Coins OR watch Rewarded Advertisements to unlock access to your Channel.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      6.2 The 12-Hour Access Window
                    </h3>
                    <p>When a subscriber unlocks your Channel:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Access is granted for exactly <strong className="text-foreground">12 hours</strong> from the moment of unlock</li>
                      <li>After 12 hours, the Channel automatically re-locks</li>
                      <li>The subscriber must unlock again to regain access</li>
                      <li>Multiple unlocks within 12 hours do not extend the window</li>
                    </ul>
                    <p className="mt-3">You acknowledge that this mechanism is fundamental to the BLVCK ecosystem, cannot be disabled or modified by Creators, applies equally to all Channels, and is designed to create ongoing engagement and fair revenue distribution.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">6.3 Access Limitations</h3>
                    <p className="font-medium text-foreground">During an access window, subscribers can:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>View all content in your Channel</li>
                      <li>Navigate freely within your Channel</li>
                      <li>Access content added during the window</li>
                    </ul>
                    <p className="font-medium text-foreground mt-3">Subscribers cannot:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Download content for offline use (unless you enable this feature)</li>
                      <li>Share their access with others</li>
                      <li>Extend or transfer their access window</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">6.4 Unlock Pricing</h3>
                    <p>Cloud Coin costs for unlocks are set by BLVCK based on platform economics, uniform across similar Channel categories, subject to change with notice to Creators, and displayed to subscribers before unlock.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 7. Eligibility */}
            <Card variant="bordered" id="eligibility" className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-primary" />
                  7. Monetization Program Eligibility
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7.1 Program Overview</h3>
                    <p>The Monetization Program allows eligible Creators to earn revenue from subscriber activity on their Channels. Participation is a privilege granted at BLVCK&apos;s discretion, not a right.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7.2 Eligibility Requirements</h3>
                    <p>Requirements differ based on your subscription status:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                        <h4 className="font-semibold text-foreground mb-2">Premium User Requirements</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Minimum 1,000 subscribers</li>
                          <li>Minimum 90 days of consistent Channel activity</li>
                          <li>Active Premium subscription in good standing</li>
                          <li>No history of Terms violations</li>
                          <li>Completed tax and payment information</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-xl bg-muted/50">
                        <h4 className="font-semibold text-foreground mb-2">Free User Requirements</h4>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Minimum 10,000 subscribers</li>
                          <li>Minimum 180 days of consistent Channel activity</li>
                          <li>Manual application via support@blvck.in</li>
                          <li>Approval at BLVCK&apos;s sole discretion</li>
                          <li>Completed tax and payment information</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7.3 Application Process</h3>
                    <p className="font-medium text-foreground">Premium Users:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Eligibility is automatically evaluated</li>
                      <li>You will be notified when eligible</li>
                      <li>Accept the Creator Terms to activate monetization</li>
                    </ul>
                    <p className="font-medium text-foreground mt-3">Free Users:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Submit application after meeting subscriber threshold</li>
                      <li>Include Channel links and content description</li>
                      <li>Allow up to 30 days for review</li>
                      <li>Approval or rejection will be communicated via email</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7.4 Maintaining Eligibility</h3>
                    <p>To remain in the Monetization Program, you must maintain minimum subscriber counts, continue regular Channel activity (at least monthly updates), maintain Premium subscription (for Premium tier), comply with all applicable terms, and keep tax and payment information current.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7.5 Eligibility Review</h3>
                    <p>We may periodically review your eligibility. Failure to maintain requirements may result in warning and grace period to remedy, temporary suspension of monetization, or removal from the program.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 8. Revenue Calculation */}
            <Card variant="bordered" id="revenue">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-primary" />
                  8. Revenue Calculation
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      8.1 The 15-Unlock Rule
                    </h3>
                    <p>BLVCK uses the &quot;15-Unlock Rule&quot; to calculate Creator revenue:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Revenue is based <strong className="text-foreground">exclusively</strong> on &quot;Active Subscribers&quot;</li>
                      <li>A subscriber becomes &quot;Active&quot; by unlocking your Channel <strong className="text-foreground">at least 15 times</strong> in a calendar month</li>
                      <li>Subscribers with fewer than 15 unlocks do not generate revenue for you</li>
                      <li>Total subscriber count does not determine earnings</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">8.2 Calculation Example</h3>
                    <p>You have 10,000 subscribers in January:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>7,000 subscribers unlocked your Channel 15+ times = <strong className="text-success">Active Subscribers</strong></li>
                      <li>3,000 subscribers unlocked fewer than 15 times = <strong className="text-muted-foreground">Not Active</strong></li>
                    </ul>
                    <p className="mt-2"><strong className="text-foreground">Result:</strong> You earn revenue for 7,000 Active Subscribers only.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">8.3 Revenue Formula</h3>
                    <div className="p-3 rounded-lg bg-muted/50 font-mono text-center">
                      Monthly Earnings = Active Subscribers × Revenue Per Active Subscriber (RPAS)
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">8.4 Revenue Per Active Subscriber (RPAS)</h3>
                    <p>The RPAS rate is variable and determined by BLVCK, reflects ad market conditions, platform costs, and sustainability, may differ by region or category, is displayed on your Creator Dashboard, and is subject to change (see Section 15).</p>
                    <p className="mt-2">Current rates are always available at: https://blvck.in/creator-rates</p>
                  </div>
                  <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                    <h3 className="font-semibold text-foreground mb-2">8.5 Revenue Share Split</h3>
                    <p>The standard revenue share is:</p>
                    <div className="flex gap-4 mt-2">
                      <div className="flex-1 text-center p-3 rounded-lg bg-background">
                        <p className="text-2xl font-bold text-primary">100%</p>
                        <p className="text-sm">Creator</p>
                      </div>
                      <div className="flex-1 text-center p-3 rounded-lg bg-background">
                        <p className="text-2xl font-bold text-muted-foreground">0%</p>
                        <p className="text-sm">BLVCK</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm">Creators keep 100% of their earnings. BLVCK covers platform infrastructure, payment processing, support, and marketing costs.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">8.6 Gross to Net Adjustments</h3>
                    <p>Your Monthly Earnings may be adjusted for refunds issued to subscribers, chargebacks from payment processors, fraudulent activity, currency conversion costs, and applicable taxes withheld at source.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">8.7 Earnings Transparency</h3>
                    <p>Your Creator Dashboard displays real-time subscriber counts, daily and monthly unlock statistics, Active Subscriber calculations, estimated and confirmed earnings, and historical performance data.</p>
                    <p className="mt-2">BLVCK&apos;s records are the authoritative source for all revenue calculations. You may request clarification through support@blvck.in.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 9. Payment Terms */}
            <Card variant="bordered" id="payment">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Wallet className="w-6 h-6 text-primary" />
                  9. Payment Terms
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.1 Payout Threshold</h3>
                    <p>Revenue is paid out when your accrued earnings meet the minimum threshold:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                      <div className="p-3 rounded-lg bg-muted/50 text-center">
                        <p className="font-bold text-foreground">$50 USD</p>
                        <p className="text-xs">United States</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50 text-center">
                        <p className="font-bold text-foreground">₹4,000 INR</p>
                        <p className="text-xs">India</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50 text-center">
                        <p className="font-bold text-foreground">€45 EUR</p>
                        <p className="text-xs">European Union</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50 text-center">
                        <p className="font-bold text-foreground">£40 GBP</p>
                        <p className="text-xs">United Kingdom</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm">Earnings below the threshold roll over to subsequent months until the threshold is met.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.2 Payout Schedule</h3>
                    <p>Payouts are processed monthly:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Earnings are calculated for each calendar month</li>
                      <li>Calculations are finalized by the 7th of the following month</li>
                      <li>Eligible payouts are initiated by the 15th of the following month</li>
                      <li>Funds arrive within 5-15 business days depending on payment method and region</li>
                    </ul>
                    <p className="mt-2 text-sm">Example: January earnings are calculated by February 7th, initiated by February 15th, and received by February 28th.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.3 Payment Methods</h3>
                    <p>Available payment methods (vary by region):</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <ArrowRightLeft className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">Wire Transfer</p>
                          <p className="text-xs text-muted-foreground">SWIFT</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Landmark className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">Bank Transfer</p>
                          <p className="text-xs text-muted-foreground">ACH, Local</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                          <Smartphone className="w-5 h-5 text-success" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">UPI</p>
                          <p className="text-xs text-muted-foreground">India</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Wallet className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">AirTM</p>
                          <p className="text-xs text-muted-foreground">Global</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                          <CircleDollarSign className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">USDT</p>
                          <p className="text-xs text-muted-foreground">Tether (TRC20/ERC20)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                          <Bitcoin className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">Bitcoin</p>
                          <p className="text-xs text-muted-foreground">BTC</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm">You must provide accurate payment information. We are not responsible for delays or losses due to incorrect information.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.4 Currency</h3>
                    <p>Earnings are calculated in USD. Payouts are converted to your local currency at prevailing exchange rates determined at the time of payout processing. BLVCK does not guarantee specific exchange rates.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.5 Payment Fees</h3>
                    <p>BLVCK covers standard payment processing fees. International wire transfer fees exceeding $15 USD may be deducted. Currency conversion spreads are included in the exchange rate. Your bank may charge receiving fees (your responsibility).</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.6 Failed Payments</h3>
                    <p>If a payment fails, we will notify you via email. You have 30 days to update payment information. After 30 days, payment is held until information is corrected. Payments unclaimed for 12 months may be forfeited (where legally permitted).</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.7 Payment Disputes</h3>
                    <p>If you believe a payment is incorrect, contact support@blvck.in within 60 days, provide specific details of the discrepancy, and we will investigate and respond within 14 business days. Adjustments, if warranted, will be applied to subsequent payouts.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 10. Tax Obligations */}
            <Card variant="bordered" id="tax">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-primary" />
                  10. Tax Obligations
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div className="p-4 rounded-xl bg-warning/10 border border-warning/20">
                    <h3 className="font-semibold text-foreground mb-2">10.1 Your Responsibility</h3>
                    <p>You are solely responsible for understanding your tax obligations, reporting earnings to relevant tax authorities, paying all applicable income taxes, VAT/GST, and other taxes, and maintaining records for tax purposes.</p>
                    <p className="mt-2 text-sm"><strong>BLVCK does not provide tax advice. Consult a qualified tax professional.</strong></p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10.2 Tax Information Collection</h3>
                    <p>We collect tax information as required by law:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>W-9 (US persons)</li>
                      <li>W-8BEN or W-8BEN-E (non-US persons receiving US-source income)</li>
                      <li>PAN (India)</li>
                      <li>VAT registration (EU, where applicable)</li>
                      <li>Other forms as required by your jurisdiction</li>
                    </ul>
                    <p className="mt-2">You must provide accurate tax information before receiving payouts.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10.3 Tax Withholding</h3>
                    <p>BLVCK may withhold taxes as required by law:</p>
                    <p className="font-medium text-foreground mt-2">India:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>TDS (Tax Deducted at Source) at applicable rates</li>
                      <li>TDS certificates provided annually</li>
                    </ul>
                    <p className="font-medium text-foreground mt-2">United States:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Backup withholding if W-9 not provided (24%)</li>
                      <li>FATCA withholding for non-US persons without W-8 (30%)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10.4 Tax Reporting</h3>
                    <p>BLVCK provides annual earnings statements, TDS certificates (India), 1099-MISC or 1099-NEC (US, where applicable), and other reports as required by law. You can access tax documents in your Creator Dashboard.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 11. Promotional Rights */}
            <Card variant="bordered" id="promotional">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  11. Promotional Rights
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">11.1 Platform Promotion</h3>
                    <p>You grant BLVCK the right to feature your Channel in platform recommendations, include your content in &quot;trending&quot; or &quot;featured&quot; sections, use your Channel name and thumbnail in platform marketing, and create promotional previews of your content.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">11.2 External Marketing</h3>
                    <p>For use of your content in external marketing (social media, advertisements, press), we will seek your consent before use. You may opt out of external marketing in your settings. Opt-out does not affect platform-internal promotion.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">11.3 Creator Spotlight</h3>
                    <p>We may invite you to participate in Creator spotlight features, interviews or case studies, and promotional campaigns. Participation is voluntary and may include additional compensation.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">11.4 Your Promotional Rights</h3>
                    <p>You may promote your BLVCK Channel on your own social media and websites, using BLVCK branding according to our brand guidelines, and with accurate representation of the platform and your content.</p>
                    <p className="mt-2">You may not make false claims about earnings or platform features, imply official endorsement by BLVCK, or use promotional tactics that violate platform rules.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 12. Creator Obligations */}
            <Card variant="bordered" id="obligations">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-primary" />
                  12. Creator Obligations and Representations
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">12.1 Representations</h3>
                    <p>By participating in the Monetization Program, you represent and warrant that:</p>
                    <p className="font-medium text-foreground mt-2">Identity and Capacity:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>You are at least 18 years old</li>
                      <li>You have the legal capacity to enter into this agreement</li>
                      <li>The information you provide is accurate and complete</li>
                    </ul>
                    <p className="font-medium text-foreground mt-2">Content Rights:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>You own or have licenses to all content you upload</li>
                      <li>Your content does not infringe any third party&apos;s rights</li>
                      <li>You have obtained all necessary releases and permissions</li>
                      <li>Your content complies with all applicable laws</li>
                    </ul>
                    <p className="font-medium text-foreground mt-2">Tax and Legal:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>You will comply with all tax obligations</li>
                      <li>You are not prohibited from receiving payments</li>
                      <li>You will report earnings as required by law</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">12.2 Ongoing Obligations</h3>
                    <p>You agree to maintain accurate account and payment information, respond to BLVCK communications within 14 days, comply with content and conduct guidelines, report any unauthorized access to your account, and cooperate with investigations into potential violations.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">12.3 Compliance with Laws</h3>
                    <p>You must comply with all applicable laws, including copyright and intellectual property laws, privacy and data protection laws, advertising disclosure requirements (FTC, ASA, etc.), and local content regulations.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">12.4 Advertising Disclosures</h3>
                    <p>If your content contains paid sponsorships, affiliate links, gifted products, or any form of commercial relationship, you must clearly disclose this to your subscribers in accordance with applicable advertising standards (e.g., FTC Guidelines in the US, ASA in the UK).</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 13. Prohibited Content */}
            <Card variant="bordered" id="prohibited" className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Ban className="w-6 h-6 text-destructive" />
                  13. Prohibited Content and Conduct
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                    <h3 className="font-semibold text-foreground mb-2">13.1 Zero-Tolerance Content</h3>
                    <p>The following content is strictly prohibited and will result in <strong className="text-destructive">immediate removal</strong> from the Monetization Program and potential account termination:</p>
                    <p className="font-medium text-foreground mt-3">Illegal Content:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Child sexual abuse material (CSAM)</li>
                      <li>Content promoting terrorism or violent extremism</li>
                      <li>Non-consensual intimate imagery</li>
                      <li>Content facilitating human trafficking</li>
                      <li>Content violating export control laws</li>
                    </ul>
                    <p className="font-medium text-foreground mt-3">Severely Harmful Content:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Instructions for creating weapons or dangerous substances</li>
                      <li>Content promoting self-harm or suicide</li>
                      <li>Content facilitating fraud or financial crimes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">13.2 Prohibited Content</h3>
                    <p>The following content is prohibited and will result in content removal and potential program suspension:</p>
                    <p className="font-medium text-foreground mt-2">Intellectual Property Violations:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Copyrighted movies, TV shows, or music without license</li>
                      <li>Pirated software or cracked applications</li>
                      <li>Trademark infringement</li>
                    </ul>
                    <p className="font-medium text-foreground mt-2">Misleading Content:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Clickbait thumbnails or titles that misrepresent content</li>
                      <li>Fake engagement or artificially inflated metrics</li>
                      <li>Impersonation of other creators or public figures</li>
                      <li>Misinformation presented as fact</li>
                    </ul>
                    <p className="font-medium text-foreground mt-2">Harmful Content:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Hate speech targeting protected characteristics</li>
                      <li>Harassment or bullying of individuals</li>
                      <li>Graphic violence without educational context</li>
                      <li>Non-consensual pornography</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">13.3 Prohibited Conduct</h3>
                    <p>You may not:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Use bots, scripts, or automation to inflate metrics</li>
                      <li>Purchase fake subscribers or engagement</li>
                      <li>Coordinate inauthentic behavior with other users</li>
                      <li>Attempt to manipulate the recommendation algorithm</li>
                      <li>Circumvent monetization rules through multiple accounts</li>
                      <li>Engage in spam or excessive self-promotion</li>
                      <li>Harass BLVCK staff or other creators</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">13.4 Reporting Violations</h3>
                    <p>To report prohibited content or conduct:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Email: abuse@blvck.in</li>
                      <li>In-app reporting feature</li>
                      <li>Include specific details and evidence</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 14. Fraud Prevention */}
            <Card variant="bordered" id="fraud">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  14. Fraud Prevention and Enforcement
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">14.1 Monitoring</h3>
                    <p>BLVCK monitors for fraudulent activity, including unusual unlock patterns, bot or automated activity, coordinated inauthentic behavior, geographic or temporal anomalies, and payment fraud indicators.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">14.2 Investigation</h3>
                    <p>If we detect potential fraud, we may temporarily hold payouts during investigation, we will notify you of the investigation, you will have opportunity to respond, and investigation will be completed within 30 days when possible.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">14.3 Enforcement Actions</h3>
                    <p>Confirmed fraud may result in warning and correction opportunity (minor, first-time issues), temporary suspension of monetization, permanent removal from the Monetization Program, account termination, or legal action for significant fraud.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">14.4 Earnings Adjustments</h3>
                    <p>If fraud is confirmed, fraudulent earnings will be removed from your balance, affected payouts may be reversed or offset against future earnings, clawback is limited to earnings attributable to fraudulent activity, and you will receive itemized explanation of adjustments.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">14.5 Clawback Limitations</h3>
                    <p>We will not claw back legitimate earnings unrelated to fraud, pursue clawback for amounts under $50 USD, pursue clawback after 12 months from the original payout, or take action without providing evidence and opportunity to respond.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">14.6 False Positives</h3>
                    <p>If you believe enforcement action was taken in error, you may appeal through the process in Section 17. Payouts held during investigation will be released if cleared. We will correct any errors in your earnings records.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 15. Modification */}
            <Card variant="bordered" id="modification">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  15. Modification of Program Terms
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">15.1 Right to Modify</h3>
                    <p>BLVCK may modify these Creator Terms, including eligibility requirements, revenue calculation methods, payment terms and thresholds, and RPAS rates.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">15.2 Notice of Changes</h3>
                    <p className="font-medium text-foreground">Material Changes (affecting eligibility or revenue):</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>30 days advance notice via email</li>
                      <li>Posted in Creator Dashboard</li>
                      <li>Effective date clearly stated</li>
                    </ul>
                    <p className="font-medium text-foreground mt-2">Rate Changes (RPAS adjustments):</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>14 days advance notice</li>
                      <li>Posted in Creator Dashboard and on website</li>
                      <li>Historical rates maintained for reference</li>
                    </ul>
                    <p className="font-medium text-foreground mt-2">Minor Changes (clarifications, typos):</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>May be made without advance notice</li>
                      <li>Updated &quot;Last Updated&quot; date</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">15.3 Your Options</h3>
                    <p>Upon material changes, review the changes carefully, continue participating (constitutes acceptance), withdraw from the program before effective date, or request payout of earned amounts before withdrawal.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">15.4 Rate Adjustment Principles</h3>
                    <p>When adjusting RPAS rates, we consider advertising market conditions, platform operational costs, Creator community feedback, and long-term program sustainability. We are committed to maintaining fair and competitive rates while ensuring platform viability.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 16. Suspension and Termination */}
            <Card variant="bordered" id="suspension">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-primary" />
                  16. Suspension and Termination
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">16.1 Suspension by BLVCK</h3>
                    <p>We may suspend your monetization (temporarily disable earnings) for suspected Terms violations (pending investigation), suspected fraudulent activity, failure to maintain eligibility requirements, failure to provide required tax information, or at your request.</p>
                    <p className="mt-2"><strong className="text-foreground">Suspension Notice:</strong> We will notify you of suspension and reason. For suspected violations, you have 14 days to respond. Suspension may be lifted after investigation or correction.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">16.2 Termination by BLVCK</h3>
                    <p className="font-medium text-foreground">With 30 Days Notice:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Failure to maintain eligibility after warning</li>
                      <li>Extended inactivity (no content updates for 6+ months)</li>
                      <li>Discontinuation of the Monetization Program</li>
                    </ul>
                    <p className="font-medium text-foreground mt-2">With 14 Days Notice:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Repeated minor Terms violations</li>
                      <li>Failure to correct issues after suspension</li>
                    </ul>
                    <p className="font-medium text-foreground mt-2">Immediately:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Severe Terms violations (Section 13.1 content)</li>
                      <li>Confirmed fraud</li>
                      <li>Legal requirements</li>
                      <li>Activity threatening platform integrity</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">16.3 Termination by You</h3>
                    <p>You may terminate your participation at any time through Creator Dashboard settings or by emailing support@blvck.in. Effective upon confirmation.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">16.4 Effect on Channel</h3>
                    <p>Termination of monetization does not automatically delete your Channel. Your Channel may continue to exist without monetization unless separately terminated.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 17. Appeals */}
            <Card variant="bordered" id="appeals">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  17. Appeals Process
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">17.1 Right to Appeal</h3>
                    <p>You may appeal monetization suspension or termination, content removal decisions, earnings adjustments, and fraud determinations.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">17.2 Filing an Appeal</h3>
                    <p>To appeal:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Email: appeals@blvck.in</li>
                      <li>Subject: &quot;Monetization Appeal - [Your Username]&quot;</li>
                      <li>Include: Your account information, decision being appealed, reason you believe the decision was incorrect, and any supporting evidence</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">17.3 Appeal Timeline</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>File within 30 days of the decision</li>
                      <li>We will acknowledge receipt within 3 business days</li>
                      <li>Initial review completed within 14 business days</li>
                      <li>Final decision within 30 days of filing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">17.4 Appeal Review</h3>
                    <p>Appeals are reviewed by a team not involved in the original decision. We consider original evidence and decision, your appeal statement and evidence, platform policies and precedent, and any new information.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">17.5 Appeal Outcomes</h3>
                    <p>Possible outcomes: Decision upheld (original action stands), Decision modified (partial reversal), or Decision reversed (full reinstatement).</p>
                    <p className="mt-2">The appeal decision is final for that matter, but does not prevent future appeals for separate issues.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">17.6 Reinstatement</h3>
                    <p>If your appeal is successful, monetization will be reinstated within 7 days, held payouts will be released, and earnings records will be corrected if necessary.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 18. Effect of Termination */}
            <Card variant="bordered" id="effect-termination">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  18. Effect of Termination
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">18.1 Upon Termination by You</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>You receive any earned, unpaid amounts meeting payout threshold</li>
                      <li>Sub-threshold amounts are paid out within 90 days regardless of threshold</li>
                      <li>Your content licenses to BLVCK terminate (subject to wind-down period)</li>
                      <li>You may continue using BLVCK as a regular user</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">18.2 Upon Termination for Non-Severe Violations</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>You receive earned amounts for legitimate activity</li>
                      <li>Amounts attributable to violations may be withheld</li>
                      <li>30-day content download period before Channel deletion (if applicable)</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                    <h3 className="font-semibold text-foreground mb-2">18.3 Upon Termination for Severe Violations</h3>
                    <p>If terminated for Section 13.1 violations (illegal content, fraud):</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Unpaid earnings may be forfeited to the extent permitted by law</li>
                      <li>Channel and content may be immediately removed</li>
                      <li>Account may be permanently banned</li>
                      <li>We may report violations to authorities</li>
                      <li>We reserve the right to pursue legal action</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">18.4 Survival</h3>
                    <p>The following provisions survive termination: Content licenses for wind-down period, payment obligations for earned amounts, confidentiality obligations, indemnification obligations, limitation of liability, and dispute resolution provisions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 19. Independent Contractor */}
            <Card variant="bordered" id="contractor">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  19. Independent Contractor Status
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">19.1 Relationship</h3>
                    <p>You are an independent contractor. Nothing in these Creator Terms creates an employment relationship, a partnership or joint venture, an agency relationship, or a franchise relationship.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">19.2 No Employee Benefits</h3>
                    <p>As an independent contractor, you are not entitled to employee benefits (health insurance, retirement plans), workers&apos; compensation, unemployment insurance, paid leave or vacation, or any other employee entitlements.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">19.3 Your Responsibilities</h3>
                    <p>As an independent contractor, you are responsible for your own taxes (income, self-employment, VAT/GST), your own insurance, your own equipment and workspace, and compliance with self-employment laws in your jurisdiction.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">19.4 No Authority to Bind</h3>
                    <p>You have no authority to enter into contracts on behalf of BLVCK, make representations or warranties for BLVCK, or bind BLVCK to any obligations.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 20. Limitation of Liability */}
            <Card variant="bordered" id="liability">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  20. Limitation of Liability
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">20.1 Limitation</h3>
                    <p className="uppercase text-sm">TO THE MAXIMUM EXTENT PERMITTED BY LAW, BLVCK&apos;S LIABILITY FOR MONETIZATION-RELATED CLAIMS IS LIMITED TO THE AMOUNT OF UNPAID EARNINGS IN YOUR ACCOUNT AT THE TIME OF THE CLAIM.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">20.2 Exclusions</h3>
                    <p className="uppercase text-sm">BLVCK IS NOT LIABLE FOR LOST PROFITS OR ANTICIPATED EARNINGS, INDIRECT, CONSEQUENTIAL, OR PUNITIVE DAMAGES, DAMAGES FROM ALGORITHM OR RATE CHANGES, THIRD-PARTY CLAIMS AGAINST YOU, OR LOSSES FROM YOUR VIOLATION OF THESE TERMS.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">20.3 Exceptions</h3>
                    <p>These limitations do not apply to BLVCK&apos;s gross negligence or willful misconduct, amounts owed for legitimate earned revenue, or liabilities that cannot be limited by law.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 21. Indemnification */}
            <Card variant="bordered" id="indemnification">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  21. Indemnification
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">21.1 Your Indemnification</h3>
                    <p>You agree to indemnify and hold harmless BLVCK from claims arising from your Channel Content, your violation of these Creator Terms, your violation of any third party&apos;s rights, your tax obligations, and your representations to subscribers.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">21.2 Process</h3>
                    <p>We will notify you promptly of claims, allow you to control the defense (subject to our approval), and cooperate reasonably in the defense.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 22. Miscellaneous */}
            <Card variant="bordered" id="miscellaneous">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" />
                  22. Miscellaneous
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">22.1 Entire Agreement</h3>
                    <p>These Creator Terms, together with the main <Link href="/terms" className="gradient-link">Terms of Service</Link> and <Link href="/privacy-policy" className="gradient-link">Privacy Policy</Link>, constitute the entire agreement regarding the Monetization Program.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">22.2 Severability</h3>
                    <p>If any provision is unenforceable, the remaining provisions continue in effect.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">22.3 No Waiver</h3>
                    <p>Failure to enforce any provision does not waive the right to enforce it later.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">22.4 Assignment</h3>
                    <p>You may not assign your participation in the Monetization Program. BLVCK may assign these terms in connection with a business transfer.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">22.5 Governing Law</h3>
                    <p>These Creator Terms are governed by the laws specified in the main <Link href="/terms#jurisdiction" className="gradient-link">Terms of Service</Link>, subject to jurisdiction-specific provisions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 23. Contact Information */}
            <Card variant="bordered" id="contact">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  23. Contact Information
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-muted/50">
                      <h3 className="font-semibold text-foreground mb-2">Creator Support</h3>
                      <p>Email: support@blvck.in</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50">
                      <h3 className="font-semibold text-foreground mb-2">Appeals</h3>
                      <p>Email: appeals@blvck.in</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50">
                      <h3 className="font-semibold text-foreground mb-2">Tax and Payment Issues</h3>
                      <p>Email: payout@blvck.in</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50">
                      <h3 className="font-semibold text-foreground mb-2">General Legal</h3>
                      <p>Email: legal@blvck.in</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* End Note */}
            <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
              <p>End of Monetization Policy</p>
              <p className="mt-2">By creating a Channel or participating in the Monetization Program, you acknowledge that you have read, understood, and agree to be bound by these terms.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
