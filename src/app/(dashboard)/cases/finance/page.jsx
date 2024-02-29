"use client";

import React from "react";
import "./case-studies.css";
import { HeroSection } from "./blocks/HeroSection";
import Contact from "@/components/Contact";
import Projects from "../components/Projects";
import hotel from "@/assets/case-study/finance/1-left.png";
import hotel_2 from "@/assets/case-study/finance/1-right.png";
import Link from "next/link";
import Chevron from "@/components/icons/chevron";
import { ProjectDetail } from "../components/project-detail";
import { CaseMask } from "./blocks/CaseMask";
import { CaseGallery } from "./blocks/CaseGallery";
import Eu from "@/assets/icons/eu";
import { ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";

const project_details = [
  {
    title: "Tech Stack",
    content: "React, Node.js, Solidity, ethers.js, web3.js, MongoDB,"
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
        <Eu className={"h-6 w-6 "} /> EU
      </div>
    )
  }
];

const team_details = [
  {
    title: "development",
    content: "Vakhtang Chikhladze, Daniil Stoian, Nikita Chernega"
  },
  {
    title: "project management",
    content: "Viacheslav Ivchenko"
  },
  {
    title: "marketing & Seo",
    content: "Alexandr Yaremenko"
  },
  {
    title: "ui/ux design",
    content: "Nadiia Nikiforova"
  }
];

export const CaseStudiesFinance = ({ setBurgerOpen }) => {
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
                <div className="flex  h-full flex-col items-start justify-start gap-16  lg:flex-row ">
                  <div className="flex w-full  flex-col justify-between border-t-2 border-white/50 px-5  pt-4 md:min-h-[702px]   lg:max-w-[600px] lg:px-0">
                    <div>
                      <h3 className="mb-4 text-xs uppercase tracking-[2px] text-secondary">
                        challenge
                      </h3>
                      <span className="mb-10 text-white lg:min-w-[570px]">
                        The development of the platform, which involved
                        multifaceted challenges. Among the most daunting were
                        the technical complexities inherent in adapting and
                        enhancing an established DeFi protocol, particularly in
                        integrating an additional transaction fee while ensuring
                        platform liquidity and user engagement. The
                        incorporation of native token demanded extensive work on
                        smart contract development and integration.
                        Additionally, constructing a comprehensive admin page
                        for efficient management of users, pools, and assets
                        posed a significant challenge, necessitating a delicate
                        balance between backend robustness and frontend
                        usability. Ensuring top-tier security standards for
                        financial transactions and data integrity was also a
                        critical focus, given the high risks associated with
                        blockchain technologies.
                      </span>
                    </div>

                    <Image
                      src={hotel}
                      className="mt-8 min-h-[270px] w-full object-cover lg:mt-14 lg:min-h-[500px]"
                      alt=""
                    />
                  </div>
                  <div className="w-full border-t-2 border-white/50 px-5 pt-4 lg:max-w-[600px] lg:px-0">
                    <h3 className="mb-4  text-xs uppercase tracking-[2px] text-secondary">
                      Result
                    </h3>
                    <span className="text-white">
                      Despite these challenges, the project achieved notable
                      success. The team skillfully forked and enhanced the
                      Uniswap protocol, creating a robust and versatile DeFi
                      platform. A key achievement was the effective
                      implementation of an innovative transaction fee structure
                      that added a new revenue stream without undermining the
                      competitive edge. The seamless integration of the platform
                      token has boosted user engagement and platform loyalty.
                      The development of a user-friendly and efficient admin
                      page significantly improved operational efficiency and
                      decision-making capabilities. Most importantly, the
                      platform's security was fortified at every level, ensuring
                      the safety and integrity of all transactions and
                      bolstering user trust in the ecosystem.
                    </span>
                    <Image
                      src={hotel_2}
                      className="mt-8 min-h-[270px] w-full object-cover md:mt-20 lg:min-h-[500px]"
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

export default CaseStudiesFinance;
