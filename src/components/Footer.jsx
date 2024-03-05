"use client";

import { useState, useEffect } from "react";
import FooterForm from "./utils/FooterForm";
import { usePathname } from "next/navigation";
import linkedin from "@/assets/footer/linkedin.svg";
import telegram from "@/assets/footer/telegram.svg";
import twitter from "@/assets/footer/twitter.svg";
import medium from "@/assets/footer/medium.svg";
import mail from "@/assets/footer/mail.svg";
import Faq from "react-faq-component";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logofont from "@/assets/footer/logofont.svg";
import Link from "next/link";
import Image from "next/image";
import { useLoader } from "@/hooks/useLoader";
import { cn } from "@/lib/utils";

const faqRows = {
  title: "",
  rows: [
    {
      title: <h2>WHAT WE DO</h2>,
      content: (
        <div className="footer-links mb-8 mt-4 flex flex-col gap-y-4">
          <AnchorLink href="#expertise">
            <p>Services & Techonologies</p>
          </AnchorLink>
          <AnchorLink href="#projects">
            <p>Cases</p>
          </AnchorLink>
          <AnchorLink href="#clients">
            <p>Clients</p>
          </AnchorLink>
        </div>
      )
    },
    {
      title: <h2>AGENCY</h2>,
      content: (
        <div className="footer-links mb-8 mt-4 flex flex-col gap-y-4">
          <Link href={"/"}>
            <p>Team</p>
          </Link>
        </div>
      )
    },
    {
      title: <h2>HELP</h2>,
      content: (
        <div className="footer-links mb-8 mt-4 flex flex-col gap-y-4">
          <AnchorLink href="#contact">
            <p>Contact Us</p>
          </AnchorLink>
          <Link href={"/policy"}>
            <p>Privacy Policy</p>
          </Link>
          <AnchorLink href="#faq">
            <p>FAQs</p>
          </AnchorLink>
        </div>
      )
    }
  ]
};

const faqConfig = {
  animate: true,
  openOnload: false,
  expandIcon: (
    <svg
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6L0.803848 -4.86779e-08L11.1962 -1.3313e-06L6 6Z"
        fill="white"
      />
    </svg>
  ),
  collapseIcon: (
    <svg
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6L0.803848 -4.86779e-08L11.1962 -1.3313e-06L6 6Z"
        fill="white"
      />
    </svg>
  )
};

const faqStyles = {
  bgColor: "#000000",
  titleTextColor: "white",
  titleTextSize: "16px",
  rowTitleColor: "white",
  rowContentTextSize: "16px",
  rowContentPaddingTop: "0px",
  rowContentPaddingBottom: "0px",
  rowContentPaddingLeft: "0px",
  rowContentPaddingRight: "0px",
  arrowColor: "none",
  transitionDuration: "0.3s",
  timingFunc: "ease"
};

export default function Footer() {
  const [isBorder, setIsBorder] = useState(false);
  const { isRendering } = useLoader();
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
    setIsBorder(pathname === "/sitemap" || pathname === "/error");
  }, [pathname]);

  return (
    <>
      {" "}
      <section
        id="footer"
        className={cn("relative opacity-0", {
          "opacity-100": !isRendering,
          "border-t border-t-th-fade": isBorder
        })}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md-border-r py-heading px-default flex flex-col gap-y-8 border-b border-b-th-fade text-center">
            <span className="text-center font-roc text-xl font-medium uppercase text-white md:text-left">
              What’s on your mind?
            </span>
            <div className="max-w-xl">
              <p className="text-center text-[#bbb] md:text-left">
                Submit your email address and our team will get in touch with
                you within 48 hours. Or drop us a line at{" "}
                <a
                  className="ml-1 inline text-white underline md:text-left"
                  href="mailto:sales@cowchain.io"
                >
                  sales@cowchain.io
                </a>
              </p>
            </div>
            <FooterForm />
            <div className="mx-auto flex items-center justify-center gap-x-2 md:mx-0 md:justify-start">
              <a
                href="https://www.linkedin.com/company/cowchain/"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Image
                  alt="linkedin"
                  className="w-12 lg:w-16"
                  src={linkedin}
                ></Image>
              </a>
              <a
                href="https://t.me/cowchain_team"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Image
                  alt="telegram"
                  className="w-12 lg:w-16"
                  src={telegram}
                ></Image>
              </a>
              <a
                href="https://x.com/cow_chain?s=21&t=GzCtGwm3Tlc6X48xYesJlw"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Image
                  alt="twitter"
                  className="w-12 lg:w-16"
                  src={twitter}
                ></Image>
              </a>
              <a
                href="https://cowchain.medium.com/"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Image
                  alt="medium"
                  className="w-12 lg:w-16"
                  src={medium}
                ></Image>
              </a>
              <a
                href="mailto:sales@cowchain.io"
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Image alt="mail" className="w-12 lg:w-16" src={mail}></Image>
              </a>
            </div>
          </div>
          <div className="py-heading px-default border-b border-b-th-fade lg:hidden">
            <Faq data={faqRows} styles={faqStyles} config={faqConfig} />
          </div>

          <div className="py-heading px-default hidden border-b border-b-th-fade lg:block">
            <div className="grid grid-cols-3 gap-x-8">
              <div className="footer-links">
                <p className="font-roc text-base font-medium !text-white">
                  WHAT WE DO
                </p>
                <div className="my-8 flex flex-col gap-y-4">
                  <Link href="/services">
                    <p className="text-[#bbb]">
                      Services &<br></br> Techonologies
                    </p>
                  </Link>
                  <Link href="/cases">
                    <p className="text-[#bbb]">Cases</p>
                  </Link>
                  <Link href="/clients">
                    {" "}
                    <p className="text-[#bbb]">Clients</p>
                  </Link>
                </div>
              </div>
              <div className="footer-links">
                <p className="font-roc text-base font-medium !text-white">
                  AGENCY
                </p>
                <div className="my-8 flex flex-col gap-y-4">
                  <Link href="/team">
                    <p className="text-[#bbb]">Team</p>
                  </Link>
                </div>
              </div>
              <div className="footer-links">
                <p className="font-roc text-base font-medium !text-white">
                  HELP
                </p>
                <div className="my-8 flex flex-col gap-y-4">
                  <AnchorLink href="#contact">
                    <p className="text-[#bbb]">Contact Us</p>
                  </AnchorLink>
                  <Link href="/policy">
                    <p className="text-[#bbb]">Privacy Policy</p>
                  </Link>
                  <AnchorLink href="#faq">
                    <p className="text-[#bbb]">FAQs</p>
                  </AnchorLink>
                  <Link href="/sitemap">
                    <p className="text-[#bbb]">Sitemap</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 py-3 md:col-span-2 md:py-8">
            <a href="/">
              <Image className="w-full" src={logofont} alt=""></Image>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
