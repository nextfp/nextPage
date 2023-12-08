import React, { Children, ReactNode } from "react";
import Header from "@/components/Header";
import Main from "./main";
import Footer from "@/components/Footer";

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
      <Main />
      <Footer />
    </div>
  );
}
