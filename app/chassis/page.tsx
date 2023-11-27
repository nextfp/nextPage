import React, { Children, ReactNode } from "react";
import Header from "@/components/Header";
import Main from "./Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
