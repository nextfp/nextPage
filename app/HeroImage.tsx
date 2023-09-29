export default function HeroImage() {
  return (
    <section className="flex flex-col">
      <div
        className="h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/home/heroImage.png)`,
        }}
      >
        <div className="flex h-full">
          <div className="grid w-full grid-cols-12">
            <div className="col-span-1"></div>
            <div className="col-span-8 mt-28 text-8xl font-bold">
              <h1 className="break-all">
                Next Formula <br />
                Project
              </h1>
            </div>
            <div className="col-span-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
