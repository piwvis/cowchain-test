"use client";

import { useState, useRef } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion, useScroll } from "framer-motion";
import Typewriter from "typewriter-effect";
import { cn } from "@/lib/utils";

const benefitsData = [
  {
    title: "Transforming raw concepts into results-driven code",
    text: "If you have an idea or an existing product that you want to upgrade with Web3, we’ll suggest and develop a custom solution for your business that will bring you tangible results ",
    transformStyle: "",
    initialStyle: "border-0"
  },
  {
    title: "Expanding business opportunities for fintech products",
    text: "If you want to integrate crypto and blockchain into your fintech product, we’ll do it in a way that’ll bring your business to its full potential",
    transformStyle:
      "max-h-max -translate-y-[40%] xl:-translate-y-[40%] 2xl:-translate-y-[45%] duration-1000",
    initialStyle:
      "max-h-max translate-y-[60%] xl:translate-y-[30%] 2xl:translate-y-[45%] duration-1000"
  },
  {
    title: "Building impactful and functional Web3 products",
    text: "If you need to develop a Web3 product of any complexity, as a team who lives and breathes Web3, we’ll streamline the entire process and provide clean, secure, and scalable code ",
    transformStyle:
      "max-h-max -translate-y-[80%] xl:-translate-y-[80%] 2xl:-translate-y-[85%]   duration-1000",
    initialStyle:
      "max-h-max translate-y-[25%] 2xl:translate-y-[10%] duration-1000"
  },
  {
    title: "Creating a custom-tailored strategy for every product",
    text: "Our team moves in sync with the market, adapting and reacting to the changes on the go. We’re proactive to the bone and provide milestone updates regularly & promptly",
    transformStyle:
      "max-h-max -translate-y-[120%] xl:-translate-y-[120%] 2xl:-translate-y-[130%] duration-1000",
    initialStyle:
      "max-h-max -translate-y-[15%] xl:-translate-y-[35%] 2xl:-translate-y-[30%] duration-1000"
  },
  {
    title: "Taking full responsibility for the product development",
    text: "You can save yourself a headache by delegating the development process to us. Focus on other things that matter for your business while we deliver the product shaped by your vision",
    transformStyle:
      "max-h-max -translate-y-[160%] xl:-translate-y-[160%] 2xl:-translate-y-[170%] duration-1000",
    initialStyle:
      "max-h-max -translate-y-[55%] xl:-translate-y-[65%] 2xl:-translate-y-[65%]  duration-1000",
    isLast: true
  }
];

export default function Benefits() {
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
    if (yProgress <= 0.2 && yProgress >= 0) setScrollIndex(0);
    if (yProgress <= 0.4 && yProgress >= 0.2) setScrollIndex(1);
    if (yProgress <= 0.6 && yProgress >= 0.4) setScrollIndex(2);
    if (yProgress <= 0.8 && yProgress >= 0.6) setScrollIndex(3);
    if (yProgress <= 1 && yProgress >= 0.8) setScrollIndex(4);
  });

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="relative hidden h-[1800px] md:block md:h-[4000px]"
    >
      <div className="sticky top-0 flex flex-col md:flex-row">
        <div className="px-default md-border-r flex w-full border-b border-b-th-fade py-10 md:w-1/2 md:py-0">
          <div className="my-auto box-border md:sticky">
            <div className="hidden max-w-xl cursor-default text-center font-roc text-2xl font-medium uppercase leading-tight text-white md:my-12 md:block md:text-left md:text-3xl lg:my-16 lg:text-4xl xl:my-20 xl:text-[42px]">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      'Being fully immersed in Web3, we’re not just devs — <span style="background: linear-gradient(146deg, #e9bbff 32.8%, #8e66ff 61.09%);  background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;"> we’re product visionaries </span> working as an in-house team <span style="color: #ffffff71">with you to grow your business with Web3</span> '
                    )
                    .callFunction(({ elements }) => {
                      elements.cursor.hidden = true;
                    })
                    .changeDelay(10)
                    .start();
                }}
              />
            </div>
            <p className="block max-w-xl cursor-default text-center font-roc text-2xl font-medium uppercase leading-tight text-white md:my-12 md:hidden md:text-left md:text-3xl lg:my-16 lg:text-4xl xl:my-20 xl:text-[42px]">
              Being fully immersed in Web3, we’re not just devs —{" "}
              <span className="violet-gradient-text">
                we’re product visionaries
              </span>{" "}
              working as an in-house team{" "}
              <span className="text-[#ffffff71]">
                with you to grow your business with Web3
              </span>
            </p>
          </div>
        </div>
        <div className="border-b border-b-th-fade md:flex md:h-screen md:w-1/2 md:flex-col">
          <Scrollama className="relative" offset={0.5}>
            {benefitsData.map((benefit, index) => {
              return (
                <Step
                  className="relative"
                  data={index + 1}
                  key={benefit.title + index}
                >
                  <article
                    style={benefit.style}
                    className={cn(
                      "px-default relative flex h-[25vh] min-h-[25vh]  grow flex-col items-center justify-center  border-t border-t-th-fade bg-black px-8 py-6 duration-1000 will-change-transform lg:py-16",
                      benefit.initialStyle,
                      scrollIndex >= index ? benefit.transformStyle : ""
                    )}
                  >
                    <motion.div
                      variants={expandVariants}
                      id={"b-expandable-" + index}
                      className={"flex w-full flex-col justify-center py-10"}
                    >
                      <h2
                        className={cn(
                          "mb-16 mt-16 max-w-xl text-xl  text-white 2xl:mb-20",
                          benefit.textStyle,
                          benefit.headerStyle
                        )}
                      >
                        {benefit.title}
                      </h2>
                      <motion.p
                        variants={textVariants}
                        className={cn(
                          " min-h-[100px]  max-w-2xl text-sm !leading-[180%] text-secondary  transition-all  duration-[1000ms] ease-in will-change-transform lg:text-lg",
                          benefit.textStyle,
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
    </section>
  );
}
