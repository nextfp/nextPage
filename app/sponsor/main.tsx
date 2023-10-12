import Title from "./title";
import Request from "./request";
import VIP from "./VIP";

const Main = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-full flex flex-col" id="main">
          <Title />
          <Request />
          <div className=" bg-black ">
            <div className="mx-auto max-w-screen-2xl  px-16 py-8">
              <h3 className="text-white text-4xl">スポンサーのご紹介</h3>
            </div>
          </div>
          <VIP />
        </main>
      </div>
    </div>
  );
};

export default Main;
