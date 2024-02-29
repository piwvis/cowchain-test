import React from "react";
import photo1 from "@/assets/case-study/finance/carousel/1.png";
import photo2 from "@/assets/case-study/finance/carousel/2.png";
import photo3 from "@/assets/case-study/finance/carousel/3.png";
import photo4 from "@/assets/case-study/finance/carousel/4.png";
import photo5 from "@/assets/case-study/finance/carousel/5.png";
import photo6 from "@/assets/case-study/finance/carousel/6.png";
import Image from "next/image";

const photos = [photo1, photo2, photo3, photo4, photo1, photo5, photo6];

export const CaseGallery = () => {
  return (
    <div className=" 4xl:px-16 mt-9 flex max-w-[110%] touch-pan-x scroll-m-2 items-start justify-start gap-5   overflow-x-scroll px-5  md:items-center   lg:max-w-full  lg:justify-between">
      {photos.map((imgSrc, index) => (
        <Image
          src={imgSrc}
          className="h-[420px]  lg:h-[568px] "
          alt=""
          key={index}
        />
      ))}
    </div>
  );
};
