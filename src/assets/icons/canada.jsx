import React from "react";

function Canada({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 16 12"
    >
      <g>
        <mask
          id="mask0_1353_2047"
          style={{ maskType: "luminance" }}
          width="16"
          height="12"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0H16V12H0z"></path>
        </mask>
        <g mask="url(#mask0_1353_2047)">
          <g fillRule="evenodd" clipRule="evenodd">
            <path fill="#F7FCFF" d="M4 0h8.5v12H4V0z"></path>
            <path
              fill="#E31D1C"
              d="M7.164 4.201L7.987 3 8 10h-.343l.21-1.732s-2.305.423-2.115.21c.191-.214.3-.606.3-.606L4 6.474s.324-.004.587-.164c.264-.16-.263-1.109-.263-1.109l1.036.154.392-.435.782.836h.352l-.352-1.914.63.36zM8 10V3l.836 1.201.63-.359-.352 1.914h.352l.782-.836.392.435 1.036-.154s-.527.949-.263 1.109c.263.16.587.164.587.164L9.947 7.872s.11.392.3.606c.191.213-2.115-.21-2.115-.21L8.342 10H8z"
            ></path>
            <path fill="#E31D1C" d="M12 0h4v12h-4V0z"></path>
            <path fill="#E31D1C" d="M0 0h4v12H0V0z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Canada;
