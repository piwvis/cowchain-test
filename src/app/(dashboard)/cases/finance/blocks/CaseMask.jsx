import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export const CaseMask = () => {
  return (
    <div className="h-[264px] lg:h-[504px]">
      <ParallaxBanner
        layers={[
          {
            image: "/images/finance-bg.png",
            speed: -15
          }
        ]}
        className="relative m-auto aspect-[2/1] h-[274px] lg:h-[504px]"
      >
        <div className="absolute inset-x-2 bottom-0 flex items-center justify-center  ">
          <img src="/images/finance.png" alt="" />
        </div>
      </ParallaxBanner>
    </div>
  );
};
