"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { label: "Security", href: "/#security" },
  { label: "Features", href: "/#storage" },
  { label: "Channels", href: "/#channels" },
  { label: "Share", href: "/#share" },
  { label: "Pricing", href: "/#pricing" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
    >
      {/* Pill-shaped navbar container */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-background/95 backdrop-blur-md border border-border rounded-full px-4 sm:px-6 py-3 shadow-lg shadow-black/5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <Logo size="md" />
            </a>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/support"
                className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
              >
                Support
              </Link>
              <a href="mailto:support@cloudsave.org">
                <Button variant="primary" size="sm" className="rounded-full px-6">
                  Contact
                </Button>
              </a>
            </div>

            {/* Mobile Right Side */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-50 top-0"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative mx-4 mt-4 bg-background rounded-3xl shadow-2xl border border-border overflow-hidden max-h-[calc(100vh-2rem)] flex flex-col"
            >
              {/* Header with Logo and Close */}
              <div className="flex items-center justify-between p-6 pb-4 flex-shrink-0">
                <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Logo size="md" />
                </a>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                {/* Navigation Links */}
                <nav className="flex flex-col px-6 py-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-5 text-muted-foreground hover:text-foreground transition-colors font-medium text-lg border-b border-border last:border-b-0"
                    >
                      {link.label}
                    </a>
                  ))}
                  {/* Support Link in Mobile */}
                  <Link
                    href="/support"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-5 text-muted-foreground hover:text-foreground transition-colors font-medium text-lg border-b border-border"
                  >
                    Support
                  </Link>
                </nav>

                {/* Bottom Buttons */}
                <div className="px-6 py-8 flex flex-col gap-3">
                  <a
                    href="mailto:support@cloudsave.org"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full"
                  >
                    <Button variant="primary" size="lg" className="w-full flex items-center justify-center gap-2 rounded-full">
                      <Mail className="w-5 h-5" />
                      Contact
                    </Button>
                  </a>
                  <Link
                    href="/support"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full"
                  >
                    <Button variant="secondary" size="lg" className="w-full flex items-center justify-center gap-2 rounded-full">
                      <HelpCircle className="w-5 h-5" />
                      Help Center
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
