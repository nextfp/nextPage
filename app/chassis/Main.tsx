import Title from "./Title";
import Suspension from "./Suspension";

export default function Main() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-full flex flex-col gap-22" id="main">
          <Title />
          <Suspension />
        </main>
      </div>
    </div>
  );
}
