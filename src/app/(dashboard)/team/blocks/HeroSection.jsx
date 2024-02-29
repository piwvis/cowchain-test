import React from "react";
import Tag from "@/components/ui/tag";
import TeamCarousel from "./TeamEmblaWrapper";

export const HeroSection = () => {
  return (
    <section className="scrollbar-none relative -mt-[440px] w-full overflow-hidden border-b border-b-th-fade pt-20 md:max-w-full  lg:-mt-[670px] lg:pt-[120px]">
      <div className="relative flex cursor-default flex-col items-start justify-center px-5 pb-8 md:px-8 md:pb-12 lg:items-center lg:px-16 xl:px-24">
        <Tag title={"team"} className={"mb-4 md:mb-8"} />
        <h1 className="mb-10 max-w-[1150px] text-[32px] uppercase text-white lg:mt-6 lg:text-[82px] xl:text-center   xl:text-7xl">
          We are a team of{" "}
          <span className="violet-gradient-text">30+ web3 natives</span> making
          crypto simple since 2020
        </h1>
      </div>
      <div className="mb-8 md:mb-16">
        <TeamCarousel />
      </div>
    </section>
  );
};
