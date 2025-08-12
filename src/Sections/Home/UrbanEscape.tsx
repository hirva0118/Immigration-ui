import { ReactComponent as Snake } from "../../assets/svgs/snake.svg";
import { ReactComponent as Right } from "../../assets/svgs/rightArrow.svg";
import { ReactComponent as RightGreen } from "../../assets/svgs/rightArrowGreen.svg";

import { ReactComponent as Correct } from "../../assets/svgs//darkCorrect.svg";
import { ReactComponent as HomeDiv5 } from "../../assets/svgs/homeDiv5.svg";


import Button from "../../Components/Button";
import { Images } from "../../assets/pngs";

const UrbanEscape = () => {

  return (
    <div className="contain ">
      <div className="px-2 sm:px-6 xl:px-0 flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-semibold font-jakarta">
            AVAILABLE CONTRIES
          </p>
          <Snake />
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-7 lg:mb-[60px]">
          <p className="max-w-lg lg:max-w-[630px] text-darkGReen font-bold text-3xl md:text-4xl md:text-[50px] font-jakarta md:leading-[3.5rem]">
            Urban Escapes City Hopping Adventures
          </p>
          <Button
            className="px-7 py-4 mt-6 lg:mt-0 font-jakarta"
            variant="primary"
            type="button"
            endIcon={<Right />}
          >
            Read More
          </Button>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-4 lg:mb-[120px] gap-[30px]">
          <div className="flex flex-col space-y-5 pt-7 sm:pt-10 pl-4 sm:pl-[30px] border border-borderGray rounded-2xl">
            <img
              className="w-[70px] h-[70px] rounded-full"
              alt="canada"
              src={Images.memory1}
            />
            <p className="text-[22px] font-bold text-darkGReen font-jakarta">
              Canada
            </p>
            <div className="flex  items-center gap-4">
              <Correct />
              <p className="text-base font-jakarta text-textGray">
                Mistakes To Avoid
              </p>
            </div>
            <div className="flex  items-center gap-4">
              <Correct />
              <p className="text-base font-jakarta text-textGray">
                Mistakes To Avoid
              </p>
            </div>
            <div className="flex  items-center gap-4 pb-10">
              <Correct />
              <p className="text-base font-jakarta text-textGray">
                Mistakes To Avoid
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 pt-7 sm:pt-10 pl-4 sm:pl-7 border border-borderGray rounded-2xl">
            <img
              className="w-[70px] h-[70px] rounded-full"
              alt="canada"
              src={Images.memory1}
            />
            <p className="text-[22px] font-bold text-darkGReen font-jakarta">
              Bangladesh
            </p>
            <div className="flex  items-center gap-4">
              <Correct />
              <p className="text-base font-jakarta text-textGray">
                Mistakes To Avoid
              </p>
            </div>
            <div className="flex  items-center gap-4">
              <Correct />
              <p className="text-base font-jakarta text-textGray">
                Mistakes To Avoid
              </p>
            </div>
            <div className="flex  items-center gap-4 pb-10">
              <Correct />
              <p className="text-base font-jakarta text-textGray">
                Mistakes To Avoid
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 pt-7 sm:pt-10 pl-4 sm:pl-[30px] border border-borderGray rounded-2xl">
            <img
              className="w-[70px] h-[70px] rounded-full"
              alt="canada"
              src={Images.memory1}
            />
            <p className="text-[22px] font-bold text-darkGReen font-jakarta">
              Australia
            </p>
            <div className="flex  items-center gap-4">
              <Correct />
              <p className="text-base font-jakarta text-textGray">
                Mistakes To Avoid
              </p>
            </div>
            <div className="flex  items-center gap-4">
              <Correct />
              <p className="text-base font-jakarta text-textGray">
                Mistakes To Avoid
              </p>
            </div>
            <div className="flex items-center gap-4 pb-10">
              <Correct />
              <p className="text-base font-jakarta text-textGray">
                Mistakes To Avoid
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-5 pt-7 sm:pt-10 pl-4 sm:pl-[30px] border border-borderGray rounded-2xl">
            <img
              className="w-[70px] h-[70px] rounded-full"
              alt="canada"
              src={Images.memory1}
            />
            <p className="text-[22px] font-bold text-darkGReen font-jakarta">
              United Kingdom
            </p>
            <div className="flex items-center gap-4">
              <Correct />
              <p className="text-base font-jakarta text-textGray">
                Mistakes To Avoid
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Correct />
              <p className="text-base font-jakarta text-textGray">
                Mistakes To Avoid
              </p>
            </div>
            <div className="flex items-center gap-4 pb-10">
              <Correct />
              <p className="text-base font-jakarta text-textGray">
                Mistakes To Avoid
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row gap-7 pb-4 lg:pb-[120px]">
          <div>
            <img
              className="max-w-full md:max-w-[410px] h-full lg:h-[608px] rounded-2xl"
              alt="image"
              src={Images.memory5}
            />
          </div>
          <div className="flex flex-col w-full gap-[30px] bg-white rounded-2xl h-full lg:h-[363px] ">
            <div className="flex w-full flex-col-reverse lg:flex-row ">
              <div className="">
                <div className="pt-4 lg:pt-10 pl-5 lg:pl-[60px] pb-4 lg:pb-0 pr-2">
                  <div className="bg-lightGreen w-[60px] h-[60px] p-[15px] rounded-full mb-[17px]">
                    <HomeDiv5 className="" />
                  </div>
                  <p className="text-[22px] font-bold font-jakarta text-darkGReen mb-[13px]">
                    Get our best offers quickly
                  </p>
                  <p className="max-w-[473px] text-textGray  text-base font-jakarta mb-[23px]">
                    Lorem Ipsum is simply dummy text the printing and typese
                    Lorem Ipsum has been the industry's standard dummy
                  </p>
                  <div className="flex items-start">
                    <Button
                      className="px-[30px] py-[15px] lg:mt-0 border border-borderGray text-darkGReen font-jakarta font-semibold text-sm"
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

                <div className="hidden 2xl:block absolute top-0 right-[19rem] -rotate-[8deg] bg-white w-20 h-[370px] z-10 rounded-bl-full"></div>
              </div>
            </div>
            <div className=" hidden lg:block bg-lightGreen rounded-2xl p-5 xl:p-[60px] h-[215px] max-w-full">
              <div className="flex justify-between w-full items-center">
                <div className="flex flex-col gap-1">
                  <p className="text-[50px] font-bold font-jakarta text-white">
                    10k+
                  </p>
                  <p className="text-base text-white font-jakarta">
                    Complete project
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[50px] font-bold font-jakarta text-white">
                    20+
                  </p>
                  <p className="text-base text-white font-jakarta">
                    Team member
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[50px] font-bold font-jakarta text-white">
                    5k+
                  </p>
                  <p className="text-base text-white font-jakarta">
                    Winning award
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[50px] font-bold font-jakarta text-white">
                    100+
                  </p>
                  <p className="text-base text-white font-jakarta">
                    Complete project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" block lg:hidden bg-lightGreen rounded-2xl p-2 sm:p-5 xl:p-[60px] lg:h-[215px] max-w-full mb-5 md:mb-24">
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col gap-1 md:gap-[20px]">
              <p className="text-xl sm:text-2xl md:text-5xl font-bold font-jakarta text-white">
                10k+
              </p>
              <p className="text-sm sm:text-base text-white font-jakarta">
                Complete project
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-[20px]">
              <p className="text-xl sm:text-2xl md:text-5xl font-bold font-jakarta text-white">
                20+
              </p>
              <p className="text-sm sm:text-base text-white font-jakarta">
                Team member
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-[20px]">
              <p className="text-xl sm:text-2xl md:text-5xl font-bold font-jakarta text-white">
                5k+
              </p>
              <p className="text-sm sm:text-base text-white font-jakarta">
                Winning award
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-[20px]">
              <p className="text-xl sm:text-2xl md:text-5xl font-bold font-jakarta text-white">
                100+
              </p>
              <p className="text-sm sm:text-base text-white font-jakarta">
                Complete project
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrbanEscape;
