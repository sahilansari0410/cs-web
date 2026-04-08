"use client";

import { motion } from "framer-motion";
import NextLink from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import {
  Shield,
  Lock,
  Eye,
  Server,
  Globe,
  Mail,
  Users,
  FileText,
  Database,
  Scale,
  CreditCard,
  Share2,
  Clock,
  UserCheck,
  ShieldCheck,
  Baby,
  Cpu,
  Cookie,
  Link,
  RefreshCw,
  Phone,
  MapPin,
  AlertTriangle,
  Check,
  X
} from "lucide-react";

export default function PrivacyPolicy() {
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
              <Shield className="w-3.5 h-3.5" />
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy is fundamental to everything we do at BLVCK. This policy explains how we protect your data.
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
          {/* Privacy at a Glance */}
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
                  Privacy at a Glance
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-success" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Your Files Are Private</p>
                      <p className="text-sm text-muted-foreground">We use zero-knowledge encryption. We cannot see, read, or access your private files.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-success" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Global Data Distribution</p>
                      <p className="text-sm text-muted-foreground">Your encrypted files are fragmented and distributed across multiple servers worldwide.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-success" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">We Do Not Sell Your Data</p>
                      <p className="text-sm text-muted-foreground">We do not sell your personal information to third parties or data brokers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-success" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Your Rights Matter</p>
                      <p className="text-sm text-muted-foreground">You have rights regarding your data, including access, correction, deletion, and portability.</p>
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
                  <a href="#introduction" className="hover:text-primary transition-colors">1. Introduction</a>
                  <a href="#definitions" className="hover:text-primary transition-colors">2. Definitions</a>
                  <a href="#information-collected" className="hover:text-primary transition-colors">3. Information We Collect</a>
                  <a href="#legal-basis" className="hover:text-primary transition-colors">4. Legal Basis for Processing</a>
                  <a href="#how-we-use" className="hover:text-primary transition-colors">5. How We Use Your Information</a>
                  <a href="#advertising" className="hover:text-primary transition-colors">6. Advertising and Third-Party Services</a>
                  <a href="#data-sharing" className="hover:text-primary transition-colors">7. Data Sharing and Disclosure</a>
                  <a href="#international-transfers" className="hover:text-primary transition-colors">8. International Data Transfers</a>
                  <a href="#data-retention" className="hover:text-primary transition-colors">9. Data Retention</a>
                  <a href="#privacy-rights" className="hover:text-primary transition-colors">10. Your Privacy Rights</a>
                  <a href="#security" className="hover:text-primary transition-colors">11. Security Measures</a>
                  <a href="#children" className="hover:text-primary transition-colors">12. Children&apos;s Privacy</a>
                  <a href="#automated" className="hover:text-primary transition-colors">13. Automated Decision-Making</a>
                  <a href="#cookies" className="hover:text-primary transition-colors">14. Cookies and Tracking</a>
                  <a href="#third-party-links" className="hover:text-primary transition-colors">15. Third-Party Links</a>
                  <a href="#changes" className="hover:text-primary transition-colors">16. Changes to This Policy</a>
                  <a href="#contact" className="hover:text-primary transition-colors">17. Contact Information</a>
                  <a href="#addenda" className="hover:text-primary transition-colors">18. Jurisdiction-Specific Addenda</a>
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
                  <FileText className="w-6 h-6 text-primary" />
                  1. Introduction
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    This Privacy Policy (&quot;Policy&quot;) describes how AXSA INNOVATIONS LLP, operating as &quot;BLVCK&quot; (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), collects, uses, processes, shares, and protects your personal information when you use our services.
                  </p>
                  <p>This Policy applies to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The BLVCK mobile application (iOS and Android)</li>
                    <li>The BLVCK website (blvck.in and related domains)</li>
                    <li>BLVCK API and developer services</li>
                    <li>All related services, features, and content (collectively, the &quot;Services&quot;)</li>
                  </ul>
                  <p>
                    By creating an account, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with this Policy, please do not use our Services.
                  </p>
                  <p>
                    This Policy should be read alongside our <NextLink href="/terms" className="gradient-link">Terms of Service</NextLink>, which govern your use of the Services.
                  </p>
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
                <div className="text-muted-foreground space-y-4">
                  <p>For the purposes of this Policy:</p>
                  <ul className="space-y-3">
                    <li><strong className="text-foreground">&quot;Personal Data&quot; or &quot;Personal Information&quot;</strong> means any information relating to an identified or identifiable natural person, including but not limited to name, email address, device identifiers, and usage data.</li>
                    <li><strong className="text-foreground">&quot;Processing&quot;</strong> means any operation performed on Personal Data, including collection, storage, use, disclosure, or deletion.</li>
                    <li><strong className="text-foreground">&quot;Data Controller&quot;</strong> means the entity that determines the purposes and means of processing Personal Data. AXSA INNOVATIONS LLP is the Data Controller for information collected through our Services.</li>
                    <li><strong className="text-foreground">&quot;Data Processor&quot;</strong> means an entity that processes Personal Data on behalf of the Data Controller.</li>
                    <li><strong className="text-foreground">&quot;Data Subject&quot;</strong> means the individual to whom Personal Data relates.</li>
                    <li><strong className="text-foreground">&quot;Zero-Knowledge Encryption&quot;</strong> means an encryption method where the service provider does not have access to the encryption keys and cannot decrypt user data.</li>
                    <li><strong className="text-foreground">&quot;Sensitive Personal Data&quot;</strong> means Personal Data revealing racial or ethnic origin, political opinions, religious beliefs, health data, biometric data, or data concerning sex life or sexual orientation.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 3. Information We Collect */}
            <Card variant="bordered" id="information-collected">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-primary" />
                  3. Information We Collect
                </h2>
                <div className="text-muted-foreground space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">3.1 Information You Provide Directly</h3>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Account Registration:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Password (cryptographically hashed; we never store plain text passwords)</li>
                      <li>Phone number (optional, for account recovery and two-factor authentication)</li>
                      <li>Profile picture (optional)</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Creator and Monetization Program:</h4>
                    <p>If you join our Creator Monetization Program, we collect:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Legal name as it appears on government-issued identification</li>
                      <li>Bank account details (account number, IFSC/SWIFT code, bank name)</li>
                      <li>UPI ID (for Indian users)</li>
                      <li>Tax identification numbers (PAN for India, SSN/EIN for US, VAT for EU, etc.)</li>
                      <li>Payout address</li>
                      <li>Tax residency information</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Payment Information:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Payment method details (processed by third-party payment processors)</li>
                      <li>Transaction history</li>
                      <li>Billing address</li>
                      <li>Purchase records for in-app purchases and subscriptions</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">User-Generated Content:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Channel names, descriptions, and thumbnails (public, not encrypted)</li>
                      <li>Support communications and feedback</li>
                      <li>Survey responses</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">3.2 Information Collected Automatically</h3>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Device and Technical Information:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Device type, model, and manufacturer</li>
                      <li>Operating system and version</li>
                      <li>Unique device identifiers (where permitted by law and platform policies)</li>
                      <li>IP address</li>
                      <li>Browser type and version (for web access)</li>
                      <li>Language and timezone settings</li>
                      <li>Mobile network information</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Usage Information:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Storage usage and file sizes</li>
                      <li>Upload and download frequency</li>
                      <li>Feature usage patterns</li>
                      <li>Session duration and frequency</li>
                      <li>App crashes and performance data</li>
                      <li>Interaction with advertisements</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Monetization Metrics (for Creators):</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Number of Channel Unlocks</li>
                      <li>Subscriber acquisition and retention rates</li>
                      <li>Duration of channel access by subscribers</li>
                      <li>User engagement metrics</li>
                      <li>Revenue attribution data</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mt-4 mb-2">Location Information:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Approximate location based on IP address</li>
                      <li>Country and region for compliance purposes</li>
                      <li>We do not collect precise GPS location</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">3.3 Information from Third Parties</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Authentication providers (if you sign in with Google, Apple, or other providers)</li>
                      <li>Payment processors (transaction confirmations)</li>
                      <li>Advertising partners (aggregated campaign performance)</li>
                      <li>Analytics providers (aggregated usage statistics)</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                    <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-success" />
                      3.4 Zero-Knowledge Encryption (Private Files)
                    </h3>
                    <p className="mb-3">Your private files (photos, videos, documents) uploaded to personal storage are protected by end-to-end, zero-knowledge encryption.</p>

                    <h4 className="font-semibold text-foreground mb-2">What This Means:</h4>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                      <li>Your files are encrypted on your device before upload</li>
                      <li>Only you possess the decryption keys</li>
                      <li>BLVCK employees, engineers, contractors, and automated systems cannot view, read, or access the contents of your encrypted files</li>
                      <li>If you lose your password and recovery options, we cannot recover your encrypted data</li>
                      <li>Even in response to legal requests, we cannot provide decrypted file contents because we do not have the capability to decrypt them</li>
                    </ul>

                    <h4 className="font-semibold text-foreground mb-2">What Is NOT Encrypted:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Account information (name, email)</li>
                      <li>Channel metadata (names, descriptions, thumbnails, subscriber counts)</li>
                      <li>Usage logs and metrics</li>
                      <li>Payment and transaction records</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 4. Legal Basis for Processing */}
            <Card variant="bordered" id="legal-basis">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  4. Legal Basis for Processing (GDPR)
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>For users in the European Economic Area, United Kingdom, and other jurisdictions requiring a legal basis, we process your Personal Data under the following legal grounds:</p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground">4.1 Contractual Necessity (Article 6(1)(b) GDPR)</h3>
                      <p>Processing necessary to perform our contract with you:</p>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>Account creation and management</li>
                        <li>Providing storage services</li>
                        <li>Processing payments and subscriptions</li>
                        <li>Creator payouts</li>
                        <li>Customer support</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground">4.2 Legitimate Interests (Article 6(1)(f) GDPR)</h3>
                      <p>Processing necessary for our legitimate interests, balanced against your rights:</p>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>Fraud prevention and security monitoring</li>
                        <li>Service improvement and analytics</li>
                        <li>Enforcement of Terms of Service</li>
                        <li>Network and information security</li>
                        <li>Business operations and administration</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground">4.3 Legal Obligation (Article 6(1)(c) GDPR)</h3>
                      <p>Processing necessary to comply with legal requirements:</p>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>Tax reporting and financial regulations</li>
                        <li>Responding to valid legal processes</li>
                        <li>Regulatory compliance</li>
                        <li>Record-keeping requirements</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground">4.4 Consent (Article 6(1)(a) GDPR)</h3>
                      <p>Processing based on your explicit consent:</p>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>Marketing communications</li>
                        <li>Personalized advertising</li>
                        <li>Non-essential cookies and tracking</li>
                        <li>Sharing data with third parties for their own purposes</li>
                      </ul>
                      <p className="mt-2">You may withdraw consent at any time without affecting the lawfulness of processing based on consent before withdrawal.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5. How We Use Your Information */}
            <Card variant="bordered" id="how-we-use">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Server className="w-6 h-6 text-primary" />
                  5. How We Use Your Information
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">5.1 Service Provision and Operations</h3>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Create and manage your account</li>
                      <li>Provide cloud storage services</li>
                      <li>Process uploads, downloads, and file sharing</li>
                      <li>Manage storage limits and quotas</li>
                      <li>Enable Channel creation and subscription features</li>
                      <li>Process payments and subscriptions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">5.2 Cloud Coin Economy</h3>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Track Cloud Coin balance and transactions</li>
                      <li>Process coin purchases and redemptions</li>
                      <li>Manage coin expiration</li>
                      <li>Prevent fraud and abuse in the coin system</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">5.3 Creator Monetization</h3>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Calculate Creator earnings based on the 15-Unlock Rule</li>
                      <li>Verify Active Subscriber metrics</li>
                      <li>Process monthly revenue payments</li>
                      <li>Generate earnings reports</li>
                      <li>Comply with tax reporting requirements</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">5.4 Security and Fraud Prevention</h3>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Detect and prevent unauthorized access</li>
                      <li>Identify suspicious activity patterns</li>
                      <li>Prevent abuse of free storage (e.g., cryptocurrency plotting)</li>
                      <li>Enforce Fair Usage Policy</li>
                      <li>Protect against spam, malware, and illegal content</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">5.5 Service Improvement</h3>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Analyze usage patterns to improve features</li>
                      <li>Conduct research and development</li>
                      <li>Test new features and updates</li>
                      <li>Fix bugs and optimize performance</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">5.6 Communications</h3>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Send service-related notifications</li>
                      <li>Provide customer support</li>
                      <li>Send marketing communications (with consent)</li>
                      <li>Notify you of policy changes</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">5.7 Legal and Compliance</h3>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Comply with applicable laws and regulations</li>
                      <li>Respond to legal requests and court orders</li>
                      <li>Protect our legal rights and interests</li>
                      <li>Enforce our Terms of Service</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 6. Advertising */}
            <Card variant="bordered" id="advertising">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  6. Advertising and Third-Party Services
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">6.1 Advertising Partners</h3>
                    <p>To provide free storage, we display advertisements through the following partners:</p>

                    <div className="mt-3 p-3 rounded-lg bg-muted/50">
                      <p className="font-medium text-foreground">Google AdMob:</p>
                      <p className="text-sm">Privacy Policy: https://policies.google.com/privacy</p>
                      <p className="text-sm">Opt-out: https://adssettings.google.com</p>
                    </div>

                    <div className="mt-3 p-3 rounded-lg bg-muted/50">
                      <p className="font-medium text-foreground">AppLovin:</p>
                      <p className="text-sm">Privacy Policy: https://www.applovin.com/privacy/</p>
                      <p className="text-sm">Opt-out available in app settings</p>
                    </div>

                    <p className="mt-3">These partners may collect:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Advertising identifiers (Google Advertising ID, IDFA)</li>
                      <li>Approximate location based on IP address</li>
                      <li>Device information</li>
                      <li>Ad interaction data (views, clicks, conversions)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">6.2 Rewarded Advertisements</h3>
                    <p>When you watch advertisements to earn Cloud Coins:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>We track ad completion to verify rewards</li>
                      <li>Partners confirm successful ad views</li>
                      <li>Reward credits are processed automatically</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">6.3 Analytics Services</h3>
                    <p className="font-medium text-foreground mt-2">Google Analytics and Firebase:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>App performance monitoring</li>
                      <li>Crash reporting and diagnostics</li>
                      <li>User retention analysis</li>
                      <li>Feature usage statistics</li>
                    </ul>
                    <p className="text-sm mt-2">Privacy Policy: https://policies.google.com/privacy</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">6.4 Controlling Advertising</h3>
                    <p>You can limit ad tracking through:</p>
                    <div className="mt-2 space-y-2">
                      <p><strong className="text-foreground">iOS:</strong> Settings &gt; Privacy &amp; Security &gt; Tracking &gt; Toggle off &quot;Allow Apps to Request to Track&quot;</p>
                      <p><strong className="text-foreground">Android:</strong> Settings &gt; Google &gt; Ads &gt; Delete Advertising ID</p>
                    </div>
                    <p className="mt-2 text-sm">Note: Opting out does not eliminate ads; it reduces ad personalization.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 7. Data Sharing */}
            <Card variant="bordered" id="data-sharing">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Share2 className="w-6 h-6 text-primary" />
                  7. Data Sharing and Disclosure
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="font-semibold text-success">We do not sell your Personal Information.</p>
                  <p>We share data only in these circumstances:</p>

                  <div>
                    <h3 className="font-semibold text-foreground">7.1 Service Providers</h3>
                    <p>We engage trusted third parties to perform services on our behalf:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Cloud infrastructure providers (for hosting encrypted data shards)</li>
                      <li>Payment processors</li>
                      <li>Customer support platforms</li>
                      <li>Analytics providers</li>
                      <li>Email service providers</li>
                    </ul>
                    <p className="mt-2">All service providers are contractually bound to protect your data and use it only for specified purposes.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">7.2 Legal Requirements</h3>
                    <p>We may disclose information when required by law:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Valid court orders or subpoenas</li>
                      <li>Government or regulatory requests</li>
                      <li>Law enforcement investigations involving illegal content</li>
                      <li>Protection of safety or rights</li>
                    </ul>
                    <p className="mt-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <strong className="text-foreground">Important:</strong> Even when legally compelled, we cannot provide decrypted file contents because we do not possess decryption keys.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">7.3 Business Transfers</h3>
                    <p>In the event of a merger, acquisition, bankruptcy, or sale of assets:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Your information may be transferred to the acquiring entity</li>
                      <li>We will notify you before your data becomes subject to a different privacy policy</li>
                      <li>You will have the opportunity to delete your account before transfer</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">7.4 With Your Consent</h3>
                    <p>We may share information with third parties when you explicitly consent.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">7.5 Aggregated or De-Identified Data</h3>
                    <p>We may share aggregated, anonymized, or de-identified data that cannot reasonably identify you for research, analytics, or business purposes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 8. International Data Transfers */}
            <Card variant="bordered" id="international-transfers">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-primary" />
                  8. International Data Transfers
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">8.1 Global Sharding Architecture</h3>
                    <p>BLVCK uses distributed infrastructure for security and reliability. Your encrypted files are:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Split into fragments (shards)</li>
                      <li>Encrypted individually</li>
                      <li>Distributed across servers in multiple countries</li>
                      <li>Replicated for redundancy</li>
                    </ul>
                    <p className="mt-2">Due to this architecture, file fragments may reside in India, United States, European Union, Singapore, or other locations simultaneously. The exact location of all fragments at any moment cannot be determined.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">8.2 Transfer Mechanisms</h3>
                    <p>For transfers from the European Economic Area, United Kingdom, or Switzerland:</p>

                    <p className="font-medium text-foreground mt-3">Standard Contractual Clauses (SCCs):</p>
                    <p>We use European Commission-approved SCCs for transfers to countries without adequacy decisions.</p>

                    <p className="font-medium text-foreground mt-3">Adequacy Decisions:</p>
                    <p>Where applicable, we rely on adequacy decisions recognizing adequate protection in the recipient country.</p>

                    <p className="font-medium text-foreground mt-3">Supplementary Measures:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Zero-knowledge encryption ensures data remains protected regardless of location</li>
                      <li>Encrypted data cannot be accessed by local authorities or providers</li>
                      <li>Technical measures prevent unauthorized access</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">8.3 Your Acknowledgment</h3>
                    <p>By using BLVCK, you acknowledge and agree that:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Your data is transferred globally as a security feature</li>
                      <li>File fragments may reside in multiple jurisdictions simultaneously</li>
                      <li>Encryption protects your data regardless of physical location</li>
                      <li>This distributed architecture enhances, rather than diminishes, your privacy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 9. Data Retention */}
            <Card variant="bordered" id="data-retention">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  9. Data Retention
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>We retain your data only as long as necessary for the purposes described:</p>

                  <div>
                    <h3 className="font-semibold text-foreground">9.1 Active Accounts</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Account information: Duration of account existence</li>
                      <li>Encrypted files: Until you delete them or your account</li>
                      <li>Usage logs: 12 months (rolling)</li>
                      <li>Payment records: Duration of account plus retention period</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">9.2 Deleted Accounts</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Private encrypted files: Permanently deleted within 30 days</li>
                      <li>Backup metadata: Retained in immutable backups for up to 90 days for disaster recovery, then deleted</li>
                      <li>Account information: Deleted within 30 days, except as required for legal compliance</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">9.3 Legal and Financial Records</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Transaction history: 7 years (Indian tax law compliance)</li>
                      <li>Creator payout records: 7 years</li>
                      <li>Tax documentation: As required by applicable law (typically 7-10 years)</li>
                      <li>Legal hold data: Duration of legal matter plus required retention</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">9.4 Aggregated Data</h3>
                    <p>De-identified, aggregated data may be retained indefinitely for analytics and research.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 10. Your Privacy Rights */}
            <Card variant="bordered" id="privacy-rights">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-primary" />
                  10. Your Privacy Rights
                </h2>
                <div className="text-muted-foreground space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground">10.1 Rights for All Users</h3>
                    <p>Regardless of your location, you have the following rights:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li><strong className="text-foreground">Right to Access:</strong> Request a copy of the Personal Data we hold about you.</li>
                      <li><strong className="text-foreground">Right to Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                      <li><strong className="text-foreground">Right to Deletion:</strong> Request deletion of your account and associated data.</li>
                      <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Withdraw consent for processing based on consent.</li>
                      <li><strong className="text-foreground">Right to Complain:</strong> Lodge a complaint with us or relevant authorities.</li>
                    </ul>
                    <p className="mt-3">To exercise these rights, contact us at privacy@blvck.in or use the in-app settings.</p>
                    <p className="mt-2"><strong className="text-foreground">Response Time:</strong> We will respond to requests within 30 days. Complex requests may require an extension of up to 60 additional days, with notification.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">10.2 European Economic Area (GDPR)</h3>
                    <p>If you are in the EEA, you have additional rights under the General Data Protection Regulation:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li><strong className="text-foreground">Right to Rectification (Article 16):</strong> Correct inaccurate Personal Data.</li>
                      <li><strong className="text-foreground">Right to Erasure (Article 17):</strong> Request deletion (&quot;right to be forgotten&quot;) when data is no longer necessary, you withdraw consent, or processing is unlawful.</li>
                      <li><strong className="text-foreground">Right to Restriction (Article 18):</strong> Restrict processing while we verify accuracy or assess legitimate grounds.</li>
                      <li><strong className="text-foreground">Right to Data Portability (Article 20):</strong> Receive your data in a structured, machine-readable format and transmit it to another controller.</li>
                      <li><strong className="text-foreground">Right to Object (Article 21):</strong> Object to processing based on legitimate interests, including profiling and direct marketing.</li>
                      <li><strong className="text-foreground">Rights Related to Automated Decision-Making (Article 22):</strong> Not be subject to decisions based solely on automated processing that significantly affect you, with exceptions.</li>
                    </ul>
                    <p className="mt-2">Right to Lodge a Complaint: File a complaint with your local Data Protection Authority. A list of EEA DPAs is available at: https://edpb.europa.eu/about-edpb/about-edpb/members_en</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">10.3 United Kingdom (UK GDPR)</h3>
                    <p>UK residents have equivalent rights under the UK General Data Protection Regulation and Data Protection Act 2018.</p>
                    <div className="mt-2 p-3 rounded-lg bg-muted/50">
                      <p><strong className="text-foreground">Supervisory Authority:</strong> Information Commissioner&apos;s Office (ICO)</p>
                      <p>Website: https://ico.org.uk</p>
                      <p>Phone: 0303 123 1113</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">10.4 California Residents (CCPA/CPRA)</h3>
                    <p>If you are a California resident, you have rights under the California Consumer Privacy Act and California Privacy Rights Act:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li><strong className="text-foreground">Right to Know:</strong> Request disclosure of categories and specific pieces of Personal Information collected, sources, purposes, and third parties.</li>
                      <li><strong className="text-foreground">Right to Delete:</strong> Request deletion of Personal Information, subject to exceptions.</li>
                      <li><strong className="text-foreground">Right to Correct:</strong> Request correction of inaccurate Personal Information.</li>
                      <li><strong className="text-foreground">Right to Opt-Out of Sale/Sharing:</strong> We do not sell Personal Information. We share data with advertising partners for cross-context behavioral advertising. You may opt out via email or in-app settings.</li>
                      <li><strong className="text-foreground">Right to Limit Use of Sensitive Personal Information:</strong> Request limitation on use of sensitive categories.</li>
                      <li><strong className="text-foreground">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your rights.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">10.5 Brazil (LGPD)</h3>
                    <p>If you are in Brazil, you have rights under the Lei Geral de Protecao de Dados:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Confirmation of processing</li>
                      <li>Access to your data</li>
                      <li>Correction of incomplete or inaccurate data</li>
                      <li>Anonymization, blocking, or deletion of unnecessary data</li>
                      <li>Data portability</li>
                      <li>Information about sharing with third parties</li>
                      <li>Information about the possibility of denying consent</li>
                      <li>Revocation of consent</li>
                    </ul>
                    <p className="mt-2">Supervisory Authority: Autoridade Nacional de Protecao de Dados (ANPD) - https://www.gov.br/anpd</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">10.6 India (DPDP Act 2023)</h3>
                    <p>If you are in India, you have rights under the Digital Personal Data Protection Act, 2023:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li><strong className="text-foreground">Right to Access:</strong> Obtain a summary of your Personal Data and processing activities.</li>
                      <li><strong className="text-foreground">Right to Correction and Erasure:</strong> Request correction of inaccurate data and erasure of data no longer necessary.</li>
                      <li><strong className="text-foreground">Right to Grievance Redressal:</strong> Access our grievance redressal mechanism.</li>
                      <li><strong className="text-foreground">Right to Nominate:</strong> Nominate another individual to exercise your rights in case of death or incapacity.</li>
                    </ul>
                    <div className="mt-3 p-3 rounded-lg bg-muted/50">
                      <p className="font-medium text-foreground">Grievance Officer:</p>
                      <p>Email: grievance@blvck.in</p>
                      <p>Response Time: We will respond within 7 days of receiving your request.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">10.7 Other Jurisdictions</h3>
                    <p>We respect privacy rights in all jurisdictions where we operate. If your jurisdiction provides additional rights not listed above, please contact us at privacy@blvck.in, and we will address your request in accordance with applicable law.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 11. Security Measures */}
            <Card variant="bordered" id="security">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  11. Security Measures
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>We implement comprehensive security measures to protect your data:</p>

                  <div>
                    <h3 className="font-semibold text-foreground">11.1 Encryption</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>End-to-end, zero-knowledge encryption for private files</li>
                      <li>AES-256 encryption standard for data at rest</li>
                      <li>TLS 1.3 encryption for data in transit</li>
                      <li>Client-side encryption before upload</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">11.2 Password Security</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Passwords are salted and hashed using industry-standard algorithms</li>
                      <li>We never store passwords in plain text</li>
                      <li>Support for two-factor authentication (2FA)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">11.3 Access Controls</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Strict role-based access controls for employees</li>
                      <li>Administrative tools show only metadata, never file contents</li>
                      <li>Regular access reviews and audits</li>
                      <li>Logging of all administrative access</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">11.4 Infrastructure Security</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Distributed architecture prevents single points of failure</li>
                      <li>Regular security assessments and penetration testing</li>
                      <li>DDoS protection</li>
                      <li>Intrusion detection systems</li>
                      <li>Regular backups with encryption</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">11.5 Organizational Measures</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Employee security training</li>
                      <li>Background checks for employees with data access</li>
                      <li>Confidentiality agreements</li>
                      <li>Incident response procedures</li>
                      <li>Regular security policy reviews</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">11.6 Incident Response</h3>
                    <p>In case of a data breach:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>We will investigate immediately</li>
                      <li>Affected users will be notified as required by law</li>
                      <li>Relevant authorities will be notified within required timeframes</li>
                      <li>We will take steps to mitigate harm</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 12. Children's Privacy */}
            <Card variant="bordered" id="children" className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Baby className="w-6 h-6 text-destructive" />
                  12. Children&apos;s Privacy
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p><strong className="text-foreground">BLVCK is not intended for children.</strong></p>
                  <p>Our age requirements:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Minimum age: 18 years old globally</li>
                    <li>We do not knowingly collect Personal Information from children under 18</li>
                  </ul>

                  <p>If we become aware that a user is under 18:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>We will immediately suspend the account</li>
                    <li>All associated data will be deleted</li>
                    <li>The user will be notified (if possible)</li>
                  </ul>

                  <p>If you believe a child has created an account:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Contact us immediately at privacy@blvck.in</li>
                    <li>Provide any information that may help identify the account</li>
                  </ul>

                  <p>Parents and guardians may contact us to request deletion of any data inadvertently collected from a child.</p>
                </div>
              </CardContent>
            </Card>

            {/* 13. Automated Decision-Making */}
            <Card variant="bordered" id="automated">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-primary" />
                  13. Automated Decision-Making
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>We use automated processing in limited circumstances:</p>

                  <div>
                    <h3 className="font-semibold text-foreground">13.1 Fraud Detection</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Automated systems monitor for suspicious activity</li>
                      <li>Patterns indicating abuse, bot farms, or manipulation are flagged</li>
                      <li>Human review occurs before account actions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">13.2 Content Moderation</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Automated scanning of Channel metadata (not encrypted files) for policy violations</li>
                      <li>Hash-matching for known illegal content (CSAM, terrorism)</li>
                      <li>Human review before content removal</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">13.3 Fair Usage Enforcement</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Automated monitoring of storage patterns</li>
                      <li>Detection of prohibited uses (cryptocurrency plotting, illegal file sharing)</li>
                      <li>Human review before enforcement actions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">13.4 Your Rights</h3>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Request human review of automated decisions that significantly affect you</li>
                      <li>Express your point of view</li>
                      <li>Contest decisions</li>
                    </ul>
                    <p className="mt-2">Automated decisions do not apply to encrypted file contents, which we cannot access.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 14. Cookies */}
            <Card variant="bordered" id="cookies">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Cookie className="w-6 h-6 text-primary" />
                  14. Cookies and Tracking Technologies
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">14.1 Website Cookies</h3>
                    <p>Our website uses cookies and similar technologies:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li><strong className="text-foreground">Essential Cookies:</strong> Required for website functionality, security, and authentication. Cannot be disabled.</li>
                      <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors use our website. Can be disabled.</li>
                      <li><strong className="text-foreground">Advertising Cookies:</strong> Used by advertising partners to show relevant ads. Can be disabled.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">14.2 Mobile App</h3>
                    <p>Our mobile app uses:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Advertising identifiers (can be reset or disabled in device settings)</li>
                      <li>Analytics SDKs</li>
                      <li>Crash reporting tools</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">14.3 Managing Cookies</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong className="text-foreground">Browser Settings:</strong> Most browsers allow you to refuse or delete cookies.</li>
                      <li><strong className="text-foreground">Our Cookie Banner:</strong> Use our cookie consent tool to manage preferences.</li>
                      <li><strong className="text-foreground">Device Settings:</strong>
                        <ul className="list-disc pl-6 mt-1">
                          <li>iOS: Settings &gt; Privacy &amp; Security &gt; Tracking</li>
                          <li>Android: Settings &gt; Google &gt; Ads</li>
                        </ul>
                      </li>
                    </ul>
                    <p className="mt-2"><strong className="text-foreground">Do Not Track:</strong> We currently do not respond to Do Not Track signals, as there is no industry standard for compliance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 15. Third-Party Links */}
            <Card variant="bordered" id="third-party-links">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Link className="w-6 h-6 text-primary" />
                  15. Third-Party Links
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>Our Services may contain links to third-party websites, applications, or services. This Privacy Policy does not apply to those third parties.</p>
                  <p>We encourage you to review the privacy policies of any third-party services before providing your information.</p>
                  <p>We are not responsible for the privacy practices of third parties.</p>
                </div>
              </CardContent>
            </Card>

            {/* 16. Changes to This Policy */}
            <Card variant="bordered" id="changes">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  16. Changes to This Policy
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>We may update this Privacy Policy periodically.</p>

                  <div>
                    <h3 className="font-semibold text-foreground">16.1 Notification of Changes</h3>
                    <p className="font-medium text-foreground mt-2">Material Changes:</p>
                    <p>We will notify you via:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Email to your registered address</li>
                      <li>In-app notification</li>
                      <li>Prominent notice on our website</li>
                    </ul>
                    <p className="font-medium text-foreground mt-3">Minor Changes:</p>
                    <p>Updated policy will be posted with a new &quot;Last Updated&quot; date.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">16.2 Your Choices</h3>
                    <p>After notification of material changes:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Review the updated policy</li>
                      <li>If you disagree, you may delete your account before the effective date</li>
                      <li>Continued use after the effective date constitutes acceptance</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">16.3 Version History</h3>
                    <p>We maintain a version history of this policy. Previous versions are available upon request.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 17. Contact Information */}
            <Card variant="bordered" id="contact">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  17. Contact Information
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices:</p>

                  <div className="p-4 rounded-xl bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">General Inquiries</h3>
                    <p className="font-medium text-foreground">BLVCK Privacy Team</p>
                    <p>AXSA INNOVATIONS LLP</p>
                    <p>SS-1/501 2ND FLR, SECTOR-2 NR MSEB OFFICE, Thane, 400709, Maharashtra, India</p>
                    <div className="mt-3">
                      <p>Email: privacy@blvck.in</p>
                      <p>General Support: support@blvck.in</p>
                      <p>Legal Inquiries: legal@blvck.in</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Grievance Officer (India)</h3>
                    <p>As required under Indian law:</p>
                    <p>Email: grievance@blvck.in</p>
                    <p>Response Time: Within 7 days</p>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Data Protection Officer</h3>
                    <p>For GDPR-related inquiries:</p>
                    <p>Email: dpo@blvck.in</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 18. Jurisdiction-Specific Addenda */}
            <Card variant="bordered" id="addenda">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  18. Jurisdiction-Specific Addenda
                </h2>
                <div className="text-muted-foreground space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground">18.1 Addendum for European Economic Area Users</h3>
                    <div className="mt-2 p-3 rounded-lg bg-muted/50">
                      <p><strong className="text-foreground">Data Controller:</strong></p>
                      <p>AXSA INNOVATIONS LLP</p>
                      <p>SS-1/501 2ND FLR, SECTOR-2 NR MSEB OFFICE, Thane, 400709, Maharashtra, India</p>
                    </div>
                    <p className="mt-3">This addendum supplements the main Privacy Policy for users in the EEA. In case of conflict, this addendum prevails for EEA users.</p>
                    <p className="mt-2"><strong className="text-foreground">Cross-Border Transfers:</strong> We transfer data outside the EEA using Standard Contractual Clauses approved by the European Commission. Copies are available upon request.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">18.2 Addendum for California Residents</h3>
                    <p>This addendum provides additional disclosures required under CCPA/CPRA.</p>
                    <p className="mt-2"><strong className="text-foreground">Financial Incentives:</strong> We do not offer financial incentives for the collection of Personal Information.</p>
                    <p className="mt-2"><strong className="text-foreground">Shine the Light:</strong> California Civil Code Section 1798.83 permits California residents to request information about disclosure of Personal Information to third parties for direct marketing. We do not disclose Personal Information for third-party direct marketing.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">18.3 Addendum for Brazilian Users</h3>
                    <p><strong className="text-foreground">Data Controller:</strong> AXSA INNOVATIONS LLP</p>
                    <p className="mt-2"><strong className="text-foreground">International Transfers:</strong> We transfer data internationally using contractual clauses that ensure equivalent protection to LGPD requirements.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">18.4 Addendum for Indian Users</h3>
                    <p><strong className="text-foreground">Data Fiduciary:</strong> AXSA INNOVATIONS LLP</p>
                    <p className="mt-2">This addendum supplements the main Privacy Policy in accordance with the Digital Personal Data Protection Act, 2023, and applicable rules.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* End Note */}
            <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
              <p>End of Privacy Policy</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
