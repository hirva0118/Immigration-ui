import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Card } from "../../assets/svgs/card.svg";
import { ReactComponent as RightArrow } from "../../assets/svgs/rightArrowgreen2.svg";
import { ReactComponent as Left } from "../../assets/svgs/leftGreen.svg";
import { ReactComponent as NewArrow } from "../../assets/svgs/newArrow.svg";

import "swiper/swiper-bundle.css";

import { Images } from "../../assets/pngs";
import { Navigation } from "swiper/modules";
import { useState } from "react";

const Tapestry = () => {
  const [active, setActive] = useState<"prev" | "next" | null>(null);
  const cardData = [
    {
      photo: Images.memory5,
      title: "TOFEL Coaching",
      detail: "There are many variati of passages of engineer",
    },
    {
      photo: Images.memory5,
      title: "TOFEL Coaching",
      detail: "There are many variati of passages of engineer",
    },
    {
      photo: Images.memory5,
      title: "TOFEL Coaching",
      detail: "There are many variati of passages of engineer",
    },
    {
      photo: Images.memory5,
      title: "TOFEL Coaching",
      detail: "There are many variati of passages of engineer",
    },
    {
      photo: Images.memory5,
      title: "TOFEL Coaching",
      detail: "There are many variati of passages of engineer",
    },
  ];
  return (
    <div className="contain pb-0 ">
      <div className="flex flex-col p-8 xl:p-0">
        <div className="flex gap-2">
          <Card />
          <p className="mb-3 text-darkGReen">SUPPORTING COACHING</p>
        </div>
        <div className="pb-[60px]">
          <p className=" text-darkGReen max-w-[630px] text-4xl md:text-[50px] font-bold font-jakarta md:leading-[3.5rem]">
            A Tapestry of Experiences Cultural Encounters{" "}
          </p>
        </div>
      </div>
      <div className="w-full  relative px-8 xl:px-0">
        <div className="absolute right-5 xl:right-0 -top-16 md:-top-28 z-10 flex flex-row-reverse gap-5 ">
          <div
            className={`swiper-next rounded-full p-2 sm:p-5  cursor-pointer  ${
              active === "next" ? "bg-lightGreen" : "bg-white"
            }`}
            onClick={() => setActive("next")}
          >
            <RightArrow />
          </div>
          <div
            className={`swiper-prev border border-borderGray rounded-full p-2 sm:p-5 cursor-pointer  ${
              active === "prev" ? "bg-lightGreen" : "bg-white"
            }`}
            onClick={() => setActive("prev")}
          >
            <Left />
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
            1536: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
          centeredSlides={false}
          watchSlidesProgress={true}
        >
          {cardData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative max-h-full pb-24 ">
                <div className="w-full h-full">
                  <img
                    className="rounded-2xl w-full h-full "
                    alt="img"
                    src={item.photo}
                  />
                </div>
                <div className="absolute left-[30px] -bottom-1 -right-1 bg-white rounded-tl-2xl rounded-b-2xl max-w-[380px] ">
                  <div className="flex justify-between">
                    <div className="pt-2 lg:pt-5 xl:pt-[30px] pl-4 md:pl-5 xl:pl-10 flex flex-col gap-2">
                      <p className="text-darkGReen font-bold text-sm md:text-[22px] font-jakarta">
                        {item.title}
                      </p>
                      <p className="text-textGray max-w-[190px] text-sm sm:text-base font-jakarta">
                        {item.detail}
                      </p>
                    </div>
                    <div className="pr-2 sm:pr-10 py-[50px] cursor-pointer">
                      <NewArrow />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Tapestry;
