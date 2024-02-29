"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel
} from "@chakra-ui/react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const faqData = [
  {
    title:
      "What is Web3 development, and how is it different from traditional web development?",
    content:
      "Web3 development represents the evolution of web technologies towards decentralized, blockchain-based systems. Unlike traditional web development, Web3 focuses on creating applications that leverage blockchain, smart contracts, and decentralized protocols to enable trustless, transparent, and secure interactions. In Web3, smart contracts, self-executing pieces of code, automate processes without intermediaries, fostering trust and reducing reliance on central authorities"
  },
  {
    title:
      "What measures are taken to ensure the security of Web3 applications?",
    content:
      "Web3 applications prioritize security through smart contract audits, secure coding practices, and encryption protocols. Regular penetration testing identifies vulnerabilities, and decentralized identity systems enhance user privacy. Immutable ledgers in blockchain technology ensure data integrity, and community involvement through open-source development contributes to overall security. Continuous monitoring detects and responds to real-time threats, and adaptation to evolving standards is essential for maintaining robust security in the dynamic Web3 landscape."
  },
  {
    title: "How can I monetize my Web3 application?",
    content:
      "Tokenization: Implement utility tokens within your Web3 app, allowing users to engage in transactions and exchanges with the platform's native token. NFT Sales: Monetize by selling unique digital assets as NFTs, enabling users to buy, sell, and trade these assets within the application. Subscription Plans: Introduce subscription models for premium features, offering users enhanced functionalities in exchange for a recurring fee. DeFi Integration: Explore decentralized finance (DeFi) opportunities, such as lending or yield farming, and generate revenue through associated transaction fees or interest."
  },
  {
    title: "What are the benefits of using Web3 applications for my business?",
    content:
      "Web3 applications bring transparency and trust to the forefront by leveraging decentralized technologies. This not only reduces dependence on intermediaries but also introduces innovative monetization through utility tokens, creating a dynamic user-centric economy within the application. The result is a more secure and forward-thinking digital environment for your business"
  },
  {
    title:
      "How can a Web3 development agency help my business implement blockchain technology effectively?",
    content:
      "Web3 development agencies prioritize security throughout the development process. This includes rigorous smart contract auditing, following best practices for secure coding, implementing encryption protocols, conducting penetration testing, and keeping abreast of the latest security standards."
  }
];

export default function FAQ() {
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <section id="faq" className="relative z-30">
      <div className="relative grid grid-cols-1 md:grid-cols-5">
        <div className="py-heading px-default md-border-r flex justify-center border-b border-b-th-fade text-center md:col-span-2">
          <h2 className="flex max-w-[321px] justify-center text-center text-4xl uppercase leading-[40px]  text-white md:max-w-[365px] md:text-left md:text-[60px] md:leading-[53px]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        <div className="md:col-span-3">
          <Accordion allowToggle>
            {faqData.map((faq, index) => (
              <AccordionItem key={index} className="border-b border-th-fade">
                {({ isExpanded }) => (
                  <div
                    className={cn(
                      "relative bg-cover px-5 py-8 xl:px-[60px] xl:py-16",
                      {
                        "bg-[url('/assets/faq-gradient.png')]": isExpanded
                      }
                    )}
                    key={index}
                  >
                    <AccordionButton className={cn("relative")}>
                      <div className="mr-auto w-full max-w-3xl text-left ">
                        <span className="max-w-2xl text-left font-roc !text-base font-medium uppercase !leading-none text-white lg:!text-xl lg:!leading-none">
                          {faq.title}
                        </span>
                      </div>
                      {isExpanded ? (
                        <svg
                          width={screenWidth > 768 ? "50" : "32"}
                          height={screenWidth > 768 ? "50" : "32"}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="16" cy="16" r="16" fill="white" />
                          <path
                            d="M12.2656 16H19.7323"
                            stroke="black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width={screenWidth > 768 ? "50" : "32"}
                          height={screenWidth > 768 ? "50" : "32"}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="16"
                            cy="16"
                            r="15.75"
                            stroke="white"
                            strokeOpacity="0.5"
                            strokeWidth="0.5"
                          />
                          <path
                            d="M16 12.2666V19.7333"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.2656 16H19.7323"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </AccordionButton>
                    <AccordionPanel
                      className={cn("opacity-0  will-change-transform", {
                        "pt-6 opacity-100 ": isExpanded
                      })}
                    >
                      <div className=" ">
                        <p className="max-w-2xl !leading-[160%] !text-[#bbb] lg:!leading-[175%]">
                          {faq.content}
                        </p>
                      </div>
                    </AccordionPanel>
                  </div>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
