import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Card } from "../../assets/svgs/card.svg";
import { ReactComponent as RightArrow } from "../../assets/svgs/rightArrowgreen2.svg";
import { ReactComponent as Left } from "../../assets/svgs/leftGreen.svg";
import { ReactComponent as Calendar } from "../../assets/svgs/calendar.svg";
import { ReactComponent as Profile } from "../../assets/svgs/profile.svg";
import { ReactComponent as RightArrowGreen } from "../../assets/svgs/rightArrowGreen.svg";

import "swiper/swiper-bundle.css";

import { Images } from "../../assets/pngs";
import { Navigation } from "swiper/modules";
import Button from "../../Components/Button";
import { useState } from "react";

const Journeys = () => {
  const [active, setActive] = useState<"prev" | "next" | null>(null);
  const cardData = [
    {
      photo: Images.memory5,
      title: "World of Wander Discovering Diverse Landscapes",
      detail:
        "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum",
    },
    {
      photo: Images.memory3,
      title: "Search of Serenity Tranquil Retreats and Escapes",
      detail:
        "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum",
    },
    {
      photo: Images.memory5,
      title: "Road to Adventure Embarking on New Horizons",
      detail:
        "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum",
    },
    {
      photo: Images.memory3,
      title: "Road to Adventure Embarking on New Horizons",
      detail:
        "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum",
    },
    {
      photo: Images.memory5,
      title: "Road to Adventure Embarking on New Horizons",
      detail:
        "Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum",
    },
  ];
  return (
    <div className="contain ">
      <div className="flex flex-col p-8 xl:p-0">
        <div className="flex gap-[10px]">
          <Card />
          <p className="mb-[13px] text-darkGReen">RECENT BLOGS</p>
        </div>
        <div className="pb-[60px]">
          <p className=" text-darkGReen max-w-[630px] text-4xl md:text-[50px] font-bold font-jakarta md:leading-[3.5rem]">
            Journeys of Discovery Uncovering Hidden{" "}
          </p>
        </div>
      </div>
      <div className="w-full pb-16 relative px-8 xl:px-0">
        <div className=" absolute right-5 xl:right-0 -top-16 md:-top-28 z-10  flex flex-row-reverse gap-5">
          <div
            className={`swiper-next bg-lightGreen rounded-full p-3 sm:p-5 lg:p-[1.35rem] cursor-pointer ${
              active === "next" ? "bg-lightGreen" : "bg-white"
            }`}
            onClick={() => setActive("next")}
          >
            <RightArrow />
          </div>
          <div
            className={`swiper-prev border border-borderGray rounded-full p-3 sm:p-5 cursor-pointer ${
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
              <div className="relative max-h-full xl:pb-24 ">
                <div className="flex flex-col  border border-borderGray rounded-3xl">
                  <div>
                    <img
                      className="max-w-full w-full h-[336px] pb-5 rounded-t-3xl"
                      alt="img"
                      src={item.photo}
                    />
                  </div>
                  <div className="px-4 sm:px-10 py-5">
                    <div className="flex justify-between pb-5">
                      <div className="flex gap-[5px] items-center">
                        <Calendar />
                        <p className="font-jakarta text-sm xs:text-base">
                          October 19, 2022
                        </p>
                      </div>
                      <div className="flex gap-[5px] items-center">
                        <Profile />
                        <p className="font-jakarta text-sm xs:text-base">
                          By admin
                        </p>
                      </div>
                    </div>
                    <p className="text-[22px] font-bold font-jakarta text-darkGReen pb-[10px]">
                      {item.title}
                    </p>
                    <p className="text-textGray text-base font-jakarta pb-[30px]">
                      {item.detail}
                    </p>
                    <div className="flex items-start">
                      <Button
                        variant="none"
                        endIcon={<RightArrowGreen />}
                        className="text-darkGReen font-jakarta"
                      >
                        Read More
                      </Button>
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

export default Journeys;
