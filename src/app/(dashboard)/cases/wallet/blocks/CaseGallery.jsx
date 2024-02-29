import React from "react";
import photo1 from "@/assets/case-study/wallet-app/carousel/empty.png";
import photo2 from "@/assets/case-study/wallet-app/carousel/log-in.png";
import photo3 from "@/assets/case-study/wallet-app/carousel/nft-page.png";
import photo4 from "@/assets/case-study/wallet-app/carousel/search.png";
import photo5 from "@/assets/case-study/wallet-app/carousel/stories.png";
import photo6 from "@/assets/case-study/wallet-app/carousel/token-page.png";
import Image from "next/image";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

export const CaseGallery = () => {
  return (
    <div className=" 4xl:px-16 mt-9 flex max-w-[110%] touch-pan-x scroll-m-2 items-start justify-start gap-2 overflow-x-scroll px-5  md:items-center   lg:max-w-full  lg:justify-between">
      {photos.map((imgSrc, index) => (
        <Image
          src={imgSrc}
          className="h-[420px] w-[180px] lg:h-[568px] lg:w-[248px]"
          alt=""
          key={index}
        />
      ))}
    </div>
  );
};
