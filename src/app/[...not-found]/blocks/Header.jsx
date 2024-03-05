"use client";

import Tag from "@/components/ui/tag";
import Link from "next/link";
import { useState, useEffect } from "react";
import ContactForm from "@/components/utils/ContactForm";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function Header() {
  const [openForm, setOpenForm] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  useEffect(() => {
    if (isSubmit) {
      setTimeout(() => {
        window.location.href = "/";
      }, 10000);
    }
  }, [isSubmit]);

  const sendFormData = async (data) => {
    try {
      emailjs.send(
        import.meta.env.REACT_APP_SERVICE_ID,
        import.meta.env.REACT_APP_TEMPLATE_ID,
        data,
        import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
    } catch (e) {
      /* empty */
    }
    setIsSubmit(true);
    console.log(data);
    reset();
  };

  return (
    <section className="scrollbar-none relative -mt-[440px] w-full items-center justify-center overflow-hidden pt-20   text-center md:max-w-full    lg:pt-[120px]">
      {!isSubmit ? (
        <>
          <div className="relative flex cursor-default flex-col items-center justify-center px-5 pb-8 text-center md:px-8 md:pb-12 lg:items-center lg:px-16 xl:px-24">
            <h1 className="mx-auto mb-10 max-w-[1150px]  text-center text-[32px] uppercase text-white lg:mt-6  lg:text-[82px]   xl:text-7xl">
              Ooops.. It’s 404
            </h1>
            <p className="max-w-[500px] text-center">
              {" "}
              We are sorry to have you lost. Let us know what went wrong and get
              some points for your karma
            </p>
          </div>
          <div className="mx-auto flex  items-center justify-center">
            <form
              className="userform flex  min-w-[300px] flex-col gap-y-6 md:min-w-[400px]"
              onSubmit={handleSubmit(sendFormData)}
            >
              <input
                className="text_input bg-[transparent!important]"
                type="url"
                placeholder="Broken link URL"
                {...register("broken_url", {
                  required: true,
                  pattern: {
                    value: /https?:\/\/.+/,
                    message: "Please, enter correct URL!"
                  }
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email?.type === "required" && (
                <span className="error-span">Please, enter your email!</span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="error-span">
                  Please, enter correct email address!
                </span>
              )}
              <input
                className="text_input bg-[transparent!important]  text-[white!important]"
                placeholder="Describe what went wrong"
                type="text"
                defaultValue=""
                {...register("details")}
              />
              <button type="submit" className="btn-submit my-4 max-h-[48px]  ">
                Submit
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="relative flex cursor-default flex-col items-center justify-center px-5 pb-8 text-center md:px-8 md:pb-12 lg:items-center lg:px-16 xl:px-24">
            <h1 className="mx-auto mb-10 max-w-[1150px]  text-center text-[32px] uppercase text-white lg:mt-6  lg:text-[82px]   xl:text-7xl">
              Thanks! we’ll work on it
            </h1>
            <p className="max-w-[500px] text-center">
              {" "}
              Unless you’re looking for anything else, we’ll redirect you to the
              home page in <span className="font-semibold">10 sec</span>
            </p>
          </div>
        </>
      )}
      <div className="mt-8 flex flex-wrap  items-center justify-start gap-2 px-4 md:flex-row md:justify-center md:px-0">
        <Link href={"/"}>
          <Tag
            className={"mb-4 cursor-pointer   md:mb-8"}
            title={"Home page"}
          />
        </Link>

        <Link href={"/cases"}>
          <Tag
            className={"mb-4 cursor-pointer md:mb-8"}
            title={"Case studies"}
          />
        </Link>

        <Link href={"/"}>
          <Tag className={"mb-4 cursor-pointer md:mb-8"} title={"Our blog"} />
        </Link>

        <button onClick={() => setOpenForm(true)} href={"/"}>
          <Tag className={"mb-4 cursor-pointer md:mb-8"} title={"Contact us"} />
        </button>
        <ContactForm modalOpen={openForm} setModalOpen={setOpenForm} />
      </div>
    </section>
  );
}
