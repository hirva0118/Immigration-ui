import { ReactComponent as RightGreen } from "../../assets/svgs/rightArrowGreen.svg";

import { ReactComponent as HomeDiv5 } from "../../assets/svgs/homeDiv5.svg";
import { ReactComponent as Segment } from "../../assets/svgs/segment.svg";
import { ReactComponent as Splunk } from "../../assets/svgs/splunk.svg";
import { ReactComponent as Hubspot } from "../../assets/svgs/hubSpot.svg";
import { ReactComponent as Asana } from "../../assets/svgs/asana.svg";
import { ReactComponent as Airtasker } from "../../assets/svgs/airtasker.svg";

import Button from "../../Components/Button";
import { Images } from "../../assets/pngs";

const SectionFour = () => {
  return (
    <div className="contain ">
      <div className="px-6 xl:px-0 flex flex-col gap-[10px]">
        <div className=" flex flex-col md:flex-row gap-[30px] pb-4 lg:pb-[120px]">
          <div>
            <img
              className="max-w-full md:max-w-[410px] h-full lg:h-[608px] rounded-2xl"
              alt="image"
              src={Images.memory5}
            />
          </div>
          <div className="flex flex-col w-full gap-[30px] bg-white rounded-2xl h-full lg:h-[363px] ">
            <div className="flex w-full flex-col-reverse lg:flex-row">
              <div className="">
                <div className="pt-4 lg:pt-10 pl-5 lg:pl-[60px] pb-4 lg:pb-0 pr-2">
                  <div className="bg-lightGreen w-[60px] h-[60px] p-[15px] rounded-full mb-[17px]">
                    <HomeDiv5 className="" />
                  </div>
                  <p className="text-[22px] font-bold font-jakarta text-darkGReen mb-[13px]">
                    Get our best offers quickly
                  </p>
                  <p className="max-w-[473px] text-textGray text-base font-jakarta mb-[23px]">
                    Lorem Ipsum is simply dummy text the printing and typese
                    Lorem Ipsum has been the industry's standard dummy
                  </p>
                  <div className="flex items-start">
                    <Button
                      className="px-[30px] py-[15px] lg:mt-0 border border-borderGray text-darkGReen"
                      variant="none"
                      type="button"
                      endIcon={<RightGreen />}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative ">
                <img
                  className=" w-[317px] h-[363px] rounded-2xl"
                  alt="img"
                  src={Images.memory9}
                />

                <div className="hidden 2xl:block absolute top-0 right-[19rem] -rotate-[8deg] bg-white w-20 h-[390px] z-10"></div>
              </div>
            </div>
            <div className=" hidden lg:block bg-lightGreen rounded-2xl p-5 xl:p-[60px] h-[215px] max-w-full">
              <div className="flex justify-between w-full items-center">
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[50px] font-bold font-jakarta text-white">
                    10k+
                  </p>
                  <p className="text-base text-white">Complete project</p>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[50px] font-bold font-jakarta text-white">
                    20+
                  </p>
                  <p className="text-base text-white">Team member</p>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[50px] font-bold font-jakarta text-white">
                    5k+
                  </p>
                  <p className="text-base text-white">Winning award</p>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[50px] font-bold font-jakarta text-white">
                    100+
                  </p>
                  <p className="text-base text-white">Complete project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" block lg:hidden bg-lightGreen rounded-2xl p-2 sm:p-5 xl:p-[60px] lg:h-[215px] max-w-full mb-24">
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col gap-[5px] md:gap-[20px]">
              <p className="text-2xl md:text-[50px] font-bold font-jakarta text-white">
                10k+
              </p>
              <p className="text-sm sm:text-base text-white">
                Complete project
              </p>
            </div>
            <div className="flex flex-col gap-[5px] md:gap-[20px]">
              <p className="text-2xl md:text-[50px] font-bold font-jakarta text-white">
                20+
              </p>
              <p className="text-sm sm:text-base text-white">Team member</p>
            </div>
            <div className="flex flex-col gap-[5px] md:gap-[20px]">
              <p className="text-2xl md:text-[50px] font-bold font-jakarta text-white">
                5k+
              </p>
              <p className="text-sm sm:text-base text-white">Winning award</p>
            </div>
            <div className="flex flex-col gap-[5px] md:gap-[20px]">
              <p className="text-2xl md:text-[50px] font-bold font-jakarta text-white">
                100+
              </p>
              <p className="text-sm sm:text-base text-white">
                Complete project
              </p>
            </div>
          </div>
        </div>
          <div
            className="flex flex-row flex-wrap items-center gap-5 md:justify-between pb-[120px] px-8 sm:px-14 2xl:px-0">
            <Segment />
            <Splunk />
            <Hubspot />
            <Asana />
            <Airtasker />
          </div>
      </div>
    </div>
  );
};

export default SectionFour;
