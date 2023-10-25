import React from "react";
import Image from "next/image";
import Link from "@/components/Link";
import sponsorWebpage from "@/data/sponsorWebpage";
import SponsorPopUp from "@/components/sponsorPopUp";

const WebPage = () => {
  const yen400000 = {
    title: "40万円株式会社",
    Image: "/sponsor/sponsorLogoExanmple.webp",
    svg: "true",
    ImageAlt: "suzuki Logo",
    bgImage: "/sponsor/sponsorBgExample.webp",
    description:
      "ここに支援内容を書かせていただきます。\n 例:資金提供をしていただいております。",
    popDescription:
      "ここは任意の文章を指定できます。\n 例:NextFP株式会社は高い技術力を持った学生が生み出すパワフルなマシンを提供する会社です。サイトはTypeScript × Next.js × tailwind cssを採用するなどITにも力を入れています。",
    homePage: "https://www.eng.niigata-u.ac.jp/~next-fp/index.html",
    twitter: "https://twitter.com/NEXT_Formula",
  };

  const yen300000 = {
    title: "30万円株式会社",
    Image: "/sponsor/sponsorLogoExanmple.webp",
    svg: "true",
    ImageAlt: "suzuki Logo",
    bgImage: "/sponsor/sponsorBgExample.webp",
    description:
      "ここに支援内容を書かせていただきます。\n 例:資金提供をしていただいております。",
    popDescription:
      "ここは任意の文章を指定できます。\n 例:NextFP株式会社は高い技術力を持った学生が生み出すパワフルなマシンを提供する会社です。サイトはTypeScript × Next.js × tailwind cssを採用するなどITにも力を入れています。",
    homePage: "https://www.eng.niigata-u.ac.jp/~next-fp/index.html",
    twitter: "https://twitter.com/NEXT_Formula",
  };

  const yen150000 = {
    title: "15万円株式会社",
    Image: "/sponsor/sponsorLogoOnly.webp",
    svg: "true",
    ImageAlt: "suzuki Logo",
    bgImage: "/sponsor/SponsorBgExample.webp",
    description:
      "ここに支援内容を書かせていただきます。\n 例:資金提供をしていただいております。",
    popDescription:
      "ここは任意の文章を指定できます。\n 例:NextFP株式会社は高い技術力を持った学生が生み出すパワフルなマシンを提供する会社です。サイトはTypeScript × Next.js × tailwind cssを採用するなどITにも力を入れています。",
    homePage: "https://www.eng.niigata-u.ac.jp/~next-fp/index.html",
    twitter: "https://twitter.com/NEXT_Formula",
  };

  const yen50000 = {
    title: "5万円株式会社",
    Image: "/sponsor/sponsorLogoOnly.webp",
    svg: "true",
    ImageAlt: "suzuki Logo",
    bgImage: "/sponsor/SponsorBgExample.webp",
    description:
      "ここに支援内容を書かせていただきます。\n 例:資金提供をしていただいております。",
    popDescription:
      "ここは任意の文章を指定できます。\n 例:NextFP株式会社は高い技術力を持った学生が生み出すパワフルなマシンを提供する会社です。サイトはTypeScript × Next.js × tailwind cssを採用するなどITにも力を入れています。",
    homePage: "https://www.eng.niigata-u.ac.jp/~next-fp/index.html",
    twitter: "https://twitter.com/NEXT_Formula",
  };

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-3xl font-medium text-black">
        5. Webサイトへのスポンサー名の掲載
      </h3>
      <p className="text-black">
        社名やロゴ、企業の紹介文を掲載させて頂きます。
      </p>
      <div className="grid grid-cols-2 gap-8">
        {sponsorWebpage.map((data, index) => (
          <div
            key={index}
            className="col-span-full md:col-span-1 flex flex-col p-6 max-w-lg text-center text-black rounded-lg border border-gray-500 shadow xl:p-8 bg-white mx-0"
          >
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">{data.title}</span>
              <span className="text-gray-500">{data.suffix}</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              {data.description.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-16 flex flex-col gap-8">
        <h3 className="text-3xl font-medium text-black">Webサイト掲載時の例</h3>

        <SponsorPopUp data={yen400000}>
          <section
            className="rounded-2xl bg-cover bg-center bg-no-repeat hover:scale-105"
            style={{ backgroundImage: "url(" + yen400000.bgImage + ")" }}
          >
            <div className="rounded-2xl bg-[hsla(0,0%,0%,0.8)] hover:bg-[hsla(0,0%,0%,0.7)]">
              <div className="flex flex-col justify-center gap-12 p-16">
                <header className="self-center lg:self-start">
                  <h2 className="mb-8 text-4xl font-medium text-white">
                    {yen400000.title}
                  </h2>
                </header>
                <div className="grid grid-cols-12 gap-4 gap-y-16 md:gap-12">
                  <div className="col-span-full  lg:col-span-5">
                    <Image
                      className="mx-auto rounded-3xl bg-white p-3"
                      src={yen400000.Image}
                      alt={yen400000.ImageAlt}
                      width={633 * 0.8}
                      height={415 * 0.8}
                    />
                  </div>

                  <div className="col-span-full flex flex-col justify-center gap-6 lg:col-span-5 lg:col-start-7">
                    <p className="self-center break-all text-xl text-white lg:self-start">
                      {yen400000.description.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SponsorPopUp>
        <div className="grid grid-cols-2">
          <div className="col-span-full md:col-span-1">
            <SponsorPopUp data={yen300000}>
              <div className="rounded-3xl border-2 border-white bg-black hover:scale-105">
                <div
                  className="rounded-t-3xl bg-cover bg-center"
                  style={{ backgroundImage: "url(" + yen300000.bgImage + ")" }}
                >
                  <div className="h-40 w-full rounded-t-3xl bg-[hsla(0,0%,0%,0.6)] hover:bg-[hsla(0,0%,0%,0.5)]" />
                </div>

                <div className="flex flex-col gap-8 p-8">
                  <h4 className="text-2xl">{yen300000.title}</h4>
                  <p className="">{yen300000.description}</p>
                </div>
              </div>
            </SponsorPopUp>
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-full md:col-span-3 lg:col-span-2">
            <SponsorPopUp data={yen150000}>
              <div className="rounded-3xl border-2 border-white bg-black hover:scale-105">
                <div className="rounded-t-2xl bg-white">
                  <Image
                    className="mx-auto py-8"
                    src={yen150000.Image}
                    alt={yen150000.ImageAlt}
                    width={633 * 0.4}
                    height={415 * 0.4}
                  />
                </div>

                <div className="flex flex-col gap-8 p-8">
                  <h4 className="text-2xl">{yen150000.title}</h4>
                  <p className="">{yen150000.description}</p>
                </div>
              </div>
            </SponsorPopUp>
          </div>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-full md:col-span-3 lg:col-span-2">
            <Link href={yen50000.homePage} className="cursor-pointer">
              <div className="rounded-3xl border-2 border-white bg-black hover:scale-105">
                <div className="rounded-t-2xl bg-white">
                  <Image
                    className="mx-auto py-8"
                    src={yen50000.Image}
                    alt={yen50000.ImageAlt}
                    width={633 * 0.4}
                    height={415 * 0.4}
                  />
                </div>

                <div className="flex flex-col gap-8 p-8">
                  <h4 className="text-2xl">{yen50000.title}</h4>
                  <p className="">{yen50000.description}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPage;
