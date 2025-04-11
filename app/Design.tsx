import { textParseWithBreak } from "@/lib/textParser";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export const Design = ({ children }: { children: ReactNode }) => (
  <section className="bg-white" style={{ margin: "-5.5rem 0 0 0" }}>
    <div className="mx-auto max-w-screen-2xl  px-16 py-22">
      <header>
        <h2 className="text-4xl font-medium text-black">設計</h2>
      </header>
      <div className="mt-12">
        <div className="flex flex-col gap-20">{children}</div>
      </div>
    </div>
  </section>
);

export const DesignContent = ({
  position,
  partName,
  title,
  content,
  image,
  imageWidth,
  imageHeight,
  children,
}: {
  position: "left" | "right";
  partName: string;
  title: string;
  content: string;
  image: StaticImageData;
  imageWidth: number;
  imageHeight: number;
  children: ReactNode;
}) =>
  position === "left" ? (
    <section className="grid grid-cols-2">
      <div className="col-span-2 md:col-span-1">
        <h1 className="text-4xl text-black">{title}</h1>
        <p className="mt-14 text-black">{textParseWithBreak(content)}</p>
        <div className="col-span-2 flex md:col-span-1">
          <Image
            className="mt-8 inline-block self-end md:hidden"
            src={image}
            alt={`${partName} image`}
            {...(imageWidth ? { width: imageWidth } : {})}
            {...(imageHeight ? { height: imageHeight } : {})}
          />
        </div>
        {children}
      </div>
      <div className="col-span-2 flex justify-self-end md:col-span-1">
        <Image
          className="hidden self-end md:inline-block"
          src={image}
          alt={`${partName} image`}
          {...(imageWidth ? { width: imageWidth } : {})}
          {...(imageHeight ? { height: imageHeight } : {})}
        />
      </div>
    </section>
  ) : (
    <section className="grid grid-cols-2">
      <div className="col-span-2 flex md:col-span-1">
        <Image
          className="hidden self-end md:inline-block"
          src={image}
          alt={`${partName} image`}
          {...(imageWidth ? { width: imageWidth } : {})}
          {...(imageHeight ? { height: imageHeight } : {})}
        />
      </div>
      <div className="col-span-2 justify-self-start sm:justify-self-end md:col-span-1">
        <h1 className="text-4xl text-black ">{title}</h1>
        <p className="mt-8 text-black">{textParseWithBreak(content)}</p>
        <div className="mt-8  inline-block md:hidden">
          <Image
            src={image}
            alt={`${partName} image`}
            {...(imageWidth ? { width: imageWidth } : {})}
            {...(imageHeight ? { height: imageHeight } : {})}
          />
        </div>
        {children}
      </div>
    </section>
  );
