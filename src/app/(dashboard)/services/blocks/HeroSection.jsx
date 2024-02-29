import React from "react";
import Tag from "@/components/ui/tag";
import bg_lg from "@/assets/bg/clients_header_bg_lg.png";
import stack from "@/assets/services/stack.svg";
import stack_mobile from "@/assets/services/stack-mobile.svg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      id="hero-services"
      className="scrollbar-none container  relative mb-9 w-full border-b border-b-th-fade pt-20 md:mb-[100px]  md:max-w-full lg:pt-[120px]"
    >
      <Image
        alt=""
        className="absolute right-0 top-0 min-h-[100%]   min-w-[200vw] md:min-h-[130%] md:min-w-full lg:min-h-[120%] xl:max-h-[85%]"
        src={bg_lg}
      />
      <div className="relative flex cursor-default flex-col items-center justify-center px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <Tag title={"services"} className={"mb-4 text-base md:mb-8"} />
        <h1 className="mb-10 max-w-[570px]  text-center   text-5xl uppercase text-white lg:mt-6   lg:text-[82px]">
          Services & Technologies
        </h1>
        <span className="max-w-lg   text-center text-sm text-white md:text-base">
          We treat all products we develop as if they’re ours. This is why we go
          the extra mile for every client, providing consultancy and guidance
          from the architecture, design, and marketing strategy standpoints to
          create truly revenue-generating Web3 products
        </span>
      </div>
      <div className="container mt-20 max-w-[360px] md:max-w-[1300px] lg:mt-28">
        <Image
          className="  mb-4 hidden w-full self-center antialiased md:block md:h-auto  md:object-fill lg:scale-[1.15] min-[2000px]:mb-6 min-[2000px]:scale-125"
          src={stack}
          alt=""
        />{" "}
        <Image
          className="block w-full self-center  md:hidden"
          src={stack_mobile}
          alt=""
        />
      </div>
    </section>
  );
};
