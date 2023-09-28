import Image from "next/image";
import React, { Children, ReactNode } from "react";
import { SolidWorksLogo } from "@/public/home/solidWorks";
import { SuzukiLogo } from "@/public/home/suzuki";
import chassisImage from "@/public/home/ChassisImage.png";
import radiatorAnalysis from "@/public/home/RadiatorAnalysis.png";
import groupPhoto from "@/public/home/groupPhoto.jpg";
import wakos from "@/public/home/wakos.jpg";
import { Xlogo } from "@/public/footer/XLogo";
import { InstagramLogo } from "@/public/footer/InstagramLogo";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-black py-6">
      <div className="container mx-auto  text-white pb-1">
        <div className="flex justify-between items-center mx-7">
          <h1 className="text-4xl font-semibold ">Next FP(準備中サイト)</h1>
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
    <section className="flex flex-col HeroImage">
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
    </section>
  );
}

function WhatIsNextFP() {
  return (
    <section className="WhatIsNextFP">
      <div className="mx-auto max-w-screen-2xl  px-16">
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-2 gap-20">
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-8">
              <header>
                <h2 className="text-4xl">Next FPとは</h2>
              </header>
              <p>
                毎年9月に開催される学生フォーミュラ日本大会に向けてレーシングマシンを一から造るプロジェクトです
              </p>
              <p>
                マシンの設計・製作だけでなく、スポンサーとの交流やプレゼンといった経験もできます。
              </p>
              <p>
                3DCADや工作機械などによる、本格的なものづくりの楽しさを味わうことができる活動です！
              </p>
            </div>
            <div className="col-span-2 lg:col-span-1 flex">
              <Image
                className="justify-self-end"
                src={groupPhoto}
                alt="Group photo by team members"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MaskImage({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col MaskImage">
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
    </section>
  );
}

function WhatIsStudentFormula() {
  return (
    <section className="WhatIsStudentFormula">
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
    </section>
  );
}

function Design({ children }: { children: ReactNode }) {
  return (
    <section className="Design">
      <div className="bg-white" style={{ margin: "-5.5rem 0 0 0" }}>
        <div className="mx-auto max-w-screen-2xl  px-16 py-22">
          <header>
            <h2 className="text-4xl font-medium text-black">設計</h2>
          </header>
          <div className="mt-12">
            <div className="flex flex-col gap-20">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeeMore({ href }: { href: string }) {
  return (
    <section className="SeeMore">
      <a className="grid grid-cols-6 mt-8 md:mt-32 w-64" href={href}>
        <center className="border col-span-4 border-black rounded-l-[14px]">
          <p className="text-black text-thin mt-4">続きを見る</p>
        </center>
        <center className="border col-span-2 border-black border-l-0 rounded-r-[14px]">
          <p className="text-black text-2xl my-3">→</p>
        </center>
      </a>
    </section>
  );
}

function Chassis({ children }: { children: ReactNode }) {
  return (
    <section className="Chassis">
      <div className="grid grid-cols-2">
        <div className="col-span-2 md:col-span-1">
          <h1 className="text-4xl text-black">シャシー</h1>
          <p className="text-black mt-14">洗練された形状と構造。</p>
          <div className="col-span-2 md:col-span-1 flex">
            <Image
              className="self-end inline-block md:hidden mt-8"
              src={chassisImage}
              alt="Suspension analysis image"
              width={657 * 0.8}
              height={309 * 0.8}
            />
          </div>
          {children}
        </div>
        <div className="col-span-2 justify-self-end md:col-span-1 flex">
          <Image
            className="self-end hidden md:inline-block"
            src={chassisImage}
            alt="Suspension analysis image"
            width={657 * 0.8}
            height={309 * 0.8}
          />
        </div>
      </div>
    </section>
  );
}

function PowerTrain({ children }: { children: ReactNode }) {
  return (
    <section className="PowerTrain">
      <div className="grid grid-cols-2">
        <div className="col-span-2 md:col-span-1 flex">
          <Image
            className="self-end hidden md:inline-block"
            src={radiatorAnalysis}
            alt="Radiator analysis image"
          />
        </div>
        <div className="col-span-2 md:col-span-1 justify-self-start sm:justify-self-end">
          <h1 className="text-4xl text-black ">パワートレイン</h1>
          <p className="text-black mt-8">
            エンジンの力を極限まで引き出すデザイン
          </p>
          <div className="inline-block  md:hidden mt-8">
            <Image src={radiatorAnalysis} alt="Radiator analysis image" />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

function Sponsor() {
  return (
    <section className="Sponsor">
      <div className="mx-auto max-w-screen-2xl px-16 flex flex-col gap-11">
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
              <SuzukiLogo className="col-span-2 sm:col-span-1 mx-auto" />
              <SolidWorksLogo className="col-span-2 sm:col-span-1 mx-auto" />
              <Image
                className="col-span-2 sm:col-span-1 mx-auto"
                src={wakos}
                alt="wako's logo"
              ></Image>
              <h3 className="col-span-2 sm:col-span-1 mx-auto self-center text-3xl">
                And more!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Digitization() {
  return (
    <section className="Digitization">
      <div className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-16 grid grid-cols-12 gap-16 py-32">
          <div className="col-span-0 md:col-span-6 flex">
            <Image
              className="self-end hidden md:inline-block"
              src={"/home/DigitizationImage.png"}
              alt="Suspension analysis image"
              width={500}
              height={500}
            />
          </div>
          <div className="col-span-6">
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
    </section>
  );
}

function Footer() {
  return (
    <section className="Footer">
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
              <a
                className="col-start-2 col-span-1"
                href="https://twitter.com/NEXT_Formula"
              >
                <Xlogo className="fill-black stroke-black w-12 h-12" />
              </a>
              <a
                className="col-start-4 col-span-1"
                href="https://www.instagram.com/next.fp/"
              >
                <InstagramLogo className="w-12 h-12" />
              </a>
              <a
                className="col-start-6 col-span-1 mb-9"
                href="https://qiita.com/nextfp"
              >
                <img src="footer/qiita.png" width={54} height={54} />
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full">
        <div className="grid grid-cols-12 gap-8">
          <main className="col-span-full flex flex-col gap-22" id="main">
            <HeroImage />
            <WhatIsNextFP />
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
        </div>
      </div>

      <Footer />
    </>
  );
}
