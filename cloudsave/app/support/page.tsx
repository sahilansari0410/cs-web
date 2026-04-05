"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  HelpCircle,
  Mail,
  MessageCircle,
  FileText,
  Shield,
  Upload,
  Download,
  CreditCard,
  Users,
  Lock,
  ChevronRight,
  ChevronDown,
  Clock,
  CheckCircle,
  Search,
  X,
  DollarSign,
  Eye,
  Database,
  Scale,
  Coins,
  Tv,
  Ban,
  RefreshCw,
  UserCheck,
  AlertTriangle,
  Settings,
  Cookie,
  Baby,
  Wallet,
  Calculator,
  Zap,
  BookOpen,
  ExternalLink,
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  content: string[];
  relatedLink?: string;
  relatedLinkLabel?: string;
}

const articles: Article[] = [
  // Privacy & Security
  {
    id: "zero-knowledge-encryption",
    title: "How Zero-Knowledge Encryption Works",
    description: "Understand how your files are protected with end-to-end encryption.",
    category: "Privacy & Security",
    icon: Lock,
    content: [
      "Your private files are encrypted on your device before they leave it using AES-256 encryption.",
      "Only you possess the decryption keys - CloudSave cannot access your encrypted files.",
      "Even in response to legal requests, we cannot provide decrypted file contents because we do not have the capability to decrypt them.",
      "If you lose your password and recovery options, we cannot recover your encrypted data.",
    ],
    relatedLink: "/privacy-policy#information-collected",
    relatedLinkLabel: "Read Privacy Policy",
  },
  {
    id: "data-collection",
    title: "What Data Does CloudSave Collect?",
    description: "Learn about the information we collect and how it's used.",
    category: "Privacy & Security",
    icon: Database,
    content: [
      "Account information: name, email, phone (optional), profile picture (optional).",
      "Device and technical information: device type, OS, IP address, app version.",
      "Usage information: storage usage, upload/download frequency, feature usage patterns.",
      "For Creators: payout details, tax information, monetization metrics.",
      "Note: Channel metadata (names, descriptions, thumbnails) is NOT encrypted and is publicly visible.",
    ],
    relatedLink: "/privacy-policy#information-collected",
    relatedLinkLabel: "View Full Details",
  },
  {
    id: "your-privacy-rights",
    title: "Your Privacy Rights",
    description: "Know your rights regarding your personal data.",
    category: "Privacy & Security",
    icon: UserCheck,
    content: [
      "Right to Access: Request a copy of the personal data we hold about you.",
      "Right to Correction: Request correction of inaccurate or incomplete data.",
      "Right to Deletion: Request deletion of your account and associated data.",
      "Right to Data Portability: Receive your data in a structured, machine-readable format.",
      "Contact privacy@cloudsave.org to exercise your rights. We respond within 30 days.",
    ],
    relatedLink: "/privacy-policy#privacy-rights",
    relatedLinkLabel: "Learn More",
  },
  {
    id: "advertising-tracking",
    title: "Advertising and Tracking",
    description: "How we use ads and how to control tracking.",
    category: "Privacy & Security",
    icon: Eye,
    content: [
      "Free users see ads through Google AdMob and AppLovin to support free storage.",
      "You can limit ad tracking: iOS (Settings > Privacy > Tracking), Android (Settings > Google > Ads).",
      "Opting out doesn't eliminate ads; it reduces ad personalization.",
      "Premium subscribers enjoy an ad-free experience.",
    ],
    relatedLink: "/privacy-policy#advertising",
    relatedLinkLabel: "Read More",
  },
  {
    id: "cookies-policy",
    title: "Cookies and Tracking Technologies",
    description: "How we use cookies on our website and app.",
    category: "Privacy & Security",
    icon: Cookie,
    content: [
      "Essential Cookies: Required for website functionality and security. Cannot be disabled.",
      "Analytics Cookies: Help us understand how visitors use our website. Can be disabled.",
      "Advertising Cookies: Used by partners to show relevant ads. Can be disabled.",
      "Manage preferences through your browser settings or our cookie consent tool.",
    ],
    relatedLink: "/privacy-policy#cookies",
    relatedLinkLabel: "Cookie Policy",
  },
  // Getting Started
  {
    id: "create-account",
    title: "Creating Your CloudSave Account",
    description: "Step-by-step guide to getting started.",
    category: "Getting Started",
    icon: Users,
    content: [
      "Download CloudSave from the App Store (iOS) or Google Play (Android).",
      "Sign up with your email address or use Google/Apple Sign-In.",
      "Create a secure password - we never store passwords in plain text.",
      "Verify your email address to activate your account.",
      "You must be at least 18 years old to use CloudSave.",
    ],
    relatedLink: "/terms#account",
    relatedLinkLabel: "Account Terms",
  },
  {
    id: "free-plan-features",
    title: "Free Plan: What's Included?",
    description: "Everything you get with the free tier.",
    category: "Getting Started",
    icon: Zap,
    content: [
      "1 TB of cloud storage - truly unlimited for personal use.",
      "Zero-knowledge encryption for your private files.",
      "Access from any device (iOS, Android, Web).",
      "Create and subscribe to Channels.",
      "Ad-supported experience - watch ads to earn Cloud Coins.",
      "Note: Free plan features may be modified with 30 days notice.",
    ],
    relatedLink: "/terms#plans",
    relatedLinkLabel: "Plan Details",
  },
  {
    id: "upload-files",
    title: "How to Upload Files",
    description: "Upload photos, videos, and documents to CloudSave.",
    category: "Getting Started",
    icon: Upload,
    content: [
      "Tap the + button in the app to upload new files.",
      "Select files from your device's gallery or file manager.",
      "Files are encrypted on your device before uploading.",
      "Large files are automatically split and distributed across servers.",
      "Track upload progress in the app - you can pause and resume anytime.",
    ],
  },
  {
    id: "download-files",
    title: "Downloading Your Files",
    description: "Access your files anytime, anywhere.",
    category: "Getting Started",
    icon: Download,
    content: [
      "Navigate to the file you want to download.",
      "Tap on the file and select 'Download'.",
      "Your file will be decrypted and saved to your device.",
      "Downloaded files are available offline.",
      "You can also share download links with others (for unencrypted content).",
    ],
  },
  // Billing & Subscriptions
  {
    id: "premium-plans",
    title: "Premium Subscription Plans",
    description: "Learn about our premium offerings.",
    category: "Billing & Subscriptions",
    icon: CreditCard,
    content: [
      "Premium plans offer extended storage, ad-free experience, and additional features.",
      "Monthly and annual billing options available (annual saves more).",
      "Subscriptions auto-renew unless cancelled before the renewal date.",
      "Cancel anytime through your device settings or app.",
      "You retain Premium access until the end of your billing period.",
    ],
    relatedLink: "/terms#billing",
    relatedLinkLabel: "Billing Terms",
  },
  {
    id: "refund-policy",
    title: "Refund Policy",
    description: "Important information about refunds.",
    category: "Billing & Subscriptions",
    icon: RefreshCw,
    content: [
      "All premium purchases are final and non-refundable.",
      "We offer a generous free tier (1 TB) to try before you buy.",
      "For App Store/Google Play purchases, contact them directly for refunds.",
      "Your statutory rights under consumer protection laws are not affected.",
      "EU/UK consumers may have a 14-day withdrawal right for digital content.",
    ],
    relatedLink: "/terms#refunds",
    relatedLinkLabel: "Full Refund Policy",
  },
  {
    id: "cancel-subscription",
    title: "How to Cancel Your Subscription",
    description: "Step-by-step cancellation guide.",
    category: "Billing & Subscriptions",
    icon: X,
    content: [
      "iOS: Settings > [Your Name] > Subscriptions > CloudSave > Cancel",
      "Android: Google Play Store > Menu > Subscriptions > CloudSave > Cancel",
      "Web: CloudSave Settings > Subscription > Cancel",
      "Cancellation takes effect at the end of your current billing period.",
      "You keep Premium features until the period ends.",
    ],
    relatedLink: "/terms#billing",
    relatedLinkLabel: "More Info",
  },
  {
    id: "payment-methods",
    title: "Accepted Payment Methods",
    description: "How to pay for CloudSave Premium.",
    category: "Billing & Subscriptions",
    icon: Wallet,
    content: [
      "iOS: Apple Pay, credit/debit cards via App Store.",
      "Android: Google Pay, credit/debit cards, carrier billing via Play Store.",
      "Web: Credit/debit cards, regional payment methods.",
      "India: UPI, net banking, and major cards supported.",
      "Payments are processed securely by Apple, Google, or Stripe.",
    ],
  },
  // Cloud Coins
  {
    id: "what-are-cloud-coins",
    title: "What Are Cloud Coins?",
    description: "Understanding CloudSave's virtual currency.",
    category: "Cloud Coins",
    icon: Coins,
    content: [
      "Cloud Coins are virtual currency used within CloudSave.",
      "Use them to unlock Channel content and access premium features.",
      "They have no monetary value outside CloudSave.",
      "Cloud Coins cannot be exchanged for cash (except through Creator Program).",
      "Earned coins expire after 12 months; purchased coins don't expire.",
    ],
    relatedLink: "/terms#cloud-coins",
    relatedLinkLabel: "Cloud Coins Terms",
  },
  {
    id: "earn-cloud-coins",
    title: "How to Earn Cloud Coins",
    description: "Free ways to get Cloud Coins.",
    category: "Cloud Coins",
    icon: Zap,
    content: [
      "Watch rewarded advertisements in the app.",
      "Complete promotional offers when available.",
      "Participate in special events and campaigns.",
      "Refer friends (when referral program is available).",
      "Earned coins are subject to verification and fraud checks.",
    ],
  },
  {
    id: "purchase-cloud-coins",
    title: "Purchasing Cloud Coins",
    description: "Buy Cloud Coins for instant access.",
    category: "Cloud Coins",
    icon: CreditCard,
    content: [
      "Purchase Cloud Coins through in-app purchases.",
      "Prices are displayed at the time of purchase.",
      "Purchases are processed through App Store or Google Play.",
      "Purchased coins do not expire while your account is active.",
      "All purchases are final and non-refundable.",
    ],
  },
  // Channels
  {
    id: "what-are-channels",
    title: "What Are Cloud Channels?",
    description: "Discover content from creators.",
    category: "Cloud Channels",
    icon: Tv,
    content: [
      "Channels are creator-managed content collections.",
      "Creators share photos, videos, and files through their Channels.",
      "Subscribe to Channels to access exclusive content.",
      "Unlock Channels using Cloud Coins or by watching ads.",
      "Each unlock grants 12 hours of access.",
    ],
    relatedLink: "/terms#channels",
    relatedLinkLabel: "Channel Terms",
  },
  {
    id: "unlock-channels",
    title: "How to Unlock Channels",
    description: "Access Channel content you love.",
    category: "Cloud Channels",
    icon: Lock,
    content: [
      "Find a Channel you want to access.",
      "Tap 'Unlock' and choose: spend Cloud Coins or watch an ad.",
      "Once unlocked, you get 12 hours of full access.",
      "After 12 hours, the Channel re-locks automatically.",
      "Unlock again anytime to regain access.",
    ],
    relatedLink: "/monetization-policy#access-mechanics",
    relatedLinkLabel: "Learn More",
  },
  {
    id: "create-channel",
    title: "Creating Your Own Channel",
    description: "Start sharing content with subscribers.",
    category: "Cloud Channels",
    icon: Users,
    content: [
      "Go to your profile and tap 'Create Channel'.",
      "Add a name, description, and profile picture.",
      "Upload content to share with subscribers.",
      "Note: Channel metadata is public and NOT encrypted.",
      "Build your subscriber base to qualify for monetization.",
    ],
    relatedLink: "/monetization-policy#channel-creation",
    relatedLinkLabel: "Creator Guide",
  },
  // Creator Monetization
  {
    id: "monetization-eligibility",
    title: "Monetization Program Eligibility",
    description: "Requirements to earn from your Channel.",
    category: "Creator Monetization",
    icon: DollarSign,
    content: [
      "Premium Users: 1,000+ subscribers, 90 days active, Premium subscription.",
      "Free Users: 10,000+ subscribers, 180 days active, manual application required.",
      "Apply at support@cloudsave.org (free users).",
      "Premium users are automatically notified when eligible.",
      "Maintain requirements to stay in the program.",
    ],
    relatedLink: "/monetization-policy#eligibility",
    relatedLinkLabel: "Full Requirements",
  },
  {
    id: "15-unlock-rule",
    title: "The 15-Unlock Rule Explained",
    description: "How creator revenue is calculated.",
    category: "Creator Monetization",
    icon: Calculator,
    content: [
      "Revenue is based on 'Active Subscribers' only.",
      "A subscriber becomes 'Active' by unlocking your Channel 15+ times per month.",
      "Subscribers with fewer than 15 unlocks don't generate revenue.",
      "Total subscriber count doesn't determine earnings.",
      "Formula: Monthly Earnings = Active Subscribers × Revenue Per Active Subscriber.",
    ],
    relatedLink: "/monetization-policy#revenue",
    relatedLinkLabel: "Revenue Details",
  },
  {
    id: "creator-payouts",
    title: "Creator Payouts",
    description: "How and when you get paid.",
    category: "Creator Monetization",
    icon: Wallet,
    content: [
      "Minimum payout threshold: $50 USD (or local equivalent).",
      "Earnings below threshold roll over to the next month.",
      "Payouts processed by the 15th of each month for previous month.",
      "Payment methods: Wire transfer, bank transfer, UPI, AirTM, USDT, Bitcoin.",
      "Creators keep 100% of their earnings - CloudSave takes 0%.",
    ],
    relatedLink: "/monetization-policy#payment",
    relatedLinkLabel: "Payment Terms",
  },
  {
    id: "creator-taxes",
    title: "Tax Obligations for Creators",
    description: "Understanding your tax responsibilities.",
    category: "Creator Monetization",
    icon: FileText,
    content: [
      "You are responsible for reporting earnings to tax authorities.",
      "Provide accurate tax information (W-9, W-8BEN, PAN, etc.).",
      "CloudSave may withhold taxes as required by law (TDS in India, backup withholding in US).",
      "Annual earnings statements and tax documents available in Creator Dashboard.",
      "Consult a qualified tax professional for advice.",
    ],
    relatedLink: "/monetization-policy#tax",
    relatedLinkLabel: "Tax Details",
  },
  // Account & Security
  {
    id: "password-recovery",
    title: "Password Recovery",
    description: "Regain access to your account.",
    category: "Account & Security",
    icon: Lock,
    content: [
      "Tap 'Forgot Password' on the login screen.",
      "Enter your registered email address.",
      "Check your email for a reset link (check spam folder).",
      "Create a new secure password.",
      "IMPORTANT: If you lose your password AND recovery options, encrypted files cannot be recovered.",
    ],
  },
  {
    id: "two-factor-auth",
    title: "Two-Factor Authentication",
    description: "Add an extra layer of security.",
    category: "Account & Security",
    icon: Shield,
    content: [
      "Enable 2FA in Settings > Security > Two-Factor Authentication.",
      "Choose: Authenticator app (recommended) or SMS.",
      "Scan the QR code with your authenticator app.",
      "Save your backup codes in a secure location.",
      "2FA required for sensitive account changes.",
    ],
  },
  {
    id: "delete-account",
    title: "Deleting Your Account",
    description: "How to permanently delete your CloudSave account.",
    category: "Account & Security",
    icon: X,
    content: [
      "Go to Settings > Account > Delete Account.",
      "Download your data before deletion (encrypted files require your password).",
      "Confirm deletion - this action is irreversible.",
      "Your data is permanently deleted within 30 days.",
      "Backup metadata retained up to 90 days for disaster recovery.",
    ],
    relatedLink: "/terms#termination",
    relatedLinkLabel: "Termination Terms",
  },
  // Policies & Legal
  {
    id: "acceptable-use",
    title: "Acceptable Use Policy",
    description: "What you can and cannot do on CloudSave.",
    category: "Policies & Legal",
    icon: Ban,
    content: [
      "Use CloudSave only for lawful purposes.",
      "No illegal content (CSAM, terrorism, trafficking).",
      "No copyright infringement or pirated content.",
      "No cryptocurrency mining or plotting.",
      "No reselling or redistributing storage.",
      "Violations may result in account termination.",
    ],
    relatedLink: "/terms#acceptable-use",
    relatedLinkLabel: "Full Policy",
  },
  {
    id: "fair-usage",
    title: "Fair Usage Policy",
    description: "Guidelines for using 'unlimited' storage.",
    category: "Policies & Legal",
    icon: Scale,
    content: [
      "Storage is for personal use only.",
      "Permitted: photos, videos, documents, backups, Channels.",
      "Prohibited: public file hosting, crypto mining, bulk automated uploads.",
      "Don't use storage in ways that impact other users.",
      "Violations may result in storage restrictions.",
    ],
    relatedLink: "/terms#plans",
    relatedLinkLabel: "Learn More",
  },
  {
    id: "dmca-copyright",
    title: "Copyright & DMCA Policy",
    description: "How we handle copyright claims.",
    category: "Policies & Legal",
    icon: FileText,
    content: [
      "We respect intellectual property rights.",
      "Send DMCA notices to: dmca@cloudsave.org",
      "Include: your contact info, copyrighted work identification, infringing material location, good faith statement.",
      "Counter-notifications can be filed if you believe removal was in error.",
      "Repeat infringers may have accounts terminated.",
    ],
    relatedLink: "/terms#dmca",
    relatedLinkLabel: "DMCA Policy",
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    description: "Our policy on users under 18.",
    category: "Policies & Legal",
    icon: Baby,
    content: [
      "CloudSave is NOT intended for children.",
      "Minimum age requirement: 18 years old globally.",
      "We do not knowingly collect data from users under 18.",
      "Accounts of underage users will be suspended and deleted.",
      "Report underage accounts to: privacy@cloudsave.org",
    ],
    relatedLink: "/privacy-policy#children",
    relatedLinkLabel: "Children's Policy",
  },
  // Troubleshooting
  {
    id: "slow-uploads",
    title: "Slow Upload Speeds",
    description: "Fix slow or stuck uploads.",
    category: "Troubleshooting",
    icon: Upload,
    content: [
      "Check your internet connection speed.",
      "Connect to Wi-Fi for large files.",
      "Pause other downloads/uploads on your network.",
      "Try closing and reopening the app.",
      "Large files are split into chunks - this is normal.",
    ],
  },
  {
    id: "files-not-syncing",
    title: "Files Not Syncing",
    description: "Resolve sync issues across devices.",
    category: "Troubleshooting",
    icon: RefreshCw,
    content: [
      "Ensure you're logged into the same account on all devices.",
      "Check your internet connection.",
      "Pull down to refresh the file list.",
      "Check if your device has sufficient storage for caching.",
      "Try logging out and back in.",
    ],
  },
  {
    id: "app-crashing",
    title: "App Crashing or Freezing",
    description: "Steps to fix app stability issues.",
    category: "Troubleshooting",
    icon: AlertTriangle,
    content: [
      "Update to the latest version of CloudSave.",
      "Restart your device.",
      "Clear app cache (Settings > Apps > CloudSave > Clear Cache).",
      "Ensure you have sufficient device storage.",
      "If issues persist, contact support@cloudsave.org with device details.",
    ],
  },
];

