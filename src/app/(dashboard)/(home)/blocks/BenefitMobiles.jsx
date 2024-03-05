"use client";

import { useState, useRef } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import bg from "@/assets/homepage/bg.png";

const benefitsData = [
  {
    title: "Transforming raw concepts into results-driven code",
    text: "If you have an idea or an existing product that you want to upgrade with Web3, we’ll suggest and develop a custom solution for your business that will bring you tangible results ",
    transformStyle: ""
  },
  {
    title: "Expanding business opportunities for fintech products",
    text: "If you want to integrate crypto and blockchain into your fintech product, we’ll do it in a way that’ll bring your business to its full potential",
    transformStyle: "max-h-max -translate-y-[55%] duration-1000",
    initialStyle: "max-h-max duration-1000",
    headerStyle: "max-w-[320px]"
  },
  {
    title: "Building impactful and functional Web3 products",
    text: "If you need to develop a Web3 product of any complexity, as a team who lives and breathes Web3, we’ll streamline the entire process and provide clean, secure, and scalable code ",
    transformStyle: "max-h-max -translate-y-[110%] duration-1000",
    initialStyle: "max-h-max -translate-y-[55%] duration-1000"
  },
  {
    title: "Creating a custom-tailored strategy for every product",
    text: "Our team moves in sync with the market, adapting and reacting to the changes on the go. We’re proactive to the bone and provide milestone updates regularly & promptly",
    transformStyle: "max-h-max -translate-y-[165%] duration-1000",
    initialStyle: "max-h-max -translate-y-[110%] duration-1000"
  },
  {
    title: "Taking full responsibility for the product development",
    text: "You can save yourself a headache by delegating the development process to us. Focus on other things that matter for your business while we deliver the product shaped by your vision",
    transformStyle: "max-h-max -translate-y-[220%] duration-1000",
    initialStyle: "max-h-max -translate-y-[165%] duration-1000",
    isLast: true
  },
  {
    title: "Taking full responsibility for the product development",
    text: "You can save yourself a headache by delegating the development process to us. Focus on other things that matter for your business while we deliver the product shaped by your vision",

    initialStyle:
      "max-h-max h-[250px] border-b border-b-th-fade  bg-cover bg-center bg-no-repeat -translate-y-[220%] duration-1000",
    style: { backgroundImage: `url(${bg.src})` },
    textStyle: "text-transparent"
  }
];

export default function BenefitsMobiles() {
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
      className="relative  h-[2800px]  md:hidden md:h-[4000px]"
    >
      <div className="px-default md-border-r flex w-full border-b border-b-th-fade py-10 md:w-1/2 md:py-0">
        <div className="my-auto box-border md:sticky">
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
      <div className="sticky top-0 flex h-screen flex-col md:flex-row">
        <div className="relative flex flex-col justify-between md:flex md:h-screen md:w-1/2 md:flex-col">
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
                      "relative flex h-[250px] min-h-[250px] grow flex-col items-center justify-center overflow-hidden border-t border-t-th-fade bg-black px-5    duration-1000  will-change-transform ",
                      benefit.initialStyle,
                      scrollIndex >= index ? benefit.transformStyle : ""
                    )}
                  >
                    <motion.div
                      variants={expandVariants}
                      id={"b-expandable-" + index}
                      className={"flex  flex-col justify-center py-10"}
                    >
                      <h2
                        className={cn(
                          "mb-6 max-w-[285px]   text-base text-white",
                          benefit.textStyle,
                          benefit.headerStyle
                        )}
                      >
                        {benefit.title}
                      </h2>
                      <motion.p
                        variants={textVariants}
                        className={cn(
                          " min-h-[100px] text-sm !leading-[180%] text-secondary  transition-all  duration-[1000ms] ease-in will-change-transform lg:text-lg",
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
