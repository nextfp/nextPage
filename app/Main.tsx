import React, { Children, ReactNode } from "react";
import HeroImage from "./HeroImage";
import WhatIsNextFP from "./WhatIsNextFP";
import MaskImage from "./MaskImage";
import WhatIsStudentFormula from "./WhatIsStudentFormula";
import SeeMore from "@/components/SeeMore";
import Design from "./Design";
import Chassis from "./Chassis";
import PowerTrain from "./PowerTrain";
import Sponsor from "./Sponsor";
import Digitization from "./Digitization";

export default function Main() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-full flex flex-col gap-22" id="main">
          <HeroImage />
          <WhatIsNextFP />
          <MaskImage>
            <WhatIsStudentFormula />
          </MaskImage>
          <Design>
            <Chassis>
              <SeeMore href="#" />
            </Chassis>
            <PowerTrain>
              <SeeMore href="#" />
            </PowerTrain>
          </Design>
          <Sponsor />
          <Digitization />
        </main>
      </div>
    </div>
  );
}
