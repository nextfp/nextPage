import { textParser } from "@/lib/textParser";

export const WhatIsStudentFormula = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <section className="max-w-sm overflow-hidden rounded-[60px] bg-black shadow-lg">
    <div className="px-[30px] py-[40px]">
      <div className="mb-7 text-4xl font-medium text-white">{title}</div>
      {textParser(content).map((line) => (
        <p className="mt-5 text-base text-white" key={line}>
          {line}
        </p>
      ))}
    </div>
  </section>
);
