"use client";

import React, { useState } from "react";
import ConnectForm from "@/components/utils/ConnectForm";
import bg_lg from "@/assets/bg/contact_bg.png";
import bg from "@/assets/bg/clients_cases.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TeamContact = ({ className }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="apply" className={cn("relative overflow-hidden", className)}>
      <Image
        sizes="100vw"
        srcSet={`${bg} 360w, ${bg} 480w, ${bg} 720w, ${bg_lg} 1920w`}
        className="absolute -left-[50%] -top-[20%] min-w-[200vw] md:bottom-0 md:left-0 md:top-0 md:m-auto md:h-[150%] md:min-w-0 xl:left-[10vw]"
        src={bg_lg}
        alt=""
      ></Image>
      <div className="relative grid grid-cols-1">
        <div className="flex flex-col items-center gap-y-8 border-b border-b-th-fade px-4 py-16 text-center md:gap-y-6 md:py-24 xl:py-36">
          <h3 className="mx-auto text-center uppercase lg:max-w-none">
            want to join the team
          </h3>
          <span className="mb-10 max-w-[303px] text-sm text-secondary md:max-w-[570px]">
            We often look for new talents, so if you are interested in working
            in Cowchain , send your CV and our HRs will get in touch if you are
            a great fit.
          </span>
          <button
            className="btn-contact mx-auto lg:h-48 lg:w-48"
            onClick={() => setModalOpen(true)}
          >
            Apply to <br /> connect
          </button>
          <ConnectForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
    </section>
  );
};

export default TeamContact;
