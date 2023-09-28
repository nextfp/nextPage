export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-black py-6">
      <div className="container mx-auto  pb-1 text-white">
        <div className="mx-7 flex items-center justify-between">
          <h1 className="text-4xl font-semibold ">Next FP(準備中サイト)</h1>
          <div className="flex gap-4">
            <h4 className="text-xl">スポンサー</h4>
            <h4 className="text-xl">パート紹介</h4>
          </div>
        </div>
      </div>
    </header>
  );
}
