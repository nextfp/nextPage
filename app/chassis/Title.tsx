import Image from "next/image";
import chassisImage from "@/public/chassis/ChassisImage.webp";

export default function Title() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl px-6 py-22 sm:px-16">
        <header className="flex flex-col justify-center">
          <h1 className="mb-6 self-center text-4xl font-medium text-black sm:text-6xl">
            洗練されたシャシー
          </h1>
          <Image className="self-center" src={chassisImage} alt="Cad ASSY" />
        </header>
        <div className="mt-12">
          <div className="flex flex-col gap-20"></div>
        </div>
      </div>
    </section>
  );
}
