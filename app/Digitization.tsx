import Image from "next/image";

export default function Digitization() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-12 md:gap-16 px-16 py-32">
        <div className="md:col-span-6 hidden md:inline-block">
          <div className="flex ">
            <Image
              className=" self-end "
              src={"/home/DigitizationImage.png"}
              alt="Suspension analysis image"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 flex justify-center flex-col">
          <p className="text-4xl text-black self-center md:self-start">
            数字で見るNext FP
          </p>
          <div className="mt-12 grid grid-cols-6 gap-y-16 self-center md:self-start">
            <div className="col-span-4 md:col-span-2">
              <div className=" border border-white border-b-black text-black ">
                <p
                  className=" z-10 border border-white border-b-black pb-4 text-4xl text-black"
                  style={{ width: "2rem" }}
                >
                  35
                </p>
              </div>
              <p className="mt-3 text-xl text-black">部員数</p>
            </div>
            <div className="col-span-1" />
            <div className="col-span-4 md:col-span-2">
              <div className=" border border-white border-b-black text-black ">
                <p
                  className=" z-10 border border-white border-b-black pb-4 text-4xl text-black"
                  style={{ width: "2rem" }}
                >
                  27
                </p>
              </div>
              <p className="mt-3 text-xl text-black">スポンサー数</p>
            </div>
            <div className="col-span-4 md:col-span-2">
              <div className=" border border-white border-b-black text-black ">
                <p
                  className=" z-10 border border-white border-b-black pb-4 text-4xl text-black"
                  style={{ width: "2rem" }}
                >
                  22
                </p>
              </div>
              <p className="mt-3 text-xl text-black">2022年度大会総合順位</p>
            </div>
            <div className="col-span-1" />
            <div className="col-span-4 md:col-span-2">
              <div className=" border border-white border-b-black text-black ">
                <p
                  className=" z-10 border border-white border-b-black pb-4 text-4xl text-black"
                  style={{ width: "2rem" }}
                >
                  14
                </p>
              </div>
              <p className="mt-3 text-xl text-black">大会出場回数</p>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
}
