import Sponsor from "@/app/Sponsor";
import Title from "./title";
import SponsorSupportForm from "./sponsorSupportForm";
import SponsorBenefit from "./sponsorBenefit";
import Sticker from "./sticker";
import PR from "./PR";

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
          </SponsorBenefit>
        </main>
      </div>
    </div>
  );
};

export default Main;
