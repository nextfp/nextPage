import Acsess from "./Acsess";
import Title from "./title";

export default function Main() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-full flex flex-col" id="main">
          <Title />
          <Acsess />
        </main>
      </div>
    </div>
  );
}
