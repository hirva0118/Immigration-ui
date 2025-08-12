
import { Images } from '../../assets/pngs'
import { ReactComponent as Quote } from "../../assets/svgs/quote.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ReactComponent as RightArrowGreen2 } from "../../assets/svgs/rightArrowgreen2.svg";
import { ReactComponent as LeftArrowGreen } from "../../assets/svgs/leftArrowGreen.svg";

import "swiper/swiper-bundle.css";

const cardData = [
  {
    detail:
      "We have been operating for over an providin top-notch services to our clients and build strong track record in the industry.We have been operating for over a decad providi ina top-notch  We have been operating",
    photo: Images.memory4,
    name: "Albert Flores",
    subName: "Web Designer",
  },
  {
    detail:
      "Our team has been delivering value-driven solutions for years, ensuring high satisfaction and establishing a trusted name in the market. Our team has been delivering value-driven services ",
    photo: Images.memoery2,
    name: "John Mac",
    subName: "Android Designer",
  },
  {
    detail:
      "Our mission is to innovate with purpose, offering tailored strategies and consistent delivery that meet our client expectations. mission is to innovate for impact through smart design. Our mission is to innovate",
    photo: Images.memory7,
    name: "Albert Flores",
    subName: "Web Designer",
  },
  {
    detail:
      "For years we’ve worked alongside businesses, creating scalable and effective tools that help them thrive. For years we’ve built strong systems for growth. For years we’ve worked",
    photo: Images.memory4,
    name: "Albert Flores",
    subName: "Web Designer",
  },
];

const BelowUnknown = () => {
  return (
    <div className="contain px-2 sm:px-8 xl:px-0 pb-8 md:pb-[120px]">
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-7 p-8 xl:p-0 items-center px-4 justify-center">
        <div className="rounded-2xl">
          <img
            className="max-w-full sm:max-w-[250px] md:max-w-80 rounded-3xl xl:max-w-[520px] h-[500px] lg:h-[645px] object-cover"
            alt="img"
            src={Images.memory5}
          />
        </div>
        <div className="relative bg-lightGreen rounded-2xl max-w-72 xs:max-w-96 sm:max-w-80 lg:max-w-md xl:max-w-xl 2xl:max-w-[740px] h-[500px] lg:h-[645px] p-4 lg:p-10 xl:p-[60px] ">
          <div>
            <div className="absolute bottom-6 lg:bottom-10 right-10 lg:right-14 flex gap-5 z-10">
              <div className="swiper-prevReview bg-white w-8 lg:w-14 h-8 lg:h-14 rounded-full p-2 lg:p-5 cursor-pointer">
                <LeftArrowGreen />
              </div>
              <div className="swiper-NextReview bg-white w-8 lg:w-14 h-8 lg:h-14 rounded-full p-2 lg:p-5 cursor-pointer">
                <RightArrowGreen2 />
              </div>
            </div>
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                prevEl: ".swiper-prevReview",
                nextEl: ".swiper-NextReview",
              }}
              breakpoints={{
                0: { slidesPerView: 1, slidesPerGroup: 1 },
                640: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 1, slidesPerGroup: 1 },
                1024: { slidesPerView: 1, slidesPerGroup: 1 },
                1536: { slidesPerView: 1, slidesPerGroup: 1 },
              }}
              centeredSlides={false}
              watchSlidesProgress={true}
            >
              {cardData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="pb-2 md:pb-5">
                    <Quote />
                  </div>
                  <p className="text-xl xl:text-3xl xl:text-[30px] text-white pb-6 lg:pb-11 lg:leading-[3rem] font-jakarta">
                    {item.detail}
                  </p>
                  <div className="flex gap-5 pb-20">
                    <img
                      className="w-[70px] h-[70px] rounded-full "
                      alt="img"
                      src={item.photo}
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-white text-[22px] font-bold font-jakarta">
                        {item.name}
                      </p>
                      <p className="text-base text-white font-jakarta">
                        {item.subName}
                      </p>
                    </div>
                  </div>
                  <hr className=" hidden 2xl:block max-w-md border border-borderGray mt-16" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BelowUnknown
