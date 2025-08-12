import { Images } from "../../assets/pngs";
import { ReactComponent as HomeLogo } from "../../assets/svgs/roundLogo.svg";
import { ReactComponent as HomeDiv4 } from "../../assets/svgs/homeDiv4.svg";
import { ReactComponent as HomeDiv5 } from "../../assets/svgs/homeDiv5.svg";

import { ReactComponent as Correct } from "../../assets/svgs/correct.svg";
import { ReactComponent as RightArrowGreen } from "../../assets/svgs/rightArrowGreen.svg";
import { ReactComponent as Call } from "../../assets/svgs/call.svg";

import { ReactComponent as Card } from "../../assets/svgs/card.svg";

import Button from "../../Components/Button";

const DreamDestination = () => {
  return (
    <section className="sm:contain ">
      <div className="pb-14 sm:pb-[120px] flex flex-col xl:flex-row xl:gap-8 2xl:gap-20">
        <div className="flex gap-8 px-4 sm:px-0 mx-auto sm:max-w-[580px]">
          <div className="hidden  relative sm:flex flex-col gap-[49px] items-center">
            <img
              className=" h-[250px] sm:h-[357px] max-w-full sm:max-w-[267px] rounded-xl"
              alt="home"
              src={Images.home1}
            />
            <div className="z-50 absolute top-[22px] left-4 h-[250px] sm:h-[346px] max-w-full sm:max-w-[260px] w-full rounded-xl border border-lightGreen"></div>
            <div className="">
              <HomeLogo />
            </div>
          </div>
          <div className="flex flex-col gap-[23px]">
            <div className="max-w-full sm:max-w-[282px] h-24 sm:h-[127px] bg-lightGreen rounded-xl py-9 px-11 flex gap-5 items-center text-white">
              <p className="text-[50px]">25</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <img
                className="h-[350px] sm:h-[464px] w-full max-w-full sm:max-w-[282px] rounded-xl"
                alt="home"
                src={Images.home2}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-10 xl:pt-0 px-4 sm:px-14 xl:px-0 max-w-full mx-auto xl:max-w-[630px]">
          <div className="pb-[25px]">
            <div className="flex items-center gap-[10px] pb-[10px]">
              {/* <img alt="cards" src={Images.cards} /> */}
              <Card />
              <p className="text-darkGReen font-semibold text-sm font-jakarta">
                Why Choose Us
              </p>
            </div>

            <p className="text-black font-bold text-2xl sm:text-[50px] pb-5 font-jakarta leading-10 sm:leading-[3.5rem]">
              Where Wanderlust Meets{" "}
              <span className="text-darkGReen">Dream Destinations</span>{" "}
            </p>
            <p className="text-base text-textGray font-jakarta">
              Et purus duis sollicitudin dignissim habitant. Egestas nulla quis
              venenatis cras sed eu massa Et purus duis sollicitudin dignissim
              habitant. Egestas nulla quis venenatis cras sed eu massa Et purus
              duis sollicitudin dignissim habitant. Egestas nulla
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[30px] pb-[42px]">
            <div className="max-w-full sm:max-w-[300px] sm:w-full px-[30px] border pt-[30px] pb-[26px] border-borderGray rounded-2xl">
              <div className="flex gap-5 items-center pb-5">
                <div className="bg-lightGreen w-[60px] h-[60px] p-[15px]  rounded-full">
                  <HomeDiv4 className="" />
                </div>
                <p className="text-darkGReen font-bold text-[22px]">
                  Passport Plus
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[15px] items-center">
                  <Correct />
                  <p className="text-base text-textGray">
                    Beyond Border Immigration
                  </p>
                </div>
                <div className="flex gap-[15px] items-center">
                  <Correct />
                  <p className="text-base text-textGray">
                    Worldwide Visa Assistance
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-full sm:max-w-[300px] sm:w-full px-[30px] border pt-[30px] pb-[26px] border-borderGray rounded-2xl">
              <div className="flex gap-5 items-center pb-5">
                <div className="bg-lightGreen w-[60px] h-[60px] p-[15px]  rounded-full">
                  <HomeDiv5 className="" />
                </div>
                <p className="text-darkGReen font-bold text-[22px]">
                  Global Entry
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[15px] items-center">
                  <Correct />
                  <p className="text-base text-textGray">
                    GlobeTrot Visa Services
                  </p>
                </div>
                <div className="flex gap-[15px] items-center">
                  <Correct />
                  <p className="text-base text-textGray">
                    Infinity Visa Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-10">
            <Button
              className="px-[30px] py-[15px] text-darkGReen border border-lightGreen"
              variant="none"
              type="button"
              endIcon={<RightArrowGreen />}
            >
              Read More
            </Button>
            <div className="flex gap-[15px]">
              <div className="w-[55px] h-[55px] p-5 bg-lightGreen rounded-full">
                <Call />
              </div>
              <div className="flex flex-col text-darkGReen">
                <p className="text-base">Need help?</p>
                <p className="text-lg">(808) 555-0111</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default DreamDestination;
