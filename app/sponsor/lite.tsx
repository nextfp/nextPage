import Image from "next/image";
import { LiteSponsor } from "@/data/SponsorList";
import Link from "@/components/Link";

const Lite = () => {
  if (LiteSponsor == null) {
    return <></>;
  }
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-2xl px-16 py-12 md:gap-16">
        <div className="col-span-full flex flex-col justify-center md:col-span-6">
          <div className="grid grid-cols-6 gap-8 self-center lg:gap-12 xl:gap-22">
            {LiteSponsor.map((data, index) => (
              <div
                key={index}
                className="col-span-full md:col-span-3 lg:col-span-2"
              >
                <Link href={data.homePage} className="cursor-pointer">
                  <div className="rounded-3xl border-2 border-white bg-black h-full hover:scale-105">
                    <div className="rounded-t-2xl bg-white h-[150px]">
                      <div className="flex justify-center h-full">
                        <Image
                          className="mx-auto"
                          src={data.Image}
                          alt={data.ImageAlt}
                          width={633 * 0.5}
                          height={415 * 0.5}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-8 p-8">
                      <h4 className="text-2xl">{data.title}</h4>
                      <p className="">{data.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lite;
