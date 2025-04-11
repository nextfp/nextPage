import SeeMore from "@/components/SeeMore";
import { homeData } from "@/data/home";
import { Design, DesignContent } from "./Design";
import Digitization from "./Digitization";
import { HeroImage } from "./HeroImage";
import { MaskImage } from "./MaskImage";
import Sponsor from "./Sponsor";
import { WhatIsNextFP } from "./WhatIsNextFP";
import { WhatIsStudentFormula } from "./WhatIsStudentFormula";

export default function Main() {
  return (
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
        <Sponsor />
        <Digitization />
      </div>
    </div>
  );
}
