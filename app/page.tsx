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
    <div
      className="bg-cover bg-no-repeat mt-14"
      style={{
        height: "600px",
        backgroundImage: `url(/home/heroImage.png)`,
      }}
    >
      <div className="flex h-full mt-4">
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-2"></div>
          <div className="col-span-8 text-5xl">
            <h1>Next Formula Projec</h1>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
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
