import SeeMore from "@/components/SeeMore";
import { homeData } from "@/data/home";
import Chassis from "./Chassis";
import Design from "./Design";
import Digitization from "./Digitization";
import { HeroImage } from "./HeroImage";
import MaskImage from "./MaskImage";
import PowerTrain from "./PowerTrain";
import Sponsor from "./Sponsor";
import { WhatIsNextFP } from "./WhatIsNextFP";
import WhatIsStudentFormula from "./WhatIsStudentFormula";

export default function Main() {
  return (
    <div className="w-full grid grid-cols-12 gap-8">
      <div className="col-span-full flex flex-col gap-22" id="main">
        <HeroImage
          image={homeData.heroImage.image}
          projectName={homeData.heroImage.projectName}
        />
        <WhatIsNextFP
          title={homeData.whatIs.title}
          content={homeData.whatIs.content}
          image={homeData.whatIs.image}
        />
        <MaskImage>
          <WhatIsStudentFormula />
        </MaskImage>
        <Design>
          <Chassis>
            <SeeMore href="/chassis" />
          </Chassis>
          <PowerTrain>
            <SeeMore href="/powerTrain" />
          </PowerTrain>
        </Design>
        <Sponsor />
        <Digitization />
      </div>
    </div>
  );
}
