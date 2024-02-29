import React from "react";

function Chevron({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#BBB"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.833 10H4.167M10 15.833L4.167 10 10 4.167"
      ></path>
    </svg>
  );
}

export default Chevron;
