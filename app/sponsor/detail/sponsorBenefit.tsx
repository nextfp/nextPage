import type React from "react";

const SponsorBenefit = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-8 py-22 sm:px-28">
        <header className="mx-auto">
          <h2 className="mb-8 self-center text-4xl font-medium text-black">
            スポンサー様の特典内容
          </h2>
        </header>
        <div className="flex flex-col gap-16">{children}</div>
      </div>
    </section>
  );
};

export default SponsorBenefit;
