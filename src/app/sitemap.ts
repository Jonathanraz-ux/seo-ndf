import type { MetadataRoute } from "next";

const baseUrl = "https://referencement-ndf.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
