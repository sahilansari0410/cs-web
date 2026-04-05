// Deep link configuration
export const DEEP_LINK_CONFIG = {
  appScheme: "cloudsave://",
  iosAppStoreUrl: "https://apps.apple.com/app/cloudsave/id6757381326",
  androidPlayStoreUrl: "https://play.google.com/store/apps/details?id=org.cloudsave.app",
  teamId: "BY4DK7N35V",
  bundleId: "org.cloudsave.app",
  iosAppStoreId: "6757381326", // Used for smart app banner
};

export type DeepLinkType = "share" | "channel" | "referral";

export function getDeepLinkPath(type: DeepLinkType, id: string): string {
  switch (type) {
    case "share":
      return `/share/${id}`;
    case "channel":
      return `/c/${id}`;
    case "referral":
      return `/r/${id}`;
    default:
      return "/";
  }
}

export function getAppSchemeUrl(path: string): string {
  // Remove leading slash for app scheme
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${DEEP_LINK_CONFIG.appScheme}${cleanPath}`;
}

export function detectPlatform(): "ios" | "android" | "desktop" {
  if (typeof window === "undefined") return "desktop";

  const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || "";

  // iOS detection
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream) {
    return "ios";
  }

  // Android detection
  if (/android/i.test(userAgent)) {
    return "android";
  }

  return "desktop";
}

export function getStoreUrl(platform: "ios" | "android" | "desktop"): string {
  switch (platform) {
    case "ios":
      return DEEP_LINK_CONFIG.iosAppStoreUrl;
    case "android":
      return DEEP_LINK_CONFIG.androidPlayStoreUrl;
    default:
      // For desktop, default to a page or the main site
      return "/";
  }
}

export function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;

  const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || "";
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
}
