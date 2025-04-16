import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PR from "./PR";
import Poster from "./poster";
import Report from "./report";
import SponsorBenefit from "./sponsorBenefit";
import SponsorSupportForm from "./sponsorSupportForm";
import Sticker from "./sticker";
import Title from "./title";
import WebPageExample from "./webPageExample";
import WebPage from "./webpage";

export const metadata = {
  title: "スポンサーの内容と連絡先",
  description:
    "ご支援していただきたいスポンサーの支援内容の形態と待遇の内容をこのページにてご説明させていただいております。",
  openGraph: {
    title: "スポンサーのご支援内容",
  },
};

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <div className="w-full">
        <div className="grid grid-cols-12 gap-8">
          <main className="col-span-full flex flex-col" id="main">
            <Title />
            <SponsorSupportForm />
            <SponsorBenefit>
              <Sticker />
              <PR />
              <Poster />
              <Report />
              <WebPage />
            </SponsorBenefit>
            <WebPageExample />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
