import React, { useEffect, useRef, useState } from "react";
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Images } from "../../assets/pngs";

const cardData = [
  {
    id: 1,
    detail:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    photo: Images.memory5,
    name: "Albert Flores",
    subName: "Medical Assistant",
  },
  {
    id: 2,
    detail:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    photo: Images.memory5,
    name: "Albert Flores",
    subName: "Medical Assistant",
  },
  {
    id: 3,
    detail:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    photo: Images.memory5,
    name: "Albert Flores",
    subName: "Medical Assistant",
  },
  {
    id: 4,
    detail:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    photo: Images.memory5,
    name: "Albert Flores",
    subName: "Medical Assistant",
  },
  {
    id: 5,
    detail:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    photo: Images.memory5,
    name: "Albert Flores",
    subName: "Medical Assistant",
  },
  {
    id: 6,
    detail:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    photo: Images.memory5,
    name: "Albert Flores",
    subName: "Medical Assistant",
  },
  {
    id: 7,
    detail:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    photo: Images.memory5,
    name: "Albert Flores",
    subName: "Medical Assistant",
  },
  {
    id: 8,
    detail:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    photo: Images.memory5,
    name: "Albert Flores",
    subName: "Medical Assistant",
  },
  {
    id: 9,
    detail:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    photo: Images.memory5,
    name: "Albert Flores",
    subName: "Medical Assistant",
  },
  {
    id: 10,
    detail:
      "We have been operating for over an go providin top-notch services to our is a clients and build strong track record in the industry.We have been operating in for over a decad providi ina ",
    photo: Images.memory5,
    name: "Albert Flores",
    subName: "Medical Assistant",
  },

];

const SwiperSection = () => {
  const swiperRef = useRef(null);

  const getSlidesPerPage = () => {
    const width = window.innerWidth;
    if (width < 640) {
      return 1 * 1; // 1 column * 1 row
    } else if (width < 768) {
      return 1 * 2; // 1 column * 2 rows
    } else if (width < 1024) {
      return 2 * 2; // 2 columns * 2 rows
    } else {
      return 2 * 3; // 2 columns * 3 rows
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (
        target.classList.contains("custom-pagination-number") &&
        target.dataset.index
      ) {
        const index = parseInt(target.dataset.index, 10);
        const slidesPerPage = getSlidesPerPage();

        swiperRef.current?.swiper.slideTo((index - 1) * slidesPerPage);
      }
    };

    const handleResize = () => {
      // Update swiper when window resizes
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.update();
      }
    };

    const container = document.querySelector(".swiper-pagination-custom");
    container?.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    return () => {
      container?.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pagination = {
    clickable: true,
    type: "custom",
    renderCustom: function (swiper, current, total) {
      let pages =
        '<div class="custom-pagination-wrapper pt-4 sm:pt-6 md:pt-7 px-3">';
      for (let i = 1; i <= total; i++) {
        pages += `<span class="${
          i === current
            ? "custom-pagination-number active"
            : "custom-pagination-number"
        }" data-index="${i}">${i}</span>`;
      }
      pages += "</div>";
      return pages;
    },
  };

  return (
    <div className="contain max-w-full h-full pb-16 sm:pb-20 md:pb-32">
      <Swiper
        ref={swiperRef}
        className="mb-6 pb-4 sm:mb-8 sm:pb-6 md:mb-9 md:pb-7"
        modules={[Pagination, Grid]}
        slidesPerView={2}
        spaceBetween={30}
        grid={{ rows: 3, fill: "row" }}
        pagination={pagination}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
            grid: { rows: 1, fill: "row" },
          },
          // 640: {
          //   slidesPerView: 1,
          //   slidesPerGroup: 1,
          //   spaceBetween: 25,
          //   grid: { rows: 2, fill: "row" },
          // },
          // 768: {
          //   slidesPerView: 2,
          //   slidesPerGroup: 1,
          //   spaceBetween: 30,
          //   grid: { rows: 2, fill: "row" },
          // },
          // 1024: {
          //   slidesPerView: 2,
          //   slidesPerGroup: 2,
          //   spaceBetween: 30,
          //   grid: { rows: 3, fill: "row" },
          // },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
            grid: { rows: 3, fill: "row" },
          },
        }}
        centeredSlides={false}
        watchSlidesProgress={true}
      >
        {cardData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative max-h-full bg-white">
              <div
                className={`flex flex-col px-6 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16 md:px-10 md:pt-28 md:pb-20 rounded-2xl md:rounded-3xl ${
                  item.id % 4 === 2 || item.id % 4 === 3
                    ? "bg-bgGreen"
                    : "bg-white"
                }`}
              >
                <p className="pb-6 text-xl sm:text-2xl md:text-3xl text-textGray sm:pb-8 md:pb-10 font-jakarta">
                  {item.detail}
                </p>
                <div className="flex gap-3 sm:gap-4 md:gap-5 items-center">
                  <img
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full"
                    alt="photo"
                    src={item.photo}
                  />
                  <div>
                    <p className="text-lg sm:text-xl font-bold font-jakarta text-darkGReen ">
                      {item.name}
                    </p>
                    <p className="text-sm sm:text-base font-jakarta text-darkGReen opacity-70">
                      {item.subName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSection;
