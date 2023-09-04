import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
type NavbarProps = {
  ContactPage?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ ContactPage }) => {
  return (
    <motion.section className=" bg-peachpuff ">
      <motion.div
        className="mx-auto pt-5 mb-100px  max-w-[1160px]  text-secondary1 font-poppins"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className=" flex justify-between items-center container ">
          <Link href="/">
            <div className="flex justify-center items-center leading-[117.02%] cursor-pointer font-poppins">
              <b className="text-[25px]">
                Cha
                <span className=" text-[25px] tracking-[0.06em]">t</span>
              </b>
              <span className="font-extralight text-[25px]">Mate</span>
            </div>
          </Link>

          <nav className="flex">
            <ul className="flex justify-evenly items-center font-light  text-[1rem] font-roboto gap-x-5">
              {!ContactPage && (
                <li className=" hidden sm:flex items-center justify-center cursor-pointer hover:font-semibold hover:text-secondary1">
                  <Link href="/contact">Contact Us </Link>{" "}
                </li>
              )}
              {!ContactPage && (
                <li className="hidden sm:flex bg-secondary1 h-10 w-[1.5px] "></li>
              )}
              <li className="bg-secondary3 box-border rounded-sm text-center align-middle text-[14px]  sm:text-[16px]  text-white border-[1px] border-solid  py-2 sm:py-[10px] px-3 sm:px-4 border-white hover:bg-secondary1 sm:-mr-5 cursor-pointer">
                Log In
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </motion.section>
  );
};
export default Navbar;
