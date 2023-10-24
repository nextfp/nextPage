import React from "react";

const SponsorBenefit = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-2xl px-8 py-22 flex flex-col gap-8 sm:px-28 border border-t-white border-black">
        <header className="mx-auto">
          <h2 className="mb-8 text-4xl font-medium  self-center">
            スポンサー様の特典内容
          </h2>
          {children}
        </header>
      </div>
    </section>
  );
};

export default SponsorBenefit;
