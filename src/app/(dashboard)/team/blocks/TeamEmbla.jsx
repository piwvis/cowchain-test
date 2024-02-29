import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "./imageByIndex";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TeamEmblaCarousel = (props) => {
  const { options, slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 2500 })
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="py-1">
        <div className="overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="flex min-w-0 flex-row">
            {slides.map((index) => (
              <div
                className="relative flex-[0_0_290px] p-1 md:flex-[0_0_590px]"
                key={index}
              >
                <Image
                  className="block h-[220px] w-full object-cover md:h-[590px]"
                  src={imageByIndex(index)}
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="my-2 hidden items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn("h-2 w-5 rounded bg-slate-600", {
                "bg-white": index === selectedIndex
              })}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamEmblaCarousel;
