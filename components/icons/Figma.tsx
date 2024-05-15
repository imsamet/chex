import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.5 22c1.932 0 3.5-1.493 3.5-3.333v-3.334H8.5c-1.932 0-3.5 1.494-3.5 3.334S6.568 22 8.5 22M5 12c0-1.84 1.568-3.333 3.5-3.333H12v6.666H8.5C6.568 15.333 5 13.84 5 12M5 5.333C5 3.493 6.568 2 8.5 2H12v6.667H8.5C6.568 8.667 5 7.173 5 5.333M12 2h3.5C17.432 2 19 3.493 19 5.333s-1.568 3.334-3.5 3.334H12zM19 12c0 1.84-1.568 3.333-3.5 3.333S12 13.84 12 12s1.568-3.333 3.5-3.333S19 10.16 19 12"
    />
  </svg>
);
export default SvgFigma;
