import Title from "./title";
import Request from "./request";
import VIP from "./VIP";
import Standard from "./standard";
import Premium from "./premium";
import Lite from "./lite";

const Main = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-full flex flex-col" id="main">
          <Title />
          <Request />
          <div className=" bg-black ">
            <div className="mx-auto my-12 max-w-screen-2xl px-16">
              <h3 className="text-4xl text-white">スポンサーのご紹介</h3>
            </div>
            <VIP />
            <Premium />
            <Standard />
            <Lite />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
