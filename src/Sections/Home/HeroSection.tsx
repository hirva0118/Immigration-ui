import Button from "../../Components/Button";
import { ReactComponent as RightArrow } from "../../assets/svgs/rightArrow.svg";
import { ReactComponent as Play } from "../../assets/svgs/play.svg";
import { ReactComponent as EffielTower } from "../../assets/svgs/effielTower.svg";
import { ReactComponent as HomeDiv1 } from "../../assets/svgs/homeDiv1.svg";
import { ReactComponent as HomeDiv2 } from "../../assets/svgs/homeDiv2.svg";
import { ReactComponent as HomeDiv3 } from "../../assets/svgs/homeDiv3.svg";
import { Images } from "../../assets/pngs";

// import { Images } from "../../assets/pngs";

const HeroSection = () => {
  return (
    <div className="container max-w-full ">
      <section className="relative bg-darkGReen h-[500px] sm:h-[600px] lg:h-[800px] w-full rounded-[50px] ">
        <div className=" z-1 absolute top-12 lg:top-48 left-3 xs:left-8 sm:left-24 lg:left-10 xl:left-44 2xl:left-80 lg:max-w-sm xl:max-w-md 2xl:max-w-lg 3xl:max-w-[740px] xl:h-[370px] flex flex-col gap-2 xl:gap-10">
          <p className=" pb-5 xl:pb-0 text-xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-[80px] text-white font-bold xl:leading-[94px] font-jakarta ">
            Visa Made Easy Dreams Made Possible
          </p>
          <div className="flex flex-col xl:flex-row gap-7 items-start ">
            <Button
              className="px-[30px] text-white border border-white font-jakarta h-[60px] text-sm"
              variant="none"
              type="button"
              endIcon={<RightArrow />}
            >
              Read More
            </Button>
            <div className="flex gap-1 xs:gap-[10px] items-center h-14 cursor-pointer">
              <Play />
              <p className="text-white font-jakarta font-semibold text-lg">Watch Our Videos</p>
            </div>
          </div>
        </div>

        <div className="absolute left-auto right-[30%] sm:right-20 top-3/4 lg:top-1/2 -translate-y-1/2 ">
          {/* <Airplane className="max-w-60 sm:max-w-[400px] md:max-w-sm lg:max-w-sm xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl " /> */}
          <img
            className="max-w-40 xs:max-w-56 sm:max-w-[200px] md:max-w-64 lg:max-w-sm xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl "
            alt="flight"
            src={Images.flight1}
          />
        </div>
        <div className="z-0 hidden md:block absolute -left-16 top-12 lg:top-[265px]">
          <EffielTower />
        </div>
      </section>
      <section className="pt-[30px] max-w-full grid lg:grid-cols-2 2xl:grid-cols-3 gap-[30px] pb-7 md:pb-[120px]">
        <div className="px-7 sm:px-10 pb-[70px] max-w-full flex flex-col gap-5 border rounded-3xl border-borderGray pt-6 sm:pt-12">
          <HomeDiv1 className="mb-5 " />
          <p className="text-darkGReen font-bold text-[22px] font-jakarta">
            Food and Wine Tours
          </p>
          <p className="text-textGray text-base leading-8 font-jakarta text-justify">
            Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet rcus nunc. Duis egestas ac{" "}
          </p>
        </div>
        <div className="px-7 sm:px-10 pb-[70px] max-w-full flex flex-col gap-5 border rounded-3xl border-borderGray  pt-6 sm:pt-12">
          <HomeDiv2 className="mb-5 " />
          <p className="text-darkGReen font-bold text-[22px] font-jakarta">
            Travel Opportunities
          </p>
          <p className="text-textGray text-base leading-8 font-jakarta text-justify">
            Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet rcus nunc. Duis egestas ac{" "}
          </p>
        </div>
        <div className="px-7 sm:px-10 pb-[70px] max-w-full flex flex-col gap-5 border rounded-3xl border-borderGray pt-6 sm:pt-12">
          <HomeDiv3 className="mb-5 " />
          <p className="text-darkGReen font-bold text-[22px] font-jakarta">
            Solo Travel Planning
          </p>
          <p className="text-textGray text-base leading-8 font-jakarta text-justify">
            Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet rcus nunc. Duis egestas ac{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
