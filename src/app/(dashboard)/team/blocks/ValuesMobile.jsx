"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Tag from "@/components/ui/tag";
import bg from "@/assets/bg/values.png";
import { cn } from "@/lib/utils";
import TeamInfo from "./team-info";
import Image from "next/image";

const benefitsData = [
  {
    title: "01 / Passion",
    text: "The Cowchain team is united by our burning desire to lead the transformation of how people interact with the world. And we have the experience & skills to fulfill it. How? Through successfully deployed products shaped by the vision of startups, enterprises, and Web3 pioneers who choose to work with us. "
  },
  {
    title: "02 / Individual Approach",
    text: "Cowchcain offers no “one-size-fits-alls.” We immerse ourselves in our clients' businesses, speaking their language and working as an in-house product team to develop effective solutions with users in mind. Your goals become our goals, and your challenges fuel our creativity."
  },
  {
    title: "03 / We are the devs of Web3.",
    text: "In our worldview, there’s a huge difference between being Web3 developers and developers of Web3. Web3 devs know how to implement blockchain technologies. Devs of Web3 code meaningful products that add value to the community and push the industry forward. We are the devs of Web3."
  }
];

export const ValuesMobile = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef });

  const [scrollIndex, setScrollIndex] = useState(0);

  scrollYProgress.on("change", (yProgress) => {
    setScrollIndex(parseInt(yProgress * 100 * 5.2));
  });

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative h-[2000px] md:hidden  md:h-[3200px]"
    >
      <div className="sticky top-0">
        <Image
          className="absolute -bottom-44 left-0 hidden h-[1625px] w-[700px] lg:block"
          src={bg}
          alt=""
        ></Image>
        <button className=" absolute bottom-1/3 left-0 right-0 mx-auto hidden h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-white font-roc text-base font-medium uppercase text-black lg:h-44 lg:w-44 xl:block">
          Get in touch
        </button>
        <div className="  flex h-screen flex-col xl:flex-row">
          <div className="z-20 flex items-start justify-start border-b border-b-th-fade border-r-th-fade bg-black md:h-screen xl:w-1/2 xl:items-center xl:border-b xl:border-r ">
            <div className="sticky  mb-12  ml-5 mt-16 flex max-w-[354px] flex-col items-start justify-start xl:mb-0 xl:ml-28">
              <Tag className={"mb-4 justify-start"} title={"our values"} />
              <p className="font-roc text-4xl font-medium  uppercase  text-white  xl:text-7xl">
                What we value
              </p>
              <button className="btn-submit mt-6 cursor-pointer items-center justify-center bg-white font-roc   text-base font-medium uppercase text-black xl:hidden  xl:px-12">
                Get in touch
              </button>
            </div>
          </div>
          <motion.div
            className={cn(
              "z-10 h-screen items-center justify-center bg-black md:flex md:flex-col xl:w-1/2"
            )}
            animate={{ y: -scrollIndex }}
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 3 }
            }}
          >
            {benefitsData.map((benefit, index) => {
              return (
                <div data={index + 1} key={benefit.title + index}>
                  <article
                    className={cn(
                      "px-default last:borber-b relative flex max-h-[278px] grow flex-col items-center justify-center overflow-hidden border-t border-t-th-fade  bg-black py-6 will-change-transform last:border-b  last:border-b-th-fade last:border-b-th-fade lg:py-8"
                    )}
                  >
                    <div className="flex flex-col  justify-center">
                      <span className="max-w-xl text-2xl text-white">
                        {benefit.title}
                      </span>
                      <p
                        className={cn(
                          "mt-6 min-h-[100px] text-sm !leading-[180%] text-secondary  transition-all  ease-in will-change-transform lg:text-lg"
                        )}
                      >
                        {benefit.text}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </motion.div>
        </div>
        <TeamInfo />
      </div>
    </section>
  );
};
