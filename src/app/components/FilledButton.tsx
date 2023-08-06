import type { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export const FilledButton = ({ text, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`transition-all border-stroke rounded-md border bg-green px-4 py-2 font-semibold text-white dark:border-grey dark:text-white ${
        className || ""
      }`}
      {...rest}
    >
      {text}
    </button>
  );
};
