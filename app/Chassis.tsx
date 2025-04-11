import chassisImage from "@/public/home/ChassisImage.webp";
import Image from "next/image";
import type { ReactNode } from "react";

export default function Chassis({ children }: { children: ReactNode }) {
  return (
    <section className="grid grid-cols-2">
      <div className="col-span-2 md:col-span-1">
        <h1 className="text-4xl text-black">シャシー</h1>
        <p className="mt-14 text-black">洗練された形状と構造。</p>
        <div className="col-span-2 flex md:col-span-1">
          <Image
            className="mt-8 inline-block self-end md:hidden"
            src={chassisImage}
            alt="Suspension analysis image"
            width={657 * 0.8}
            height={309 * 0.8}
          />
        </div>
        {children}
      </div>
      <div className="col-span-2 flex justify-self-end md:col-span-1">
        <Image
          className="hidden self-end md:inline-block"
          src={chassisImage}
          alt="Suspension analysis image"
          width={657 * 0.8}
          height={309 * 0.8}
        />
      </div>
    </section>
  );
}
