import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com";
const SITE_NAME = "Your Name — Portfolio";

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
}

export function createPageMetadata({
  title,
  description,
  path = "",
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
