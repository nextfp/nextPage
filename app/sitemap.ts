import headerNavLinks from "@/data/headerNavLinks";
import siteMetadata from "@/data/siteMetadata";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = siteMetadata.siteUrl;
  const lastModified: Date = new Date();
  const staticPaths: { url: string; lastModified: Date }[] = [];

  for (const link of headerNavLinks) {
    staticPaths.push({
      url: baseURL + link.href,
      lastModified,
    });
  }

  staticPaths.push({
    url: `${baseURL}/sponsor/detail`,
    lastModified,
  });

  return [...staticPaths];
}
