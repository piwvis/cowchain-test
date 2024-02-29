"use client";

import "./case-studies.css";
import { HeroSection } from "./blocks/HeroSection";
import Contact from "@/components/Contact";
import Projects from "../components/Projects";
import hotel from "@/assets/case-study/step/1-left.png";
import hotel_2 from "@/assets/case-study/step/1-right.png";
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
      "React Native, Node.js, Solidity, ethers.js, web3.js, bitcoin.js, Persona KYC, Interac E-transfer, Chat support, email templating"
  },
  {
    title: "project duration",
    content: "6 months"
  },
  {
    title: "geography",
    content: (
      <div className="flex flex-row items-center gap-2">
        {" "}
        <Dubai className={"h-3 w-4 "} /> Dubai
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

// eslint-disable-next-line react/prop-types
export const CaseStudiesStep = ({ setBurgerOpen }) => {
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
                        In the development of our move-to-earn mobile
                        application, we encountered a unique set of challenges.
                        Primarily, integrating real-world physical activity,
                        represented by car movement, with digital asset tracking
                        presented a complex technical hurdle. Ensuring accurate
                        and seamless tracking of user movements via the map
                        interface required sophisticated location-based
                        technologies and algorithms. Another significant
                        challenge was the integration of blockchain technology
                        to manage the native token system for user
                        incentivization. This demanded not only expertise in
                        blockchain development but also a deep understanding of
                        user interaction with the token economy. Furthermore,
                        the implementation of a staking mechanism for the native
                        token added another layer of complexity, necessitating
                        robust security measures to protect user assets. The
                        development of an in-game marketplace for asset trading
                        also posed challenges, particularly in creating a
                        user-friendly interface that could handle real-time
                        transactions efficiently. Balancing these technical
                        demands while maintaining a smooth and engaging user
                        experience was a critical and ongoing challenge
                        throughout the project.
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
                      Despite the challenges, our team successfully launched a
                      sophisticated move-to-earn mobile application that has
                      been enthusiastically received by users. The app core
                      feature, allowing users to choose an avatar and move with
                      a car, while their progress is tracked on a map, functions
                      seamlessly, offering an engaging and motivating user
                      experience. The integration of blockchain technology was
                      executed flawlessly, enabling users to be incentivized
                      with our native token for their physical activities. This
                      feature not only added an exciting dimension to the app
                      but also introduced users to the world of digital
                      currencies in a fun and interactive way. The staking of
                      the native token has been a particular success,
                      encouraging long-term engagement with the app.
                      Additionally, the in-game marketplace for asset trading
                      has been well-received, providing users with a platform to
                      trade assets earned or purchased within the app. The
                      dashboard feature, allowing users to manage assets both
                      in-game and on the blockchain, has provided a high level
                      of utility and convenience, further enhancing the user
                      experience. Overall, the project has not only overcome
                      technical and user experience challenges but has also set
                      a new standard in the move-to-earn space.
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

export default CaseStudiesStep;
