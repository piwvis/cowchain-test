import React from "react";
import clutch from "@/assets/homepage/clutch.svg";
import upwork from "@/assets/homepage/upwork.svg";
import star from "@/assets/clients/reate-star.svg";
import bg from "@/assets/bg/clients_feedback.png";
import Image from "next/image";

const feedbackData = [
  {
    text: '"The company most impressive trait was their innovative integration of web3 technology, which set them apart."',
    author: "Davyd Koriahin, Co-CEO, Retro Bridge"
  },
  {
    text: '"Their adeptness in navigating blockchain issues and clear communication made our collaboration productive and seamless."',
    author: "Artem Poliakoff, CEO,  Biometric technologies"
  },
  {
    text: '"They exhibit a proactive approach and showcase remarkable talent as developers."',
    author: "Antoine Marsan, CEO & Founder, Marsan Exchange Inc."
  },
  {
    text: '"The project manager was always in touch and answered all questions."',
    author: "Vlafymyr Dovzhuk PO, Web3 Development Company"
  },
  {
    text: '"They delivered a ready-to-go ecosystem and app that worked perfectly with all our requests."',
    author: "COO, Crypto App Provider"
  },
  {
    text: '"We were impressed with their extensive experience in blockchain development."',
    author: "CEO, Mobile Gaming Company"
  },
  {
    text: '"Cowchain is a great team. They have extensive experience in developing blockchain projects. Good communication and responsibility. I am very excited to work with them on future projects. I definitely recommend them for cooperation."',
    author: "CEO, Crypto project development"
  }
];

const Quote = ({ text, author, index }) => {
  return (
    <article
      className={
        index === feedbackData.length - 1
          ? "px-default relative flex w-full min-w-[320px] flex-col border-r border-r-th-fade py-10 md:border-r-0 md:py-16 lg:py-20"
          : "px-default relative flex w-full min-w-[320px] flex-col border-r border-r-th-fade py-10 md:border-b md:border-r-0 md:border-b-th-fade md:py-16 lg:py-20"
      }
    >
      <p className="header max-w-2xl !font-normal !leading-none !no-underline">
        {text}
      </p>
      <div className="mt-8">
        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-1">
            {[0, 1, 2, 3, 4].map((n, index) => (
              <Image key={index} className="w-4" src={star} alt=""></Image>
            ))}
          </div>
          <p className="markup mt-1 !font-normal text-white">5.0</p>
        </div>
        <p className="caption mt-4">{author}</p>
      </div>
    </article>
  );
};

const Feedback = () => {
  return (
    <section id="clients-feedback">
      <div className="relative grid grid-cols-1 border-t border-t-th-fade md:grid-cols-5">
        <div className="md-border-r relative box-border flex border-b border-b-th-fade md:col-span-2">
          <Image
            className="absolute -top-[40%] left-0 w-full md:-left-[20%] md:-top-[15vw] md:h-1/2"
            src={bg}
            alt=""
          ></Image>
          <div className="h-[1px]"></div>
          <div className="mx-default my-heading sticky bottom-[30vh] w-full self-end ">
            <h3 className="!leading-none text-white">
              YOU CAN<br></br>TRUST US
            </h3>
            <div className="mt-10 flex flex-col gap-y-4 md:mt-16 lg:mt-24 xl:mt-36">
              <div className="flex items-center gap-x-[28px]">
                <a
                  href="https://clutch.co/profile/cowchain"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <Image className="w-12 md:w-16" src={clutch} alt=""></Image>
                </a>
                <div>
                  <div className="flex items-center gap-x-4">
                    <p className="markup mt-1 text-white">5.0</p>
                    <div className="flex items-center gap-x-1">
                      {[0, 1, 2, 3, 4].map((n, index) => (
                        <Image
                          key={index}
                          className="w-4"
                          src={star}
                          alt=""
                        ></Image>
                      ))}
                    </div>
                  </div>
                  <p className="mt-[2px] text-white">
                    Based on 9 Clutch reviews
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-6">
                <a
                  href="https://www.upwork.com/ag/cowchain/"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  <Image className="w-12 md:w-16" src={upwork} alt=""></Image>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="quote_wrapper flex items-stretch overflow-x-scroll border-b border-b-th-fade md:col-span-3 md:flex-col md:overflow-x-hidden md:overflow-y-visible">
          {feedbackData &&
            feedbackData.map((feedback, index) => (
              <Quote key={index} {...feedback} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
