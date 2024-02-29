"use client";

import React, { useState } from "react";
import icons from "@/assets/clients/client_icon.png";
import ContactForm from "@/components/utils/ContactForm";
import Image from "next/image";

const Credo = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <section id="clients-credo">
      <div className="credo-wrapper px-default py-heading relative flex flex-col gap-y-8 bg-black bg-credo bg-contain bg-top bg-no-repeat md:gap-y-12 xl:py-48">
        <div className="mx-auto mt-20 flex items-center gap-x-2">
          <Image className="w-[140px]" src={icons} alt=""></Image>
          <p className="font-roc !font-medium text-white">happy clients</p>
        </div>
        <p className="mx-auto max-w-sm text-center font-roc text-xl font-medium uppercase leading-[120%] md:max-w-lg md:text-2xl lg:max-w-2xl lg:text-3xl xl:max-w-4xl xl:text-4xl">
          Our commitment to code excellence and seamless collaboration drives us
          to provide custom blockchain solutions that are shaped by clients’
          visions and resonate with their audiences.
        </p>
        <button
          onClick={() => setOpenForm(true)}
          className="btn-submit mx-auto w-[200px]"
        >
          GET IN TOUCH
        </button>
        <ContactForm modalOpen={openForm} setModalOpen={setOpenForm} />
      </div>
    </section>
  );
};

export default Credo;
