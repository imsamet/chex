import * as React from "react";
import type { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.5 12.75h-11a.75.75 0 1 1 0-1.5h11a.75.75 0 0 1 0 1.5m3.05 6.06a.75.75 0 0 0-.75-.75H4.2a.75.75 0 1 0 0 1.5h15.6a.76.76 0 0 0 .75-.75m0-13.62a.76.76 0 0 0-.75-.75H4.2a.75.75 0 0 0 0 1.5h15.6a.75.75 0 0 0 .75-.75"
    />
  </svg>
);
export default SvgMenu;
