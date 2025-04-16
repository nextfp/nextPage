import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { chassisData } from "@/data/chassis";
import { Introduction } from "./Introduction";
import { Title } from "./Title";

export const metadata = {
  title: chassisData.title,
  description: chassisData.description,
  openGraph: {
    title: chassisData.title,
  },
};

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <div className="w-full">
        <div className="grid grid-cols-12 gap-8">
          <main className="col-span-full flex flex-col" id="main">
            <Title
              title={chassisData.title}
              heroImage={chassisData.heroImage}
              heroImageAlt={chassisData.heroImageAlt}
            />
            <Introduction partList={chassisData.partList} />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
