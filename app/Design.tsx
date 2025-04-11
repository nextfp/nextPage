import type { ReactNode } from "react";

export default function Design({ children }: { children: ReactNode }) {
  return (
    <section className="bg-white" style={{ margin: "-5.5rem 0 0 0" }}>
      <div className="mx-auto max-w-screen-2xl  px-16 py-22">
        <header>
          <h2 className="text-4xl font-medium text-black">設計</h2>
        </header>
        <div className="mt-12">
          <div className="flex flex-col gap-20">{children}</div>
        </div>
      </div>
    </section>
  );
}
