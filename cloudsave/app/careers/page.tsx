"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Briefcase,
  MapPin,
  Clock,
  Heart,
  Zap,
  Globe,
  Shield,
  Coffee,
  Laptop,
  Users,
  GraduationCap,
  Plane,
  ChevronRight,
  X,
  Smartphone,
  Server,
  Palette,
  TestTube,
  Cloud,
  CheckCircle2,
  AlertCircle,
  Send,
  Link as LinkIcon,
  User,
  Mail,
  Phone,
  FileText,
  Linkedin,
  TrendingUp,
  Megaphone,
  Headphones,
} from "lucide-react";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  responsibilities: string[];
  requirements: string[];
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  resumeUrl: string;
  coverLetter: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  resumeUrl?: string;
  coverLetter?: string;
}

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    resumeUrl: "",
    coverLetter: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const benefits = [
    {
      icon: Globe,
      title: "Remote-First",
      description: "Work from anywhere in the world.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work when you're most productive.",
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage.",
      color: "bg-red-500/10 text-red-500",
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "Annual stipend for growth.",
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: Laptop,
      title: "Equipment",
      description: "Top-of-the-line setup.",
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      icon: Plane,
      title: "Unlimited PTO",
      description: "Take time when you need it.",
      color: "bg-cyan-500/10 text-cyan-500",
    },
  ];

  const openPositions: JobPosition[] = [
    {
      id: "android-dev",
      title: "Android Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build beautiful, performant Android apps that millions of users love.",
      icon: Smartphone,
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      responsibilities: [
        "Develop and maintain the CloudSave Android application",
        "Implement new features and optimize existing functionality",
        "Collaborate with designers to create intuitive user experiences",
        "Write clean, maintainable, and well-tested code",
        "Participate in code reviews and technical discussions",
      ],
      requirements: [
        "3+ years of Android development experience",
        "Proficiency in Kotlin and Android SDK",
        "Experience with MVVM architecture and Jetpack components",
        "Knowledge of RESTful APIs and data persistence",
        "Published apps on Google Play Store",
      ],
    },
    {
      id: "ios-dev",
      title: "iOS Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Create exceptional iOS experiences with Swift and SwiftUI.",
      icon: Smartphone,
      color: "bg-primary/10 text-primary border-primary/20",
      responsibilities: [
        "Develop and maintain the CloudSave iOS application",
        "Build new features using Swift and SwiftUI",
        "Ensure app performance and responsiveness",
        "Collaborate with cross-functional teams",
        "Stay up-to-date with Apple's latest technologies",
      ],
      requirements: [
        "3+ years of iOS development experience",
        "Strong proficiency in Swift and SwiftUI",
        "Experience with Core Data and CloudKit",
        "Understanding of Apple's design guidelines",
        "Published apps on the App Store",
      ],
    },
    {
      id: "backend-dev",
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Build scalable backend systems with .NET or Node.js.",
      icon: Server,
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      responsibilities: [
        "Design and implement scalable backend services",
        "Build RESTful APIs and microservices",
        "Optimize database queries and performance",
        "Implement security best practices",
        "Write comprehensive tests and documentation",
      ],
      requirements: [
        "4+ years of backend development experience",
        "Strong proficiency in .NET Core or Node.js",
        "Experience with SQL and NoSQL databases",
        "Knowledge of cloud services (AWS/Azure/GCP)",
        "Understanding of distributed systems",
      ],
    },
    {
      id: "devops-eng",
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Automate and scale our cloud infrastructure globally.",
      icon: Cloud,
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      responsibilities: [
        "Manage and optimize cloud infrastructure",
        "Implement CI/CD pipelines and automation",
        "Monitor system performance and reliability",
        "Ensure security and compliance standards",
        "Collaborate with development teams on deployments",
      ],
      requirements: [
        "3+ years of DevOps experience",
        "Proficiency with AWS, Azure, or GCP",
        "Experience with Docker and Kubernetes",
        "Knowledge of Infrastructure as Code (Terraform)",
        "Strong scripting skills (Bash, Python)",
      ],
    },
    {
      id: "uiux-designer",
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Design intuitive interfaces that make cloud storage simple.",
      icon: Palette,
      color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
      responsibilities: [
        "Create user-centered designs for web and mobile",
        "Conduct user research and usability testing",
        "Develop wireframes, prototypes, and high-fidelity designs",
        "Maintain and evolve the design system",
        "Collaborate closely with engineering teams",
      ],
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma and design tools",
        "Strong portfolio showcasing product design work",
        "Experience with user research methodologies",
        "Understanding of accessibility standards",
      ],
    },
    {
      id: "qa-engineer",
      title: "QA Engineer",
      department: "Quality",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Ensure our products meet the highest quality standards.",
      icon: TestTube,
      color: "bg-teal-500/10 text-teal-500 border-teal-500/20",
      responsibilities: [
        "Develop and execute test plans and test cases",
        "Perform manual and automated testing",
        "Identify, document, and track bugs",
        "Collaborate with developers to resolve issues",
        "Improve testing processes and coverage",
      ],
      requirements: [
        "2+ years of QA experience",
        "Experience with test automation frameworks",
        "Knowledge of API testing tools (Postman, etc.)",
        "Understanding of CI/CD pipelines",
        "Strong attention to detail",
      ],
    },
    {
      id: "monetization-manager",
      title: "Monetization Manager",
      department: "Growth",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Drive revenue growth through ads, subscriptions, and user monetization strategies.",
      icon: TrendingUp,
      color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      responsibilities: [
        "Develop and execute monetization strategies across mobile platforms",
        "Manage ad networks integration (AdMob, AppLovin, Unity Ads, IronSource)",
        "Optimize ad placements, formats, and eCPM for maximum revenue",
        "Design and improve subscription tiers and pricing strategies",
        "Analyze ARPU, LTV, and other key revenue metrics",
        "A/B test monetization features to maximize conversion",
        "Collaborate with product and engineering on monetization features",
      ],
      requirements: [
        "4+ years in mobile app monetization or growth",
        "Deep expertise with AdMob, AppLovin, MAX, IronSource",
        "Experience with subscription monetization (IAP, trials, paywalls)",
        "Strong analytical skills and proficiency with analytics tools",
        "Track record of improving ARPU and revenue metrics",
        "Understanding of user psychology and conversion optimization",
      ],
    },
    {
      id: "growth-marketing",
      title: "Growth Marketing Lead",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Scale user acquisition and drive sustainable growth through data-driven marketing.",
      icon: Megaphone,
      color: "bg-rose-500/10 text-rose-500 border-rose-500/20",
      responsibilities: [
        "Develop and execute user acquisition strategies",
        "Manage paid marketing campaigns across platforms",
        "Optimize CAC and improve marketing ROI",
        "Build and scale referral and viral growth programs",
        "Collaborate with product on growth features and experiments",
        "Analyze funnel metrics and identify growth opportunities",
      ],
      requirements: [
        "3+ years in growth marketing for mobile/SaaS products",
        "Experience with paid acquisition channels (Google, Meta, TikTok)",
        "Strong analytical skills and data-driven mindset",
        "Experience with ASO and organic growth strategies",
        "Track record of scaling user acquisition profitably",
      ],
    },
    {
      id: "customer-support",
      title: "Customer Support Specialist",
      department: "Support",
      location: "Remote",
      type: "Full-time",
      experience: "1+ years",
      description: "Deliver exceptional support experiences and help users get the most out of CloudSave.",
      icon: Headphones,
      color: "bg-sky-500/10 text-sky-500 border-sky-500/20",
      responsibilities: [
        "Respond to customer inquiries via email, chat, and support tickets",
        "Troubleshoot technical issues and guide users through solutions",
        "Document common issues and contribute to knowledge base articles",
        "Escalate complex issues to engineering and product teams",
        "Gather user feedback and advocate for customer needs",
        "Maintain high customer satisfaction scores",
      ],
      requirements: [
        "1+ years of customer support experience",
        "Excellent written and verbal communication skills",
        "Technical aptitude and ability to learn new tools quickly",
        "Experience with support ticketing systems (Zendesk, Intercom, etc.)",
        "Patient, empathetic, and solution-oriented mindset",
        "Ability to work flexible hours across time zones",
      ],
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Privacy Champions",
      description: "We build products that protect user privacy by default.",
    },
    {
      icon: Zap,
      title: "Move Fast",
      description: "We ship quickly while maintaining quality and security.",
    },
    {
      icon: Users,
      title: "User Obsessed",
      description: "Every decision starts with 'How does this help our users?'",
    },
    {
      icon: Coffee,
      title: "Stay Curious",
      description: "We encourage experimentation and continuous learning.",
    },
    {
      icon: Globe,
      title: "Think Global",
      description: "We build for users everywhere, embracing diverse perspectives.",
    },
    {
      icon: Heart,
      title: "Own It",
      description: "We take responsibility and see things through to completion.",
    },
  ];

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }

    if (!formData.resumeUrl.trim()) {
      errors.resumeUrl = "Resume URL is required";
    } else {
      try {
        const url = new URL(formData.resumeUrl);
        if (!url.hostname.endsWith("cloudsave.org")) {
          errors.resumeUrl = "Resume must be hosted on cloudsave.org domain";
        }
      } catch {
        errors.resumeUrl = "Please enter a valid URL";
      }
    }

    if (!formData.coverLetter.trim()) {
      errors.coverLetter = "Please tell us why you're interested";
    } else if (formData.coverLetter.trim().length < 50) {
      errors.coverLetter = "Please write at least 50 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm() || !selectedJob) return;

    setIsSubmitting(true);

    // Compose email content
    const subject = encodeURIComponent(`Job Application: ${selectedJob.title}`);
    const body = encodeURIComponent(
`Job Application for ${selectedJob.title}

=== APPLICANT DETAILS ===

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
LinkedIn: ${formData.linkedin || "Not provided"}

=== POSITION DETAILS ===

Position: ${selectedJob.title}
Department: ${selectedJob.department}
Location: ${selectedJob.location}
Type: ${selectedJob.type}

=== RESUME ===

Resume URL: ${formData.resumeUrl}

=== COVER LETTER ===

${formData.coverLetter}

---
This application was submitted via the CloudSave Careers page.
`
    );

    // Open mailto link
    const mailtoLink = `mailto:support@cloudsave.org?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");

    // Short delay to allow email client to open
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setSelectedJob(null);
      setSubmitSuccess(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        resumeUrl: "",
        coverLetter: "",
      });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

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
              <Briefcase className="w-3.5 h-3.5" />
              We&apos;re Hiring
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our <span className="gradient-text">Mission</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us build the future of cloud storage. We&apos;re looking for
              passionate people who care about privacy and great user experiences.
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
            {/* Why Join Us - Large Card */}
            <Card variant="bordered" className="md:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 overflow-hidden">
              <CardContent className="p-6 md:p-8 relative">
                <div className="absolute top-4 right-4 opacity-10">
                  <Heart className="w-32 h-32 text-primary" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="primary">Why CloudSave?</Badge>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Build Something Meaningful
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    At CloudSave, you&apos;ll work on problems that matter. We&apos;re not just
                    building another cloud storage—we&apos;re creating a privacy-first platform
                    that gives users true ownership of their data.
                  </p>
                  <p className="text-muted-foreground">
                    Small team, big impact. Your contributions will directly shape the product
                    millions of users rely on every day.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card variant="bordered" className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-success" />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-4xl font-bold text-foreground">9</p>
                    <p className="text-sm text-muted-foreground">Open Positions</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-foreground">100%</p>
                    <p className="text-sm text-muted-foreground">Remote Work</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Culture Cards */}
            {values.map((value, index) => (
              <Card key={index} variant="bordered">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Benefits - Full Width */}
            <Card variant="bordered" className="lg:col-span-3">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Benefits & Perks</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors">
                      <div className={`w-12 h-12 rounded-full ${benefit.color.split(" ")[0]} flex items-center justify-center mx-auto mb-3`}>
                        <benefit.icon className={`w-6 h-6 ${benefit.color.split(" ")[1]}`} />
                      </div>
                      <p className="font-medium text-foreground text-sm">{benefit.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Open Positions Header */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Open Positions</h2>
              </div>
            </div>

            {/* Job Cards */}
            {openPositions.map((job) => (
              <Card
                key={job.id}
                variant="bordered"
                className={`cursor-pointer hover:border-primary/50 transition-all group ${job.color.split(" ")[2]}`}
                onClick={() => setSelectedJob(job)}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${job.color.split(" ")[0]} flex items-center justify-center mb-4`}>
                    <job.icon className={`w-6 h-6 ${job.color.split(" ")[1]}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {job.type}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-muted text-xs text-muted-foreground">
                      <Briefcase className="w-3 h-3" />
                      {job.experience}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Apply Now <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Don't See Your Role */}
            <Card variant="bordered" className="lg:col-span-3 bg-gradient-to-r from-muted/50 to-muted/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Don&apos;t See Your Role?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  We&apos;re always looking for talented people. Send us your resume and tell us
                  how you can contribute to CloudSave.
                </p>
                <Button variant="primary" size="md">
                  <a href="mailto:careers@cloudsave.org" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Send Your Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => !isSubmitting && setSelectedJob(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-2xl shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-background border-b border-border p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${selectedJob.color.split(" ")[0]} flex items-center justify-center`}>
                      <selectedJob.icon className={`w-6 h-6 ${selectedJob.color.split(" ")[1]}`} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{selectedJob.title}</h2>
                      <p className="text-sm text-muted-foreground">
                        {selectedJob.department} · {selectedJob.location} · {selectedJob.type}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => !isSubmitting && setSelectedJob(null)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    disabled={isSubmitting}
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Application Submitted!</h3>
                    <p className="text-muted-foreground">
                      Thanks for applying! We&apos;ll review your application and get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Job Details */}
                    <div className="mb-8 space-y-6">
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Responsibilities</h3>
                        <ul className="space-y-2">
                          {selectedJob.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">Requirements</h3>
                        <ul className="space-y-2">
                          {selectedJob.requirements.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Application Form */}
                    <div className="border-t border-border pt-6">
                      <h3 className="font-semibold text-foreground mb-4">Apply for this position</h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Full Name */}
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            Full Name <span className="text-destructive">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                                formErrors.fullName ? "border-destructive" : "border-border"
                              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                            />
                          </div>
                          {formErrors.fullName && (
                            <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.fullName}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            Email Address <span className="text-destructive">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                                formErrors.email ? "border-destructive" : "border-border"
                              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                            />
                          </div>
                          {formErrors.email && (
                            <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.email}
                            </p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            Phone Number <span className="text-destructive">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+91 98765 43210"
                              className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                                formErrors.phone ? "border-destructive" : "border-border"
                              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                            />
                          </div>
                          {formErrors.phone && (
                            <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.phone}
                            </p>
                          )}
                        </div>

                        {/* LinkedIn */}
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            LinkedIn Profile <span className="text-muted-foreground">(Optional)</span>
                          </label>
                          <div className="relative">
                            <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              type="url"
                              name="linkedin"
                              value={formData.linkedin}
                              onChange={handleInputChange}
                              placeholder="https://linkedin.com/in/johndoe"
                              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                          </div>
                        </div>

                        {/* Resume URL */}
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            Resume URL <span className="text-destructive">*</span>
                          </label>
                          <div className="relative">
                            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                              type="url"
                              name="resumeUrl"
                              value={formData.resumeUrl}
                              onChange={handleInputChange}
                              placeholder="https://cloudsave.org/your-resume.pdf"
                              className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                                formErrors.resumeUrl ? "border-destructive" : "border-border"
                              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary`}
                            />
                          </div>
                          {formErrors.resumeUrl ? (
                            <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.resumeUrl}
                            </p>
                          ) : (
                            <p className="mt-1 text-xs text-muted-foreground">
                              Upload your resume to CloudSave and paste the share link here. Domain must be cloudsave.org
                            </p>
                          )}
                        </div>

                        {/* Cover Letter */}
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            Why are you interested? <span className="text-destructive">*</span>
                          </label>
                          <div className="relative">
                            <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <textarea
                              name="coverLetter"
                              value={formData.coverLetter}
                              onChange={handleInputChange}
                              placeholder="Tell us about yourself and why you'd be a great fit for this role..."
                              rows={4}
                              className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${
                                formErrors.coverLetter ? "border-destructive" : "border-border"
                              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none`}
                            />
                          </div>
                          {formErrors.coverLetter && (
                            <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              {formErrors.coverLetter}
                            </p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                          <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center gap-2">
                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Submitting...
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                <Send className="w-4 h-4" />
                                Submit Application
                              </span>
                            )}
                          </Button>
                        </div>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
