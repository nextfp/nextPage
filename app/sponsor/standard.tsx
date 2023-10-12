import Image from "next/image";
import VIPsponsor from "@/data/VIPsponsor";
import SponsorPopUp from "@/components/sponsorPopUp";

const Standard = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-2xl px-16 py-12 md:gap-16">
        <div className="col-span-full flex flex-col justify-center md:col-span-6">
          <div className="mt-12 grid grid-cols-6 gap-8 self-center lg:gap-12 xl:gap-22">
            {VIPsponsor.map((data, index) => (
              <div
                key={index}
                className="col-span-full md:col-span-3 lg:col-span-2"
              >
                <SponsorPopUp data={data}>
                  <div className="rounded-3xl border border-white bg-black">
                    <div className="rounded-t-3xl bg-white">
                      <Image
                        className="mx-auto py-8"
                        src={data.Image}
                        alt={data.ImageAlt}
                        width={633 * 0.4}
                        height={415 * 0.4}
                      />
                    </div>

                    <div className="flex flex-col gap-8 p-8">
                      <h4 className="text-2xl">{data.title}</h4>
                      <p className="">{data.description}</p>
                    </div>
                  </div>
                </SponsorPopUp>
              </div>
            ))}
            <div className="col-span-3 flex flex-col items-center rounded-3xl border border-black p-8 lg:col-span-1">
              <p className="text-2xl text-black">
                スポンサーシップの内容と連絡先
              </p>
              <div className=""></div>
            </div>
            <div className="col-span-3 flex flex-col items-center rounded-3xl border border-black p-8 lg:col-span-1">
              <p className="text-2xl text-black">昨年度のスポンサー</p>
              <div className="mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standard;
