import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import siteMetadata from "@/data/siteMetadata";

const noto = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "JP",
    type: "website",
  },
  twitter: {
    site: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteMetadata.language}>
      <link rel="apple-touch-icon" sizes="76x76" href="/nextFP.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/nextFP.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/nextFP.png" />
      <body className={noto.className}>{children}</body>
    </html>
  );
}
