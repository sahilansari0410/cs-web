"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import {
  FileText,
  Users,
  CreditCard,
  AlertTriangle,
  Scale,
  Ban,
  RefreshCw,
  Mail,
  Shield,
  Check,
  Coins,
  Tv,
  DollarSign,
  Clock,
  BookOpen,
  UserCheck,
  Server,
  Globe,
  Link,
  Wrench,
  XCircle,
  AlertOctagon,
  Gavel,
  MapPin,
  Settings,
  Phone,
  Crown,
} from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "February 1, 2026";

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <FileText className="w-3.5 h-3.5" />
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using BLVCK. By using our service, you agree to these terms.
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
          {/* Terms at a Glance */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="bordered" className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Terms at a Glance
                </h2>
                <p className="text-muted-foreground mb-4">Before reading the full terms, here are the key points you should know:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Age Requirement</p>
                      <p className="text-sm text-muted-foreground">You must be at least 18 years old to use BLVCK.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Your Files, Your Ownership</p>
                      <p className="text-sm text-muted-foreground">You retain full ownership of all content you upload.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Zero-Knowledge Encryption</p>
                      <p className="text-sm text-muted-foreground">We cannot access, read, or recover your encrypted files.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Free Plan (1 TB)</p>
                      <p className="text-sm text-muted-foreground">Ad-supported and may be modified with 30 days notice.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Auto-Renewal</p>
                      <p className="text-sm text-muted-foreground">Premium subscriptions renew automatically unless cancelled.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Cloud Coins</p>
                      <p className="text-sm text-muted-foreground">Virtual currency with no real-world monetary value.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Fair Usage Policy</p>
                      <p className="text-sm text-muted-foreground">Personal use only. No crypto mining or reselling.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Your Rights Protected</p>
                      <p className="text-sm text-muted-foreground">Consumer protection laws in your jurisdiction still apply.</p>
                    </div>
                  </div>
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
                  <a href="#introduction" className="hover:text-primary transition-colors">1. Introduction and Acceptance</a>
                  <a href="#definitions" className="hover:text-primary transition-colors">2. Definitions</a>
                  <a href="#eligibility" className="hover:text-primary transition-colors">3. Eligibility</a>
                  <a href="#account" className="hover:text-primary transition-colors">4. Account Registration and Security</a>
                  <a href="#service-description" className="hover:text-primary transition-colors">5. Service Description</a>
                  <a href="#plans" className="hover:text-primary transition-colors">6. Service Plans and Pricing</a>
                  <a href="#cloud-coins" className="hover:text-primary transition-colors">7. Cloud Coins Virtual Currency</a>
                  <a href="#channels" className="hover:text-primary transition-colors">8. Channels and Content</a>
                  <a href="#creator" className="hover:text-primary transition-colors">9. Creator Monetization Program</a>
                  <a href="#billing" className="hover:text-primary transition-colors">10. Subscriptions and Billing</a>
                  <a href="#refunds" className="hover:text-primary transition-colors">11. Refund Policy</a>
                  <a href="#acceptable-use" className="hover:text-primary transition-colors">12. Acceptable Use Policy</a>
                  <a href="#ip-rights" className="hover:text-primary transition-colors">13. Intellectual Property Rights</a>
                  <a href="#user-content" className="hover:text-primary transition-colors">14. User Content and Licenses</a>
                  <a href="#dmca" className="hover:text-primary transition-colors">15. Copyright and DMCA Policy</a>
                  <a href="#privacy" className="hover:text-primary transition-colors">16. Privacy</a>
                  <a href="#third-party" className="hover:text-primary transition-colors">17. Third-Party Services</a>
                  <a href="#availability" className="hover:text-primary transition-colors">18. Service Availability and Support</a>
                  <a href="#modifications" className="hover:text-primary transition-colors">19. Modification of Services</a>
                  <a href="#termination" className="hover:text-primary transition-colors">20. Termination</a>
                  <a href="#disclaimers" className="hover:text-primary transition-colors">21. Disclaimers</a>
                  <a href="#liability" className="hover:text-primary transition-colors">22. Limitation of Liability</a>
                  <a href="#indemnification" className="hover:text-primary transition-colors">23. Indemnification</a>
                  <a href="#jurisdiction" className="hover:text-primary transition-colors">24. Jurisdiction-Specific Terms</a>
                  <a href="#disputes" className="hover:text-primary transition-colors">25. Dispute Resolution</a>
                  <a href="#general" className="hover:text-primary transition-colors">26. General Provisions</a>
                  <a href="#royalty-program" className="hover:text-primary transition-colors">27. Royalty Program</a>
                  <a href="#contact" className="hover:text-primary transition-colors">28. Contact Information</a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Policy Content */}
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
                  <Scale className="w-6 h-6 text-primary" />
                  1. Introduction and Acceptance
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.1 The Agreement</h3>
                    <p>These Terms of Service (&quot;Terms&quot; or &quot;Agreement&quot;) constitute a legally binding contract between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and AXSA INNOVATIONS LLP, a company incorporated under the laws of India, operating as &quot;BLVCK&quot; (&quot;BLVCK,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.2 Services Covered</h3>
                    <p>These Terms govern your access to and use of:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>The BLVCK mobile application (iOS and Android)</li>
                      <li>The BLVCK website and web application</li>
                      <li>BLVCK API and developer tools</li>
                      <li>All related services, features, content, and functionality (collectively, the &quot;Services&quot;)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.3 Acceptance of Terms</h3>
                    <p>By doing any of the following, you acknowledge that you have read, understood, and agree to be bound by these Terms:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Creating a BLVCK account</li>
                      <li>Downloading or installing the BLVCK application</li>
                      <li>Accessing or using any BLVCK Services</li>
                      <li>Clicking &quot;I Agree&quot; or similar acceptance mechanism</li>
                    </ul>
                    <p className="mt-2">If you are accepting these Terms on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.4 Additional Terms</h3>
                    <p>Certain features or services may be subject to additional terms, guidelines, or policies (&quot;Additional Terms&quot;). Such Additional Terms will be presented to you when you access those features. In the event of a conflict, Additional Terms shall prevail over these Terms for the specific feature or service.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">1.5 Changes to Terms</h3>
                    <p>We may modify these Terms at any time. We will provide notice of material changes by posting the updated Terms with a new &quot;Last Updated&quot; date, sending an email to your registered email address, and displaying a prominent notice within the application.</p>
                    <p className="mt-2">Material changes will become effective 30 days after notice, unless stated otherwise. Your continued use of the Services after the effective date constitutes acceptance of the modified Terms.</p>
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
                  <p><strong className="text-foreground">&quot;Account&quot;</strong> means your registered BLVCK user account.</p>
                  <p><strong className="text-foreground">&quot;Active Subscriber&quot;</strong> means a user who has unlocked a Channel at least 15 times within a calendar month under the Creator Monetization Program.</p>
                  <p><strong className="text-foreground">&quot;Channel&quot;</strong> means user-created content collections that can be accessed by other users through the unlock system.</p>
                  <p><strong className="text-foreground">&quot;Cloud Coins&quot;</strong> means the virtual currency used within BLVCK Services.</p>
                  <p><strong className="text-foreground">&quot;Content&quot;</strong> means any files, data, text, images, videos, audio, or other materials uploaded, stored, shared, or transmitted through the Services.</p>
                  <p><strong className="text-foreground">&quot;Creator&quot;</strong> means a user participating in the Creator Monetization Program.</p>
                  <p><strong className="text-foreground">&quot;Encrypted Content&quot;</strong> means Content that is encrypted using BLVCK&apos;s zero-knowledge encryption system.</p>
                  <p><strong className="text-foreground">&quot;Fair Usage Policy&quot; or &quot;FUP&quot;</strong> means our policy governing acceptable use of storage resources, as described in Section 6.4.</p>
                  <p><strong className="text-foreground">&quot;Intellectual Property Rights&quot;</strong> means all patent rights, copyright rights, moral rights, rights of publicity, trademark rights, trade dress rights, trade secret rights, and any other intellectual property rights.</p>
                  <p><strong className="text-foreground">&quot;Premium Plan&quot;</strong> means any paid subscription tier of BLVCK Services.</p>
                  <p><strong className="text-foreground">&quot;User Content&quot;</strong> means any Content that you upload, store, share, or transmit through the Services.</p>
                </div>
              </CardContent>
            </Card>

            {/* 3. Eligibility */}
            <Card variant="bordered" id="eligibility">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-primary" />
                  3. Eligibility
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.1 Age Requirements</h3>
                    <p>You must be at least 18 years old to use BLVCK. By using the Services, you represent and warrant that you meet this age requirement.</p>
                    <p className="mt-2">We do not knowingly collect information from or provide Services to anyone under 18 years of age. If we learn that we have collected personal information from a user under 18, we will delete the account and associated data.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.2 Legal Capacity</h3>
                    <p>You represent and warrant that you have the legal capacity to enter into a binding agreement in your jurisdiction.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.3 Compliance with Laws</h3>
                    <p>You represent and warrant that your use of the Services will comply with all applicable local, state, national, and international laws, rules, and regulations.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">3.4 Restrictions</h3>
                    <p>You may not use the Services if:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>You have previously been suspended or removed from the Services</li>
                      <li>You are prohibited from receiving the Services under applicable law</li>
                      <li>You are located in a country subject to comprehensive sanctions</li>
                      <li>You are on any government prohibited party list</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 4. Account Registration */}
            <Card variant="bordered" id="account">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  4. Account Registration and Security
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.1 Account Creation</h3>
                    <p>To access most features of BLVCK, you must create an account by providing a valid email address, a secure password, your name, and any other required information. You may also register using third-party authentication providers (such as Google or Apple Sign-In).</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.2 Account Information</h3>
                    <p>You agree to:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Provide accurate, current, and complete information during registration</li>
                      <li>Maintain and promptly update your account information</li>
                      <li>Keep your password confidential and secure</li>
                      <li>Not share your account credentials with any third party</li>
                      <li>Notify us immediately of any unauthorized access or security breach</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.3 Account Security</h3>
                    <p>You are solely responsible for all activities that occur under your account, maintaining the confidentiality of your login credentials, and any consequences resulting from your failure to maintain account security.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.4 One Account Per Person</h3>
                    <p>Unless expressly permitted, each individual may maintain only one personal account. Creating multiple accounts to circumvent restrictions, abuse promotions, or violate these Terms may result in termination of all associated accounts.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">4.5 Account Recovery</h3>
                    <p>If you lose access to your account, we will attempt to verify your identity before restoring access. Due to our zero-knowledge encryption, we cannot recover encrypted content if you lose your password and have not set up recovery options.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5. Service Description */}
            <Card variant="bordered" id="service-description">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Server className="w-6 h-6 text-primary" />
                  5. Service Description
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5.1 Cloud Storage</h3>
                    <p>BLVCK provides cloud storage services allowing you to upload, store, and organize files, access your files from multiple devices, share files and folders with others, and encrypt your private files using zero-knowledge encryption.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-success" />
                      5.2 Zero-Knowledge Encryption
                    </h3>
                    <p>Private files are encrypted using zero-knowledge encryption:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Files are encrypted on your device before upload</li>
                      <li>BLVCK does not have access to your encryption keys</li>
                      <li>We cannot view, access, or recover the contents of encrypted files</li>
                      <li>If you lose your password without recovery options, your encrypted data cannot be recovered</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5.3 Channels and Social Features</h3>
                    <p>BLVCK offers social features including creating and managing Channels, subscribing to and unlocking Channel content, and discovering content from other users.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5.4 Cloud Coins Economy</h3>
                    <p>BLVCK operates a virtual currency system where you can earn Cloud Coins through various activities, use Cloud Coins to unlock Channels and premium features, and purchase Cloud Coins through in-app purchases.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">5.5 Creator Monetization</h3>
                    <p>Eligible users may participate in the Creator Monetization Program to earn revenue from Channel subscriptions, track subscriber metrics and earnings, and receive payouts according to program terms.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 6. Service Plans */}
            <Card variant="bordered" id="plans">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-primary" />
                  6. Service Plans and Pricing
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">6.1 Free Plan</h3>
                    <p>BLVCK offers a free plan that includes up to 1 TB of storage, basic features as described in our documentation, and an advertisement-supported experience.</p>
                    <p className="mt-2">The free plan is provided at our discretion. We reserve the right to modify free plan features, storage limits, or availability with 30 days notice to affected users.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">6.2 Premium Plans</h3>
                    <p>Premium subscription plans offer extended storage capacity, ad-free experience, and additional features as described at time of purchase. Current pricing and features are available in the application and on our website.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">6.3 Pricing Changes</h3>
                    <p>We may change subscription prices at any time. Price changes will not affect current subscription periods, apply to renewals after the price change effective date, and be communicated at least 30 days before taking effect. You may cancel your subscription before the price change takes effect.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">6.4 Fair Usage Policy</h3>
                    <p>All storage plans, including &quot;unlimited&quot; plans, are subject to our Fair Usage Policy:</p>
                    <p className="font-medium text-foreground mt-3">Permitted Uses:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Personal file storage and backup</li>
                      <li>Storing photos, videos, and documents</li>
                      <li>Sharing content with friends and family</li>
                      <li>Creating and managing Channels</li>
                    </ul>
                    <p className="font-medium text-foreground mt-3">Prohibited Uses:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Operating as a public file hosting service</li>
                      <li>Reselling or redistributing storage</li>
                      <li>Cryptocurrency mining or plotting (including but not limited to Chia)</li>
                      <li>Storing content solely for the purpose of distribution via other platforms</li>
                      <li>Automated or bulk uploading that strains system resources</li>
                      <li>Any use that negatively impacts service performance for other users</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 7. Cloud Coins */}
            <Card variant="bordered" id="cloud-coins">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Coins className="w-6 h-6 text-primary" />
                  7. Cloud Coins Virtual Currency
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7.1 Nature of Cloud Coins</h3>
                    <p>Cloud Coins are a virtual currency for use within BLVCK Services:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Cloud Coins are a limited license to use a digital feature, not property</li>
                      <li>Cloud Coins have no monetary value outside the Services</li>
                      <li>Cloud Coins cannot be exchanged for cash, except through the Creator Monetization Program</li>
                      <li>Cloud Coins are non-transferable between accounts, except as specifically permitted</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7.2 Earning Cloud Coins</h3>
                    <p>You may earn Cloud Coins by watching rewarded advertisements, completing promotional offers, participating in special events, referral programs (when available), and other methods as we may introduce. Earned Cloud Coins are subject to verification and may be revoked if obtained fraudulently.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7.3 Purchasing Cloud Coins</h3>
                    <p>You may purchase Cloud Coins through in-app purchases. Prices are displayed at the time of purchase. Purchases are processed through the applicable app store (Apple App Store or Google Play).</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7.4 Using Cloud Coins</h3>
                    <p>Cloud Coins can be used to unlock Channel content, access premium features, and other purposes as we may introduce.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7.5 Expiration</h3>
                    <p>Earned Cloud Coins expire 12 months after acquisition. Purchased Cloud Coins do not expire while your account remains active. Upon account termination, all Cloud Coins are forfeited.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">7.6 No Refunds for Cloud Coins</h3>
                    <p>Except as required by applicable law or as described in Section 11 (Refund Policy), Cloud Coins purchases are final and non-refundable, unused Cloud Coins will not be refunded upon account closure, and we are not obligated to convert Cloud Coins to cash.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 8. Channels */}
            <Card variant="bordered" id="channels">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Tv className="w-6 h-6 text-primary" />
                  8. Channels and Content
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">8.1 Creating Channels</h3>
                    <p>Users may create Channels to share content. Channel names, descriptions, and thumbnails are public and not encrypted. You are responsible for all content in your Channels and must have the rights to share all Channel content.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">8.2 Channel Access and Unlocks</h3>
                    <p>Channels are accessed by spending Cloud Coins to &quot;unlock&quot; them. Each unlock provides temporary access (typically 12 hours). Access duration may vary and is displayed at the time of unlock. We do not guarantee permanent availability of any Channel content.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">8.3 Channel Content Guidelines</h3>
                    <p>Channel content must comply with our Acceptable Use Policy (Section 12). Prohibited content includes but is not limited to illegal content, infringing content, adult content involving minors, violent or hateful content, and spam or misleading content.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">8.4 Content Removal</h3>
                    <p>We reserve the right to remove Channel content that violates these Terms or applicable law. We may provide notice of removal, but are not obligated to do so in cases of serious violations.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 9. Creator Monetization */}
            <Card variant="bordered" id="creator">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  9. Creator Monetization Program
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.1 Program Overview</h3>
                    <p>The Creator Monetization Program allows eligible users to earn revenue from their Channels based on subscriber activity.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.2 Eligibility Requirements</h3>
                    <p>To participate, you must have an account in good standing, meet minimum subscriber thresholds, provide required legal and financial information, comply with all program policies, and be legally able to receive payments in your jurisdiction.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.3 Revenue Calculation</h3>
                    <p>Revenue is calculated based on the &quot;15-Unlock Rule&quot;: An &quot;Active Subscriber&quot; is a user with 15 or more unlocks of your Channel per month. Revenue is calculated based on Active Subscribers only. BLVCK&apos;s records regarding subscriber activity are final and binding for revenue calculations.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.4 Revenue Share</h3>
                    <p>The revenue share percentage is specified in your Creator agreement. BLVCK reserves the right to modify the revenue share with 30 days notice.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.5 Payouts</h3>
                    <p>Minimum payout threshold is as specified in Creator documentation. Payout frequency is monthly. Payout methods include bank transfer, UPI (India), or other methods as available. Payment processing time is up to 30 days after the end of each month.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.6 Tax Obligations</h3>
                    <p>You are responsible for providing accurate tax information, paying all applicable taxes on your earnings, and complying with tax reporting requirements in your jurisdiction. BLVCK may be required to withhold taxes or report earnings to tax authorities.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">9.7 Program Termination</h3>
                    <p>We may suspend or terminate your participation if you violate these Terms or program policies, engage in fraudulent activity, fail to maintain eligibility requirements, or request termination. Upon termination, you will receive any earned but unpaid revenue, less any amounts owed to BLVCK.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 10. Subscriptions and Billing */}
            <Card variant="bordered" id="billing">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-primary" />
                  10. Subscriptions and Billing
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10.1 Subscription Terms</h3>
                    <p>Premium subscriptions are offered on monthly (billed monthly), annual (billed annually at a discounted rate), or other periods as may be offered.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-warning/10 border border-warning/20">
                    <h3 className="font-semibold text-foreground mb-2">10.2 Auto-Renewal</h3>
                    <p><strong>SUBSCRIPTIONS AUTOMATICALLY RENEW UNLESS CANCELLED.</strong></p>
                    <p className="mt-2">Your subscription will automatically renew at the end of each billing period at the then-current price, unless you cancel before the renewal date.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10.3 Billing</h3>
                    <p>Subscription payments are processed by Apple App Store (for iOS users), Google Play Store (for Android users), or our direct payment processor (for web purchases). You authorize the applicable payment processor to charge your selected payment method.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10.4 Cancellation</h3>
                    <p>To cancel your subscription:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li><strong className="text-foreground">iOS:</strong> Settings &gt; [Your Name] &gt; Subscriptions &gt; BLVCK &gt; Cancel Subscription</li>
                      <li><strong className="text-foreground">Android:</strong> Google Play Store &gt; Menu &gt; Subscriptions &gt; BLVCK &gt; Cancel Subscription</li>
                      <li><strong className="text-foreground">Web:</strong> BLVCK Settings &gt; Subscription &gt; Cancel</li>
                    </ul>
                    <p className="mt-2">Cancellation takes effect at the end of the current billing period. You will retain access to Premium features until then.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10.5 Free Trials</h3>
                    <p>We may offer free trial periods. Trial eligibility is determined at our discretion. Payment information may be required to start a trial. If you do not cancel before the trial ends, your subscription will begin and you will be charged.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">10.6 Promotional Offers</h3>
                    <p>Promotional pricing is subject to eligibility requirements stated in the offer, limited duration as specified, and standard subscription terms after the promotional period.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 11. Refund Policy */}
            <Card variant="bordered" id="refunds" className="bg-warning/5 border-warning/20">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  11. Refund Policy
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div className="p-4 rounded-xl bg-warning/10 border border-warning/20">
                    <h3 className="font-semibold text-foreground mb-2">11.1 No Refunds Policy</h3>
                    <p><strong className="text-foreground">ALL PREMIUM PURCHASES ARE FINAL AND NON-REFUNDABLE.</strong></p>
                    <p className="mt-2">BLVCK does not provide refunds for any premium subscription purchases, Cloud Coin purchases, or any other paid services. By making a purchase, you acknowledge and agree that all sales are final.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                    <h3 className="font-semibold text-foreground mb-2">11.2 Try Before You Buy</h3>
                    <p>BLVCK provides a generous <strong className="text-foreground">free tier with 1 TB of storage</strong> that allows you to fully experience our service before making any purchase decision.</p>
                    <p className="mt-2">We encourage all users to:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Use the free service extensively before upgrading</li>
                      <li>Explore all features available in the free tier</li>
                      <li>Ensure BLVCK meets your needs before purchasing premium</li>
                      <li>Contact our support team with any questions before upgrading</li>
                    </ul>
                    <p className="mt-2">Since we provide free access to our core services, you have ample opportunity to evaluate BLVCK before committing to a paid subscription. This is why we maintain a strict no-refund policy.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">11.3 App Store Purchases</h3>
                    <p>For purchases made through Apple App Store or Google Play Store, BLVCK does not process refunds. Any refund requests must be directed to the respective app store and are subject to their policies:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Apple: https://support.apple.com/en-us/HT204084</li>
                      <li>Google: https://support.google.com/googleplay/answer/2479637</li>
                    </ul>
                    <p className="mt-2 text-sm">Note: BLVCK does not control or guarantee refunds through third-party app stores.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">11.4 Statutory Rights</h3>
                    <p>Your statutory rights under applicable consumer protection laws are not affected by this policy. EU/EEA/UK consumers may have a 14-day withdrawal right for digital content under certain conditions. See Section 24 for jurisdiction-specific rights.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">11.5 What Is Not Refundable</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Premium subscription fees (monthly or annual)</li>
                      <li>Cloud Coin purchases (used or unused)</li>
                      <li>Any in-app purchases</li>
                      <li>Partial subscription periods</li>
                      <li>Accounts terminated for Terms violations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 12. Acceptable Use Policy */}
            <Card variant="bordered" id="acceptable-use" className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Ban className="w-6 h-6 text-destructive" />
                  12. Acceptable Use Policy
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">12.1 General Conduct</h3>
                    <p>You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services in any way that violates applicable laws, to harm or harass others, to interfere with the Services, or to attempt unauthorized access.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">12.2 Prohibited Content</h3>
                    <p>You may not upload, store, share, or transmit any content that:</p>
                    <p className="font-medium text-foreground mt-2">Illegal Content:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Violates any applicable law or regulation</li>
                      <li>Constitutes child sexual abuse material (CSAM)</li>
                      <li>Promotes terrorism or violent extremism</li>
                      <li>Facilitates human trafficking</li>
                    </ul>
                    <p className="font-medium text-foreground mt-3">Harmful Content:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Contains malware, viruses, or harmful code</li>
                      <li>Is designed to phish or defraud others</li>
                      <li>Promotes self-harm or suicide</li>
                    </ul>
                    <p className="font-medium text-foreground mt-3">Infringing Content:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Infringes any intellectual property rights</li>
                      <li>Violates any person&apos;s privacy or publicity rights</li>
                      <li>Misappropriates trade secrets</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">12.3 Prohibited Activities</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Reverse engineer, decompile, or disassemble the Services</li>
                      <li>Circumvent any technological measures protecting the Services</li>
                      <li>Use automated systems (bots, scrapers) without permission</li>
                      <li>Resell or redistribute access to the Services</li>
                      <li>Use the Services for cryptocurrency mining or plotting</li>
                      <li>Manipulate the Cloud Coin system or Creator metrics</li>
                      <li>Create multiple accounts to abuse promotions</li>
                      <li>Impersonate others or misrepresent your affiliation</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                    <p><strong className="text-destructive">Warning:</strong> Violation of this policy may result in warnings, content removal, account suspension or termination, reporting to authorities, and legal action.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">12.5 Reporting Violations</h3>
                    <p>To report violations, contact abuse@blvck.in or use the in-app &quot;Report&quot; feature.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 13. Intellectual Property */}
            <Card variant="bordered" id="ip-rights">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  13. Intellectual Property Rights
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">13.1 BLVCK Intellectual Property</h3>
                    <p>BLVCK and its licensors retain all rights, title, and interest in the Services and all software, technology, and infrastructure, the BLVCK name, logo, and branding, all patents, trademarks, copyrights, and trade secrets, and all improvements, modifications, and derivative works.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">13.2 Limited License to Users</h3>
                    <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal, non-commercial purposes, download and install our mobile applications on your devices, and use the Services&apos; features as intended.</p>
                    <p className="mt-2">This license does not include the right to modify, adapt, or create derivative works, reverse engineer or access source code, or sublicense, sell, or transfer access.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">13.3 Feedback</h3>
                    <p>If you provide feedback, suggestions, or ideas about the Services, you grant us a perpetual, irrevocable, worldwide, royalty-free license to use the Feedback. We may implement Feedback without compensation or attribution.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 14. User Content */}
            <Card variant="bordered" id="user-content">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  14. User Content and Licenses
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">14.1 Your Ownership</h3>
                    <p>You retain all ownership rights in your User Content. BLVCK does not claim ownership of any User Content you upload or store.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">14.2 License to BLVCK</h3>
                    <p>By uploading User Content, you grant BLVCK a limited license to store, process, and transmit your Content (necessary to provide the Services), create backups and redundant copies, display Content to users you authorize, and use technical measures to protect your Content.</p>
                    <p className="mt-2">This license is non-exclusive, worldwide, royalty-free, limited to what is necessary to provide the Services, and terminable upon deletion of your Content or account.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">14.3 Channel Content License</h3>
                    <p>For Content you make available through Channels, you grant BLVCK a license to display, distribute, and make the Content available to users who unlock your Channel, and users who unlock your Channel a limited license to view the Content for personal use.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">14.4 Representations and Warranties</h3>
                    <p>You represent and warrant that you own or have the necessary rights to upload your User Content, your User Content does not infringe any third party&apos;s rights, your User Content complies with these Terms and applicable law, and you have obtained any necessary consents from individuals depicted in your Content.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 15. DMCA */}
            <Card variant="bordered" id="dmca">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  15. Copyright and DMCA Policy
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">15.1 Respect for Copyright</h3>
                    <p>BLVCK respects the intellectual property rights of others and expects users to do the same. We respond to notices of alleged copyright infringement in accordance with applicable law.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">15.2 DMCA Notice (United States)</h3>
                    <p>If you believe your copyrighted work has been infringed, please submit a notice containing:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Your physical or electronic signature</li>
                      <li>Identification of the copyrighted work(s) claimed to be infringed</li>
                      <li>Identification of the infringing material and its location</li>
                      <li>Your contact information (address, telephone, email)</li>
                      <li>A statement that you have a good faith belief the use is unauthorized</li>
                      <li>A statement, under penalty of perjury, that the information is accurate and you are authorized to act on behalf of the copyright owner</li>
                    </ul>
                    <div className="mt-3 p-3 rounded-lg bg-muted/50">
                      <p>Send DMCA notices to:</p>
                      <p>Email: dmca@blvck.in</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">15.3 Counter-Notification</h3>
                    <p>If you believe your Content was wrongly removed, you may submit a counter-notification containing your physical or electronic signature, identification of the removed material and its prior location, a statement under penalty of perjury that you have a good faith belief the material was removed by mistake, and consent to jurisdiction.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">15.4 Repeat Infringers</h3>
                    <p>We will terminate accounts of users who are repeat copyright infringers in appropriate circumstances.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">15.5 International Copyright</h3>
                    <p>For copyright claims outside the United States, please contact dmca@blvck.in with equivalent information under your local law.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 16. Privacy */}
            <Card variant="bordered" id="privacy">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  16. Privacy
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Your privacy is important to us. Our <NextLink href="/privacy-policy" className="gradient-link">Privacy Policy</NextLink> describes how we collect, use, and protect your personal information. By using the Services, you agree to our <NextLink href="/privacy-policy" className="gradient-link">Privacy Policy</NextLink>, which is incorporated into these Terms by reference.</p>
                  <p>Key privacy features:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Zero-knowledge encryption for private files</li>
                    <li>Data minimization practices</li>
                    <li>User rights regarding personal data</li>
                    <li>Transparent data processing</li>
                  </ul>
                  <p className="mt-2">Our Privacy Policy is available at: <NextLink href="/privacy-policy" className="gradient-link">Privacy Policy</NextLink></p>
                </div>
              </CardContent>
            </Card>

            {/* 17. Third-Party Services */}
            <Card variant="bordered" id="third-party">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Link className="w-6 h-6 text-primary" />
                  17. Third-Party Services
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">17.1 Third-Party Integrations</h3>
                    <p>The Services may integrate with or link to third-party services, including payment processors (Apple, Google, Stripe), authentication providers (Google, Apple Sign-In), analytics providers (Google Analytics, Firebase), advertising networks (Google AdMob, AppLovin), and cloud infrastructure providers (AWS, Google Cloud, Azure).</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">17.2 Third-Party Terms</h3>
                    <p>Your use of third-party services is subject to their respective terms and privacy policies. We are not responsible for third-party services, content, or practices.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">17.3 No Endorsement</h3>
                    <p>Links to or integration with third-party services do not constitute endorsement or responsibility for those services.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 18. Service Availability */}
            <Card variant="bordered" id="availability">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Server className="w-6 h-6 text-primary" />
                  18. Service Availability and Support
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">18.1 Availability</h3>
                    <p>We strive to maintain high service availability but do not guarantee uninterrupted access. The Services may be unavailable due to scheduled maintenance, unscheduled maintenance for critical issues, factors beyond our control, or security incidents.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">18.2 Service Level</h3>
                    <p>We do not offer formal Service Level Agreements (SLAs) for consumer accounts. Enterprise customers should contact us for custom arrangements.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">18.3 Support</h3>
                    <p>Support is available through email at support@blvck.in, in-app help center, and online documentation. Response times vary based on issue severity and support volume.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 19. Modification of Services */}
            <Card variant="bordered" id="modifications">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-primary" />
                  19. Modification of Services
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">19.1 Right to Modify</h3>
                    <p>We reserve the right to add, modify, or remove features, update pricing and plans, change service specifications, and discontinue the Services entirely.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">19.2 Notice of Changes</h3>
                    <p>For changes that materially reduce functionality, we will provide at least 30 days notice. You may cancel your subscription before the change takes effect. Prepaid amounts for discontinued services will be prorated and refunded.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">19.3 Discontinuation</h3>
                    <p>If we discontinue the Services entirely, we will provide at least 90 days notice. You will have the opportunity to download your data. Prepaid subscription amounts will be prorated and refunded.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 20. Termination */}
            <Card variant="bordered" id="termination">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-primary" />
                  20. Termination
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">20.1 Termination by You</h3>
                    <p>You may terminate your account at any time through account settings in the application or by contacting support@blvck.in. Upon termination, your right to access the Services ends immediately, you may download your data before termination (encrypted files require your password), and subscription fees are not refunded for partial periods (except as required by law).</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">20.2 Termination by BLVCK</h3>
                    <p><strong className="text-foreground">With Notice (14 days):</strong> For violation of these Terms (with opportunity to cure if reasonable), for extended periods of inactivity (12+ months), and for non-payment of fees.</p>
                    <p className="mt-2"><strong className="text-foreground">Without Notice:</strong> For severe or repeated violations of these Terms, for illegal activity, for activity that threatens the security or integrity of the Services, for activity that harms other users, and as required by law.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">20.3 Effect of Termination</h3>
                    <p>Upon termination, all licenses granted to you terminate, you lose access to stored Content and Cloud Coins, we may delete your data after a reasonable retention period (typically 30 days), and provisions that should survive termination will survive.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">20.4 Data Export</h3>
                    <p>Before termination, you may export your data. Unencrypted files can be downloaded directly. Encrypted files require your password to decrypt. Export features are available in account settings.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 21. Disclaimers */}
            <Card variant="bordered" id="disclaimers">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  21. Disclaimers
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">21.1 &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;</h3>
                    <p className="uppercase text-sm">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">21.2 Disclaimer of Warranties</h3>
                    <p className="uppercase text-sm">WE SPECIFICALLY DISCLAIM ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, RELIABILITY, OR COMPLETENESS, AND UNINTERRUPTED OR ERROR-FREE OPERATION.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">21.3 Content Disclaimer</h3>
                    <p className="uppercase text-sm">WE DO NOT WARRANT THAT USER CONTENT IS ACCURATE, COMPLETE, OR RELIABLE, THAT CHANNEL CONTENT MEETS ANY PARTICULAR STANDARD, THAT THE SERVICES WILL MEET YOUR REQUIREMENTS, OR THAT ERRORS WILL BE CORRECTED.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">21.5 Data Loss Disclaimer</h3>
                    <p className="uppercase text-sm">WHILE WE IMPLEMENT SECURITY MEASURES, WE CANNOT GUARANTEE AGAINST DATA LOSS. YOU ARE RESPONSIBLE FOR MAINTAINING BACKUPS OF IMPORTANT DATA.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">21.6 Limitations on Disclaimers</h3>
                    <p className="uppercase text-sm">SOME JURISDICTIONS DO NOT ALLOW EXCLUSION OF CERTAIN WARRANTIES. IN SUCH JURISDICTIONS, THE ABOVE DISCLAIMERS APPLY TO THE MAXIMUM EXTENT PERMITTED BY LAW. SEE SECTION 24 FOR JURISDICTION-SPECIFIC TERMS.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 22. Limitation of Liability */}
            <Card variant="bordered" id="liability">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertOctagon className="w-6 h-6 text-primary" />
                  22. Limitation of Liability
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">22.1 Exclusion of Certain Damages</h3>
                    <p className="uppercase text-sm">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BLVCK AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES, AND LICENSORS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, LOSS OF PROFITS, REVENUE, OR DATA, BUSINESS INTERRUPTION, OR COST OF SUBSTITUTE SERVICES, REGARDLESS OF THE THEORY OF LIABILITY.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">22.2 Liability Cap</h3>
                    <p className="uppercase text-sm">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL CUMULATIVE LIABILITY FOR ALL CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF: THE AMOUNT YOU PAID TO BLVCK IN THE 12 MONTHS PRECEDING THE CLAIM; OR ONE HUNDRED US DOLLARS ($100 USD).</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">22.3 Exceptions</h3>
                    <p>THE LIMITATIONS IN THIS SECTION DO NOT APPLY TO: LIABILITY ARISING FROM OUR GROSS NEGLIGENCE OR WILLFUL MISCONDUCT, LIABILITY THAT CANNOT BE LIMITED BY APPLICABLE LAW, YOUR INDEMNIFICATION OBLIGATIONS, AND YOUR VIOLATION OF OUR INTELLECTUAL PROPERTY RIGHTS.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">22.5 Basis of the Bargain</h3>
                    <p className="uppercase text-sm">THE LIMITATIONS OF LIABILITY IN THESE TERMS ARE A FUNDAMENTAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN YOU AND BLVCK. THE SERVICES WOULD NOT BE PROVIDED WITHOUT SUCH LIMITATIONS.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 23. Indemnification */}
            <Card variant="bordered" id="indemnification">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  23. Indemnification
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">23.1 Your Indemnification Obligations</h3>
                    <p>To the maximum extent permitted by applicable law, you agree to defend, indemnify, and hold harmless BLVCK, its parent company, affiliates, licensors, service providers, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms, your User Content, your use of the Services, your violation of any third party&apos;s rights, and your violation of any applicable law.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">23.2 Indemnification Process</h3>
                    <p>We will promptly notify you of any claim subject to indemnification, provide reasonable cooperation in the defense, and allow you to control the defense and settlement (subject to our approval for settlements that affect our rights). We reserve the right to assume exclusive defense and control of any matter subject to indemnification, at your expense.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">23.3 Limitations</h3>
                    <p>This indemnification obligation does not apply to the extent that a claim arises from BLVCK&apos;s gross negligence or willful misconduct. Some jurisdictions do not allow indemnification provisions; in such jurisdictions, this section applies to the maximum extent permitted by law.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 24. Jurisdiction-Specific Terms */}
            <Card variant="bordered" id="jurisdiction">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  24. Jurisdiction-Specific Terms
                </h2>
                <div className="text-muted-foreground space-y-6">
                  <p>The following terms apply to users in specific jurisdictions and supplement or modify the general Terms:</p>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24.1 European Economic Area, Switzerland, and United Kingdom</h3>
                    <p>If you are a consumer in the EEA, Switzerland, or UK:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Nothing in these Terms affects your statutory consumer rights</li>
                      <li>You have the right to withdraw from digital content purchases within 14 days</li>
                      <li>Mandatory arbitration provisions do not apply to you</li>
                      <li>You may bring claims in the courts of your country of residence</li>
                      <li>You may use the European Commission&apos;s Online Dispute Resolution platform: https://ec.europa.eu/consumers/odr</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24.2 California, United States</h3>
                    <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) as described in our <NextLink href="/privacy-policy" className="gradient-link">Privacy Policy</NextLink>.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24.3 Australia</h3>
                    <p>If you are an Australian consumer, our goods and services come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and compensation for reasonably foreseeable loss or damage.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24.4 India</h3>
                    <p>If you are in India, nothing in these Terms excludes rights under the Consumer Protection Act, 2019. Disputes may be filed with consumer forums as provided under applicable law. These Terms are governed by the laws of India.</p>
                    <div className="mt-2 p-3 rounded-lg bg-muted/50">
                      <p className="font-medium text-foreground">Grievance Officer:</p>
                      <p>As required under Indian law, our Grievance Officer can be contacted at: grievance@blvck.in</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24.5 Brazil</h3>
                    <p>If you are in Brazil, these Terms do not limit rights under the Brazilian Consumer Defense Code (CDC). You may bring actions in the courts of your domicile.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24.6 Canada</h3>
                    <p>If you are in Canada, provincial consumer protection laws may provide additional rights. Class action waivers may not be enforceable in all provinces.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24.7 Other Jurisdictions</h3>
                    <p>If you are in a jurisdiction with consumer protection laws that provide rights beyond those in these Terms, your statutory rights are not affected. In case of conflict, mandatory local law prevails. Please contact legal@blvck.in with questions about your jurisdiction.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 25. Dispute Resolution */}
            <Card variant="bordered" id="disputes">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Gavel className="w-6 h-6 text-primary" />
                  25. Dispute Resolution
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">25.1 Informal Resolution</h3>
                    <p>Before initiating formal dispute resolution, you agree to contact us at disputes@blvck.in and attempt to resolve the dispute informally for at least 30 days.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">25.2 Binding Arbitration (Where Permitted)</h3>
                    <p className="font-medium text-foreground">FOR USERS IN JURISDICTIONS WHERE ARBITRATION AGREEMENTS ARE ENFORCEABLE:</p>
                    <p className="mt-2">You and BLVCK agree that any dispute, controversy, or claim arising out of or relating to these Terms or the Services shall be resolved through binding arbitration, except for claims within small claims court jurisdiction, claims for injunctive relief regarding intellectual property, and disputes excluded by applicable law.</p>
                    <p className="mt-2">Arbitration shall be conducted under the Arbitration and Conciliation Act, 1996 (India). The seat and venue shall be Thane, Maharashtra, India. The language shall be English. The arbitrator&apos;s decision shall be final and binding.</p>
                    <p className="mt-2 font-medium text-foreground">Class Action Waiver:</p>
                    <p className="uppercase text-sm">YOU AND BLVCK AGREE THAT DISPUTES WILL BE RESOLVED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.</p>
                    <p className="mt-2">This arbitration agreement does not apply to users in the EEA, UK, or other jurisdictions where such agreements are not enforceable against consumers.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">25.3 Judicial Forum</h3>
                    <p>For disputes not subject to arbitration, or where arbitration is not enforceable: Exclusive jurisdiction is in courts located in Thane, Maharashtra, India. Exception: Users in jurisdictions with mandatory consumer forum rights may bring claims in their local courts.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">25.4 Time Limitation</h3>
                    <p>Any claim must be brought within one (1) year after the cause of action arises, except where prohibited by applicable law.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 26. General Provisions */}
            <Card variant="bordered" id="general">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" />
                  26. General Provisions
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">26.1 Governing Law</h3>
                    <p>Except as otherwise specified in Section 24, these Terms are governed by the laws of India. The United Nations Convention on Contracts for the International Sale of Goods does not apply.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">26.2 Entire Agreement</h3>
                    <p>These Terms, together with our <NextLink href="/privacy-policy" className="gradient-link">Privacy Policy</NextLink> and any Additional Terms, constitute the entire agreement between you and BLVCK regarding the Services and supersede all prior agreements and understandings.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">26.3 Severability</h3>
                    <p>If any provision of these Terms is found to be unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable. If modification is not possible, the provision will be severed. The remaining provisions will continue in full force and effect.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">26.4 Waiver</h3>
                    <p>Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other provision. Any waiver must be in writing and signed by an authorized representative.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">26.5 Assignment</h3>
                    <p>You may not assign or transfer these Terms or your rights without our prior written consent. We may assign these Terms without restriction. Any attempted assignment in violation of this section is void.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">26.6 Force Majeure</h3>
                    <p>We are not liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, riots, embargoes, acts of government, labor disputes, internet or telecommunications failures, or cyberattacks.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">26.7 Notices</h3>
                    <p>Notices to you may be sent to your registered email address or posted within the application. Notices to BLVCK must be sent to legal@blvck.in.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">26.10 Export Compliance</h3>
                    <p>You agree to comply with all applicable export control laws and regulations. You represent that you are not located in a country subject to comprehensive sanctions and are not on any government prohibited party list.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">26.12 Survival</h3>
                    <p>The following sections survive termination: Definitions, Intellectual Property Rights, User Content and Licenses, Disclaimers, Limitation of Liability, Indemnification, Dispute Resolution, and General Provisions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 27. Royalty Program Terms */}
            <Card variant="bordered" id="royalty-program">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Crown className="w-6 h-6 text-primary" />
                  27. Royalty Program Terms &amp; Conditions
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">27.1 Program Overview</h3>
                    <p>The BLVCK Royalty Program allows eligible premium users to earn a percentage-based royalty for referring new users to BLVCK. Royalty is earned when referred users purchase a BLVCK Premium subscription at $49.99/month. This is a lifetime program — royalty earnings continue for as long as both the referrer and referred user maintain their accounts and subscriptions.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">27.2 Eligibility</h3>
                    <p>The Royalty Program is exclusively available to BLVCK Premium subscribers. Free users are not eligible to earn royalty. To begin earning, you must have at least 10 referred users who have converted to premium. If you cancel or downgrade your premium subscription, all future royalty payouts will be suspended until your premium membership is reactivated.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">27.3 Referral Code &amp; Mapping</h3>
                    <p>Each user is assigned a unique referral link and referral code accessible within the BLVCK app. A new user must enter the referral code during the signup process to be permanently mapped under the referrer&apos;s account. This mapping is irreversible and lasts for the lifetime of both accounts. Referral codes cannot be applied retroactively after account creation. Only one referral code can be used per account.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">27.4 Royalty Tiers</h3>
                    <p>Royalty percentages are determined by the total number of referred premium users and are structured as follows:</p>
                    <div className="mt-2 space-y-1">
                      <p>• <strong>Silver (10 – 1,000 referrals):</strong> 10% royalty ($4.99 per user per month)</p>
                      <p>• <strong>Gold (1,001 – 10,000 referrals):</strong> 15% royalty ($7.50 per user per month)</p>
                      <p>• <strong>Platinum (10,001 – 50,000 referrals):</strong> 20% royalty ($10.00 per user per month)</p>
                      <p>• <strong>Diamond (50,001+ referrals):</strong> 25% royalty ($12.50 per user per month)</p>
                    </div>
                    <p className="mt-2">Tier upgrades are automatic and retroactive — when you reach a new tier, the higher percentage applies to all your referred users, not just new ones.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">27.5 Earning &amp; Credit Mechanics</h3>
                    <p>Royalty is automatically credited to your Creator Payout page within the BLVCK app on each premium purchase by a referred user. Additionally, 200 BLVCK coins are automatically credited to your account for every successful referral signup, regardless of whether the referred user converts to premium. Every premium purchase counts — including re-subscriptions after cancellation. This is not a one-time commission; it is a recurring royalty for the lifetime of the referred user&apos;s subscription activity.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">27.6 Privacy &amp; Zero-Knowledge Policy</h3>
                    <p>In accordance with BLVCK&apos;s zero-knowledge encryption architecture, referrers cannot track, view, or identify their referred users. You will not have access to the names, email addresses, or any personal information of the users you refer. All credits (coins and royalty payouts) are automated by the system. This policy exists to protect the privacy of all BLVCK users equally and is non-negotiable.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">27.7 Account Cancellation &amp; Payout Eligibility</h3>
                    <p>If the referrer cancels or permanently deletes their BLVCK premium account, all future royalty payouts will cease immediately. Pending payouts up to the date of cancellation will still be processed. Referred users remain mapped to the original referrer — however, no payouts will be issued to an inactive or deleted account. Re-subscribing to premium will reactivate royalty earnings for future purchases only; payouts missed during the inactive period are not retroactively compensated.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">27.8 Fraud &amp; Abuse</h3>
                    <p>BLVCK employs advanced monitoring systems to detect fraudulent referral activity including but not limited to: self-referrals, bot-generated signups, fake accounts, coordinated abuse, and incentivized signups that violate platform guidelines. Any account found engaging in fraudulent activity will have their royalty earnings permanently forfeited, and their account may be suspended or terminated at BLVCK&apos;s sole discretion without prior notice.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">27.9 Modification &amp; Termination</h3>
                    <p>BLVCK reserves the right to modify, suspend, or terminate the Royalty Program at any time with 30 days prior notice to participants. Any changes to royalty percentages or tier structures will apply prospectively and will not affect earnings already credited. In the event of program termination, all pending payouts will be honored.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">27.10 Tax Obligations</h3>
                    <p>Royalty earnings may be subject to applicable taxes in your jurisdiction. You are solely responsible for reporting and paying any taxes owed on your royalty income. BLVCK may issue tax documentation as required by law. By participating in the program, you acknowledge your obligation to comply with all applicable tax laws.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 28. Contact Information */}
            <Card variant="bordered" id="contact">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  28. Contact Information
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">BLVCK Legal Team</h3>
                    <p>AXSA INNOVATIONS LLP</p>
                    <p>SS-1/501 2ND FLR, SECTOR-2 NR MSEB OFFICE, Thane, 400709, Maharashtra, India</p>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                      <p>General Support: support@blvck.in</p>
                      <p>Legal Inquiries: legal@blvck.in</p>
                      <p>Billing Issues: billing@blvck.in</p>
                      <p>Abuse Reports: abuse@blvck.in</p>
                      <p>DMCA/Copyright: dmca@blvck.in</p>
                      <p>Disputes: disputes@blvck.in</p>
                      <p>Privacy: privacy@blvck.in</p>
                      <p>Grievance Officer (India): grievance@blvck.in</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* End Note */}
            <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
              <p>End of Terms of Service</p>
              <p className="mt-2">By using BLVCK, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
