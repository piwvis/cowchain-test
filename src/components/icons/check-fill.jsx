import React from "react";

function CheckFill({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path stroke="#3E3747" d="M0.5 0.5H15.5V15.5H0.5z"></path>
      <path fill="url(#paint0_linear_588_1302)" d="M3 3H13V13H3z"></path>
      <defs>
        <linearGradient
          id="paint0_linear_588_1302"
          x1="5.5"
          x2="13"
          y1="3"
          y2="15.083"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#642AAF"></stop>
          <stop offset="1" stopColor="#D885FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default CheckFill;
