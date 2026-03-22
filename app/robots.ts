import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Crawlers generales
      { userAgent: "*",            allow: "/", disallow: ["/api/", "/_next/"] },
      // Bots de IA — indexación explícita
      { userAgent: "GPTBot",       allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Claude-Web",   allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot",allow: "/" },
      { userAgent: "Googlebot",    allow: "/" },
      { userAgent: "Bingbot",      allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host:    SITE_URL,
  };
}