const categories = [
  { name: "All", icon: BookOpen },
  { name: "Privacy & Security", icon: Shield },
  { name: "Getting Started", icon: Upload },
  { name: "Billing & Subscriptions", icon: CreditCard },
  { name: "Cloud Coins", icon: Coins },
  { name: "Cloud Channels", icon: Tv },
  { name: "Creator Monetization", icon: DollarSign },
  { name: "Account & Security", icon: Lock },
  { name: "Policies & Legal", icon: Scale },
  { name: "Troubleshooting", icon: Settings },
];

// Common search suggestions
const searchSuggestions = [
  "cancel subscription",
  "cancel my subscription",
  "cancel free trial",
  "cancel subscription and refund",
  "how do i cancel my subscription",
  "refund policy",
  "get a refund",
  "request refund",
  "delete account",
  "delete my account",
  "how to delete account",
  "password reset",
  "forgot password",
  "reset my password",
  "change password",
  "upload files",
  "how to upload",
  "upload not working",
  "download files",
  "download not working",
  "cloud coins",
  "earn cloud coins",
  "buy cloud coins",
  "how to get cloud coins",
  "what are cloud coins",
  "channels",
  "unlock channel",
  "how to unlock channels",
  "create channel",
  "monetization",
  "become a creator",
  "creator program",
  "how to earn money",
  "payout",
  "payment methods",
  "privacy",
  "data collection",
  "encryption",
  "zero knowledge encryption",
  "two factor authentication",
  "2fa",
  "security",
  "storage",
  "free storage",
  "premium",
  "upgrade to premium",
  "pricing",
  "sync not working",
  "files not syncing",
  "app crashing",
  "slow upload",
  "contact support",
];

