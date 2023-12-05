import React, { Children, ReactNode } from "react";
import Header from "@/components/Header";
import Main from "./Main";
import Footer from "@/components/Footer";

export const metadata = {
  title: "シャシー",
  description:
    "私たちのチームでは、大きく分けると2つのパートに分かれるのですが、そのうちのシャシーパートの説明です。サスペンション、フレーム、ステアリング、ペダル、エアロ、コックピットといったパートがここに含まれます。どのパートも何年もの間引き継がれてきた経験をもとに、工夫を凝らした設計を毎年マシンに反映させています。",
  openGraph: {
    title: "シャシー",
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
