import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "./main";

export const metadata = {
  title: "スポンサーの内容と連絡先",
  description:
    "ご支援していただきたいスポンサーの支援内容の形態と待遇の内容をこのページにてご説明させていただいております。",
  openGraph: {
    title: "スポンサーのご支援内容",
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
