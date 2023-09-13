"use client";
import React, { useState } from "react";
import Logo from "../logo";
import Link from "next/link";
import navbarData from "./navbarData";
import Button from "../button";
import Hamburger from "../hamburger";

const Navbar = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <div className="border-b-2 border-b-gray-100 border-t-4 border-t-primaryGreen text-xl fixed w-screen h-32 flex justify-between items-center px-10 lg:px-16 py-4 bg-gray-50 top-0 left-0 z-50">
      <Logo closeMobileMenu={closeMobileMenu} />
      <div className="pl-16 w-full flex justify-end content-center items-center gap-6">
        <ul
          className={
            isMobileMenuActive
              ? " list-none absolute z-40 w-screen top-full left-0 bg-gray-50 py-4 flex flex-col justify-center align-center items-center gap-10 lg:static lg:flex-row"
              : " list-none flex-col justify-center align-center items-center gap-10 lg:flex-row my-4 hidden lg:flex lg:justify-end ml-4"
          }
        >
          {navbarData.map((nav) => {
            return (
              <li
                key={nav.id}
                className={`${
                  nav.button ? "text-base" : "text-lg"
                } text-slate-700 hover:text-slate-900 cursor-pointer`}
              >
                <Link href={nav.path}>
                  {nav.button ? <Button>{nav.title}</Button> : nav.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
