"use client";

import React, { useState, useRef } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion, useScroll } from "framer-motion";
import Tag from "@/components/ui/tag";
import bg from "@/assets/bg/values.png";
import { cn } from "@/lib/utils";
import TeamInfo from "../blocks/team-info";
import Image from "next/image";

const benefitsData = [
  {
    title: "01 / Passion",
    text: "The Cowchain team is united by our burning desire to lead the transformation of how people interact with the world. And we have the experience & skills to fulfill it. How? Through successfully deployed products shaped by the vision of startups, enterprises, and Web3 pioneers who choose to work with us. ",
    transformStyle: "",
    initialStyle: "border-0 "
  },
  {
    title: "02 / Individual Approach",
    text: "Cowchcain offers no “one-size-fits-alls.” We immerse ourselves in our clients' businesses, speaking their language and working as an in-house product team to develop effective solutions with users in mind. Your goals become our goals, and your challenges fuel our creativity.",
    transformStyle:
      "max-h-max -translate-y-[5%] xl:-translate-y-[5%] duration-1000",
    initialStyle:
      "max-h-max translate-y-[80%] xl:translate-y-[115%]  duration-1000"
  },
  {
    title: "03 / We are the devs of Web3.",
    text: "In our worldview, there’s a huge difference between being Web3 developers and developers of Web3. Web3 devs know how to implement blockchain technologies. Devs of Web3 code meaningful products that add value to the community and push the industry forward. We are the devs of Web3.",
    transformStyle:
      "max-h-max -translate-y-[10%] xl:-translate-y-[10%]  duration-1000",
    initialStyle:
      "max-h-max translate-y-[25%] xl:translate-y-[60%] duration-1000"
  }
];

export const Values = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepExit = ({ direction, data }) => {
    if (direction === "up" && currentStepIndex === 1) setCurrentStepIndex(0);
  };

  const expandVariants = {
    visible: { height: "auto" },
    hidden: { height: 0 }
  };

  const textVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef });

  const [scrollIndex, setScrollIndex] = useState(null);

  scrollYProgress.on("change", (yProgress) => {
    if (yProgress <= 0.3 && yProgress >= 0) setScrollIndex(0);
    if (yProgress <= 0.6 && yProgress >= 0.3) setScrollIndex(1);
    if (yProgress <= 0.9 && yProgress >= 0.6) setScrollIndex(2);
  });

  return (
    <div className="hidden md:block">
      <section
        ref={sectionRef}
        id="benefits"
        className="relative hidden h-[2800px] md:block  md:h-[3200px]"
      >
        <div className="sticky top-0">
          <Image
            className="absolute -bottom-44 left-0 hidden h-[1625px] w-[700px] xl:block"
            src={bg}
            alt=""
          ></Image>
          <button className=" absolute bottom-1/3 left-0 right-0 z-20 mx-auto hidden h-36 w-36 cursor-pointer items-center justify-center rounded-full bg-white font-roc text-base font-medium uppercase text-black lg:h-44 lg:w-44 xl:block">
            Get in touch
          </button>
          <div className="  flex h-screen flex-col xl:flex-row">
            <div className="flex items-start justify-start border-b border-b-th-fade   border-r-th-fade md:h-screen xl:w-1/2 xl:items-center xl:border-b xl:border-r ">
              <div className="sticky mb-12  ml-5 mt-16 flex max-w-[354px] flex-col items-start justify-start xl:mb-0 xl:ml-28">
                <Tag className={"mb-4 justify-start"} title={"our values"} />
                <p className="font-roc text-4xl font-medium  uppercase  text-white  xl:text-7xl">
                  What we value
                </p>
                <button className="btn-submit mt-6 cursor-pointer items-center justify-center bg-white font-roc   text-base font-medium uppercase text-black xl:hidden  xl:px-12">
                  Get in touch
                </button>
              </div>
            </div>
            <div className="h-screen items-center justify-center border-b border-b-th-fade md:flex md:flex-col xl:w-1/2">
              <Scrollama
                offset={0.5}
                onStepEnter={onStepEnter}
                onStepExit={onStepExit}
              >
                {benefitsData.map((benefit, index) => {
                  return (
                    <Step data={index + 1} key={benefit.title + index}>
                      <article
                        className={cn(
                          "px-default relative flex h-[25vh] min-h-[25vh] w-full  grow flex-col items-center justify-center overflow-hidden border-t border-t-th-fade bg-black   py-6 duration-1000 will-change-transform",
                          benefit.initialStyle,
                          scrollIndex >= index ? benefit.transformStyle : ""
                        )}
                      >
                        <motion.div
                          className={"flex w-full flex-col justify-center "}
                          variants={expandVariants}
                          id={"b-expandable-" + index}
                        >
                          <span className="mb-12 max-w-xl text-2xl text-white  ">
                            {benefit.title}
                          </span>
                          <motion.p
                            variants={textVariants}
                            className={cn(
                              " min-h-[100px] max-w-2xl text-sm !leading-[180%] text-secondary  transition-all  duration-[1000ms] ease-in will-change-transform xl:text-base 2xl:text-lg",
                              {
                                "block  transition-all duration-1000":
                                  scrollIndex === index
                              }
                            )}
                          >
                            {benefit.text}
                          </motion.p>
                        </motion.div>
                      </article>
                    </Step>
                  );
                })}
              </Scrollama>
            </div>
          </div>
        </div>
      </section>
      <TeamInfo />
    </div>
  );
};
