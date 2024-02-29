import React from "react";
import Chevron from "@/components/icons/chevron";
import Link from "next/link";
import Tag from "@/components/ui/tag";

export const HeroSection = () => {
  return (
    <section className="relative px-4 md:pt-16">
      <div className="relative pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <Link
          href={"/cases"}
          className="flex items-center gap-2 text-white  underline-offset-4 hover:underline"
        >
          <Chevron className="h-4 w-4" />
          <span className="text-xs text-secondary">back to all projects</span>
        </Link>
        <div className="flex flex-col items-center justify-center">
          <h1 className="my-6 text-center uppercase">m2e platform</h1>
          <div className="mb-2 flex flex-wrap gap-[6px] md:mb-8 md:flex-nowrap">
            <Tag title={"DEX"} />
            <Tag title={"Non-custodial exchange"} />
            <Tag title={"Staking"} />
            <Tag title={"Move-to-Earn"} />
          </div>
        </div>
      </div>
    </section>
  );
};
