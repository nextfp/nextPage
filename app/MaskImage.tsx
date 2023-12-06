import { ReactNode } from "react";

export default function MaskImage({ children }: { children: ReactNode }) {
  return (
    <section className="flex flex-col">
      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/home/Endurance.webp?h=720)`,
        }}
      >
        <div className="h-full bg-[hsla(0,0%,0%,0.6)]">
          <div className="flex h-full items-center">
            <div className="grid w-full grid-cols-12 justify-items-center">
              <div className=""></div>
              <div className="col-span-11 col-start-2 sm:col-span-6 sm:col-start-5 lg:col-span-4 lg:col-start-7 xl:col-span-3 xl:col-start-8">
                {children}
              </div>
              <div className="col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
