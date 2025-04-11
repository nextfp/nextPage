import wakos from "@/public/home/wakos.webp";
import { SolidWorks, Suzuki } from "@/public/svg";
import Image from "next/image";

export default function Sponsor() {
  return (
    <section className="mx-auto flex max-w-screen-2xl flex-col gap-11 px-16">
      <h1 className="text-3xl md:text-4xl">私たちのスポンサー</h1>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-4 xl:col-span-2">
          <p>
            私たちの活動はスポンサーの皆様のご支援がなければ成り立ちません。
          </p>
          <p className="mt-3">そんなスポンサーの皆様をご紹介します。</p>
        </div>

        <div className="col-span-4 xl:col-span-2">
          <div className="grid grid-cols-2 gap-8 gap-y-12 lg:gap-16 lg:gap-y-28">
            <div className="col-span-2 sm:col-span-1">
              <Suzuki className="" />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <SolidWorks className="" />
            </div>
            <div className="col-span-2 mx-auto sm:col-span-1">
              <Image className="" src={wakos} alt="wako's logo" />
            </div>
            <p className="col-span-2 mx-auto self-center text-3xl sm:col-span-1">
              And more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
