import Image from "next/image";
import SponsorSticker from "@/data/sponsorSticker";

const Sticker = () => {
  return (
    <>
      <h3 className="text-3xl font-medium">1.車体へのステッカー掲載</h3>
      <p>
        スポンサー様から頂いた資金、技術物品支援を見積もった金額を考慮し金額相当で車体の掲載場所や大きさをこちらで決定させていただきます。
        <br />
        <br />
        以下の写真は具体例であり、掲載場所が写真のようになるとは限りません。
      </p>
      <div className="grid grid-cols-2 gap-8">
        {SponsorSticker.map((data) => (
          <div className="col-span-full md:col-span-1">
            <div className="rounded-3xl border-2 border-white bg-black">
              <div className="rounded-t-2xl bg-white">
                <Image
                  className="mx-auto py-8"
                  src={data.img}
                  alt={data.imgAlt}
                  width={633 * 0.4}
                  height={415 * 0.4}
                />
              </div>
              <div className="flex flex-col gap-8 p-8">
                <h4 className="text-2xl">{data.title}</h4>
                <p className="">{data.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sticker;
