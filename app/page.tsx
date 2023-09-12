import Image from "next/image";
import React, { ReactNode } from "react";

function Header() {
  return (
    <div className="mt-5">
      <header className="container mx-auto  text-white pb-1">
        <div className="flex justify-between items-center mx-7">
          <h1 className="text-4xl font-semibold ">Next FP</h1>
          <div className="flex gap-4">
            <h4 className="text-xl">スポンサー</h4>
            <h4 className="text-xl">パート紹介</h4>
          </div>
        </div>
      </header>
    </div>
  );
}

function HeroImage() {
  return (
    <div
      className="bg-cover h-screen bg-no-repeat mt-14"
      style={{
        backgroundImage: `url(/home/heroImage.png)`,
      }}
    >
      <div className="flex h-full mt-4">
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-2"></div>
          <div className="col-span-8 text-6xl">
            <h1>Next Formula Project</h1>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
}

function MaskImage({ children }: { children: ReactNode }) {
  return (
    <div
      className="bg-cover h-screen bg-no-repeat"
      style={{
        backgroundImage: `url(/home/Endurance.JPG)`,
      }}
    >
      <div className="bg-[hsla(0,0%,0%,0.6)] h-full">
        <div className="flex h-full items-center">
          <div className="grid grid-cols-12 w-full justify-items-center">
            <div className="col-span-1 sm:col-span-5 lg:col-span-7 xl:col-span-8"></div>
            <div className="col-span-11 sm:col-span-6 lg:col-span-4 xl:col-span-3">
              {children}
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatIsStudentFormula() {
  return (
    <div className="max-w-sm rounded-[60px] overflow-hidden shadow-lg bg-black">
      <div className="px-[30px] py-[40px]">
        <div className="font-medium text-4xl mb-2">学生フォーミュラとは</div>
        <p className="text-base mt-10">
          車輪とドライバーがむき出しになっているレーシングカーのことをフォーミュラカーと言います。
        </p>
        <p className="text-base mt-5">
          このフォーミュラカーの最高峰がcフォーミュラワン、F1です。
        </p>
        <p className="text-base mt-5">
          これを学生のスケールで行っているのが学生フォーミュラです。
        </p>
        <p className="text-base mt-5">
          一年に一度行われている大会に向けて私たちは日々活動しています。
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroImage />
        <MaskImage>
          <WhatIsStudentFormula />
        </MaskImage>
      </main>
    </>
  );
}
