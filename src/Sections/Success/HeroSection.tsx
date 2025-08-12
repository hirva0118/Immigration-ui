import React from 'react'

const HeroSection = () => {
  return (
    <div className="container max-w-full">
      <div className="relative rounded-[50px] bg-darkGReen h-36 xs:h-60 sm:h-[462px] mb-8 md:mb-24">
        <div className="absolute top-9 xs:top-20 sm:top-36 left-10 xs:left-20 md:left-36 lg:left-64">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-4xl sm:text-[80px] font-jakarta text-white sm:leading-[5.5rem]">
              Success Story
            </p>
            <p className="text-white font-semibold font-jakarta text-lg">
              Home {">"} Success Story
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection
