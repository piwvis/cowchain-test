import React from "react";
import bg_lg from "assets/bg/clients_header_bg_lg.png";

const Header = () => {
  return (
    <section id="clients-header" className="relative">
      <Image
        alt=""
        className="absolute right-0 top-0 min-h-[150%] min-w-[200vw] md:min-h-[130%] md:min-w-full lg:min-h-[120%] xl:max-h-[85%]"
        src={bg_lg}
      />
      <div className="relative  flex flex-col pb-16 md:pb-32 lg:pb-14 lg:pt-16">
        <h1 className="mx-auto mb-8 mt-4 text-4xl uppercase text-white md:text-6xl  lg:mt-6 xl:!text-[100px]">
          Privacy policy
        </h1>
        <span className="mx-auto font-roc text-base uppercase text-white md:text-[20px]">
          updated on 10th of jan
        </span>
      </div>
    </section>
  );
};

export default Header;
