"use client";
import { data } from "autoprefixer";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { HomeLogo, XLogo } from "@/public/svg";
import Link from "./Link";

const SponsorPopUp = ({
  children,
  data,
}: {
  children: ReactNode;
  data: {
    title: string;
    description: string;
    bgImage: string;
    Image: string;
    ImageAlt: string;
    popDescription: string;
    homePage: string;
    twitter: string;
  };
}) => {
  const [popshow, setpopshow] = useState(false);

  const handleTogglePop = () => {
    setpopshow(() => {
      // スクロール禁止
      document.body.style.overflow = "hidden";
      return true;
    });
  };

  const handleClosePop = () => {
    setpopshow(() => {
      // スクロール禁止
      document.body.style.overflow = "auto";
      return false;
    });
  };

  const closeWithClickOutSideMethod = (e: React.MouseEvent) => {
    console.log("e.target", e.target);
    console.log("e.currentTarget", e.currentTarget);
    if (e.target === e.currentTarget) {
      //メニューの外側をクリックしたときだけメニューを閉じる
      console.log("メニューの外側をクリックした");
      handleClosePop();
    } else {
      console.log("メニューの内側をクリックした");
    }
  };

  return (
    <>
      <div
        className="cursor-pointer"
        aria-label="Toggle Menu"
        onClick={handleTogglePop}
      >
        {children}
      </div>
      <div
        className={`fixed left-4 top-4 z-10 h-full w-full duration-300 ease-in-out ${
          popshow ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div
          className="flex h-full w-full items-center justify-center"
          onClick={(e) => {
            closeWithClickOutSideMethod(e);
          }}
        >
          <div className="mt-40 h-[700px] w-[400px] bg-black md:w-[700px]">
            <div className="flex justify-end">
              <button
                className="mr-8 mt-8 h-8 w-8"
                aria-label="Toggle Menu"
                onClick={handleClosePop}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-gray-900 dark:text-gray-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-8 flex h-full flex-col gap-12 px-12">
              <h3 className="text-2xl font-bold text-white">{data.title}</h3>
              <Image
                className="mx-auto"
                src={data.Image}
                alt={data.ImageAlt}
                width={633 * 0.8}
                height={415 * 0.8}
              />
              <p className="text-white">
                {data.popDescription.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <div className="flex gap-8 self-center">
                {data.homePage == "" ? (
                  <></>
                ) : (
                  <div className="h-fit w-fit rounded-full border border-white p-2">
                    <Link href={data.homePage}>
                      <HomeLogo className="fill-white" />
                    </Link>
                  </div>
                )}
                {data.twitter == "" ? (
                  <></>
                ) : (
                  <div className="h-fit w-fit rounded-full border border-white p-3">
                    <Link href={data.twitter}>
                      <XLogo className="h-4 w-4 fill-white" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorPopUp;
