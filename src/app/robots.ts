import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/terms", "/privacy"],
      disallow: ["/private/"],
    },
    sitemap: "https://aimugshotremoval.com/sitemap.xml",
  };
}
