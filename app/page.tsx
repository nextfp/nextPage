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
      <div className="container mx-auto  pb-1 text-white">
        <div className="mx-7 flex items-center justify-between">
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
    <section className="flex flex-col">
      <div
        className="h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/home/heroImage.png)`,
        }}
      >
        <div className="flex h-full">
          <div className="grid w-full grid-cols-12">
            <div className="col-span-1"></div>
            <div className="col-span-8 mt-28 text-8xl font-bold">
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
    <section className="mx-auto max-w-screen-2xl  px-16">
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-2 gap-20">
          <div className="col-span-2 flex flex-col gap-8 lg:col-span-1">
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
          <div className="col-span-2 flex lg:col-span-1">
            <Image
              className="justify-self-end"
              src={groupPhoto}
              alt="Group photo by team members"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

function MaskImage({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col">
      <div
        className="h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/home/Endurance.webp?h=720)`,
        }}
      >
        <div className="h-full bg-[hsla(0,0%,0%,0.6)]">
          <div className="flex h-full items-center">
            <div className="grid w-full grid-cols-12 justify-items-center">
              <div className=""></div>
              <div className="col-span-11 col-start-2 sm:col-span-6 sm:col-start-5 lg:col-span-4 lg:col-start-7 xl:col-span-3 xl:col-start-8">
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
    <section className="max-w-sm overflow-hidden rounded-[60px] bg-black shadow-lg">
      <div className="px-[30px] py-[40px]">
        <div className="mb-2 text-4xl font-medium">学生フォーミュラとは</div>
        <p className="mt-10 text-base">
          車輪とドライバーがむき出しになっているレーシングカーのことをフォーミュラカーと言います。
        </p>
        <p className="mt-5 text-base">
          このフォーミュラカーの最高峰がcフォーミュラワン、F1です。
        </p>
        <p className="mt-5 text-base">
          これを学生のスケールで行っているのが学生フォーミュラです。
        </p>
        <p className="mt-5 text-base">
          一年に一度行われている大会に向けて私たちは日々活動しています。
        </p>
      </div>
    </section>
  );
}

function Design({ children }: { children: ReactNode }) {
  return (
    <section className="bg-white" style={{ margin: "-5.5rem 0 0 0" }}>
      <div className="mx-auto max-w-screen-2xl  px-16 py-22">
        <header>
          <h2 className="text-4xl font-medium text-black">設計</h2>
        </header>
        <div className="mt-12">
          <div className="flex flex-col gap-20">{children}</div>
        </div>
      </div>
    </section>
  );
}

function SeeMore({ href }: { href: string }) {
  return (
    <a className="mt-8 grid w-64 grid-cols-6 md:mt-32" href={href}>
      <center className="col-span-4 rounded-l-[14px] border border-black">
        <p className="mt-4 text-black">続きを見る</p>
      </center>
      <center className="col-span-2 rounded-r-[14px] border border-l-0 border-black">
        <p className="my-3 text-2xl text-black">→</p>
      </center>
    </a>
  );
}

function Chassis({ children }: { children: ReactNode }) {
  return (
    <section className="grid grid-cols-2">
      <div className="col-span-2 md:col-span-1">
        <h1 className="text-4xl text-black">シャシー</h1>
        <p className="mt-14 text-black">洗練された形状と構造。</p>
        <div className="col-span-2 flex md:col-span-1">
          <Image
            className="mt-8 inline-block self-end md:hidden"
            src={chassisImage}
            alt="Suspension analysis image"
            width={657 * 0.8}
            height={309 * 0.8}
          />
        </div>
        {children}
      </div>
      <div className="col-span-2 flex justify-self-end md:col-span-1">
        <Image
          className="hidden self-end md:inline-block"
          src={chassisImage}
          alt="Suspension analysis image"
          width={657 * 0.8}
          height={309 * 0.8}
        />
      </div>
    </section>
  );
}

function PowerTrain({ children }: { children: ReactNode }) {
  return (
    <section className="grid grid-cols-2">
      <div className="col-span-2 flex md:col-span-1">
        <Image
          className="hidden self-end md:inline-block"
          src={radiatorAnalysis}
          alt="Radiator analysis image"
        />
      </div>
      <div className="col-span-2 justify-self-start sm:justify-self-end md:col-span-1">
        <h1 className="text-4xl text-black ">パワートレイン</h1>
        <p className="mt-8 text-black">
          エンジンの力を極限まで引き出すデザイン
        </p>
        <div className="mt-8  inline-block md:hidden">
          <Image src={radiatorAnalysis} alt="Radiator analysis image" />
        </div>
        {children}
      </div>
    </section>
  );
}

function Sponsor() {
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

function Digitization() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-12 gap-16 px-16 py-32">
        <div className="flex md:col-span-6">
          <Image
            className="hidden self-end md:inline-block"
            src={"/home/DigitizationImage.png"}
            alt="Suspension analysis image"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-6">
          <p className="text-4xl text-black">数字で見るNext FP</p>
          <div className="mt-12 grid grid-cols-6 gap-y-16">
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

function Footer() {
  return (
    <footer className="bg-white">
      <div className="grid grid-cols-12 pb-6">
        <div className="col-span-5 col-start-2">
          <p className="text-3xl text-black">
            新潟大学学生フォーミュラプロジェクト
          </p>
          <p className="mt-12 text-xl text-black">
            Mail : next-fp@eng.niigata-u.ac.jp
          </p>
          <p className="mt-12 text-xl text-black">Tel : 070-3880-9917</p>
          <p className="mt-12 text-xl text-black">
            Address : <br />
            〒950-2181 新潟県新潟市西区五十嵐2の町8050 新潟大学工学部付属
            工学力教育センター(プレハブ棟)
          </p>
        </div>
        <div className="col-span-5 col-start-7">
          <center className="mt-8 text-xl text-black">Follow us on</center>
          <div className="mt-20 grid grid-cols-6">
            <a
              className="col-span-1 col-start-2"
              href="https://twitter.com/NEXT_Formula"
            >
              <Xlogo className="h-12 w-12 fill-black stroke-black" />
            </a>
            <a
              className="col-span-1 col-start-4"
              href="https://www.instagram.com/next.fp/"
            >
              <InstagramLogo className="h-12 w-12" />
            </a>
            <a
              className="col-span-1 col-start-6 mb-9"
              href="https://qiita.com/nextfp"
            >
              <Image
                src="footer/qiita.png"
                alt="Qiita Logo"
                width={54}
                height={54}
              />
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
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
