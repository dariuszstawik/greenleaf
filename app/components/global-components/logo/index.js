import Image from "next/image";
import React from "react";

const Logo = ({ className }) => {
  return (
    <Image
      src="/green-leaf-logo.svg"
      width="100"
      height="88"
      className={`m-10 ${className}`}
    />
  );
};

export default Logo;
