import SponsorPopUp from "@/components/sponsorPopUp";
import { PremiumSponsor } from "@/data/SponsorList";
import Image from "next/image";
import React from "react";

interface sponsor {
  title: string;
  description: string;
  bgImage: string;
  Image: string;
  ImageAlt: string;
  popDescription: string;
  homePage: string;
  twitter: string;
}

const Premium = () => {
  const sponsors: sponsor[] | null = PremiumSponsor;

  if (sponsors == null) {
    return <></>;
  }
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-2xl px-16 py-12 md:gap-16">
        <div className="col-span-full flex flex-col justify-center md:col-span-6">
          <div className="mt-12 grid grid-cols-2 gap-8 self-center lg:gap-12 xl:gap-22">
            {sponsors.map((data) => (
              <div key={data.title} className="col-span-full md:col-span-1">
                <SponsorPopUp data={data}>
                  <div className="rounded-3xl border-2 border-white bg-black hover:scale-105">
                    <div
                      className="rounded-t-3xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${data.bgImage})` }}
                    >
                      <div className="h-40 w-full rounded-t-3xl bg-[hsla(0,0%,0%,0.6)] hover:bg-[hsla(0,0%,0%,0.5)]" />
                    </div>

                    <div className="flex flex-col gap-8 p-8">
                      <h4 className="text-2xl">{data.title}</h4>
                      <p className="">{data.description}</p>
                    </div>
                  </div>
                </SponsorPopUp>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
