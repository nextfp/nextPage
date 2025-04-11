import SeeMore from "@/components/SeeMore";
import React, { Children, ReactNode } from "react";
import Chassis from "./Chassis";
import Design from "./Design";
import Digitization from "./Digitization";
import HeroImage from "./HeroImage";
import MaskImage from "./MaskImage";
import PowerTrain from "./PowerTrain";
import Sponsor from "./Sponsor";
import WhatIsNextFP from "./WhatIsNextFP";
import WhatIsStudentFormula from "./WhatIsStudentFormula";

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
              <SeeMore href="/chassis" />
            </Chassis>
            <PowerTrain>
              <SeeMore href="/powerTrain" />
            </PowerTrain>
          </Design>
          <Sponsor />
          <Digitization />
        </main>
      </div>
    </div>
  );
}
