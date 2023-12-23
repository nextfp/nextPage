import { MetadataRoute } from "next";
import siteMetadata from "@/data/siteMetadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = siteMetadata.siteUrl;
  const lastModified = new Date();

  const staticPaths = [
    {
      url: baseURL,
      lastModified,
    },
  ];

  return [...staticPaths];
}
