"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, Download, Loader2, ExternalLink } from "lucide-react";
import { Logo } from "@/components/icons/Logo";
import { Button } from "@/components/ui/Button";
import {
  detectPlatform,
  getStoreUrl,
  getAppSchemeUrl,
  isMobileDevice,
  DEEP_LINK_CONFIG,
} from "@/lib/deeplink";

interface DeepLinkRedirectProps {
  path: string;
  title?: string;
  description?: string;
}

export function DeepLinkRedirect({
  path,
  title = "Opening 100X...",
  description = "You're being redirected to the 100X app.",
}: DeepLinkRedirectProps) {
  const [status, setStatus] = useState<"loading" | "redirecting" | "fallback">("loading");
  const [platform, setPlatform] = useState<"ios" | "android" | "desktop">("desktop");

  useEffect(() => {
    const detectedPlatform = detectPlatform();
    setPlatform(detectedPlatform);

    if (!isMobileDevice()) {
      // Desktop users - show download options
      setStatus("fallback");
      return;
    }

    setStatus("redirecting");

    // For iOS and Android, we use different strategies
    const universalLink = `${window.location.origin}${path}`;
    const appSchemeUrl = getAppSchemeUrl(path);
    const storeUrl = getStoreUrl(detectedPlatform);

    // Strategy: Try to open the app, then fall back to store
    //
    // For iOS: Universal Links should work automatically if properly configured
    // The AASA file tells iOS to open the app directly without showing Safari
    // If app is not installed, iOS will show the webpage
    //
    // For Android: App Links work similarly with assetlinks.json
    // If app is not installed, it falls back to the browser

    // Try app scheme first (works if app is installed)
    // This creates an invisible iframe to attempt opening the app
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = appSchemeUrl;
    document.body.appendChild(iframe);

    // Set a timeout to redirect to store if app doesn't open
    const timeoutId = setTimeout(() => {
      // Clean up iframe
      document.body.removeChild(iframe);

      // Redirect to appropriate store
      setStatus("fallback");

      // Auto-redirect to store after showing fallback briefly
      setTimeout(() => {
        window.location.href = storeUrl;
      }, 1500);
    }, 2500);

    // If page visibility changes (app opened), clear the timeout
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timeoutId);
        try {
          document.body.removeChild(iframe);
        } catch {
          // iframe may already be removed
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      try {
        document.body.removeChild(iframe);
      } catch {
        // iframe may already be removed
      }
    };
  }, [path]);

  const handleOpenApp = () => {
    const appSchemeUrl = getAppSchemeUrl(path);
    window.location.href = appSchemeUrl;
  };

  const handleDownload = () => {
    const storeUrl = getStoreUrl(platform);
    window.location.href = storeUrl;
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo size="lg" />
        </div>

        {/* Loading State */}
        {status === "loading" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <Loader2 className="w-12 h-12 text-primary mx-auto animate-spin" />
            <p className="text-muted-foreground">Detecting your device...</p>
          </motion.div>
        )}

        {/* Redirecting State */}
        {status === "redirecting" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <Smartphone className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Opening app...</span>
            </div>
          </motion.div>
        )}

        {/* Fallback State - App not installed */}
        {status === "fallback" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mx-auto">
              <svg
                width={48}
                height={48}
                viewBox="60 105 392 302"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M246.822 108.186C222.068 110.533 197.664 122.569 181.52 140.392C161.179 162.849 152.254 192.692 156.723 223.303C158.817 237.647 163.736 250.498 171.786 262.656C187.637 286.597 212.936 302.58 241.906 306.958C246.83 307.702 259.491 307.865 264.845 307.252C287.718 304.636 307.419 295.313 325.165 278.709C332.99 271.388 340.09 268.205 349.6 267.754C359.427 267.288 369.449 271.313 376.875 278.708C389.612 291.392 391.059 311.279 380.33 326.198C378.442 328.822 374.459 332.548 371.254 334.687C364.994 338.866 358.541 340.833 351.096 340.833C343.058 340.833 335.893 338.458 329.675 333.732C323.936 329.37 323.523 329.273 319.346 331.304C297.722 341.821 278.919 346.736 258.142 347.303C237.126 347.877 216.909 343.385 194.728 333.214C189.936 331.017 189.621 330.916 187.944 331.038C186.449 331.146 185.928 331.354 184.478 332.424C177.897 337.277 173.452 339.396 167.416 340.558C164.601 341.099 158.54 341.029 155.402 340.418C140.364 337.493 129.393 327.255 125.797 312.791C125.114 310.047 125.007 308.98 124.993 304.843C124.977 299.654 125.285 297.489 126.638 293.3C128.015 289.038 130.939 283.77 133.963 280.104C135.041 278.798 134.856 277.775 132.907 274.256C124.441 258.971 119.198 242.422 116.786 223.367C116.458 220.773 116.189 218.119 116.189 217.468C116.189 216.39 116.12 216.285 115.407 216.285C112.641 216.285 99.6649 225.576 91.7051 233.257C82.6407 242.002 76.7469 249.964 71.6553 260.34C65.4773 272.93 62.5566 285.12 62.0657 300.362C61.3427 322.807 66.5802 342 78.2036 359.501C88.1621 374.494 101.307 386.029 117.53 394.01C128.469 399.391 138.725 402.352 150.747 403.599C153.713 403.907 175.22 403.987 256.504 403.994C369.044 404.004 360.375 404.141 370.317 402.198C385.609 399.208 401.009 392.081 413.203 382.349C416.893 379.404 423.346 373.144 426.595 369.357C438.26 355.759 446.266 338.751 449.23 321.27C449.987 316.803 450.436 312.835 450.439 310.574C450.441 309.494 450.554 308.909 450.739 309.024C450.935 309.145 451.023 307.171 450.995 303.292C450.971 299.859 450.863 297.877 450.739 298.57C450.539 299.692 450.523 299.656 450.484 297.964C450.461 296.974 450.236 294.499 449.985 292.464C444.644 249.212 412.837 214.949 370.155 206.47C363.9 205.228 359.17 204.813 351.238 204.812C338.849 204.81 329.629 206.245 318.915 209.843C305.261 214.429 294.468 221.07 281.898 232.619C275.781 238.24 271.948 240.698 266.4 242.562C256.657 245.835 244.895 244.528 236.132 239.199C226.965 233.625 220.751 224.282 218.831 213.184C216.246 198.245 224.874 182.008 239.162 174.923C244.555 172.249 248.587 171.339 255.014 171.345C259.435 171.35 260.26 171.436 263.207 172.198C269.07 173.714 273.729 176.099 278.322 179.935C281.28 182.406 282.081 182.749 283.807 182.286C284.528 182.093 285.629 181.611 286.254 181.216C291.716 177.759 306.727 171.827 316.085 169.427C323.172 167.611 332.625 166.002 341.012 165.185L344.639 164.832L344.344 164.051C344.182 163.621 343.506 162.194 342.842 160.88C334.021 143.428 318.797 128.471 300.281 119.067C289.204 113.441 278.761 110.193 266.611 108.595C262.417 108.044 250.849 107.804 246.822 108.186ZM62.0955 303.648C62.0952 306.933 62.1387 308.318 62.1923 306.725C62.2456 305.132 62.2459 302.444 62.1926 300.752C62.1396 299.059 62.0958 300.362 62.0955 303.648Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">
                Get 100X App
              </h1>
              <p className="text-muted-foreground">
                {isMobileDevice()
                  ? "The 100X app is required to view this content. Download it for free!"
                  : "Download the 100X app on your mobile device to access this content."}
              </p>
            </div>

            {/* Mobile: Show download button */}
            {isMobileDevice() && (
              <div className="space-y-3">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5 mr-2" />
                  {platform === "ios" ? "Download on App Store" : "Get it on Google Play"}
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full"
                  onClick={handleOpenApp}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  I have the app installed
                </Button>
              </div>
            )}

            {/* Desktop: Show both store options */}
            {!isMobileDevice() && (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Scan the QR code or visit these links on your mobile device:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={DEEP_LINK_CONFIG.iosAppStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-black/90 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    App Store
                  </a>
                  <a
                    href={DEEP_LINK_CONFIG.androidPlayStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-black/90 transition-colors"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Google Play
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-xs text-muted-foreground"
        >
          100X - Secure Cloud Storage
        </motion.p>
      </motion.div>
    </div>
  );
}
