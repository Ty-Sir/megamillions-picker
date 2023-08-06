import Image from "next/image";
import logo from "../../../public/logo.png";

export const Logo = () => {
  return (
    <Image
      width={150}
      height={150}
      className="max-w-[100px] sm:max-w-full"
      placeholder="blur"
      blurDataURL={logo.blurDataURL}
      loading="eager"
      priority
      src={logo.src}
      alt="Logo"
    />
  );
};
