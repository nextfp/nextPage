import PR from "./PR";
import Poster from "./poster";
import Report from "./report";
import SponsorBenefit from "./sponsorBenefit";
import SponsorSupportForm from "./sponsorSupportForm";
import Sticker from "./sticker";
import Title from "./title";
import WebPageExample from "./webPageExample";
import WebPage from "./webpage";

const Main = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-8">
        <main className="col-span-full flex flex-col" id="main">
          <Title />
          <SponsorSupportForm />
          <SponsorBenefit>
            <Sticker />
            <PR />
            <Poster />
            <Report />
            <WebPage />
          </SponsorBenefit>
          <WebPageExample />
        </main>
      </div>
    </div>
  );
};

export default Main;
