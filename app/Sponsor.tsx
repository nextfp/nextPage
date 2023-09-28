import Image from "next/image";
import wakos from "@/public/home/wakos.jpg";
import { SuzukiLogo } from "@/public/home/suzuki";
import { SolidWorksLogo } from "@/public/home/solidWorks";

export default function Sponsor() {
  return (
    <section className="mx-auto flex max-w-screen-2xl flex-col gap-11 px-16">
      <h1 className="text-4xl">私たちのスポンサー</h1>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-4 xl:col-span-2">
          <p>
            私たちの活動はスポンサーの皆様のご支援がなければ成り立ちません。
          </p>
          <p className="mt-3">そんなスポンサーの皆様をご紹介します。</p>
        </div>

        <div className="col-span-4 xl:col-span-2">
          <div className="grid grid-cols-2 gap-16 gap-y-28">
            <SuzukiLogo className="col-span-2 mx-auto sm:col-span-1" />
            <SolidWorksLogo className="col-span-2 mx-auto sm:col-span-1" />
            <Image
              className="col-span-2 mx-auto sm:col-span-1"
              src={wakos}
              alt="wako's logo"
            ></Image>
            <h3 className="col-span-2 mx-auto self-center text-3xl sm:col-span-1">
              And more!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
