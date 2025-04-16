import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VIP from "./VIP";
import Lite from "./lite";
import Premium from "./premium";
import Request from "./request";
import Standard from "./standard";
import Title from "./title";

export const metadata = {
  title: "スポンサー",
  description:
    "私たちのチームでは、学生規模のチームであってもモータースポーツチームとして活動しています。そのため、活動には多額の費用がかかります。そこで、私たちは様々な企業様からのご支援をいただいています。ご支援いただいた企業様のロゴをマシンや当Webサイトに掲載する、SNSで宣伝をさせていただくなどの待遇がございます。",
  openGraph: {
    title: "スポンサー",
  },
};

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <div className="w-full">
        <div className="grid grid-cols-12 gap-8">
          <main className="col-span-full flex flex-col" id="main">
            <Title />
            <Request />
            <div className=" bg-black ">
              <div className="mx-auto my-12 max-w-screen-2xl px-16">
                <h3 className="text-4xl text-white">スポンサーのご紹介</h3>
              </div>
              <VIP />
              <Premium />
              <Standard />
              <Lite />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
