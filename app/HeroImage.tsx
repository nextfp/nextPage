export default function HeroImage() {
  return (
    <section className="flex flex-col">
      <div
        className="h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/home/heroImage.webp)`,
        }}
      >
        <div className="flex h-full">
          <div className="grid w-full grid-cols-12">
            <div className="col-span-1"></div>
            <div className="col-span-10 mt-28 text-5xl md:text-7xl lg:text-8xl font-bold sm:col-span-8 sm:text-6xl">
              <h1 className="break-all">
                Next Formula <br />
                Project
              </h1>
            </div>
            <div className="col-span-1 sm:col-span-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
