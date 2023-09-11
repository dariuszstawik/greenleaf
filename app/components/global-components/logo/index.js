import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/green-leaf-logo.svg"
      width="106"
      height="93"
      className="m-10"
    />
  );
};

export default Logo;
