import React from "react";
type CardProps = {
  image: string;
  title: string;
  description: string;
  image1: React.ReactNode;
  image2: React.ReactNode;
};

const CardComponent:React.FC<CardProps> = ({ image, title, description, image1, image2 }) => {
  return (
    <div className="flex items-center flex-col sm:flex-row gap-12 h-full sm:h-72 py-5 pl-5 pr-2 sm:pr-10 rounded-xl border border-borderLight bg-bgGreen">
      <div className=" ">
        <img
          src={image}
          alt="Card Image"
          className=" max-w-full sm:max-w-[258px] h-[251px] object-fill rounded-2xl"
        />
      </div>

      <div className="flex flex-col pt-5">
        <h2 className=" font-jakarta font-bold text-dark mb-[10px] text-darkGReen text-[22px]">
          {title}
        </h2>
        <p className="text-base font-jakarta text-textGray mb-7">
          {description}
        </p>

        <div className="flex justify-between">
          <div className="cursor-pointer">{image1}</div>
          <div className="cursor-pointer">{image2}</div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
