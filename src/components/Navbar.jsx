import React from "react";
import { useState } from "react";
import { logo, close, menu } from "../assets"; //Because there is an index.js in the assets folder we needn't specify the exact file where import is coming from. The index.js there in assets is already exporting all we need
import { navLinks } from "../constants/constants";
import styles from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className="sticky top-0 flex w-full items-center justify-between py-6">
        <img src={logo} alt="Bank logo" className="logo h-[32px] w-[124px]" />
        <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={` ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } cursor-pointer font-poppins text-[16px] font-normal text-white  `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        {/* The mobile menu */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="mobileMenu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          {/* This will contain our mobile menu but will first check if toggle is on or off */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } bg-black-gradient sidebar absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-center justify-end">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={` ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } cursor-pointer font-poppins text-[16px] font-normal text-white  `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
