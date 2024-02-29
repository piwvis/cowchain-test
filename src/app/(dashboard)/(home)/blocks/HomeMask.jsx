import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export const HomeMask = () => {
  return (
    <div className="h-[280px]">
      <ParallaxBanner
        layers={[{ image: "/images/parallax.png", speed: -15 }]}
        className="relative m-auto aspect-[2/1] h-[280px]"
      />
    </div>
  );
};
