import Title from "./Title";
import Introduction from "./Introduction";

export default function Main() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-full flex flex-col" id="main">
          <Title />
          <Introduction />
        </main>
      </div>
    </div>
  );
}
