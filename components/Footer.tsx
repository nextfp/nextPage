import Image from "next/image";
import Link from "./Link";
import footerList from "@/data/footerList";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-12 py-12">
        <div className="col-span-5 col-start-2 flex flex-col gap-12">
          <p className="text-2xl text-black md:text-3xl">{footerList.title}</p>
          {footerList.contact.map((con) => (
            <p key={con.key} className="text-xl text-black">
              {con.key + " : "}
              {con.value.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          ))}
        </div>
        <div className="col-span-5 col-start-7">
          <div className="mt-20 grid grid-cols-5 gap-y-16">
            <div className="col-span-full grid grid-cols-12 gap-y-10 sm:col-start-2">
              <center className="col-span-full text-xl text-black">
                Follow us on
              </center>
              {footerList.link.map((link) => (
                <Link
                  key={link.name}
                  className="col-span-full sm:col-span-6 "
                  href={link.url}
                  aria-label={link.name}
                >
                  <div className="mx-auto h-fit w-fit">
                    <span
                      className="mx-auto inline-block h-12 w-12 bg-black"
                      style={{
                        maskImage: `url(${link.iconUrl})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                      }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
