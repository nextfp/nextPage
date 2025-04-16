import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SeeMore from "@/components/SeeMore";
import { homeData } from "@/data/home";
import siteMetadata from "@/data/siteMetadata";
import wakos from "@/public/home/wakos.webp";
import { SolidWorks, Suzuki } from "@/public/svg";
import Image from "next/image";
import { Design, DesignContent } from "./Design";
import Digitization from "./Digitization";
import { HeroImage } from "./HeroImage";
import { MaskImage } from "./MaskImage";
import Sponsor from "./Sponsor";
import { WhatIsNextFP } from "./WhatIsNextFP";
import { WhatIsStudentFormula } from "./WhatIsStudentFormula";

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
      <div className="w-full grid grid-cols-12 gap-8">
        <div className="col-span-full flex flex-col gap-22" id="main">
          <HeroImage
            image={homeData.heroImage.image}
            projectName={homeData.heroImage.projectName}
          />
          <WhatIsNextFP
            title={homeData.nextfp.title}
            content={homeData.nextfp.content}
            image={homeData.nextfp.image}
          />
          <MaskImage image={homeData.studentFormula.maskImage}>
            <WhatIsStudentFormula
              title={homeData.studentFormula.title}
              content={homeData.studentFormula.content}
            />
          </MaskImage>
          <Design>
            {homeData.design.map((part) => (
              <DesignContent
                key={part.partName}
                position={part.position as "left" | "right"}
                partName={part.partName}
                title={part.title}
                content={part.content}
                image={part.image}
                imageWidth={part.imageWidth}
                imageHeight={part.imageHeight}
              >
                <SeeMore href={part.link} />
              </DesignContent>
            ))}
          </Design>
          <Sponsor
            title={homeData.sponsoer.title}
            content={homeData.sponsoer.content}
          >
            <Suzuki className="" />
            <SolidWorks className="" />
            <Image className="" src={wakos} alt="wako's logo" />
          </Sponsor>
          <Digitization
            title={homeData.digitization.title}
            image={homeData.digitization.image}
            contents={homeData.digitization.contents}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
