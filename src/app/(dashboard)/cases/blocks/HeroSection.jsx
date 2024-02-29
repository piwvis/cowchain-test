import React from "react";
import bg_lg from "@/assets/bg/clients_header_bg_lg.png";
import Tag from "@/components/ui/tag";
import { Helmet } from "react-helmet";
import Image from "next/image";

export const HeroSection = ({ setTags, tags }) => {
  return (
    <section className="relative pt-20 lg:pt-[120px]">
      <Helmet>
        <link rel="canonical" href={"https://cowchain.io/cases"} />
      </Helmet>
      <Image
        alt=""
        className="absolute right-0 top-0 min-h-[150%] min-w-[200vw] md:min-h-[130%] md:min-w-full lg:min-h-[120%] xl:max-h-[85%]"
        src={bg_lg}
      />
      <div className="relative flex flex-col px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <Tag className={"mr-auto cursor-default"} title={"case studies"} />
        <h1 className="mt-4 cursor-default text-5xl uppercase text-white lg:mt-6 lg:max-w-[1200px] lg:text-[100px]">
          we offer the diversity of skills
        </h1>
        <div className="my-14 flex items-center justify-end gap-2 lg:justify-between"></div>
      </div>
    </section>
  );
};
