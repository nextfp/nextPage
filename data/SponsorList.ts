import sponsor from "@/type/sponsor";

const VIPsponsor: sponsor[] | null = null;

const PremiumSponsor: sponsor[] | null = null;

const StandardSponsor: sponsor[] | null = null;

const LiteSponsor: sponsor[] | null = [
  {
    title: "株式会社スズキ",
    Image: "/sponsor/suzuki.gif",
    ImageAlt: "suzuki Logo",
    ImageSize: 0.5,
    bgImage: "/sponsor/engineImage.webp",
    description:
      "エンジン本体やエンジンメンテナンスに使う部品を提供していただいています。",
    popDescription:
      "株式会社スズキは、日本の自動車メーカー。本社は静岡県浜松市中区にある。",
    homePage: "https://www.suzuki.co.jp/",
    twitter: "https://twitter.com/suzukicojpmotor",
  },
];

export { VIPsponsor, PremiumSponsor, StandardSponsor, LiteSponsor };
