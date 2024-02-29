import React from "react";

function Open({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 32 32"
    >
      <circle
        cx="16"
        cy="16"
        r="15.75"
        stroke="#fff"
        strokeOpacity="0.5"
        strokeWidth="0.5"
      ></circle>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 12.267v7.466M12.266 16h7.467"
      ></path>
    </svg>
  );
}

export default Open;
