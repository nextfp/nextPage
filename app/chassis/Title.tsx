import Image from "next/image";
import chassisImage from "@/public/chassis/ChassisImage.png";

export default function Title() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-2xl  px-16 py-22">
        <header className="flex flex-col justify-center">
          <h1 className="self-center text-6xl font-medium text-black">
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
