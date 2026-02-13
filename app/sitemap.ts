import type { MetadataRoute } from "next";
import articlesData from "@/src/articles/articles.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zacznijtrenowac.pl";

  const blogArticles: MetadataRoute.Sitemap = articlesData.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/trenerzy/dariusz-sklarczyk`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/trenerzy/asia-rozmus-sklarczyk`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogArticles,
  ];
}
