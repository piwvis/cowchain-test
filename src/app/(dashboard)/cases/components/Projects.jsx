"use client";

import React, { useRef, useEffect, useState } from "react";
import pic1 from "@/assets/homepage/projects/1.jpg";
import pic2 from "@/assets/homepage/projects/2.jpg";
import pic3 from "@/assets/homepage/projects/3.jpg";
import Link from "next/link";
import { useInView, motion } from "framer-motion";

const projectsData = [
  {
    title: "Crypto payment app",
    description:
      "Mobile app development for a non-custodial Canadian exchange. KYC integration. Chat support",
    photo: pic1,
    tags: ["React.js", "Solidity", "Subgraph"]
  },
  {
    title: "CRYPTO WALLET APP",
    description:
      "Multichain mobile wallet development with AI integration for an optimized portfolio management",
    photo: pic2,
    tags: ["React Native", "Web3Auth", "Subgraph"]
  },
  {
    title: "Blockchain integration into hotel business",
    description:
      "Decentralized plugin development for travelers’ review verification. Proof of Attendance Protocol (POAP) and reward system integration",
    photo: pic3,
    tags: ["React.js", "Solidity", "Node.js"]
  }
];

const Projects = () => {
  const scrollRef = useRef(null);
  const scrollContainer = useRef(null);
  const isInView = useInView(scrollRef, { amount: 0.5 });

  const [elementHeight, setElementHeight] = useState(0);
  const [elementTop, setElementTop] = useState(0);

  const [windowHeight, setWindowHeight] = useState(0);
  const animationHeight = windowHeight - elementHeight * 0.5;

  useEffect(() => {
    setWindowHeight(document.documentElement.clientHeight);
    setElementHeight(scrollRef.current.getBoundingClientRect().height);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      setElementTop(scrollContainer.current.getBoundingClientRect().top);
    };

    if (isInView && window.innerWidth > 768) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isInView]);

  return (
    <section ref={scrollContainer} id="projects" className="relative">
      <div
        ref={scrollRef}
        className="projects-wrapper max-w-100vw box-border grid grid-cols-1 md:flex md:w-full"
      >
        <motion.article
          id="project-1"
          className="project-card relative flex h-80 cursor-pointer border-b border-b-th-fade bg-cover bg-center bg-no-repeat px-4 py-8 md:h-96 md:min-w-[25vw] md:px-8 lg:h-[480px] lg:px-16 xl:h-[624px]"
          style={{
            backgroundImage: `url(${pic1.src})`
          }}
          active={
            animationHeight >= elementTop &&
            elementTop > (animationHeight / 3) * 2 - elementHeight * 0.15
              ? "true"
              : "false"
          }
        >
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/70 to-transparent"></div>
          <Link
            href="/cases/payment"
            className="project-overlay absolute left-0 top-0 flex h-full w-full flex-col gap-y-4 px-12 py-8 xl:py-12"
          >
            <Link href="/cases/payment" className="btn-contact ml-auto">
              VIEW PROJECT
            </Link>
            <div className="mt-auto flex flex-col gap-y-4">
              <div className="flex items-center gap-x-1 md:gap-x-2">
                {projectsData[0].tags.map((tag, index) => (
                  <div key={index} className="rounded-full bg-white px-3 py-2">
                    <p className="text-xs font-medium text-black lg:text-sm">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
              <h2 className="mt-2">Crypto payment app</h2>
              <p className="body max-w-sm !text-[#bbb]">
                Mobile app development for a non-custodial Canadian exchange.
                KYC integration. Chat support
              </p>
            </div>
          </Link>
          <div className="relative mt-auto flex flex-col gap-y-4 lg:hidden">
            <h2>Crypto payment app</h2>
            <p className="max-w-xs text-sm font-normal leading-normal text-[#bbb]">
              Mobile app development for a non-custodial Canadian exchange. KYC
              integration. Chat support
            </p>
          </div>
        </motion.article>
        <article
          id="project-2"
          className="project-card relative flex h-80 w-full cursor-pointer border-b border-b-th-fade bg-cover bg-center bg-no-repeat px-4 py-8 md:h-96 md:min-w-[25vw] md:px-8 lg:h-[480px] lg:px-16 xl:h-[624px]"
          style={{ backgroundImage: `url(${pic2.src})` }}
          active={
            (animationHeight / 3) * 2 - elementHeight * 0.15 >= elementTop &&
            elementTop > animationHeight / 3 - elementHeight * 0.33
              ? "true"
              : "false"
          }
        >
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/70 to-transparent"></div>
          <Link
            href="/cases/wallet"
            className="project-overlay absolute left-0 top-0 flex  h-full w-full flex-col gap-y-4 px-12 py-8   xl:py-12"
          >
            <Link href="/cases/wallet" className="btn-contact ml-auto">
              VIEW PROJECT
            </Link>
            <div className="mt-auto flex flex-col gap-y-4">
              <div className="flex items-center gap-x-1 md:gap-x-2">
                {projectsData[1].tags.map((tag, index) => (
                  <div key={index} className="rounded-full bg-white px-3 py-2">
                    <p className="text-xs font-medium text-black lg:text-sm">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
              <h2 className="mt-2">CRYPTO WALLET APP</h2>
              <p className="body max-w-sm !text-[#bbb]">
                Multichain mobile wallet development with AI integration for an
                optimized portfolio management
              </p>
            </div>
          </Link>
          <div className="relative mt-auto flex flex-col gap-y-4 lg:hidden">
            <h2>CRYPTO WALLET APP</h2>
            <p className="max-w-xs text-sm font-normal leading-normal text-[#bbb]">
              Multichain mobile wallet development with AI integration for an
              optimized portfolio management
            </p>
          </div>
        </article>
        <article
          id="project-3"
          className="project-card relative flex h-80 w-full cursor-pointer border-b border-b-th-fade bg-cover bg-center bg-no-repeat px-4 py-8 md:h-96 md:min-w-[25vw] md:px-8 lg:h-[480px] lg:px-16 xl:h-[624px]"
          style={{ backgroundImage: `url(${pic3.src})` }}
          active={
            animationHeight / 3 - elementHeight * 0.33 >= elementTop &&
            elementTop > elementHeight * -0.5
              ? "true"
              : "false"
          }
        >
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/70 to-transparent"></div>
          <Link
            href="/cases/hotel"
            className="project-overlay absolute left-0 top-0 flex h-full w-full flex-col gap-y-4 px-12 py-8 xl:py-12"
          >
            <Link href="/cases/hotel" className="btn-contact ml-auto">
              VIEW PROJECT
            </Link>
            <div className="mt-auto flex flex-col gap-y-4">
              <div className="flex items-center gap-x-1 md:gap-x-2">
                {projectsData[2].tags.map((tag, index) => (
                  <div key={index} className="rounded-full bg-white px-3 py-2">
                    <p className="text-xs font-medium text-black lg:text-sm">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
              <h2 className="mt-2">
                Blockchain integration into hotel business
              </h2>
              <p className="body max-w-sm !text-[#bbb]">
                Decentralized plugin development for travelers’ review
                verification. Proof of Attendance Protocol (POAP) and reward
                system integration
              </p>
            </div>
          </Link>
          <div className="relative mt-auto flex flex-col gap-y-4 lg:hidden">
            <h2>Blockchain integration into hotel business</h2>
            <p className="max-w-xs text-sm font-normal leading-normal text-[#bbb]">
              Decentralized plugin development for travelers’ review
              verification. Proof of Attendance Protocol (POAP) and reward
              system integration
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
