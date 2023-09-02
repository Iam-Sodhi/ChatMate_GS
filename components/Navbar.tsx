import Link from "next/link";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <section className=" bg-peachpuff ">
      <div className="mx-auto pt-5 mb-100px  max-w-[1160px] md:px-[60px] px-[30px] text-secondary1 font-poppins">

      <div className=" flex justify-between items-center container ">
        <div className="flex justify-center items-center leading-[117.02%] cursor-pointer font-poppins">
          <b className="text-[25px]">
            Cha
            <span className=" text-[25px] tracking-[0.06em]">t</span>
          </b>
          <span className="font-extralight text-[25px]">Mate</span>
        </div>
        <nav className="flex">
          <ul className="flex justify-evenly items-center font-light  text-[1rem] font-roboto gap-x-5">
            <li className="flex items-center justify-center cursor-pointer hover:font-semibold">
              <Link href="/">Contact Us </Link>{" "}
            </li>
            <li className="bg-secondary3 box-border text-center align-middle text-[1rem]  text-white border-[1px] border-solid p-[10px] border-white hover:opacity-80 -mr-5 cursor-pointer">
              Log In
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </section>
  );
};
export default Navbar;
