import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDie2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 74 74" {...props}>
    <g filter="url(#die-2_svg__a)">
      <path
        fill="#fff"
        d="M3 9.536A6.536 6.536 0 0 1 9.536 3h50.982a6.536 6.536 0 0 1 6.537 6.536v50.982a6.536 6.536 0 0 1-6.537 6.537H9.536A6.536 6.536 0 0 1 3 60.518z"
      />
      <path
        stroke="currentColor"
        strokeWidth={3}
        d="M60.518 1.5H9.536A8.036 8.036 0 0 0 1.5 9.536v50.982a8.036 8.036 0 0 0 8.036 8.037h50.982a8.036 8.036 0 0 0 8.037-8.037V9.536A8.036 8.036 0 0 0 60.518 1.5Z"
      />
    </g>
    <path
      fill="currentColor"
      d="M23.262 52.675a5.883 5.883 0 1 1-11.765 0 5.883 5.883 0 0 1 11.765 0M58.557 17.38a5.883 5.883 0 1 1-11.765 0 5.883 5.883 0 0 1 11.765 0"
    />
    <defs>
      <filter
        id="die-2_svg__a"
        width={73.055}
        height={73.055}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={3} dy={3} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_48_9593" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_48_9593" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgDie2;
