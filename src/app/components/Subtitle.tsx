import { type ReactNode } from "react";

export const Subtitle = ({ title }: { title: string | ReactNode }) => {
  return <div className="text-center text-sm italic text-grey dark:text-white md:text-md">{title}</div>;
};
