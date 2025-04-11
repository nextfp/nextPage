import Footer from "@/components/Footer";
import Header from "@/components/Header";
import siteMetadata from "@/data/siteMetadata";
import Main from "./Main";

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
    <main className="bg-black">
      <section>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD埋め込みのため安全を確認済み
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
