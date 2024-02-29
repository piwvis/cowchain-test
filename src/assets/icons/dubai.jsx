import React from "react";

function Dubai({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 16 12"
    >
      <mask
        id="mask0_1662_8636"
        style={{ maskType: "luminance" }}
        width="16"
        height="12"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M0 0H16V12H0z"></path>
      </mask>
      <g mask="url(#mask0_1662_8636)">
        <path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M0 0h16v12H0V0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#5EAA22"
          fillRule="evenodd"
          d="M0 0v4h16V0H0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#272727"
          fillRule="evenodd"
          d="M0 8v4h16V8H0z"
          clipRule="evenodd"
        ></path>
        <path fill="#E31D1C" d="M0 0H5V12H0z"></path>
      </g>
    </svg>
  );
}

export default Dubai;
