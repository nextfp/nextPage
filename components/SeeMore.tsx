export default function SeeMore({ href }: { href: string }) {
  return (
    <a className="mt-8 grid w-64 grid-cols-6 md:mt-32" href={href}>
      <center className="col-span-4 rounded-l-[14px] border border-black">
        <p className="mt-4 text-black">続きを見る</p>
      </center>
      <center className="col-span-2 rounded-r-[14px] border border-l-0 border-black">
        <p className="my-3 text-2xl text-black">→</p>
      </center>
    </a>
  );
}
