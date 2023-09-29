import Image from "next/image";
import suspensionBlack from "@/public/chassis/suspensionBlack.png";
import susprog from "@/public/chassis/susprog.png";

export default function Suspension() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-2xl px-28 py-22">
        <div className="grid grid-cols-5">
          <div className="col-span-2 flex flex-col gap-16">
            <header>
              <h2 className="text-4xl font-medium mb-8">サスペンション</h2>
            </header>
            <div className="self-center flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <h3>シミュレーションによる解析</h3>
                <p>
                  サスペンション設計ソフトでジオメトリーを計算。
                  <br />
                  ロールや転舵時のキャンバー角やトー角の変化を最適化することで優れたサスペンションシステムを実現。
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <h3>車両運動の向上</h3>
                <p>
                  高い運動性能を実現するために、ダブルウィッシュボーン式サスペンションを採用。
                  更に、アンチロールバーを搭載することでコーナリング中のロールの抑制を図っている。
                </p>
              </div>
            </div>
          </div>
          <div className="col-start-4 col-span-2">
            <center className="flex flex-col gap-8">
              <Image
                className="self-end"
                src={susprog}
                alt="susprog Image"
                //width={633 * 0.5}
                //height={415 * 0.5}
              />
              <Image
                className="self-end"
                src={suspensionBlack}
                alt="suspension Image"
                //width={1331 * 0.3}
                //height={786 * 0.3}
              />
            </center>
          </div>
        </div>
      </div>
    </section>
  );
}
