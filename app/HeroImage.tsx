import { textParser } from "@/lib/textParser";
import { Fragment } from "react";

export const HeroImage = ({
  image,
  projectName,
}: { image: string; projectName: string }) => (
  <section className="flex flex-col">
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: image,
      }}
    >
      <div className="flex h-full">
        <div className="grid w-full grid-cols-12">
          <div className="col-span-1" />
          <div className="col-span-10 mt-28 text-5xl font-bold sm:col-span-8 sm:text-6xl md:text-7xl lg:text-8xl text-white">
            {textParser(projectName).map((line) => (
              <Fragment key={line}>
                {line}
                <br />
              </Fragment>
            ))}
          </div>
          <div className="col-span-1 sm:col-span-2" />
        </div>
      </div>
    </div>
  </section>
);
