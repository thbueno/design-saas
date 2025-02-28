import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M42.602 42.603h-7.408V31.001c0-2.767-.05-6.328-3.853-6.328-3.859 0-4.45 3.014-4.45 6.127v11.803h-7.408v-23.86h7.113v3.261h.1a7.794 7.794 0 017.016-3.854c7.509 0 8.893 4.94 8.893 11.365l-.003 13.088zm-31.478-27.12a4.3 4.3 0 110-8.6 4.3 4.3 0 010 8.6zm3.704 27.12H7.412v-23.86h7.416v23.86zM46.296.003H3.69A3.649 3.649 0 000 3.607v42.785A3.651 3.651 0 003.69 50h42.606A3.659 3.659 0 0050 46.392V3.604A3.656 3.656 0 0046.296 0"
        fill="#0A66C2"
      />
    </svg>
  );
}

export default SvgComponent;
