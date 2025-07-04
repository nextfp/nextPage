import powerTrainList from "@/data/powerTrain";
import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <>
      {powerTrainList.map((data) =>
        data.white ? (
          <section className="bg-white" key={data.title}>
            <div className="mx-auto max-w-screen-2xl px-8 py-22 sm:px-28">
              <header>
                <h2 className="mb-8 text-4xl font-medium text-black">
                  {data.title}
                </h2>
              </header>
              <div className="grid grid-cols-12 gap-4 md:gap-12">
                {data.element.map((element) => (
                  <React.Fragment key={element.name}>
                    <Image
                      className="col-span-full self-end lg:col-span-5 lg:col-start-1"
                      src={element.imgSrc}
                      alt={element.imgAlt}
                      width={633 * 0.8}
                      height={415 * 0.8}
                    />
                    <div className="col-span-full flex flex-col gap-6 lg:col-span-5 lg:col-start-7">
                      <h3 className="text-xl text-black">{element.name}</h3>
                      <p className="break-all text-xl text-black">
                        {element.description.split("\n").map((line) => (
                          <React.Fragment key={line}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-black" key={data.title}>
            <div className="mx-auto max-w-screen-2xl px-8 py-22 sm:px-28">
              <header>
                <h2 className="mb-8 text-4xl font-medium text-white">
                  {data.title}
                </h2>
              </header>
              <div className="grid grid-cols-12 gap-4 md:gap-12">
                {data.element.map((element) => (
                  <React.Fragment key={element.name}>
                    <div className="col-span-full flex flex-col gap-6 lg:col-span-5">
                      <h3 className="text-xl text-white">{element.name}</h3>
                      <p className="break-all text-xl text-white">
                        {element.description.split("\n").map((line, index) => (
                          <React.Fragment key={line}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                    <Image
                      className="col-span-full self-end lg:col-span-5 lg:col-start-7"
                      src={element.imgSrc}
                      alt={element.imgAlt}
                      width={633 * 0.8}
                      height={415 * 0.8}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
        ),
      )}
    </>
  );
};

export default Introduction;
