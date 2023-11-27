const SponsorSupportForm = () => {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-2xl px-8 py-22 flex flex-col gap-8 sm:px-28 border border-t-white border-black">
        <header className="mx-auto">
          <h2 className="mb-8 text-4xl font-medium  self-center">
            スポンサーシップの支援形態
          </h2>
        </header>
        <div className="grid grid-cols-2 gap-12">
          <div className="col-span-full md:col-span-1 flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-lg border border-gray-100 shadow dark:border-white xl:p-8 bg-black">
            <h3 className="mb-4 text-2xl font-semibold">金銭支援</h3>
            <p className="font-light text-gray-200 sm:text-lg">
              チーム運営費や大会参加費、遠征費、製作費などの活動費に使用いたします。
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">10000円</span>
              <span className="text-gray-500 dark:text-gray-400">/一口</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                <span>企業様は5口から</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                <span>個人は1口から</span>
              </li>
            </ul>
          </div>
          <div className="col-span-full md:col-span-1 flex flex-col p-6 mx-auto max-w-lg text-center text-white rounded-lg border border-gray-100 shadow dark:border-white xl:p-8 bg-black">
            <h3 className="mb-4 text-2xl font-semibold">技術・物品支援</h3>
            <p className="font-light text-gray-200 sm:text-lg">
              それぞれの分野での技術支援や、部品・素材などの物品支援をお願いしております。
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-2xl font-extrabold">
                協賛価格支援や設計・製造支援
              </span>
              <span className="text-gray-500 dark:text-gray-400">など</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                <span>
                  金額が不明瞭な支援に関しては、こちらで相当基準を調整させていただきます
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSupportForm;
