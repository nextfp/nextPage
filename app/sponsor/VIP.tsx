import React from "react";
import Image from "next/image";
import VIPsponsor from "@/data/VIPsponsor";
import SponsorPopUp from "@/components/sponsorPopUp";

const VIP = () => {
  return (
    <>
      {VIPsponsor.map((data, index) => (
        <div key={index}>
          <SponsorPopUp data={data}>
            <section
              className="bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: "url(" + data.bgImage + ")" }}
              key={index}
            >
              <div className="bg-[hsla(0,0%,0%,0.8)] hover:bg-[hsla(0,0%,0%,0.7)]">
                <div className="mx-auto max-w-screen-2xl px-8 py-22 sm:px-28">
                  <div className="flex flex-col gap-12 justify-center">
                    <header className="self-center lg:self-start">
                      <h2 className="mb-8 text-4xl font-medium text-white">
                        {data.title}
                      </h2>
                    </header>
                    <div className="grid grid-cols-12 gap-y-16 gap-4 md:gap-12">
                      <div className="col-span-full  lg:col-span-5">
                        <Image
                          className="mx-auto"
                          src={data.Image}
                          alt={data.ImageAlt}
                          width={633 * 0.8}
                          height={415 * 0.8}
                        />
                      </div>

                      <div className="col-span-full flex flex-col gap-6 lg:col-span-5 lg:col-start-7">
                        <p className="break-all text-xl text-white self-center lg:self-start">
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
              </div>
            </section>
          </SponsorPopUp>
        </div>
      ))}
    </>
  );
};

export default VIP;
