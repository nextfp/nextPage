import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Acsess from "./Acsess";
import Title from "./title";

export const metadata = {
  title: "お問い合わせ",
  description:
    "興味を持っていただいた方向けに、どのような手段での連絡をお願いしたいかをご案内しております。",
  openGraph: {
    title: "お問い合わせ",
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
            <Acsess />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
