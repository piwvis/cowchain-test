import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export const CaseMask = () => {
  return (
    <div className="h-[264px] lg:h-[754px]">
      <ParallaxBanner
        layers={[
          {
            image: "/images/retrobridge.png",
            speed: 0
          }
        ]}
        className="relative m-auto aspect-[2/1] h-[264px] lg:h-[754px]"
      />
    </div>
  );
};
