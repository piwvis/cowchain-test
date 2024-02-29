"use client";

import React, { useState } from "react";
import ContactForm from "./utils/ContactForm";
import bg from "@/assets/bg/get-contact.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Contact({ className }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="contact" className={cn(" relative  ", className)}>
      <Image
        className="absolute left-1/2  top-1/2   hidden -translate-x-1/2 -translate-y-1/2  md:block"
        src={bg}
        alt=""
      />
      <div className="relative grid grid-cols-1">
        <div className="flex flex-col gap-y-8 border-b border-b-th-fade px-4 py-16 text-center md:gap-y-24 md:py-24 xl:py-36">
          <h3 className="mx-auto max-w-[303px] text-center lg:max-w-xl">
            HAVE PROJECT <br /> IN MIND?
          </h3>
          <button
            className="btn-contact mx-auto lg:h-48 lg:w-48"
            onClick={() => setModalOpen(true)}
          >
            Get in touch
          </button>
          <ContactForm modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
    </section>
  );
}
