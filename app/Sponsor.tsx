import { textParser } from "@/lib/textParser";

export default function Sponsor({
  title,
  content,
  children,
}: {
  title: string;
  content: string;
  children: React.ReactNode[];
}) {
  if (children.length > 3) {
    children.slice(0, 2);
  }
  while (children.length < 3) {
    children.push(<div className="col-span-2" key={Math.random()} />);
  }

  return (
    <section className="mx-auto flex max-w-screen-2xl flex-col gap-11 px-16">
      <h2 className="text-3xl md:text-4xl text-white">{title}</h2>
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-4 xl:col-span-2 gap-3">
          {textParser(content).map((line) => (
            <p className="text-white" key={line}>
              {line}
            </p>
          ))}
        </div>

        <div className="col-span-4 xl:col-span-2">
          <div className="grid grid-cols-2 gap-8 gap-y-12 lg:gap-16 lg:gap-y-28 auto-rows-fr">
            {children.map((child, index) => (
              <div
                className="col-span-2 sm:col-span-1 self-center"
                // biome-ignore lint/suspicious/noArrayIndexKey: 順不同で問題ない
                key={`sponsor Image ${index}`}
              >
                {child}
              </div>
            ))}
            <p className="col-span-2 mx-auto self-center text-3xl sm:col-span-1 text-white">
              And more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
