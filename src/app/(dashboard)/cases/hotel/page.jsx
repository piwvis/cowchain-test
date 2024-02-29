"use client";

import React from "react";
import "./case-studies.css";
import { HeroSection } from "./blocks/HeroSection";
import Contact from "@/components/Contact";
import hotel from "@/assets/case-study/hotel/hotel-left.png";
import hotel_2 from "@/assets/case-study/hotel/hotel-right.png";
import Link from "next/link";
import Chevron from "@/components/icons/chevron";
import { CaseMask } from "./blocks/CaseMask";
import { CaseGallery } from "./blocks/CaseGallery";
import GreatBritain from "@/assets/icons/gb";
import Projects from "../components/Projects";
import { ProjectDetail } from "../components/project-detail";
import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";

const project_details = [
  {
    title: "Tech Stack",
    content: "React, Node.js, OpenAI , Solidity, ethers.js, web3.js, MongoDB"
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
        <GreatBritain className={"h-3 w-4 "} /> Great Britain
      </div>
    )
  }
];

const team_details = [
  {
    title: "development",
    content: "Oleh Shutiak, Andrii Demakov, Vadim Kudelskiy"
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

export const CaseStudiesTriend = ({ setBurgerOpen }) => {
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
                        Design & develop a plugin for travel, hotel, and
                        recreation apps with a blockchain-powered review system
                        and unique incentives for honest reviews from their
                        customers
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
                      An easy-to-integrate website widget running on a Proof Of
                      Attendance Protocol (POAP) that allows travel providers to
                      have a secure and transparent review system while also
                      incentivizing honest reviews with special rewards. With
                      Triend, travel businesses can optimize their offerings
                      based on valid data and build trust & credibility among
                      customers
                    </span>
                    <Image
                      src={hotel_2}
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

export default CaseStudiesTriend;
