"use client";

import React from "react";
import "./case-studies.css";
import { HeroSection } from "./blocks/HeroSection";
import Contact from "@/components/Contact";
import Projects from "../components/Projects";
import marsan_mobile from "@/assets/case-study/wallet-app/wallet-blue.png";
import marsan_mobile_black from "@/assets/case-study/wallet-app/wallet-black.png";
import Link from "next/link";
import Chevron from "@/components/icons/chevron";
import { ProjectDetail } from "../components/project-detail";
import { CaseMask } from "./blocks/CaseMask";
import Dubai from "@/assets/icons/dubai";
import { CaseGallery } from "./blocks/CaseGallery";
import { ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";

const project_details = [
  {
    title: "Tech Stack",
    content:
      "React Native, Node.js, Solidity, ethers.js, Chat support, OpenAi, Web3Auth"
  },
  {
    title: "project duration",
    content: "5 months"
  },
  {
    title: "geography",
    content: (
      <div className="flex flex-row items-center gap-2">
        {" "}
        <Dubai className={"h-3 w-4 "} /> United Dubai
      </div>
    )
  }
];

const team_details = [
  {
    title: "development",
    content: "Oleh Shutiak, Bogdan Solomakha, Nikita Chernega"
  },
  {
    title: "project management",
    content: "Viacheslav Ivchenko"
  },
  {
    title: "marketing & Seo",
    content: "Ruslan Siniaiev"
  },
  {
    title: "ui/ux design",
    content: "Nadiia Nikiforova"
  }
];

export const CaseStudiesEva = ({ setBurgerOpen }) => {
  return (
    <section id="clients-wrapper">
      <ParallaxProvider>
        <div className="relative bg-black">
          <HeroSection />
          <CaseMask />
          <div>
            <div className="container flex w-full flex-col items-center justify-center px-0 md:px-16 xl:max-w-[1300px]">
              <div className="my-16 flex flex-col justify-center  gap-20 lg:my-36 lg:min-w-[440px] lg:gap-36 xl:flex-row">
                <div className="flex flex-col items-center justify-center lg:justify-start xl:min-w-[512px] xl:items-start">
                  <h1 className="mb-6 whitespace-nowrap text-3xl uppercase lg:mb-12  lg:text-6xl">
                    project details
                  </h1>
                  <Link href={""} className="flex items-center gap-2">
                    <span className="text-sm uppercase text-white underline lg:text-2xl">
                      visit website
                    </span>
                    <Chevron className="h-4 w-4 rotate-180" />
                  </Link>
                </div>
                <div className="border-b-[1px] border-white/50 lg:min-w-[490px]">
                  {project_details.map((detail, index) => (
                    <ProjectDetail key={detail.title + index} {...detail} />
                  ))}
                </div>
              </div>
            </div>

            <CaseGallery />

            <div className="container flex w-full flex-col items-center justify-center px-0 md:px-16 xl:max-w-[1300px]">
              <div className="my-16 flex flex-col items-center justify-center gap-16 lg:my-36 lg:gap-16">
                <div className="w-full">
                  <h3 className=" flex justify-center uppercase lg:items-start lg:justify-start">
                    What we did
                  </h3>
                </div>
                <div className="flex h-full flex-col items-start justify-start gap-16  lg:flex-row ">
                  <div className="flex w-full  flex-col justify-between border-t-2 border-white/50 px-5  pt-4 md:min-h-[702px]   lg:max-w-[600px] lg:px-0">
                    <div>
                      <h3 className="mb-4 text-xs uppercase tracking-[2px] text-secondary">
                        challenge
                      </h3>
                      <span className="mb-10 text-white lg:min-w-[570px]">
                        The development of Wallet App, the industry's first
                        user-friendly crypto wallet, presented numerous
                        challenges. Integrating multi-chain compatibility was a
                        complex task, requiring a deep understanding of various
                        blockchain technologies to ensure seamless
                        interoperability. Implementing a non-custodial
                        framework, essential for user autonomy, demanded robust
                        security measures akin to those in international banking
                        apps. A significant hurdle was the development of
                        bio-authentication to replace traditional key
                        management, ensuring high-level security and user
                        convenience. Additionally, integrating AI to translate
                        voice and text commands into on-chain actions was
                        pivotal in making cryptocurrency accessible to
                        non-technical users. Establishing easy fiat rails posed
                        challenges in navigating regulatory landscapes while
                        maintaining user-friendliness for seamless crypto-fiat
                        interactions.
                      </span>
                    </div>

                    <Image
                      src={marsan_mobile}
                      className="mt-8 min-h-[270px] w-full object-cover lg:mt-14 lg:min-h-[500px]"
                      alt=""
                    />
                  </div>
                  <div className="w-full border-t-2 border-white/50 px-5 pt-4 lg:max-w-[600px] lg:px-0">
                    <h3 className="mb-4  text-xs uppercase tracking-[2px] text-secondary">
                      Result
                    </h3>
                    <span className="text-white">
                      A crypto wallet app for iOS and Android designed to be
                      accessible for billions of non-technical people around the
                      world. We successfully implemented a versatile multi-chain
                      access system, allowing users to interact with different
                      blockchains effortlessly. The innovative
                      bio-authentication system offers bank-level security,
                      setting a new standard in the crypto wallet space. The
                      integration of AI has revolutionized the way users manage
                      crypto transactions, significantly flattening the learning
                      curve and making crypto accessible to billions worldwide.
                      The implementation of easy fiat rails has enhanced
                      financial flexibility, enabling smooth crypto-fiat
                      transactions. Eva's design, focusing on user-friendliness
                      and intuitive navigation, has made it a gateway for
                      non-technical users to enter the world of cryptocurrency,
                      fostering wider adoption and community engagement through
                      features like game playing and token allocations.
                    </span>
                    <Image
                      src={marsan_mobile_black}
                      className="mt-8 min-h-[270px] w-full object-cover lg:min-h-[500px]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="my-5 flex  flex-col justify-center   lg:my-36  lg:flex-row lg:gap-36">
                <div className="flex flex-col items-center justify-center lg:min-w-[512px] lg:items-start lg:justify-start">
                  <h1 className=" mb-8  max-w-[210px]  text-left text-3xl  uppercase    lg:max-w-[392px]   lg:text-6xl">
                    team behind the project
                  </h1>
                </div>
                <div className="border-b-[1px] border-white/50 xl:min-w-[490px]">
                  {team_details.map((detail, index) => (
                    <ProjectDetail key={detail.title + index} {...detail} />
                  ))}
                </div>
              </div>

              <div className="mb-10 mt-16 flex w-full flex-col items-start justify-between px-5 lg:flex-row  lg:items-center">
                <h1 className="mb-6 text-left text-3xl uppercase  lg:text-6xl">
                  see more projects
                </h1>
                <Link href={"/cases"} className="flex items-center gap-2">
                  <span className="text-sm uppercase text-white underline lg:text-2xl">
                    view all
                  </span>
                  <Chevron className="h-4 w-4 rotate-180" />
                </Link>
              </div>
            </div>
          </div>

          <Projects />
          <Contact />
        </div>
      </ParallaxProvider>
    </section>
  );
};

export default CaseStudiesEva;
