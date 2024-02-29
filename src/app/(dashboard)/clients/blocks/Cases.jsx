"use client";

import marsan from "@/assets/cases/marsan.png";
import eva from "@/assets/cases/eva.png";
import triend_mobile from "@/assets/cases/triend-mobile.png";
import retrobridge_mobile from "@/assets/cases/retrobridge-mobile.png";
import step from "@/assets/cases/step.png";
import finance_mobile from "@/assets/cases/finance-mobile.png";
import { useScroll } from "framer-motion";
import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

import useScrollPercentage from "react-scroll-percentage-hook";

const casesData = [
  {
    title: "Exchange wallet app",
    pic: marsan
  },
  {
    title: "Integration blockchain into hotel business",
    pic: triend_mobile
  },
  {
    title: "Cross-chain transfer bridge",
    pic: retrobridge_mobile
  },
  {
    title: "m2e platform",
    pic: step
  },
  {
    title: "decentralized crypto exchange",
    pic: finance_mobile
  },
  {
    title: "Crypto wallet app",
    pic: eva
  }
];

const Cases = () => {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const scrollPerc = useMotionValue(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useScroll({
    target: ghostRef
  });

  const { containerRef, percentage } = useScrollPercentage();

  useEffect(() => {
    scrollPerc.set(percentage.vertical);
  }, [percentage.vertical, scrollPerc]);

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = {
    damping: 50,
    mass: 0.2,
    stiffness: 4500,
    velocity: 100
  };
  const spring = useSpring(transform, physics);

  return (
    <section ref={containerRef} className="relative z-10">
      <div className="scroll-container top-[30%] border-y border-y-th-fade md:overflow-hidden xl:top-[20%]">
        <motion.div
          ref={scrollRef}
          style={{ x: spring }}
          className="cases_wrapper relative flex gap-x-2 overflow-x-scroll p-2 md:gap-x-4 md:overflow-x-visible lg:py-8"
        >
          {casesData &&
            casesData.map((project, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${project.pic.src})`
                }}
                className="relative flex h-64 w-full min-w-[256px] max-w-[256px] bg-cover bg-center bg-no-repeat p-6 md:p-8 lg:h-[30vw] lg:min-w-[30vw] lg:p-10"
              >
                <h2 className="mt-auto max-w-xs text-white">{project.title}</h2>
              </div>
            ))}
        </motion.div>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className="ghost hidden md:block"
      />
    </section>
  );
};

export default Cases;
