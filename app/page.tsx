import Image from "next/image";

function Header() {
  return (
    <div className="mt-5">
      <header className="container mx-auto  text-white pb-1">
        <div className="flex justify-between items-center mx-7">
          <h1 className="text-4xl font-semibold ">Next FP</h1>
          <div className="flex gap-4">
            <h4 className="text-xl">スポンサー</h4>
            <h4 className="text-xl">パート紹介</h4>
          </div>
        </div>
      </header>
    </div>
  );
}

function HeroImage() {
  return (
    <Image
      className="object-cover"
      fill
      src={"/home/heroImage.png"}
      alt="heroImage"
      style={{ zIndex: -1 }}
    />
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroImage />
      </main>
    </>
  );
}
