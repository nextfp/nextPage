import chassisImage from "@/public/home/ChassisImage.webp";
import groupPhoto from "@/public/home/GroupPhoto.webp";
import radiatorAnalysis from "@/public/home/RadiatorAnalysis.webp";
import whiteMachine from "@/public/home/WhiteMachine.webp";

export const homeData = {
  heroImage: {
    projectName: "Next Formula \n Project",
    image: "url(/home/heroImage.webp)",
  },
  nextfp: {
    title: "Next FPとは",
    content:
      "毎年9月に開催される学生フォーミュラ日本大会に向けてレーシングマシンを一から造るプロジェクトです。 \n マシンの設計・製作だけでなく、スポンサーとの交流やプレゼンといった経験もできます。 \n 3DCADや工作機械などによる、本格的なものづくりの楽しさを味わうことができる活動です！",
    image: groupPhoto,
  },
  studentFormula: {
    maskImage: "url(/home/Endurance.webp?h=720)",
    title: "学生フォーミュラとは",
    content:
      "車輪とドライバーがむき出しになっているレーシングカーのことをフォーミュラカーと言います。 \n このフォーミュラカーの最高峰がフォーミュラワン、F1です。\n これを学生のスケールで行っているのが学生フォーミュラです。 \n 一年に一度行われている大会に向けて私たちは日々活動しています。",
  },
  design: [
    {
      position: "left",
      partName: "chassis",
      title: "シャシー",
      content: "洗練された形状と構造。",
      image: chassisImage,
      imageWidth: 657 * 0.8,
      imageHeight: 309 * 0.8,
      link: "/chassis",
    },
    {
      position: "right",
      partName: "powerTrain",
      title: "パワートレイン",
      content: "エンジンの力を極限まで引き出すデザイン",
      image: radiatorAnalysis,
      imageWidth: 0,
      imageHeight: 0,
      link: "/powerTrain",
    },
  ],
  sponsoer: {
    title: "私たちのスポンサー",
    content:
      "私たちの活動はスポンサーの皆様のご支援がなければ成り立ちません。 \n そんなスポンサーの皆様をご紹介します。",
  },
  digitization: {
    title: "数字で見るNext FP",
    image: {
      data: whiteMachine,
      alt: "white machine image",
      width: 800,
      height: 800,
    },
    contents: [
      { num: 5, caption: "部員数" },
      { num: 27, caption: "スポンサー数" },
      { num: 22, caption: "2022年度大会総合順位" },
      { num: 14, caption: "大会出場回数" },
    ],
  },
};
