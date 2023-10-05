import Image from "next/image";
import Link from "./Link";
import { XLogo } from "@/app/components/svg";
import { InstagramLogo } from "@/app/components/svg";
import { QiitaLogo } from "@/app/components/svg";

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
          <p className="mt-12 text-xl text-black">Tel : 000-0000-0000</p>
          <p className="mt-12 text-xl text-black">
            Address : <br />
            〒950-2181 新潟県新潟市西区五十嵐2の町8050 新潟大学工学部付属
            工学力教育センター(プレハブ棟)
          </p>
        </div>
        <div className="col-span-5 col-start-7">
          <center className="mt-8 text-xl text-black">Follow us on</center>
          <div className="mt-20 grid grid-cols-6 gap-y-16">
            <Link
              className="col-span-full sm:col-span-1 sm:col-start-2"
              href="https://twitter.com/NEXT_Formula"
            >
              <XLogo className="mx-auto h-12 w-12 fill-black stroke-black" />
            </Link>
            <Link
              className="col-span-full sm:col-span-1 sm:col-start-4"
              href="https://www.instagram.com/next.fp/"
            >
              <InstagramLogo className="mx-auto h-12  w-12" />
            </Link>
            <Link
              className="col-span-full mb-9 sm:col-span-1 sm:col-start-6"
              href="https://qiita.com/nextfp"
            >
              <QiitaLogo className="mx-auto h-12 w-12 fill-black" />
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
