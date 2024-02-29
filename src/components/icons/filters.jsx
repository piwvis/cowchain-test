import React from "react";

function Filters({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.667 14V9.333M2.667 6.667V2M8 14V8M8 5.333V2M13.333 14v-3.333M13.333 8V2M.667 9.333h4M6 5.333h4M11.333 10.667h4"
      ></path>
    </svg>
  );
}

export default Filters;
