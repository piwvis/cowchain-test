import React from "react";
import photo1 from "@/assets/case-study/hotel/carousel/review.png";
import photo2 from "@/assets/case-study/hotel/carousel/macbook.png";
import photo3 from "@/assets/case-study/hotel/carousel/else.png";
import photo4 from "@/assets/case-study/hotel/carousel/video-2.png";
import Image from "next/image";

const photos = [photo1, photo2, photo3, photo4, photo1];

export const CaseGallery = () => {
  return (
    <div className=" 4xl:px-16 mt-9 flex max-w-[110%] touch-pan-x scroll-m-2 items-start justify-start gap-5   overflow-x-scroll px-5  md:items-center   lg:max-w-full  lg:justify-between">
      {photos.map((imgSrc, index) => (
        <Image
          src={imgSrc}
          className="h-[420px] min-w-fit lg:h-[568px] "
          alt=""
          key={index}
        />
      ))}
    </div>
  );
};
