"use client";

import React, { useState } from "react";
import ContactForm from "@/components/utils/ContactForm";

export const ViewMoreSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section
      id="view_more"
      className="relative z-10 mb-10 mt-16  lg:my-[120px]"
    >
      <div className="relative grid grid-cols-1">
        <div className="mb-16 flex flex-col items-center justify-center gap-y-8 px-4 text-center   text-white ">
          <h3 className="mx-auto cursor-default text-center font-roc text-2xl text-[32px] uppercase md:text-[54px]">
            You name it, we code it.
          </h3>
          <span className="cursor-default  text-base font-thin">
            Drop us a line about your product idea, and we’ll <br /> schedule a
            call within 24 hours
          </span>
          <button
            onClick={() => setModalOpen(true)}
            type="submit"
            className="btn-submit uppercase xl:px-12"
          >
            get in touch
          </button>
          <ContactForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
    </section>
  );
};
