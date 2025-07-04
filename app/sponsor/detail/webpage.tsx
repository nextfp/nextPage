import sponsorWebpage from "@/data/sponsorWebpage";

const WebPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-3xl font-medium text-black">
        5. Webサイトへのスポンサー名の掲載
      </h3>
      <p className="text-black">
        社名やロゴ、スポンサー様の紹介文を掲載させて頂きます。
      </p>
      <div className="grid grid-cols-2 gap-8">
        {sponsorWebpage.map((data) => (
          <div
            key={data.title}
            className="col-span-full mx-0 flex max-w-lg flex-col rounded-lg border border-gray-500 bg-white p-6 text-center text-black shadow md:col-span-1 xl:p-8"
          >
            <div className="my-8 flex items-baseline justify-center">
              <span className="mr-2 text-5xl font-extrabold">{data.title}</span>
              <span className="text-gray-500">{data.suffix}</span>
            </div>

            <ul className="mb-8 space-y-4 text-left">
              {data.description.map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title id="icon-title">check Icon</title>
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebPage;
