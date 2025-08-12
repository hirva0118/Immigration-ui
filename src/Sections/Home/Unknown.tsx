import { Images } from "../../assets/pngs";
import { ReactComponent as CardGreen } from "../../assets/svgs//card.svg";
import { ReactComponent as RightArrow } from "../../assets/svgs/rightArrow.svg";
import { ReactComponent as Facebook } from "../../assets/svgs/facebook.svg";
import { ReactComponent as Insta } from "../../assets/svgs/insta.svg";
import { ReactComponent as Twitter } from "../../assets/svgs/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/svgs/linkedin.svg";

const Unknown = () => {
  return (
    <div className="container relative pb-4 md:pb-[120px]">
      <div className=" rounded-3xl bg-white max-w-full h-[72rem] sm:h-[75rem] md:h-[780px] xl:h-[900px] px-8 xl:px-0 overflow-hidden  bg-[url('/wave1.png')] bg-blend-overlay bg-white/90">
        <div className="contain pt-6 xl:pt-[120px] h-[660px] flex flex-col">
          <div className="flex gap-3">
            <CardGreen />
            <p className="text-darkGReen font-jakarta">OUR COACHING</p>
          </div>
          <p className="text-darkGReen  text-3xl md:text-[50px] font-bold font-jakarta max-w-[630px] pb-[60px] md:leading-[3.5rem]">
            Exploring the Unknown Voyages of Wonder{" "}
          </p>
          <div className="flex flex-col-reverse md:flex-row gap-[30px]">
            <div className="flex flex-col space-y-7 w-full max-w-[850px]">
              <div className="w-full py-3 sm:py-[30px] px-4 sm:px-10 border border-borderGray rounded-2xl h-full sm:h-[130px] z-10 bg-white">
                <div className="w-full flex  justify-between">
                  <div className="flex flex-col gap-3">
                    <p className="text-darkGReen text-sm xs:text-[22px] font-bold font-jakarta">
                      Courtney Henry
                    </p>
                    <p className="font-jakarta">Medical Assistant</p>
                  </div>
                  <div className="bg-lightGreen rounded-full p-5 cursor-pointer">
                    <RightArrow />
                  </div>
                </div>
              </div>

              <div className="py-[30px] sm:py-[30px] px-4 sm:px-10 border border-borderGray rounded-2xl h-full sm:h-[130px] z-10 bg-white">
                <div className="w-full flex justify-between">
                  <div className="flex flex-col gap-3">
                    <p className="text-darkGReen text-sm xs:text-[22px] font-bold font-jakarta">
                      Courtney Henry
                    </p>
                    <p className="font-jakarta">Medical Assistant</p>
                  </div>
                  <div className="bg-lightGreen rounded-full p-5 cursor-pointer">
                    <RightArrow />
                  </div>
                </div>
              </div>

              <div className="py-[30px] sm:py-[30px] px-4 sm:px-10 border border-borderGray rounded-2xl h-full sm:h-[130px] z-10 bg-white">
                <div className=" flex justify-between">
                  <div className="w-full flex flex-col gap-3">
                    <p className="text-darkGReen text-sm xs:text-[22px] font-bold font-jakarta">
                      Courtney Henry
                    </p>
                    <p className="font-jakarta">Medical Assistant</p>
                  </div>
                  <div className="bg-lightGreen rounded-full p-5 cursor-pointer">
                    <RightArrow />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <img
                className="rounded-2xl max-w-full md:max-w-[410px] w-full h-[450px]"
                alt="img"
                src={Images.memory3}
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 max-w-40 rounded-full px-4 bg-white z-20">
                <div className="flex justify-between w-full items-center h-9">
                  <div className="w-10 h-10 py-2 px-2 flex items-center ">
                    <Twitter className="stroke-darkGReen cursor-pointer" />
                  </div>
                  <div className="w-10 h-10 py-2 px-2 flex items-center">
                    <Facebook className="stroke-lightGreen cursor-pointer" />
                  </div>
                  <div className="w-10 h-10 py-2 px-2 flex items-center">
                    <Insta className="stroke-darkGReen cursor-pointer" />
                  </div>
                  <div className="w-10 h-10 py-2 px-2 flex items-center">
                    <Linkedin className="stroke-darkGReen cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hidden 3xl:block absolute -top-0 left-[52px] right-0 opacity-15 z-0">
          <Wave2 />
        </div> */}
      </div>
    </div>
  );
};

export default Unknown;
