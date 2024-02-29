import Popup from "reactjs-popup";
import modal_close from "../../assets/homepage/modal_close.svg";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";
import Image from "next/image";

const ConnectForm = ({ modalOpen, setModalOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const sendFormData = async (data) => {
    try {
      send(
        import.meta.env.REACT_APP_DEV_SERVICE_ID,
        import.meta.env.REACT_APP_DEV_TEMPLATE_ID,
        data,
        import.meta.env.REACT_APP_DEV_EMAILJS_PUBLIC_KEY
      );
    } catch (e) {
      /* empty */
    }
    reset();

    setModalOpen(false);
  };

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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h1 className="mb-5 mt-4 text-left   text-4xl   uppercase text-white md:text-5xl lg:mt-4 lg:text-left">
              submit your cv
            </h1>
            <p className="max-w-[385px] text-sm text-secondary lg:text-base">
              We often look for new talents, so if you are interested in working
              in Cowchain, send your CV and our HRs will get in touch if you are
              a great fit.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(sendFormData)}
            className="userform  flex flex-col gap-y-6"
          >
            <input type="text" autoFocus="autofocus" className={"hidden"} />
            <input
              className="text_input placeholder:text-yellow-200"
              type="text"
              placeholder="Full Name"
              {...register("full_name", {
                required: true,
                maxLength: 40,
                pattern: /^[^\d]+$/
              })}
              aria-invalid={errors.full_name ? "true" : "false"}
            />
            {errors.full_name?.type === "required" && (
              <span className="error-span">Please, enter your full name!</span>
            )}
            {errors.full_name?.type === "maxLength" && (
              <span className="error-span">Max length exceeded</span>
            )}
            {errors.full_name?.type === "pattern" && (
              <span className="error-span">
                Please, enter correct full name!
              </span>
            )}
            <input
              className="text_input"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern:
                  // eslint-disable-next-line no-useless-escape
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
              placeholder="Why you are a good fit?"
              type="text"
              defaultValue=""
              {...register("details", {
                maxLength: 200
              })}
            />
            {errors.details?.type === "maxLength" && (
              <span className="error-span">Max length exceeded</span>
            )}
            <div className="flex flex-col">
              <label className="text-xs text-secondary" htmlFor="cv_link">
                Link to your CV
              </label>
              <input
                id="cv_link"
                className="text_input"
                placeholder="https://"
                type="text"
                defaultValue=""
                {...register("cv_link")}
              />
            </div>

            <button type="submit" className="btn-submit my-4">
              Apply now
            </button>
          </form>
        </div>
      </div>
    </Popup>
  );
};

export default ConnectForm;
