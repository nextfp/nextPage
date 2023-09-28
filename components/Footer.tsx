import Image from "next/image";
import { Xlogo } from "@/public/footer/XLogo";
import { InstagramLogo } from "@/public/footer/InstagramLogo";
import QiitaLogo from "@/public/footer/qiita.png";

export default function Footer() {
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
              <Image src={QiitaLogo} alt="Qiita Logo" width={54} height={54} />
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
