import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export const CaseMask = () => {
  return (
    <div className="h-[264px] lg:h-[504px]">
      <ParallaxBanner
        layers={[
          {
            image: "/images/step-bg.png",
            speed: -15,
            rootMargin: { top: 100, right: 100, bottom: 1600, left: 200 }
          }
        ]}
        className="relative m-auto aspect-[2/1] h-[274px] lg:h-[504px]"
      >
        <div className="absolute bottom-0 left-28 flex items-center justify-center md:left-auto md:right-32">
          <img src="/images/step.png" alt="" />
        </div>
      </ParallaxBanner>
    </div>
  );
};
