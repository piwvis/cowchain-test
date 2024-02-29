import React from "react";
import bg_lg from "@/assets/bg/clients_header_bg_lg.png";
import Image from "next/image";

const Header = () => {
  return (
    <section id="clients-header" className="relative">
      <Image
        alt=""
        className="absolute right-0 top-0 min-h-[150%] min-w-[200vw] md:min-h-[130%] md:min-w-full lg:min-h-[120%] xl:max-h-[85%]"
        src={bg_lg}
      />
      <div className="px-default relative flex flex-col pb-16 md:pb-32 lg:pb-48 lg:pt-16">
        <div className="mr-auto mt-16 rounded-full border border-white px-8 py-[6px] lg:py-3">
          <p className="body1 text-white">clients</p>
        </div>
        <h1 className="mt-4 uppercase text-white lg:mt-6 xl:!text-[100px]">
          cowchain <br></br> works with
        </h1>
      </div>
    </section>
  );
};

export default Header;
