import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTr = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 36 36" {...props}>
    <rect width={36} height={36} fill="#F93939" rx={18} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m26.405 20.765-2.789 1.464.533-3.103-2.256-2.201 3.12-.456 1.392-2.823 1.392 2.825 3.12.456-2.256 2.196.533 3.104"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M15.6 26.4a8.4 8.4 0 1 0 0-16.8 8.4 8.4 0 0 0 0 16.8M18 24c3.312 0 6-2.688 6-6s-2.688-6-6-6-6 2.688-6 6 2.688 6 6 6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTr;
