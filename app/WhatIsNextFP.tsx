import Image from "next/image";
import groupPhoto from "@/public/home/GroupPhoto.webp";

export default function WhatIsNextFP() {
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
