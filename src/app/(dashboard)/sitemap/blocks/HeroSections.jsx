import React from "react";

export const HeroSection = () => {
  return (
    <section className="scrollbar-none relative  mx-auto -mt-[440px] items-center  justify-center overflow-hidden pt-20 text-center   md:max-w-full lg:-mt-[670px]  lg:w-[1432px] lg:pt-[120px]">
      <div className="relative flex flex-col px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <h1 className="mt-4 cursor-default text-left text-5xl uppercase text-white lg:mt-6   lg:text-[54px]">
          Cowchain website map
        </h1>
        <div className="  flex items-center justify-end gap-2 lg:justify-between"></div>
      </div>
    </section>
  );
};
