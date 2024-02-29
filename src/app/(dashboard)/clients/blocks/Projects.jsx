"use client";

import { useState, useEffect } from "react";
import marsan from "@/assets/cases/marsan.png";
import eva from "@/assets/cases/eva-mobile.png";
import retrobridge from "@/assets/cases/retrobridge-mobile.png";
import step from "@/assets/cases/step.png";
import finance from "@/assets/cases/finance-mobile2.png";
import triend from "@/assets/cases/triend-mobile.png";
import { Scrollama, Step } from "react-scrollama";
import Link from "next/link";

const sectionsData = [
  {
    title: "Startups riding the blockchain wave",
    description:
      "Got an idea keeping you up at night? Let's turn it into a tangible and effective solution. We'll guide you through the development process, ensuring that your product is both functional and aligned with your business goals",
    projects: [
      {
        pic: finance,
        name: "Decentralized crypto exchange",
        link: "/cases/finance"
      },
      {
        pic: triend,
        name: "Integration blockchain into hotel business",
        link: "/cases/hotel"
      }
    ]
  },
  {
    title: "Enterprises leveraging blockchain tech advancements",
    description:
      "Unlock new business opportunities by incorporating blockchain and crypto functionalities into your existing products. With our Web3 expertise, we'll bring your business to the intersection of Web2 and blockchain tech in a way that will continuously drive increased profit for your company",
    projects: [
      {
        pic: step,
        name: "m2e platform",
        link: "/cases/move"
      },
      {
        pic: marsan,
        name: "Exchange wallet app",
        link: "/cases/payment"
      }
    ]
  },
  {
    title: "Web3 entrepreneurs pioneering the future",
    description:
      "From concept to polished product, we provide you with clean, secure, and adaptable code aligned with market trends. We live and breathe Web3, so we can fully cover the development of your impactful Web3 ventures while you do other things that matter for your business",
    projects: [
      {
        pic: eva,
        name: "Crypto wallet app",
        link: "/cases/wallet"
      },
      {
        pic: retrobridge,
        name: "Cross-chain transfer bridge",
        link: "/cases/bridge"
      }
    ]
  }
];

const Projects = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(document.body.clientWidth);
  }, []);

  const onStepEnter = ({ direction, data }) => {
    if (direction === "down" || (direction === "up" && currentStepIndex === 0))
      setCurrentStepIndex(data);
  };

  const onStepExit = ({ direction }) => {
    if (direction === "down" && currentStepIndex === 3) setCurrentStepIndex(0);
    if (direction === "up" && currentStepIndex !== 0)
      setCurrentStepIndex(currentStepIndex - 1);
    /*if (direction === "up" && currentStepIndex === 1) setCurrentStepIndex(0); */
  };

  return (
    <section id="clients-projects">
      <div className="relative grid grid-cols-1 md:grid-cols-7">
        <div className="px-default hidden py-10 pb-48 md:col-span-3 md:block">
          <div className="h-[1px]"></div>
          <div className="sticky top-48 flex flex-col gap-y-12 lg:gap-y-16">
            <h4
              className="clients-projects-marker text-th-fade"
              active={currentStepIndex === 1 ? "true" : "false"}
            >
              Startups
            </h4>
            <h4
              className="clients-projects-marker text-th-fade"
              active={currentStepIndex === 2 ? "true" : "false"}
            >
              Enterprises
            </h4>
            <h4
              className="clients-projects-marker text-th-fade"
              active={currentStepIndex === 3 ? "true" : "false"}
            >
              Web3 natives
            </h4>
          </div>
        </div>
        <div className="relative md:col-span-4">
          <div className="section-rendered h-4"></div>
          <Scrollama
            offset={0.5}
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
          >
            {sectionsData &&
              sectionsData.map((section, index) => {
                return (
                  <Step data={index + 1} key={index}>
                    <article
                      className={
                        index !== 2
                          ? "sticky flex flex-col bg-black px-4 md:px-8"
                          : "sticky flex flex-col bg-black px-4 md:px-8"
                      }
                      style={{
                        top: `${
                          windowWidth < 768 ? index * 128 : (index + 1) * 108
                        }px`,
                        marginBottom: `${
                          windowWidth < 768
                            ? (2 - index) * 128
                            : (2 - index) * 108
                        }px`
                      }}
                    >
                      <div
                        className={
                          index === 0
                            ? "h-[1px] py-6"
                            : "h-[1px] border-t border-t-th-fade py-6"
                        }
                      ></div>
                      <p className="max-w-xs font-roc text-xl font-medium uppercase leading-none text-white md:max-w-none">
                        {section.title}
                      </p>
                      <div className="mt-10 bg-black">
                        <p className="max-w-xl text-th-grey">
                          {section.description}
                        </p>
                        <div className="my-8 flex max-w-3xl flex-wrap items-center justify-center gap-4 md:my-12 md:mr-8 md:grid md:grid-cols-2 md:justify-start lg:mb-20 lg:mr-16 lg:gap-6 xl:mb-32 xl:mr-24">
                          {section.projects &&
                            section.projects.map((project, index) => (
                              <Link
                                href={project.link}
                                key={index}
                                className="relative flex h-[30vh] w-full max-w-[320px] flex-col p-4 md:h-[420px] md:w-full md:max-w-none md:p-8"
                              >
                                <div
                                  className="absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat"
                                  style={{
                                    backgroundImage: `url(${project.pic.src})`
                                  }}
                                ></div>
                                <h2 className="relative mt-auto max-w-[140px] text-white md:max-w-[216px]">
                                  {project.name}
                                </h2>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </article>
                  </Step>
                );
              })}
          </Scrollama>
        </div>
      </div>
    </section>
  );
};

export default Projects;
