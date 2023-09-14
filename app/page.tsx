import Image from "next/image";
import React, { Children, ReactNode } from "react";

function Header() {
  return (
    <header className="mt-5">
      <div className="container mx-auto  text-white pb-1">
        <div className="flex justify-between items-center mx-7">
          <h1 className="text-4xl font-semibold ">Next FP</h1>
          <div className="flex gap-4">
            <h4 className="text-xl">スポンサー</h4>
            <h4 className="text-xl">パート紹介</h4>
          </div>
        </div>
      </div>
    </header>
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
        backgroundImage: `url(/home/Endurance.webp?h=720)`,
      }}
    >
      <div className="bg-[hsla(0,0%,0%,0.6)] h-full">
        <div className="flex h-full items-center">
          <div className="grid grid-cols-12 w-full justify-items-center">
            <div className=""></div>
            <div className="col-start-2 sm:col-start-5 lg:col-start-7 xl:col-start-8 col-span-11 sm:col-span-6 lg:col-span-4 xl:col-span-3">
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

function Design({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <div>
        <div className="grid grid-cols-12">
          <h1 className="col-start-2 col-span-2 text-4xl font-medium text-black mt-32">
            設計
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
}

function SeeMore({ href }: { href: string }) {
  return (
    <a className="grid grid-cols-6 mt-32 w-64" href={href}>
      <center className="border col-span-4 border-black rounded-l-[14px]">
        <p className="text-black text-thin mt-4">続きを見る</p>
      </center>
      <center className="border col-span-2 border-black border-l-0 rounded-r-[14px]">
        <p className="text-black text-2xl my-3">→</p>
      </center>
    </a>
  );
}

function Chassis({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-12 py-16 bg-white">
      <div className="col-start-2 col-span-3">
        <h1 className="text-4xl text-black ">シャシー</h1>
        <p className="text-black mt-8">洗練された形状と構造。</p>
        {children}
      </div>
      <div className="col-start-7 col-span-4">
        <Image
          src={"/home/ChassisImage.png"}
          alt="Suspension analysis image"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

function PowerTrain({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-12 py-16 bg-white">
      <div className="col-start-2 col-span-4">
        <Image
          src={"/home/RadiatorAnalysis.png"}
          alt="Suspension analysis image"
          width={500}
          height={500}
        />
      </div>
      <div className="col-start-8 col-span-3">
        <h1 className="text-4xl text-black ">パワートレイン</h1>
        <p className="text-black mt-8">
          エンジンの力を極限まで引き出すデザイン
        </p>
        {children}
      </div>
    </div>
  );
}

function Sponsor() {
  return (
    <div className="grid grid-cols-12 justify-items-center md:justify-items-start my-32">
      <h1 className="md:col-start-2 col-span-11 text-4xl">
        私たちのスポンサー
      </h1>
      <div className="col-span-12 grid grid-cols-12">
        <div className="col-start-2 col-span-10 md:col-span-4 md:col-start-2 my-16 justify-items-center md:justify-items-start">
          <p>
            私たちの活動はスポンサーの皆様のご支援がなければ成り立ちません。
          </p>
          <p className="mt-3">そんなスポンサーの皆様をご紹介します。</p>
        </div>
        <div className="col-span-12 md:col-start-7 md:col-span-6">
          <div className="grid gap-16 grid-cols-6 justify-items-center items-center">
            <Image
              className="col-start-2 col-span-4 md:col-start-1 md:col-span-3"
              src={"/home/suzukiLogo.png"}
              alt="Suzuki.co.ltd logo"
              width={600}
              height={600}
            />
            <Image
              className="col-start-2 col-span-4 md:col-start-4 md:col-span-3"
              src={"/home/IgusLogo.png"}
              alt="Suspension analysis image"
              width={500}
              height={500}
            />
            <Image
              className="col-start-2 col-span-4 md:col-start-1 md:col-span-3"
              src={"/home/solidWorksLogo.png"}
              alt="Suspension analysis image"
              width={500}
              height={500}
            />
            <h1 className="col-start-2 col-span-4 md:col-start-4 md:col-span-3 text-3xl">
              And more!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function Digitization() {
  return <div className="bg-white" style={{ height: "500px" }}></div>;
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
        <Design>
          <Chassis>
            <SeeMore href="#" />
          </Chassis>
          <PowerTrain>
            <SeeMore href="#" />
          </PowerTrain>
        </Design>
        <Sponsor />
        <Digitization />
      </main>
    </>
  );
}
