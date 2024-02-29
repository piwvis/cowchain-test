"use client";

import Popup from "reactjs-popup";
import modal_close from "../../assets/homepage/modal_close.svg";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function ContactForm({ modalOpen, setModalOpen }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

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
    reset();
    // setSendSuccess(true);
    setModalOpen(false);
  };

  const checkboxes = [
    "Web Development",
    "smart contracts",
    "blockchain development",
    "mobile development",
    "dapp development",
    "consultancy",
    "Other"
  ];

  const radioBtns = ["$2-3K", "$5-10K", "$10K <", "Other"];
  return (
    <Popup
      open={modalOpen}
      closeOnDocumentClick
      onClose={() => setModalOpen(false)}
      className="popup-modal"
      lockScroll
      nested
    >
      <div className="modal h-full max-h-[95vh] min-w-full max-w-7xl overflow-y-auto border-2 border-white bg-black p-4 md:p-8 lg:p-16">
        <div className="flex">
          <Image
            className="ml-auto w-8 cursor-pointer"
            alt=""
            onClick={() => setModalOpen(false)}
            src={modal_close}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="text-center font-roc text-4xl font-bold text-white md:text-5xl lg:mt-6 lg:text-left">
            let`s work <br></br> together
          </p>
          <form
            onSubmit={handleSubmit(sendFormData)}
            className="userform mt-6 flex flex-col gap-y-6"
          >
            <div>
              <p className="text-white">Services</p>
              <div className="services_group_wrapper mt-4 flex flex-wrap gap-2">
                {checkboxes.map((checkbox, index) => (
                  <label key={index} className="form_label_for_check">
                    <input
                      type="checkbox"
                      name="services"
                      className="form_check"
                      value={checkbox}
                      {...register("services", { required: true })}
                    />
                    <div className="form_label_div">{checkbox}</div>
                  </label>
                ))}
              </div>
            </div>
            {errors.services?.type === "required" && (
              <span className="error-span">
                Please, select how we can help you!
              </span>
            )}
            <div>
              <p className="text-white">Budget (optional)</p>
              <div className="services_group_wrapper mt-4 flex flex-wrap gap-2">
                {radioBtns.map((radioBtn, index) => (
                  <label key={index * 10} className="form_label_for_check">
                    <input
                      type="radio"
                      name="services"
                      className="form_check"
                      value={radioBtn}
                      {...register("budget", {})}
                    />
                    <div className="form_label_div">{radioBtn}</div>
                  </label>
                ))}
              </div>
            </div>
            <input
              className="text_input"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
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
              className="text_input"
              placeholder="Project details (optional)"
              type="text"
              defaultValue=""
              {...register("details")}
            />
            <button type="submit" className="btn-submit my-4">
              Submit the form
            </button>
          </form>
        </div>
      </div>
    </Popup>
  );
}
