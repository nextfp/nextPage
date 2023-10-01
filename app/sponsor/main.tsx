import Title from "./title";
import Request from "./request";

const Main = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-full flex flex-col" id="main">
          <Title />
          <Request />
        </main>
      </div>
    </div>
  );
};

export default Main;
