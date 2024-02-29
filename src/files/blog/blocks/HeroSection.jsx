import React from "react";
import Tag from "components/ui/tag";
import { Category } from "components/ui/category";

const categories = [
  "development",
  "innovation",
  "interviews",
  "nft",
  "gaming",
  "economy",
  "crypto",
  "digital ownership"
];

export const HeroSection = () => {
  return (
    <section className="scrollbar-none container relative mb-9  w-full pt-20 md:mb-[100px]  md:max-w-full lg:pt-[120px]">
      <div className="relative flex flex-col items-center justify-center px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <Tag title={"blog"} className={"mb-4 md:mb-8"} />
        <h1 className="text-center text-5xl uppercase text-white lg:mt-6 lg:max-w-[1200px] lg:text-[82px]">
          Insights & more
        </h1>

        <div className="mt-9 flex max-w-[110%] items-start justify-start gap-2 overflow-x-scroll md:items-center   md:overflow-auto  lg:max-w-full  lg:justify-between  xl:max-w-none ">
          {categories.map((title, index) => (
            <Category key={index} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};
