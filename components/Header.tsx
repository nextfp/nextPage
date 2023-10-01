import MobileNav from "./MobileNav";
import Link from "./Link";
import headerNavLinks from "@/data/headerNavLinks";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-black py-6">
      <div className="container mx-auto  pb-1 text-white">
        <div className="mx-7 flex items-center justify-between">
          <a className="text-4xl font-semibold" href="./">
            Next FP(β)
          </a>
          <div className="hidden md:block">
            <div className="flex gap-8">
              {headerNavLinks
                .filter((link) => link.href !== "/")
                .map((link) => (
                  <Link key={link.title} href={link.href} className="text-xl">
                    {link.title}
                  </Link>
                ))}
            </div>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
