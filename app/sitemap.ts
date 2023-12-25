import { MetadataRoute } from "next";
import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = siteMetadata.siteUrl;
  const lastModified: Date = new Date();
  let staticPaths: { url: string; lastModified: Date }[] = [];

  headerNavLinks.forEach((link) => {
    staticPaths.push({
      url: baseURL + link.href,
      lastModified,
    });
  });

  staticPaths.push({
    url: baseURL + "/sponsor/detail",
    lastModified,
  });

  return [...staticPaths];
}
