import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        " size-14 bg-stone-300 inline-flex items-center justify-center rounded-2xl text-xl text-stone-700 font-medium",
        className
      )}
      {...otherProps}
    >
      <span className="text-sm">{children}</span>
    </div>
  );
}
