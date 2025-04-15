import Image, { type StaticImageData } from "next/image";

export default function Digitization({
  title,
  image,
  contents,
}: {
  title: string;
  image: { data: StaticImageData; alt: string; width: number; height: number };
  contents: { num: number; caption: string }[];
}) {
  if (contents.length > 4) {
    contents.slice(0, 4);
  }
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-12 px-16 py-32 md:gap-16">
        <div className="hidden md:col-span-6 md:inline-block">
          <div className="flex h-full justify-end">
            <Image
              className="self-end "
              src={image.data}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        </div>

        <div className="col-span-12 flex flex-col justify-center md:col-span-6">
          <p className="self-center text-4xl text-black md:self-start">
            {title}
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-6 gap-y-16 self-center md:self-start">
            {contents.map((content, index) => (
              <div
                key={content.caption}
                className={`md:col-span-2 ${index % 2 === 1 ? "md:col-start-4" : ""}`}
              >
                <div className="border border-white border-b-black text-black">
                  <p
                    className=" z-10 border border-white border-b-black pb-4 text-4xl text-black"
                    style={{ width: "2rem" }}
                  >
                    {content.num}
                  </p>
                </div>
                <p className="mt-3 text-xl text-black">{content.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
