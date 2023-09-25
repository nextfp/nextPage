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
      className="bg-cover h-screen bg-no-repeat"
      style={{
        backgroundImage: `url(/home/heroImage.png)`,
      }}
    >
      <div className="flex h-full">
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-1"></div>
          <div className="col-span-8 text-8xl mt-28 font-bold">
            <h1>
              Next Formula <br />
              Project
            </h1>
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
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12 py-32">
        <div className="col-start-2 col-span-4">
          <Image
            src={"/home/DigitizationImage.png"}
            alt="Suspension analysis image"
            width={500}
            height={500}
          />
        </div>
        <div className="col-start-7 col-span-6">
          <p className="text-4xl text-black">数字で見るNext FP</p>
          <div className="grid grid-cols-6 gap-y-16 mt-12">
            <div className="col-span-4 md:col-span-2">
              <div className="border-white border border-b-black margin text-black ">
                <p
                  className="text-4xl border-white border border-b-black margin text-black pb-4 z-10"
                  style={{ width: "2rem" }}
                >
                  35
                </p>
              </div>
              <p className="mt-3 text-xl text-black">部員数</p>
            </div>
            <div className="col-span-1" />
            <div className="col-span-4 md:col-span-2">
              <div className="border-white border border-b-black margin text-black ">
                <p
                  className="text-4xl border-white border border-b-black margin text-black pb-4 z-10"
                  style={{ width: "2rem" }}
                >
                  27
                </p>
              </div>
              <p className="mt-3 text-xl text-black">スポンサー数</p>
            </div>
            <div className="col-span-4 md:col-span-2">
              <div className="border-white border border-b-black margin text-black ">
                <p
                  className="text-4xl border-white border border-b-black margin text-black pb-4 z-10"
                  style={{ width: "2rem" }}
                >
                  22
                </p>
              </div>
              <p className="mt-3 text-xl text-black">2022年度大会総合順位</p>
            </div>
            <div className="col-span-1" />
            <div className="col-span-4 md:col-span-2">
              <div className="border-white border border-b-black margin text-black ">
                <p
                  className="text-4xl border-white border border-b-black margin text-black pb-4 z-10"
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
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12 pb-6">
        <div className="col-start-2 col-span-5">
          <p className="text-3xl text-black">
            新潟大学学生フォーミュラプロジェクト
          </p>
          <p className="text-xl text-black mt-12">
            Mail : next-fp@eng.niigata-u.ac.jp
          </p>
          <p className="text-xl text-black mt-12">Tel : 070-3880-9917</p>
          <p className="text-xl text-black mt-12">
            Address : <br />
            〒950-2181 新潟県新潟市西区五十嵐2の町8050 新潟大学工学部付属
            工学力教育センター(プレハブ棟)
          </p>
        </div>
        <div className="col-start-7 col-span-5">
          <center className="text-xl text-black mt-8">Follow us on</center>
          <div className="grid grid-cols-6 mt-20">
            <svg
              className="col-start-2 col-span-1 fill-black stroke-black w-12 h-12"
              viewBox="0 0 1200 1227"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
            <svg
              className="col-start-4 col-span-1 w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
            >
              <path
                d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"
                transform="translate(-2.5 -2.5)"
              />
            </svg>
          </div>
          <div></div>
        </div>
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
      <Footer />
    </>
  );
}
