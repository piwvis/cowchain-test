import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export const CaseMask = () => {
  return (
    <div className="h-[264px] lg:h-[654px]">
      <ParallaxBanner
        layers={[{ image: "/images/triend.png", speed: -2 }]}
        className="relative m-auto aspect-[2/1] h-[264px] lg:h-[654px]"
      />
    </div>
  );
};
