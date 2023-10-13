import Image from "next/image";
import Link from "./Link";
import { XLogo, InstagramLogo, QiitaLogo, YoutubeLogo } from "@/public/svg";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-12 py-12">
        <div className="col-span-5 col-start-2">
          <p className="text-3xl text-black">
            新潟大学学生フォーミュラプロジェクト
          </p>
          <p className="mt-12 text-xl text-black">
            Mail : next-fp@eng.niigata-u.ac.jp
          </p>
          <p className="mt-12 text-xl text-black">Tel : 025-262-6923</p>
          <p className="mt-12 text-xl text-black">
            Address : <br />
            〒950-2181 新潟県新潟市西区五十嵐2の町8050 新潟大学工学部付属
            工学力教育センター(プレハブ棟)
          </p>
        </div>
        <div className="col-span-5 col-start-7">
          <div className="mt-20 grid grid-cols-5 gap-y-16">
            <div className="col-span-full sm:col-start-2 grid grid-cols-12 gap-y-10">
              <center className="col-span-full text-xl text-black">
                Follow us on
              </center>
              <Link
                className="col-span-full sm:col-span-6 "
                href="https://twitter.com/NEXT_Formula"
              >
                <XLogo className="mx-auto h-12 w-12 fill-black stroke-black" />
              </Link>
              <Link
                className="col-span-full sm:col-span-6 sm:col-start-7"
                href="https://www.instagram.com/next.fp/"
              >
                <InstagramLogo className="mx-auto h-12  w-12" />
              </Link>
              <Link
                className="col-span-full sm:col-span-6"
                href="https://www.youtube.com/channel/UC4didWGeB9XZ70Q3JeKMtTg"
              >
                <YoutubeLogo className="mx-auto fill-black w-12 h-12" />
              </Link>
              <Link
                className="col-span-full mb-9 sm:col-span-6 sm:col-start-7"
                href="https://qiita.com/nextfp"
              >
                <QiitaLogo className="mx-auto h-12 w-12 fill-black" />
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
