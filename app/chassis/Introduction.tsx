import React from "react";
import Image from "next/image";
import chassisList from "@/data/chassis";

const Introduction = () => {
  return (
    <>
      {chassisList.map((data, index) =>
        data.white ? (
          <section className="bg-white" key={index}>
            <div className="mx-auto max-w-screen-2xl px-28 py-22">
              <header>
                <h2 className="mb-8 text-4xl font-medium text-black">
                  {data.title}
                </h2>
              </header>
              <div className="grid grid-cols-12 gap-4 md:gap-12">
                {data.element.map((element, index) => (
                  <React.Fragment key={index}>
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
                        {element.description.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
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
          <section className="bg-black" key={index}>
            <div className="mx-auto max-w-screen-2xl px-28 py-22">
              <header>
                <h2 className="mb-8 text-4xl font-medium">{data.title}</h2>
              </header>
              <div className="grid grid-cols-12 gap-4 md:gap-12">
                {data.element.map((element, index) => (
                  <React.Fragment key={index}>
                    <div className="col-span-full flex flex-col gap-6 lg:col-span-5">
                      <h3 className="text-xl">{element.name}</h3>
                      <p className="break-all text-xl">
                        {element.description.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
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
        )
      )}
    </>
  );
};

export default Introduction;
