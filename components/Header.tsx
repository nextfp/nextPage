export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-black py-6">
      <div className="container mx-auto  pb-1 text-white">
        <div className="mx-7 flex items-center justify-between">
          <a className="text-4xl font-semibold" href="./">
            Next FP(準備中サイト)
          </a>
          <div className="flex gap-4">
            <h4 className="text-xl">スポンサー</h4>
            <h4 className="text-xl">パート紹介</h4>
            <a className="text-xl" href="./">
              シャシー
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
