import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Introduction from "./introduction";
import Title from "./title";

export const metadata = {
  title: "パワートレイン",
  description:
    "私たちのチームでは、大きく分けると2つのパートに分かれるのですが、そのうちのパワートレインパートの説明です。吸気、排気、電装、燃料、冷却、駆動といったパートがここに含まれます。どのパートも何年もの間引き継がれてきた経験をもとに、工夫を凝らした設計を毎年マシンに反映させています。",
  openGraph: {
    title: "パワートレイン",
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
            <Introduction />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
