"use client"
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
  const router =useRouter();
  return (
   <>
    <Navbar />
    <section className="heroSection block  bg-peachpuff py-[60px] px-[30px] sm:pt-[18vh]  sm:min-h-screen text-left text-[1.13rem] text-white font-roboto">
      <div className="container block mx-auto max-w-[1160px]">
        <div className="flexbox flex flex-col  items-start sm:flex-row sm:justify-center justify-between sm:items-center">
          <div className="left-block mb-5 sm:mb-0   sm:mr-[30px] md:mr-[60px] md:min-w-[390px] sm:min-w-[280px] sm:max-w-[410px]">
           <p className="sd:mb-7 mb-5 text-[40px] md:text-[74px] sm:text-[50px] leading-[112.52%] font-semibold font-poppins text-secondary1 block">Have your best Chat</p>
            <p className=" my-[20px] max-w-[320px] md:max-w-none md:mb-[32px] text-[15px] font-medium leading-[129%] sm:text-[18px] font-roboto ">
              Discover a new way to communicate & connect with fast, easy &
              unlimited free chat today!
            </p>
            
            <button  className="md:inline-block block text-white font-medium   font-roboto
            text-[12px] mr-0 object-fill sm:text-[18px] hover:opacity-80  border-solid border-white text-center align-middle bg-secondary3 box-border  py-[11px]  px-[36px] sm:px-[34px]  sm:py-[15px] rounded-sm sm:mr-[20px] max-w-[200px] sm:max-w-none border-[1.5px] leading-[117.02%] ">
                Start Text Chat
           </button>
           <button onClick={()=>router.push("/video")} className="sm:inline-block block font-roboto text-center mt-[10px] lg:mt-0 align-middle text-secondary3 border-solid text-[12px] sm:text-[18px] hover:bg-[#d8913b]/20 border-[2.5px] px-[32px] py-[10px] sm:px-[28px] sm:py-[15px] rounded-sm bg-transparent max-w-[200px] sm:max-w-none border-secondary3 leading-[117.02%] font-medium sm:font-semibold  =">
                Make Video Call
           </button>
          </div>
          <div className="right-block text-left  max-w-[500px] sm:max-w-none mt-[20px] sm:mt-0  ">
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
