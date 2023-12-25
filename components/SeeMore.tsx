import Link from "./Link";

export default function SeeMore({ href }: { href: string }) {
  return (
    <Link className="group mt-8 grid w-64 grid-cols-6 md:mt-32" href={href}>
      <center className="col-span-4 flex items-center justify-center rounded-l-[14px] border border-black text-black duration-100 group-hover:bg-black group-hover:text-white">
        続きを見る
      </center>
      <center className="col-span-2 rounded-r-[14px] border border-l-0 border-black">
        <p className="my-3 text-2xl text-black">→</p>
      </center>
    </Link>
  );
}
