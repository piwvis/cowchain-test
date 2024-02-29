import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export const CaseMask = () => {
  return (
    <div className="h-[264px] lg:h-[504px]">
      <ParallaxBanner
        layers={[{ image: "/images/eva-bg.png", speed: -15 }]}
        className="relative m-auto aspect-[2/1] h-[264px] lg:h-[504px]"
      >
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
          <img src="/images/eva.png" alt="" />
        </div>
      </ParallaxBanner>
    </div>
  );
};
