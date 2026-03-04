import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: SITE_URL,                      lastModified: now, changeFrequency: "monthly", priority: 1    },
    { url: `${SITE_URL}/#habitaciones`,   lastModified: now, changeFrequency: "monthly", priority: 0.9  },
    { url: `${SITE_URL}/#adn`,            lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/#servicios`,      lastModified: now, changeFrequency: "monthly", priority: 0.8  },
    { url: `${SITE_URL}/#rankings`,       lastModified: now, changeFrequency: "weekly",  priority: 0.7  },
    { url: `${SITE_URL}/#contacto`,       lastModified: now, changeFrequency: "monthly", priority: 0.7  },
  ];
}
