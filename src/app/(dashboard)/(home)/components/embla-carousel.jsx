import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./embla-buttons";
import { blogData } from "data/blogData";
import { Post } from "./post";
import { cn } from "@/lib/utils";
import arrow_btn from "../../../assets/homepage/arrow-btn.png";

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="border-b border-b-th-fade lg:flex">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {blogData.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
      </div>

      <div className="absolute right-[5rem] top-1/2 z-10 flex translate-y-[-50%] items-center gap-10 ">
        <button
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          id="blog-scroll"
          className={cn(
            "absolute top-1/3 z-30 hidden h-[50px] w-[50px] outline-4 md:block",
            {
              "opacity-0": nextBtnDisabled
            }
          )}
        >
          <Image className="h-full w-full" src={arrow_btn} alt="" />
        </button>
      </div>

      <div className="absolute left-[2rem] top-1/2 z-10 flex translate-y-[-50%] items-center gap-10 ">
        <button
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          id="blog-scroll"
          className={cn(
            "absolute top-1/3 z-30 hidden h-[50px] w-[50px] outline-4 md:block",
            {
              "opacity-0": prevBtnDisabled
            }
          )}
        >
          <Image className="h-full w-full rotate-180" src={arrow_btn} alt="" />
        </button>
      </div>

      {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /> */}
    </div>
  );
};

export default EmblaCarousel;
