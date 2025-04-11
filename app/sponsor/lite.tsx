import Link from "@/components/Link";
import { LiteSponsor } from "@/data/SponsorList";
import Image from "next/image";

const Lite = () => {
  if (LiteSponsor == null) {
    return <></>;
  }
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-2xl px-16 py-12 md:gap-16">
        <div className="col-span-full flex flex-col justify-center md:col-span-6">
          <div className="grid grid-cols-6 gap-8 self-center lg:gap-12 xl:gap-22">
            {LiteSponsor.map((data) => (
              <div
                key={data.title}
                className="col-span-full md:col-span-3 lg:col-span-2"
              >
                <Link href={data.homePage} className="cursor-pointer">
                  <div className="h-full rounded-3xl border-2 border-white bg-black hover:scale-105">
                    <div className="h-[150px] rounded-t-2xl bg-white">
                      <div className="flex h-full justify-center">
                        <Image
                          className="m-auto h-fit"
                          src={data.Image}
                          alt={data.ImageAlt}
                          width={633 * data.ImageSize}
                          height={415 * data.ImageSize}
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
