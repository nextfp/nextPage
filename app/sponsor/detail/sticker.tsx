import Image from "next/image";
import SponsorSticker from "@/data/sponsorSticker";

const Sticker = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-3xl font-medium text-black">
        1.車体へのステッカー掲載
      </h3>
      <p className="text-black">
        スポンサー様から頂いた資金、技術物品支援を見積もった金額を考慮し金額相当で車体の掲載場所や大きさをこちらで決定させていただきます。
        <br />
        <br />
        以下の写真は具体例であり、掲載場所が写真のようになるとは限りません。
      </p>
      <div className="grid grid-cols-2 gap-8">
        {SponsorSticker.map((data) => (
          <div key={data.title} className="col-span-full md:col-span-1">
            <div className="rounded-3xl border-2 border-black bg-white">
              <div
                className="h-44 rounded-t-3xl bg-cover bg-center"
                style={{ backgroundImage: `url(${data.img})` }}
              />
              <div className="flex flex-col gap-8 p-8">
                <h4 className="text-3xl font-bold text-black">{data.title}</h4>
                <p className="text-black">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sticker;
