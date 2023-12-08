import SeeMore from "@/components/SeeMore";
import Image from "next/image";
import { XLogo } from "@/public/svg";
import Card from "@/components/card";

const Acsess = () => {
  return (
    <section>
      <div className="bg-black">
        <div className="mx-auto max-w-screen-2xl border border-black border-t-white px-16 py-12">
          <div className="flex w-full flex-col justify-center">
            <h3 className="self-center text-4xl text-white md:self-start">
              参加を希望される方へ
            </h3>
            <p className="col-span-3 mt-12 text-white lg:col-span-1">
              基本的に4月と10月に部員を募集していますが、それ以外の時期でも入部可能です。
              <br />
              <br />
              ページ下に記載の活動場所にて直接見学していただくか、以下のリンクよりご連絡をお願いします。
            </p>
            <div>
              <div className="mt-12 grid  grid-cols-1 gap-y-8 self-center md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12 xl:gap-22">
                <Card
                  title="X(旧Twitter)"
                  description="XのDMよりご連絡ください"
                  image="svg/XLogo.svg"
                  imageAlt="X logo"
                  imageSize={0.15}
                  src={"https://twitter.com/NEXT_Formula"}
                />
                <Card
                  title="Instagram"
                  description="InstagramのDMよりご連絡ください"
                  image="svg/InstagramLogo.svg"
                  imageAlt="instagram logo"
                  imageSize={0.15}
                  src={"https://www.instagram.com/next.fp/"}
                />
                <Card
                  title="LINE"
                  description="Lineのオープンチャットよりご連絡ください。"
                  image="svg/LINELogo.svg"
                  imageAlt="Line Logo"
                  imageSize={0.15}
                  src="https://line.me/ti/g2/R6s_beE2A6LBTygYeRxOTKlXdUkPsTfDounP7Q?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-2xl border border-black border-t-white px-16 py-12">
          <div className="flex w-full flex-col justify-center">
            <h3 className="self-center text-4xl text-white md:self-start">
              活動場所
            </h3>
            <p className="col-span-3 mt-12 text-white lg:col-span-1">
              私たちは新潟大学工学部工学力教育センターにて活動しています。
            </p>
            <div>
              <div className="mt-12 grid grid-cols-1 justify-center gap-y-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12 xl:gap-22">
                <Card
                  title="工学力教育センター"
                  description="私たちの活動場所を確保してくださっている機関のサイト"
                  image="/contact/niigata.png"
                  imageAlt="X logo"
                  imageSize={0.2}
                  src={"https://www.eng.niigata-u.ac.jp/~ecet/"}
                />
                <Image
                  className="mx-auto h-full"
                  src="/contact/route.PNG"
                  alt="route"
                  width={500}
                  height={500}
                />
                <div>
                  <iframe
                    className="h-[400px] w-full lg:h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144585.28723641054!2d139.02061388982142!3d37.88113682569675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff4c733b3f75cdb%3A0xec9e6a827acaedce!2z5paw5r2f5aSn5a2mIOW3peWtpumDqOajnw!5e0!3m2!1sja!2sjp!4v1646917829200!5m2!1sja!2sjp"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-16 py-12">
          <div className="flex w-full flex-col justify-center">
            <h3 className="self-center text-4xl text-black md:self-start">
              スポンサーやリクルートにご興味の企業様
            </h3>
            <p className="col-span-3 mt-12 text-black lg:col-span-1">
              こちらのメールアドレスまでご連絡いただけると幸いです。
              <br />
              <br />
              mail: next-fp@eng.niigata-u.ac.jp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acsess;
