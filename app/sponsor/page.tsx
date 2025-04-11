import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { Children, ReactNode } from "react";
import Main from "./main";

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
      <Main />
      <Footer />
    </div>
  );
}
