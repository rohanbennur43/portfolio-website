export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

/* eslint-disable no-unused-vars */
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
/* eslint-enable no-unused-vars */

export function pageview(url: string) {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (!GA_MEASUREMENT_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}

// Pre-defined event helpers
export function trackDemoClick(projectTitle: string) {
  trackEvent({
    action: "demo_click",
    category: "projects",
    label: projectTitle,
  });
}

export function trackGitHubClick(projectTitle: string) {
  trackEvent({
    action: "github_click",
    category: "projects",
    label: projectTitle,
  });
}

export function trackContactSubmission() {
  trackEvent({
    action: "form_submit",
    category: "contact",
    label: "contact_form",
  });
}