// Frequently Asked Questions
const faqs = [
  {
    id: "is-cloudsave-free",
    question: "Is CloudSave really free?",
    answer: "Yes! CloudSave offers a generous free tier with 1 TB of cloud storage. The free plan is ad-supported, meaning you'll see occasional ads, but you get full access to core features including zero-knowledge encryption, cross-device sync, and Cloud Channels. Premium plans are available for those who want an ad-free experience and additional features.",
  },
  {
    id: "how-secure",
    question: "How secure is my data?",
    answer: "Your data is protected with military-grade AES-256 encryption. We use zero-knowledge encryption, meaning your files are encrypted on your device before they ever leave it. Only you have the decryption keys - not even CloudSave can access your encrypted files. This ensures your privacy even in the event of a data breach.",
  },
  {
    id: "offline-access",
    question: "Can I access my files offline?",
    answer: "Yes! You can mark files and folders for offline access. These files will be downloaded and stored locally on your device, allowing you to view and edit them without an internet connection. Changes will automatically sync when you're back online.",
  },
  {
    id: "cancel-subscription-faq",
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription anytime through your device settings. On iOS, go to Settings > [Your Name] > Subscriptions > CloudSave. On Android, open Google Play Store > Menu > Subscriptions > CloudSave. Your premium features remain active until the end of your current billing period.",
  },
  {
    id: "lost-password",
    question: "What happens if I lose my password?",
    answer: "You can reset your password using the 'Forgot Password' option on the login screen. However, due to our zero-knowledge encryption, if you lose both your password AND your recovery options, we cannot recover your encrypted files. We strongly recommend setting up account recovery options and keeping your password safe.",
  },
  {
    id: "storage-limit",
    question: "How much storage do I get?",
    answer: "Free users get 1 TB of storage, which is enough for thousands of photos and hundreds of hours of video. Premium users get access to extended storage options. Our 'unlimited' storage is subject to fair use - it's designed for personal use like photos, videos, documents, and backups.",
  },
  {
    id: "file-types",
    question: "What file types can I upload?",
    answer: "CloudSave supports virtually all file types including photos (JPG, PNG, HEIC, RAW), videos (MP4, MOV, AVI), documents (PDF, DOC, XLS), and more. There are no restrictions on file types, but content must comply with our Terms of Service and Acceptable Use Policy.",
  },
  {
    id: "creator-program-faq",
    question: "How does the Creator Program work?",
    answer: "The Creator Program allows you to monetize your content through Cloud Channels. Create a channel, build your subscriber base, and earn money when subscribers unlock your content. Premium users need 1,000+ subscribers, while free users need 10,000+ subscribers to qualify. Creators keep 100% of their earnings.",
  },
  {
    id: "share-files",
    question: "Can I share files with others?",
    answer: "Yes! You can share files and folders with others by generating a secure share link. Recipients don't need a CloudSave account to view shared content. You can also share through Cloud Channels for a subscriber-based model. Note that shared content is not end-to-end encrypted.",
  },
  {
    id: "premium-vs-free",
    question: "What's the difference between Premium and Free?",
    answer: "Free users get 1 TB storage, zero-knowledge encryption, and full app access with ads. Premium users enjoy an ad-free experience, extended storage, priority support, and easier access to the Creator Program (1,000 vs 10,000 subscriber requirement). Both plans include all core security features.",
  },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSearchDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter search suggestions based on input
  const filteredSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return searchSuggestions
      .filter((suggestion) => suggestion.toLowerCase().includes(query))
      .slice(0, 5);
  }, [searchQuery]);

  // Handle clicking on a search suggestion
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSearchDropdown(false);
    setSelectedCategory("All");

    // Scroll to articles section
    setTimeout(() => {
      const articlesSection = document.getElementById("articles");
      articlesSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.some((line) =>
          line.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email. We typically respond within 24 hours.",
      action: "support@cloudsave.org",
      actionLabel: "Send Email",
      href: "mailto:support@cloudsave.org",
      badge: null,
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time.",
      action: "Coming Soon",
      actionLabel: "Coming Soon",
      href: "#",
      badge: "Coming Soon",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Browse detailed guides and tutorials.",
      action: "View Docs",
      actionLabel: "View Docs",
      href: "#articles",
      badge: null,
    },
  ];

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
              <HelpCircle className="w-3.5 h-3.5" />
              Help Center
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How Can We <span className="gradient-text">Help?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions, browse help articles, or get in touch
              with our support team.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto" ref={searchContainerRef}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchDropdown(true);
                  }}
                  onFocus={() => searchQuery && setShowSearchDropdown(true)}
                  className="w-full pl-12 pr-12 py-4 rounded-2xl border border-border bg-background/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setShowSearchDropdown(false);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                )}

                {/* Search Suggestions Dropdown */}
                <AnimatePresence>
                  {showSearchDropdown && searchQuery && filteredSuggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-lg z-50 max-h-[60vh] overflow-y-auto overscroll-contain"
                    >
                      <div className="py-2">
                        {filteredSuggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors text-left"
                          >
                            <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            <span className="text-foreground truncate">
                              {suggestion.split(new RegExp(`(${searchQuery})`, 'gi')).map((part, i) => (
                                part.toLowerCase() === searchQuery.toLowerCase() ? (
                                  <span key={i} className="font-semibold">{part}</span>
                                ) : (
                                  <span key={i}>{part}</span>
                                )
                              ))}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {searchQuery && !showSearchDropdown && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Found {filteredArticles.length} article
                  {filteredArticles.length !== 1 ? "s" : ""} matching &quot;{searchQuery}&quot;
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Options */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => (
                <Card
                  key={index}
                  variant="bordered"
                  className={`hover:border-primary/50 transition-colors relative ${
                    option.badge ? "opacity-80" : ""
                  }`}
                >
                  {option.badge && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {option.badge}
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {option.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {option.description}
                    </p>
                    {option.badge ? (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full opacity-50 cursor-not-allowed"
                        disabled
                      >
                        {option.actionLabel}
                      </Button>
                    ) : (
                      <Button variant="secondary" size="sm" className="w-full">
                        <a href={option.href}>{option.actionLabel}</a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Response Time */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Card variant="bordered" className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Support Status: Online
                      </p>
                      <p className="text-sm text-muted-foreground">
                        All systems operational
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Avg. response: 4 hours</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            id="articles"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Help Articles
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.name
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <motion.div
                    key={article.id}
                    id={`article-${article.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card
                      variant="bordered"
                      className={`cursor-pointer hover:border-primary/50 transition-all h-full ${
                        expandedArticle === article.id
                          ? "border-primary/50 bg-primary/5"
                          : ""
                      }`}
                      onClick={() =>
                        setExpandedArticle(
                          expandedArticle === article.id ? null : article.id
                        )
                      }
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <article.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-semibold text-foreground line-clamp-2">
                                {article.title}
                              </h3>
                              <ChevronRight
                                className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform ${
                                  expandedArticle === article.id
                                    ? "rotate-90"
                                    : ""
                                }`}
                              />
                            </div>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {article.description}
                            </p>
                            <Badge
                              variant="secondary"
                              className="mt-3 text-xs"
                            >
                              {article.category}
                            </Badge>

                            <AnimatePresence>
                              {expandedArticle === article.id && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-4 pt-4 border-t border-border">
                                    <ul className="space-y-2">
                                      {article.content.map((line, idx) => (
                                        <li
                                          key={idx}
                                          className="flex items-start gap-2 text-sm text-muted-foreground"
                                        >
                                          <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                                          <span>{line}</span>
                                        </li>
                                      ))}
                                    </ul>
                                    {article.relatedLink && (
                                      <Link
                                        href={article.relatedLink}
                                        className="inline-flex items-center gap-1 mt-4 text-sm gradient-link"
                                        onClick={(e) => e.stopPropagation()}
                                      >
                                        {article.relatedLinkLabel}
                                        <ExternalLink className="w-3 h-3" />
                                      </Link>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full"
                >
                  <Card variant="bordered" className="bg-muted/50">
                    <CardContent className="p-12 text-center">
                      <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        No articles found
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Try adjusting your search or browse a different category.
                      </p>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setSearchQuery("");
                          setSelectedCategory("All");
                        }}
                      >
                        Clear filters
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card variant="bordered" className="bg-gradient-to-r from-muted/50 to-muted/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  Quick Links
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <Link
                    href="/privacy-policy"
                    className="flex items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors"
                  >
                    <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">Privacy Policy</span>
                  </Link>
                  <Link
                    href="/terms"
                    className="flex items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors"
                  >
                    <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">Terms of Service</span>
                  </Link>
                  <Link
                    href="/monetization-policy"
                    className="flex items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors"
                  >
                    <DollarSign className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">Monetization Policy</span>
                  </Link>
                  <Link
                    href="/monetization"
                    className="flex items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors"
                  >
                    <Tv className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">Creator Program</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <Card
                  key={faq.id}
                  variant="bordered"
                  className={`cursor-pointer transition-all ${
                    expandedFaq === faq.id
                      ? "border-primary/50 bg-primary/5"
                      : "hover:border-primary/30"
                  }`}
                  onClick={() =>
                    setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                  }
                >
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between p-5">
                      <h3 className="font-semibold text-foreground pr-4">
                        {faq.question}
                      </h3>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          expandedFaq === faq.id
                            ? "bg-primary/10"
                            : "bg-muted"
                        }`}
                      >
                        {expandedFaq === faq.id ? (
                          <ChevronDown className="w-5 h-5 text-primary" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                    <AnimatePresence>
                      {expandedFaq === faq.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-0">
                            <div className="pt-4 border-t border-border">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Still Need Help */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card variant="bordered" className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Still Need Help?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Can&apos;t find what you&apos;re looking for? Our support team
                  is ready to help you with any questions or issues.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="md">
                    <a
                      href="mailto:support@cloudsave.org"
                      className="flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Contact Support
                    </a>
                  </Button>
                  <Button variant="secondary" size="md">
                    <Link href="/careers" className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Join Our Team
                    </Link>
                  </Button>
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
