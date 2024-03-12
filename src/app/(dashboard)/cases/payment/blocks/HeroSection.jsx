import React from "react";
import Link from "next/link";
import Tag from "@/components/ui/tag";
import home from "@/assets/icons/home.png";
import arrow from "@/assets/icons/arrow.svg";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative px-4 md:pt-16">
      <div className="relative pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <div className="mb-6 flex gap-4">
          <Link href={"/"}>
            <Image
              className="h-[22px] w-[24px] md:h-[24px] md:w-[24px]"
              src={home}
            />
          </Link>
          <Image
            className="h-[22px] w-[24px] md:h-[24px] md:w-[24px]"
            src={arrow}
          />
          <Link href={"/cases"} className="text-sm text-white md:text-base">
            Cases
          </Link>
          <Image
            className="h-[22px] w-[24px] md:h-[24px] md:w-[24px]"
            src={arrow}
          />
          <span className="text-sm text-white md:text-base">Payment</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="my-6 text-center uppercase">Exchange wallet app</h1>
          <div className="flex justify-center gap-2">
            <Tag title={"Mobile App"} />
            <Tag title={"Non-custodial exchange"} />
          </div>
        </div>
      </div>
    </section>
  );
};
