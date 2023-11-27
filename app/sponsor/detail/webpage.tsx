import sponsorWebpage from "@/data/sponsorWebpage";

const WebPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-3xl font-medium text-black">
        5. Webサイトへのスポンサー名の掲載
      </h3>
      <p className="text-black">
        社名やロゴ、企業の紹介文を掲載させて頂きます。
      </p>
      <div className="grid grid-cols-2 gap-8">
        {sponsorWebpage.map((data, index) => (
          <div
            key={index}
            className="col-span-full md:col-span-1 flex flex-col p-6 max-w-lg text-center text-black rounded-lg border border-gray-500 shadow xl:p-8 bg-white mx-0"
          >
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">{data.title}</span>
              <span className="text-gray-500">{data.suffix}</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              {data.description.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
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
