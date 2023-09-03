"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type BusinessSectionProps = {};

const BusinessSection: React.FC<BusinessSectionProps> = () => {
  const router=useRouter();
  return (
    <section id="businessSection" className="section bg-pink bg-opacity-50">
      <div className="container mx-auto max-w-[1160px]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center ">
          <div className="left sm:mr-[10px]  ">
            <Image alt="businees image" src="/business.jpg" height={1392} width={2022} className="mt-10 mb-5 sm:mt-14  sm:mb-0
            sm:-ml-[87px]
            md:-ml-[100px]
            lg:-ml-[200px] inline-block max-w-full " />
          </div>
          <div className="right min-w-[310px] lg:min-w-[400px] md:max-w-[320px] lg:max-w-[440px]
          ">
            <h1 className="mt-5 mb-3 text-[27px] sm:text-[33px]  lg:text-[45px] leading-[120%] font-poppins ">Perfect Solution for Small Businesses</h1>
            <p className="mb-4 text-[13px] md:text-[15px]  lg:text-[18px] text-gray-200  font-poppins"> Pricing plans that fit like a glove.</p>
            <button  className="md:inline-block block text-white font-medium   font-roboto
            text-[12px] mr-0 object-fill sm:text-[18px] hover:opacity-80  border-solid border-white text-center align-middle bg-secondary3 box-border  py-[11px]  px-[26px] sm:px-[14px]  sm:py-[15px] rounded-sm sm:mr-[20px] max-w-[200px] sm:max-w-none border-[1.5px] leading-[117.02%] ">
                Start Text Chat
           </button>
           <button onClick={()=>router.push("/video")} className="sm:inline-block block font-roboto text-center mt-[10px] lg:mt-0 align-middle text-secondary3 border-solid text-[12px] sm:text-[18px] hover:bg-[#d8913b]/20 border-[2.5px] px-[22px] py-[10px] sm:px-[8px] sm:py-[15px] rounded-sm bg-transparent max-w-[200px] sm:max-w-none border-secondary3 leading-[117.02%] font-medium sm:font-semibold  =">
                Make Video Call
           </button>

            <div className="mt-8 mb-4 sm:mt-11 sm:mb-7 max-w-[157px] h-[1.3px] bg-dimgray "> </div>
            <div className="flex flex-col sm:flex-row items-start justify-between">

            <Image alt="star image" src="/star.svg"  height={19} width={114} quality={60} className="mr-12 " />
            <p className="mt-[6px] sm:-mt-[7px] text-[13px] md:text-[18px] sm:text-[14px] text-gray-200 leading-[181%] font-poppins "><span className="font-bold" >3 million calls </span>completed with a 96.8% 5 star rating.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BusinessSection;
