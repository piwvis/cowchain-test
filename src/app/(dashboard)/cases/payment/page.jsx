"use client";

import "./case-studies.css";
import { HeroSection } from "./blocks/HeroSection";
import Contact from "@/components/Contact";
import Projects from "../components/Projects";
import marsan_mobile from "@/assets/case-study/marsan-mobile.png";
import marsan_mobile_black from "@/assets/case-study/marsan-black-mobile.png";
import Link from "next/link";
import Chevron from "@/components/icons/chevron";
import { ProjectDetail } from "../components/project-detail";
import { CaseMask } from "./blocks/CaseMask";
import Canada from "@/assets/icons/canada";
import { CaseGallery } from "./blocks/CaseGallery";
import Image from "next/image";
import { ParallaxProvider } from "react-scroll-parallax";

const project_details = [
  {
    title: "Tech Stack",
    content:
      "React Native, Node.js, Solidity, ethers.js, web3.js, bitcoin.js, Persona KYC, Interac E-transfer, Chat support, email templating"
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
        <Canada className={"h-3 w-4 "} /> Canada
      </div>
    )
  }
];

const team_details = [
  {
    title: "development",
    content: "Saminu Mailafiiia, Daniil Stoian, Oleh Proidakov"
  },
  {
    title: "project management",
    content: "Aleksandr Bohdanov"
  },
  {
    title: "marketing & Seo",
    content: "Ruslan Siniaiev"
  },
  {
    title: "ui/ux design",
    content: "Valeriya Bobko"
  }
];

export const CaseStudiesMarsan = ({ setBurgerOpen }) => {
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
                <div className="flex flex-col items-start justify-start gap-16  lg:flex-row ">
                  <div className="w-full border-t-2  border-white/50 px-5 pt-4 lg:max-w-[600px] lg:px-0">
                    <h3 className="mb-4 text-xs uppercase tracking-[2px] text-secondary">
                      challenge
                    </h3>
                    <span className="mb-10 text-white lg:min-w-[570px]">
                      Design & develop a fiat-to-crypto exchange mobile app with
                      seamless user experience. We had to avoid Canadian
                      regulatory complications to deploy this non-custodial app,
                      while still creating a robust solution for exchanging $CAD
                      for BTC and ETH
                    </span>
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
                      A full-fledged app for Android and iOS for exchanging $CAD
                      to BTC & ETH with integrated Persona KYC for regulatory
                      compliance and Canadian funds transfer service Interac
                      E-transfer for seamless fiat transactions. We also created
                      convenient chat support for real-time assistance and
                      branded email templates for targeted marketing
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

export default CaseStudiesMarsan;
