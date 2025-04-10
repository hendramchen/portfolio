import React from "react";

export default function Logo() {
  return (
    <svg viewBox="0 0 434 338" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="209" height="96" rx="48" fill="black" />
      <rect
        x="113"
        y="338"
        width="338"
        height="96"
        rx="48"
        transform="rotate(-90 113 338)"
        fill="black"
      />
      <rect
        x="338"
        y="338"
        width="338"
        height="96"
        rx="48"
        transform="rotate(-90 338 338)"
        fill="black"
      />
      <mask
        id="mask0_72_5"
        maskUnits="userSpaceOnUse"
        x="0"
        y="113"
        width="338"
        height="96"
      >
        <rect
          x="338"
          y="209"
          width="338"
          height="96"
          rx="48"
          transform="rotate(180 338 209)"
          fill="black"
        />
      </mask>
      <g mask="url(#mask0_72_5)">
        <rect
          x="96"
          y="-129"
          width="338"
          height="96"
          rx="48"
          transform="rotate(90 96 -129)"
          fill="black"
        />
      </g>
      <rect x="226" y="113" width="96" height="96" rx="48" fill="black" />
    </svg>
  );
}
