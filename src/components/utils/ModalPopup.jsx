import React from "react";
import Popup from "reactjs-popup";
import modal_close from "../../assets/homepage/modal_close.svg";
import error from "../../assets/footer/error.svg";
import success from "../../assets/footer/success.svg";
import Image from "next/image";

const ModalPopup = ({ isOpen, toggleOpen, isError }) => {
  const successText = (
    <div className="flex flex-col">
      <Image alt="" className="mx-auto w-12" src={success}></Image>
      <p className="mt-4 text-center font-roc text-2xl font-medium uppercase text-white">
        Thanks! <br></br>
        Your request was sent successfully. <br></br> We will contact you in
        next 48 ours!
      </p>
    </div>
  );

  const errorText = (
    <div className="flex flex-col">
      <Image alt="" className="mx-auto w-12" src={error}></Image>
      <p className="mt-4 text-center font-roc text-xl font-normal text-[#bbb]">
        Sorry, an error occured...
      </p>
      <p className="mt-4 text-center font-roc text-xl font-normal text-[#bbb]">
        Please, contact us directly on
      </p>
      <a href="mailto:sales@cowchain.io" onClick={toggleOpen}>
        <p className="text-center text-xl text-[#bbb] underline">
          sales@cowchain.io
        </p>
      </a>
    </div>
  );

  return (
    <Popup
      open={isOpen}
      closeOnDocumentClick
      className="popup-modal"
      lockScroll
    >
      <div className="modal max-h-[90vh] min-w-full max-w-5xl border-2 border-white bg-black px-8 pb-12 pt-4">
        <div className="flex">
          <Image
            className="ml-auto w-8 cursor-pointer"
            alt=""
            onClick={toggleOpen}
            src={modal_close}
          />
        </div>
        {isError ? errorText : successText}
      </div>
    </Popup>
  );
};

export default ModalPopup;
