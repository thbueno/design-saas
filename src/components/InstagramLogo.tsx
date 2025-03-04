import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M41.346 11.656a3.003 3.003 0 10-6.005 0 3.002 3.002 0 003.003 2.997 3.001 3.001 0 003.002-2.997z"
        fill="url(#paint0_linear_10_11)"
      />
      <path
        d="M45.347 35.1c-.111 2.439-.519 3.763-.857 4.643-.455 1.166-.998 2-1.877 2.875-.87.874-1.704 1.416-2.87 1.865-.88.344-2.21.753-4.647.869-2.635.116-3.416.14-10.1.14-6.676 0-7.463-.024-10.098-.14-2.438-.116-3.761-.525-4.64-.869-1.173-.45-2.001-.99-2.876-1.865-.88-.875-1.423-1.709-1.872-2.875-.338-.88-.752-2.204-.857-4.642-.129-2.635-.152-3.429-.152-10.098 0-6.683.023-7.47.152-10.105.105-2.438.519-3.761.857-4.648.449-1.165.991-1.994 1.872-2.87.875-.873 1.703-1.415 2.875-1.87.88-.344 2.203-.747 4.64-.863 2.636-.116 3.423-.146 10.1-.146 6.683 0 7.464.03 10.099.146 2.438.116 3.767.519 4.647.863 1.166.455 2 .997 2.87 1.87.88.876 1.422 1.705 1.877 2.87.338.887.746 2.21.857 4.648.122 2.635.152 3.422.152 10.105 0 6.67-.03 7.463-.152 10.098zm4.501-20.407c-.122-2.664-.542-4.484-1.166-6.07-.635-1.644-1.487-3.037-2.88-4.43-1.388-1.388-2.781-2.24-4.426-2.882C39.785.693 37.971.268 35.306.152 32.641.023 31.79 0 24.996 0c-6.786 0-7.643.023-10.308.152-2.66.116-4.472.541-6.07 1.159-1.639.642-3.032 1.494-4.42 2.881C2.805 5.586 1.953 6.98 1.312 8.624.694 10.209.274 12.029.146 14.693.03 17.358 0 18.21 0 25.003c0 6.787.03 7.638.146 10.303.128 2.659.548 4.477 1.166 6.07.641 1.638 1.493 3.038 2.886 4.426 1.388 1.387 2.781 2.245 4.42 2.886 1.598.618 3.41 1.038 6.07 1.16 2.665.122 3.522.152 10.309.152 6.793 0 7.644-.03 10.309-.152 2.665-.122 4.479-.542 6.07-1.16 1.645-.641 3.038-1.499 4.426-2.886 1.393-1.388 2.245-2.788 2.88-4.426.624-1.593 1.044-3.411 1.166-6.07.122-2.665.152-3.516.152-10.303 0-6.793-.03-7.645-.152-10.31z"
        fill="url(#paint1_linear_10_11)"
      />
      <path
        d="M24.997 33.33c-4.6 0-8.332-3.727-8.332-8.327 0-4.607 3.732-8.338 8.332-8.338a8.34 8.34 0 018.338 8.338c0 4.6-3.737 8.326-8.338 8.326zm0-21.173c-7.09 0-12.833 5.755-12.833 12.846 0 7.084 5.742 12.833 12.833 12.833 7.09 0 12.84-5.748 12.84-12.833 0-7.09-5.75-12.846-12.84-12.846z"
        fill="url(#paint2_linear_10_11)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_10_11"
          x1={0.450956}
          y1={49.483}
          x2={45.8355}
          y2={4.09866}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD521" />
          <stop offset={0.05} stopColor="#FFD521" />
          <stop offset={0.501119} stopColor="#F50000" />
          <stop offset={0.95} stopColor="#B900B4" />
          <stop offset={0.950079} stopColor="#B900B4" />
          <stop offset={1} stopColor="#B900B4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_10_11"
          x1={0.450978}
          y1={49.5453}
          x2={45.8728}
          y2={4.12352}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD521" />
          <stop offset={0.05} stopColor="#FFD521" />
          <stop offset={0.501119} stopColor="#F50000" />
          <stop offset={0.95} stopColor="#B900B4" />
          <stop offset={0.950079} stopColor="#B900B4" />
          <stop offset={1} stopColor="#B900B4" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_10_11"
          x1={0.462756}
          y1={49.5465}
          x2={45.8736}
          y2={4.13561}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD521" />
          <stop offset={0.05} stopColor="#FFD521" />
          <stop offset={0.501119} stopColor="#F50000" />
          <stop offset={0.95} stopColor="#B900B4" />
          <stop offset={0.950079} stopColor="#B900B4" />
          <stop offset={1} stopColor="#B900B4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
