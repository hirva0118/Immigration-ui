import { Images } from "../../assets/pngs";
import { ReactComponent as CardWhite } from "../../assets/svgs/cardWhite.svg";
import Button from "../../Components/Button";
import { ReactComponent as RightArrow } from "../../assets/svgs/rightArrow.svg";

const MakingMemories = () => {
  return (
    <div className="container max-w-full pb-[120px]">
      <section className="bg-darkGReen w-full h-auto pb-12 md:pb-[120px] rounded-[50px]">
        <div className="contain px-8 xl:px-0 pt-16 md:pt-[114px]">
          <div className="flex justify-between items-end pb-[60px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[10px]">
                <CardWhite />
                <p className="text-white">Our Countries</p>
              </div>
              <p className="font-bold text-white max-w-[630px] text-3xl md:text-[50px] leading-[3.5rem] font-jakarta">
                Making Memories Around World Unforgettable
              </p>
            </div>
          </div>

          {/* Mobile and tablet grid */}
          <div className="xl:hidden grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-5 h-[30%]">
            {[
              Images.memory9,
              Images.memory6,
              Images.memoery2,
              Images.memory7,
              Images.memory8,
              Images.memory4,
            ].map((src, idx) => (
              <div key={idx} className="relative w-full">
                <img
                  className="w-full h-full rounded-xl"
                  alt={`img-${idx}`}
                  src={src}
                />
              </div>
            ))}
          </div>

          {/* Desktop flex layout for hover effect */}
          <div className="hidden xl:flex gap-[30px] h-[422px]">
            {[
              Images.memory9,
              Images.memory6,
              Images.memoery2,
              Images.memory7,
              Images.memory8,
              Images.memory4,
            ].map((src, idx) => (
              <div
                key={idx}
                className="relative w-[190px] hover:w-[410px] transition-all duration-300 ease-in-out group"
              >
                <img
                  className="w-full h-full rounded-3xl"
                  alt={`img-${idx}`}
                  src={src}
                />
                <div className="absolute top-7 right-7">
                  <img
                    className="w-14 h-14 rounded-full border border-lightGreen"
                    alt="img"
                    src={Images.memory3}
                  />
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-lightGreen rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-5">
                  <h1 className="text-white text-[22px] font-bold pb-[10px] font-jakarta">
                    Working Visa
                  </h1>
                  <p className="pb-5 text-white font-jakarta text-base">
                    Lorem Ipsum is simply dummy text the printing and provide
                    best visa ever
                  </p>
                  <div className="flex items-start">
                    <Button
                      endIcon={<RightArrow />}
                      className="border border-white px-[30px] text-white font-jakarta text-sm font-semibold"
                      variant="none"
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakingMemories;
