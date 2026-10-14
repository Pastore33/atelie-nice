import type { Metadata } from "next";
import { business } from "./data";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
export function metadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: { absolute: `${title} | ${business.name}` },
    description,
    ...(siteUrl ? { alternates: { canonical: `${siteUrl}${path}` } } : {}),
    openGraph: {
      title: `${title} | ${business.name}`,
      description,
      locale: "pt_BR",
      type: "website",
      siteName: business.name,
      ...(siteUrl
        ? {
            url: `${siteUrl}${path}`,
            images: [
              {
                url: `${siteUrl}/images/costura.webp`,
                width: 1448,
                height: 1086,
                alt: business.slogan,
              },
            ],
          }
        : {}),
    },
  };
}
