import Image from "next/image";
import Link from "next/link";

const Card = ({
  title,
  description,
  image,
  imageAlt,
  imageSize,
  src,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageSize: number;
  src: string;
}) => {
  return (
    <Link href={src} className="cursor-pointer">
      <div className="h-full rounded-3xl border-2 border-white bg-black hover:scale-105">
        <div className="h-[150px] rounded-t-2xl bg-white">
          <div className="flex h-full justify-center">
            <Image
              className="m-auto h-fit"
              src={image}
              alt={imageAlt}
              width={633 * imageSize}
              height={415 * imageSize}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 p-8">
          <h4 className="text-2xl">{title}</h4>
          <p className="">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
