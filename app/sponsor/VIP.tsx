import React from "react";
import Image from "next/image";
import VIPsponsor from "@/data/VIPsponsor";
import SponsorPopUp from "@/components/sponsorPopUp";

const VIP = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-16">
      <div className="flex flex-col">
        {VIPsponsor.map((data, index) => (
          <div key={index}>
            <SponsorPopUp data={data}>
              <section
                className="rounded-2xl bg-cover bg-center bg-no-repeat hover:scale-105"
                style={{ backgroundImage: "url(" + data.bgImage + ")" }}
                key={index}
              >
                <div className="rounded-2xl bg-[hsla(0,0%,0%,0.8)] hover:bg-[hsla(0,0%,0%,0.7)]">
                  <div className="flex flex-col justify-center gap-12 p-16">
                    <header className="self-center lg:self-start">
                      <h2 className="mb-8 text-4xl font-medium text-white">
                        {data.title}
                      </h2>
                    </header>
                    <div className="grid grid-cols-12 gap-4 gap-y-16 md:gap-12">
                      <div className="col-span-full  lg:col-span-5">
                        <Image
                          className="mx-auto rounded-3xl bg-white p-3"
                          src={data.Image}
                          alt={data.ImageAlt}
                          width={633 * 0.8}
                          height={415 * 0.8}
                        />
                      </div>

                      <div className="col-span-full flex flex-col justify-center gap-6 lg:col-span-5 lg:col-start-7">
                        <p className="self-center break-all text-xl text-white lg:self-start">
                          {data.description.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SponsorPopUp>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VIP;
