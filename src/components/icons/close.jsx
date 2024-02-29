import React from "react";

function Close({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 5L5 15M5 5l10 10"
      ></path>
    </svg>
  );
}

export default Close;
