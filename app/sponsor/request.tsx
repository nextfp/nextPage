import SeeMore from "@/components/SeeMore";

const Request = () => {
  return (
    <section className="mx-auto max-w-screen-2xl border border-white border-t-black px-16 py-12 md:gap-16">
      <div className="col-span-full flex flex-col justify-center md:col-span-6">
        <h3 className="self-center text-4xl text-black md:self-start">
          支援のお願い
        </h3>
        <div className="mt-12 grid grid-cols-3 gap-y-8 self-center lg:gap-12 xl:gap-22">
          <p className="col-span-3 text-black lg:col-span-1">
            私達の活動に資金提供をしてくださるスポンサー様を募集しています。
            <br />
            <br />
            我々の活動理念にご賛同いただき、ご支援いただけるスポンサー様のご連絡をお待ちしております。
          </p>
          <div className="col-span-3 flex flex-col items-center rounded-3xl border border-black p-8 lg:col-span-1">
            <p className="text-2xl text-black">
              スポンサーシップの内容と連絡先
            </p>
            <div className="">
              <SeeMore href="#" />
            </div>
          </div>
          <div className="col-span-3 flex flex-col items-center rounded-3xl border border-black p-8 lg:col-span-1">
            <p className="text-2xl text-black">昨年度のスポンサー</p>
            <div className="mt-8">
              <SeeMore href="#" />
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </section>
  );
};

export default Request;
