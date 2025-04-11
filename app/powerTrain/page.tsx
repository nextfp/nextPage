import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { Children, ReactNode } from "react";
import Main from "./main";

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
      <Main />
      <Footer />
    </div>
  );
}
