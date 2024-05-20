import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M13.41 12 17 8.44A1.025 1.025 0 1 0 15.54 7L12 10.59 8.46 7.07a1 1 0 1 0-1.41 1.42L10.59 12 7 15.56A1.025 1.025 0 1 0 8.46 17L12 13.41l3.54 3.52a1 1 0 1 0 1.41-1.42z"
    />
  </svg>
);
export default SvgCross;
