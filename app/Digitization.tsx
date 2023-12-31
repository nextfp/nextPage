import Image from "next/image";

export default function Digitization() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-12 px-16 py-32 md:gap-16">
        <div className="hidden md:col-span-6 md:inline-block">
          <div className="flex h-full justify-end">
            <Image
              className="self-end "
              src={"/home/WhiteMachine.webp"}
              alt="Suspension analysis image"
              width={800}
              height={800}
            />
          </div>
        </div>

        <div className="col-span-12 flex flex-col justify-center md:col-span-6">
          <p className="self-center text-4xl text-black md:self-start">
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
