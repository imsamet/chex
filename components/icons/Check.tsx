import * as React from "react";
import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17.24 7.85-6.68 6.68-3.88-3.88a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.41l4.59 4.59a1 1 0 0 0 1.41 0l7.38-7.38a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0"
    />
  </svg>
);
export default SvgCheck;
