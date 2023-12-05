import React, { Children, ReactNode } from "react";
import siteMetadata from "@/data/siteMetadata";

import Header from "@/components/Header";
import Main from "./Main";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteMetadata.title,
  url: siteMetadata.siteUrl,
  logo: siteMetadata.siteLogo,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "phone number",
    contactType: siteMetadata.telephone,
    areaServed: "JP",
    availableLanguage: "Japanese",
  },
  sameAs: [
    siteMetadata.github,
    siteMetadata.twitter,
    siteMetadata.youtube,
    siteMetadata.instagram,
  ],
};

export default function Home() {
  return (
    <>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        ></script>
      </section>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
