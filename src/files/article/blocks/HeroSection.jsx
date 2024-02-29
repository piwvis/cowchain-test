import React from "react";
import Tag from "components/ui/tag";
import linkedin from "assets/footer/linkedin.svg";
import telegram from "assets/footer/telegram.svg";
import twitter from "assets/footer/twitter.svg";
import medium from "assets/footer/medium.svg";

export const HeroSection = () => {
  return (
    <section className="scrollbar-none container relative mb-9  w-full pt-20 md:mb-[60px]  md:max-w-full lg:pt-[120px]">
      <div className="relative flex flex-col items-center justify-center px-5 pb-8 md:px-8 md:pb-12 lg:px-16 xl:px-24">
        <Tag title={"Gaming"} className={"mb-4 md:mb-8"} />
        <h1 className="text-center text-3xl uppercase text-white lg:mt-6 lg:max-w-[1200px] lg:text-5xl">
          Web3 Gaming: The Future of Immersive and Rewarding Experiences
        </h1>

        <span className="mt-4 text-secondary">written by John Smith</span>

        <div className="mx-auto mt-6 flex items-center justify-center gap-x-2 md:mx-0 md:justify-start">
          <a
            href="https://www.linkedin.com/company/cowchain/"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <Image
              alt="linkedin"
              className="w-12 lg:w-16"
              src={linkedin}
            ></Image>
          </a>
          <a
            href="https://t.me/cowchain_team"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <Image
              alt="telegram"
              className="w-12 lg:w-16"
              src={telegram}
            ></Image>
          </a>
          <a
            href="https://x.com/cow_chain?s=21&t=GzCtGwm3Tlc6X48xYesJlw"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <Image alt="twitter" className="w-12 lg:w-16" src={twitter}></Image>
          </a>
          <a
            href="https://cowchain.medium.com/"
            rel="nofollow noreferrer"
            target="_blank"
          >
            <Image alt="medium" className="w-12 lg:w-16" src={medium}></Image>
          </a>
        </div>
      </div>
    </section>
  );
};
