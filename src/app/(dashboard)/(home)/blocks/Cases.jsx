"use client";

import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect
} from "react";
import marsan from "@/assets/cases/marsan.png";
import eva from "@/assets/cases/eva.png";
import triend from "@/assets/cases/triend-fit.png";
import bridge from "@/assets/cases/bridge-fit.png";
import step from "@/assets/cases/step.png";
import finance from "@/assets/cases/finance-fit.png";

import { useScroll } from "framer-motion";

import ResizeObserver from "resize-observer-polyfill";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { ScrollProject } from "./ScrollProject";

import useScrollPercentage from "react-scroll-percentage-hook";

const projectsData = [
  {
    title: "Exchange wallet app",
    link: "/cases/payment",
    description:
      "Fiat-to-crypto non-custodial exchange mobile app with seamless user experience for exchanging $CAD for BTC and ETH",
    photo: marsan,
    tags: ["React.js", "Solidity", "Subgraph"]
  },
  {
    title: "Blockchain integration into hotel business",
    link: "/cases/hotel",

    description:
      "Plugin for travel, hotel, and recreation apps with a blockchain-powered review system and unique incentives for honest reviews from their customers.",
    photo: triend,
    tags: ["React.js", "Solidity", "Node.js"]
  },
  {
    title: "Cross-chain transfer bridge",
    link: "/cases/bridge",
    description:
      "Cross-chain bridge that allows users to swap tokens across multiple blockchain networks with minimized commissions.",
    photo: bridge,
    tags: ["React Native", "Web3Auth", "Subgraph"]
  },
  {
    title: "m2e platform",
    link: "/cases/move",
    description:
      "Robust ecosystem for fitness finance that contains multiple various applications: move to earn application, blockchain wallet, dex, launchpad, dashboard etc.",
    photo: step,
    tags: ["DEX", "Staking", "Move-to-earn"]
  },
  {
    title: "DECENTRALIZED CRYPTO EXCHANGE",
    link: "/cases/finance",

    description:
      "Secure and convenient decentralized cryptocurrency exchange that allows to swap hundreds of crypto assets using liquidity pool mechanism.",
    photo: finance,
    tags: ["DEX", "DEFI"]
  },
  {
    title: "CRYPTO WALLET APP",
    link: "/cases/wallet",
    description:
      "Non-custodial multichain crypto wallet which allows users to create a blockchain wallet using web2 socials like Google, Facebook, Apple, email in one click.",
    photo: eva,
    tags: ["Mobile App", "Non-custodial wallet"]
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
    [0, 0.7],
    [0, -scrollRange + viewportW]
  );
  // const physics = {
  //   damping: 20,
  //   mass: 0.2,
  //   stiffness: 2000,
  //   velocity: 100
  // };
  // const spring = useSpring(transform, physics);

  return (
    <section ref={containerRef} className="relative z-10">
      <div className="scroll-container top-[30%] border-y border-y-th-fade md:overflow-hidden xl:top-[20%]">
        <motion.div
          ref={scrollRef}
          style={{ x: transform }}
          className="cases_wrapper relative flex overflow-x-scroll   md:overflow-x-visible  "
        >
          {projectsData &&
            projectsData.map((project, index) => (
              <ScrollProject key={index} index={index} {...project} />
            ))}
        </motion.div>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange - scrollRange / 2 }}
        className="ghost hidden md:block"
      />
    </section>
  );
};

export default Cases;
