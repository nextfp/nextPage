import { textParser } from "@/lib/textParser";
import Image, { type StaticImageData } from "next/image";

export const WhatIsNextFP = ({
  title,
  content,
  image,
}: {
  title: string;
  content: string;
  image: StaticImageData;
}) => (
  <section className="mx-auto max-w-screen-2xl  px-16">
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-2 gap-20">
        <div className="col-span-2 flex flex-col gap-8 lg:col-span-1">
          <header>
            <h2 className="text-4xl text-white">{title}</h2>
          </header>
          {textParser(content).map((line) => (
            <p className="text-white" key={line}>
              {line}
            </p>
          ))}
        </div>
        <div className="col-span-2 flex lg:col-span-1">
          <Image
            className="justify-self-end"
            src={image}
            alt="Group photo by team members"
          />
        </div>
      </div>
    </div>
  </section>
);
