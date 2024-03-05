import React from "react";
import upwork from "@/assets/homepage/upwork.svg";
import clutch from "@/assets/homepage/clutch.svg";
import Image from "next/image";

export default function HeaderContent() {
  return (
    <>
      <h1 className="relative mt-8 cursor-default uppercase md:mt-16 lg:mt-24">
        We turn your startup ideas into viable Web3 businesses
      </h1>
      <div className="mt-auto grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex items-center md:gap-x-1">
          <a
            href="https://www.upwork.com/ag/cowchain/"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <Image className="w-11 md:w-[70px]" src={upwork} alt=""></Image>
          </a>
          <a
            href="https://clutch.co/profile/cowchain"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <Image className="w-11 md:w-[70px]" src={clutch} alt=""></Image>
          </a>
        </div>
        <div className="my-4 flex cursor-default flex-col gap-y-4 md:items-end">
          <div>
            <h2>developers of web3</h2>
            <div className="md:mt-4 md:flex md:items-center md:justify-between">
              <div className="flex flex-col gap-y-1">
                <p className="body1 text-base">Mykhailo Adzhoiev</p>
                <p className="text-sm  text-secondary">Founder & CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
