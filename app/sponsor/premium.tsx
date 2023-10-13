import React from "react";
import Image from "next/image";
import VIPsponsor from "@/data/VIPsponsor";
import SponsorPopUp from "@/components/sponsorPopUp";

const Premium = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-2xl px-16 py-12 md:gap-16">
        <div className="col-span-full flex flex-col justify-center md:col-span-6">
          <div className="mt-12 grid grid-cols-2 gap-8 self-center lg:gap-12 xl:gap-22">
            {VIPsponsor.map((data, index) => (
              <div key={index} className="col-span-full md:col-span-1">
                <SponsorPopUp data={data}>
                  <div className="rounded-3xl border border-white bg-black">
                    <div
                      className="rounded-t-3xl bg-center bg-cover"
                      style={{ backgroundImage: "url(" + data.bgImage + ")" }}
                    >
                      <div className="w-full h-40 rounded-t-3xl bg-[hsla(0,0%,0%,0.6)] hover:bg-[hsla(0,0%,0%,0.5)]" />
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
