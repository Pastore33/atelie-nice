import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl
    ? [
        "/",
        "/servicos/",
        "/sobre/",
        "/galeria/",
        "/orcamento/",
        "/contato/",
      ].map((path) => ({ url: `${siteUrl}${path}` }))
    : [];
}
