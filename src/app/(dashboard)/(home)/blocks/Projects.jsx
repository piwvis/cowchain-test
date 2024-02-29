"use client";

import React, { useState, useRef } from "react";
import pic1 from "@/assets/homepage/projects/1.jpg";
import pic2 from "@/assets/homepage/projects/2.jpg";
import pic3 from "@/assets/homepage/projects/3.jpg";
import { Scrollama, Step } from "react-scrollama";
import { useScroll } from "framer-motion";

import { Project } from "../components/project";

const projectsData = [
  {
    title: "Crypto payment app",
    link: "/cases/payment",
    description:
      "Mobile app development for a non-custodial Canadian exchange. KYC integration. Chat support",
    photo: pic1,
    tags: ["React.js", "Solidity", "Subgraph"]
  },
  {
    title: "CRYPTO WALLET APP",
    link: "/cases/wallet",
    description:
      "Multichain mobile wallet development with AI integration for an optimized portfolio management",
    photo: pic2,
    tags: ["React Native", "Web3Auth", "Subgraph"]
  },
  {
    title: "Blockchain integration into hotel business",
    link: "/cases/hotel",

    description:
      "Decentralized plugin development for travelers’ review verification. Proof of Attendance Protocol (POAP) and reward system integration",
    photo: pic3,
    tags: ["React.js", "Solidity", "Node.js"]
  }
];

const Projects = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef });

  const [scrollIndex, setScrollIndex] = useState(null);

  scrollYProgress.on("change", (yProgress) => {
    if (yProgress <= 0.3 && yProgress >= 0) setScrollIndex(0);
    if (yProgress <= 0.6 && yProgress >= 0.3) setScrollIndex(1);
    if (yProgress <= 0.9 && yProgress >= 0.6) setScrollIndex(2);
  });

  return (
    <section ref={sectionRef} className="relative h-full md:h-[4000px]">
      <div className="sticky top-0 flex flex-col flex-nowrap lg:flex-row">
        <Scrollama offset={0.5}>
          {projectsData.map((project, index) => (
            <Step key={project.title}>
              <Project index={index} scrollIndex={scrollIndex} {...project} />
            </Step>
          ))}
        </Scrollama>
      </div>
    </section>
  );
};

export default Projects;
