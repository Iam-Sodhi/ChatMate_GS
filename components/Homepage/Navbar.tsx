"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { auth } from "@clerk/nextjs/server";
import { useClerk, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
type NavbarProps = {
  ContactPage?: boolean;
  channelPage?: boolean;
  user?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ ContactPage, channelPage }) => {
  const { signOut } = useClerk();
  const {isSignedIn}=useUser();
  const router = useRouter();

  return (
    <motion.section className="section py-5 bg-peachpuff ">
      <motion.div
        className="mx-auto  mb-100px  max-w-[1160px]   text-secondary1 font-poppins"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className=" flex justify-between items-center container ">
          <a href="/">
            <div className="flex justify-center items-center leading-[117.02%] cursor-pointer font-poppins">
              <b className="text-[21px] sm:text-[25px]">
                Cha
                <span className="text-[21px] sm:text-[25px] tracking-[0.06em]">t</span>
              </b>
              <span className="font-extralight text-[21px] sm:text-[25px]">Mate</span>
            </div>
          </a>

          {!channelPage && (
            <nav className="flex">
              <ul className="flex justify-evenly items-center font-light  text-[1rem] font-roboto gap-x-2 sm:gap-x-5">
                {!ContactPage && (
                  <li className="sm:flex items-center  text-[14px] sm:text-lg justify-center cursor-pointer hover:font-semibold hover:text-secondary1">
                    <Link href="/contact">Contact Us </Link>{" "}
                  </li>
                )}
                {!ContactPage && (
                  <li className=" sm:flex bg-secondary1 h-8 sm:h-10 w-[1px] sm:w-[1.5px] mr-2 sm:mr-4 "></li>
                )}
                {}
              </ul>
              {isSignedIn ? (
                <button
                  className="bg-secondary3 box-border rounded-sm text-center align-middle text-[14px]  sm:text-[16px]  text-white border-[1px] border-solid  py-2 sm:py-[10px] px-3 sm:px-4 border-white hover:bg-secondary1 sm:-mr-5 cursor-pointer"
                  onClick={() => signOut()}
                >
                  {isSignedIn ? "Sign Out" : "Sign In"}
                </button>
              ) : (
                <Link  href="/sign-up" className="bg-secondary3 box-border rounded-sm text-center align-middle text-[13px]  sm:text-[16px]  text-white border-[1px] border-solid   py-2 sm:py-[10px] px-2 sm:px-4 border-white hover:bg-secondary1 -mr-2 cursor-pointer">
                  Sign Up
                </Link>
              )}
            </nav>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};
export default Navbar;
