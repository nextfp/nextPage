import React from "react";

const SponsorBenefit = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-8 py-22 flex flex-col gap-8 sm:px-28">
        <header className="mx-auto">
          <h2 className="mb-8 text-4xl font-medium self-center text-black">
            スポンサー様の特典内容
          </h2>
        </header>
        <div className="flex flex-col gap-16">{children}</div>
      </div>
    </section>
  );
};

export default SponsorBenefit;
