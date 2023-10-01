import React from "react";
import Image from "next/image";
import chassisList from "@/data/chassis";

const Introduction = () => {
  return (
    <>
      {chassisList.map((data) =>
        data.white ? (
          <section className="bg-white">
            <div className="mx-auto max-w-screen-2xl px-28 py-22">
              <header>
                <h2 className="text-4xl font-medium text-black mb-8">
                  {data.title}
                </h2>
              </header>
              <div className="grid grid-cols-12 gap-4 md:gap-12">
                {data.element.map((element) => (
                  <>
                    <Image
                      className="lg:col-start-1 col-span-full lg:col-span-5 self-end"
                      src={element.imgSrc}
                      alt={element.imgAlt}
                      width={633 * 0.8}
                      height={415 * 0.8}
                    />
                    <div className="col-span-full lg:col-span-5 flex flex-col gap-6">
                      <h3 className="text-xl text-black">{element.name}</h3>
                      <p className="text-xl break-all text-black">
                        {element.description.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-black">
            <div className="mx-auto max-w-screen-2xl px-28 py-22">
              <header>
                <h2 className="text-4xl font-medium mb-8">{data.title}</h2>
              </header>
              <div className="grid grid-cols-12 gap-4 md:gap-12">
                {data.element.map((element) => (
                  <>
                    <div className="col-span-full lg:col-span-5 flex flex-col gap-6">
                      <h3 className="text-xl">{element.name}</h3>
                      <p className="text-xl break-all">
                        {element.description.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                    <Image
                      className="lg:col-start-7 col-span-full lg:col-span-5 self-end"
                      src={element.imgSrc}
                      alt={element.imgAlt}
                      width={633 * 0.8}
                      height={415 * 0.8}
                    />
                  </>
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
