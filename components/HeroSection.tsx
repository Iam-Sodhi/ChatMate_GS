import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
   <>
    <Navbar />
    <section className="heroSection block  bg-peachpuff px-[60px] sm:pt-[18vh] min-h-screen text-left text-[1.13rem] text-white font-roboto">
      <div className="container block mx-auto max-w-[1160px]">
        <div className="flexbox flex flex-col sm:flex-row md:justify-center justify-between items-center">
          <div className="left-block   sm:mr-[30px] md:mr-[60px] sm:min-w-[250px] md:min-w-[390px] md:max-w-[410px]">
           <p className="md:mb-[25px] mb-0 lg:text-[74px] md:text-[50px]  text-[35px] leading-[112.52%] font-semibold font-poppins text-secondary1 block">Have your best Chat</p>
            <p className=" my-[20px] max-w-[320px] md:max-w-none md:mb-[32px] text-[12px] sm:text-[18px]">
              Discover a new way to communicate & connect with fast, easy &
              unlimited free chat today!
            </p>
            <button className="md:inline-block block text-white font-medium sm:font-semibold 
            text-[12px] sm:text-[18px] hover:opacity-80  border-solid border-white text-center align-middle bg-secondary3 box-border px-[20x] py-[10px] sm:px-[28px] sm:py-[15px] sm:mr-[20px] max-w-[200px] sm:max-w-none border-[1.5px] leading-[117.02%] ">
                Try for Free
           </button>
           <button className="md:inline-block block text-center mt-[12px] md:mt-0 align-middle text-secondary3 border-solid text-[12px] sm:text-[18px] hover:bg-[#d8913b]/20 border-[2.5px] px-[12px] py-[10px] sm:px-[28px] sm:py-[13px] bg-transparent max-w-[200px] sm:max-w-none border-secondary3 leading-[117.02%] font-medium sm:font-semibold  =">
                Get a Demo
           </button>
          </div>
          <div className="right-block text-left  max-w-[500px] md:max-w-none mt-20 sm:mt-0  ">
            <Image src="/group.jpg" alt=""
            height={100} width={613} 
            quality={90}
            className="h-auto max-w-[100%] inline-block" />
          </div>
        </div>
      </div>
    </section></>
  );
};
export default HeroSection;
