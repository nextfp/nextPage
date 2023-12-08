import Title from "./title";
import Acsess from "./Acsess";

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
