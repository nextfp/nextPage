import Image from "next/image";
import { ReactNode } from "react";
import radiatorAnalysis from "@/public/home/RadiatorAnalysis.webp";

export default function PowerTrain({ children }: { children: ReactNode }) {
  return (
    <section className="grid grid-cols-2">
      <div className="col-span-2 flex md:col-span-1">
        <Image
          className="hidden self-end md:inline-block"
          src={radiatorAnalysis}
          alt="Radiator analysis image"
        />
      </div>
      <div className="col-span-2 justify-self-start sm:justify-self-end md:col-span-1">
        <h1 className="text-4xl text-black ">パワートレイン</h1>
        <p className="mt-8 text-black">
          エンジンの力を極限まで引き出すデザイン
        </p>
        <div className="mt-8  inline-block md:hidden">
          <Image src={radiatorAnalysis} alt="Radiator analysis image" />
        </div>
        {children}
      </div>
    </section>
  );
}
