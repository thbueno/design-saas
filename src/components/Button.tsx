import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary:
        "bg-diesel-500 text-diesel-200 border-diesel-400 hover:bg-gradient-to-b from-diesel-500 to-amber-500 transition duration-500 ease-in-out hover:text-diesel-100",
      secondary: "border-diesel-500 text-diesel-500 bg-transparent",
    },
    size: {
      sm: "h-10",
    },
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        className,
        size,
      })}
      {...otherProps}
    />
  );
}
