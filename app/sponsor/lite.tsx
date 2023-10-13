import Image from "next/image";
import LiteSponsor from "@/data/liteSponsor";
import Link from "@/components/Link";

const Lite = () => {
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
                  <div className="rounded-3xl border-2 border-white bg-black hover:scale-105">
                    <div className="rounded-t-2xl bg-white">
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
                </Link>
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

export default Lite;