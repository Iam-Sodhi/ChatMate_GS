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
        <div className="flex justify-between items-center ">
          <div className="left mr-[10px]  ">
            <Image alt="businees image" src="/business.jpg" height={1392} width={2022} className="mt-11 -ml-[200px] inline-block max-w-full " />
          </div>
          <div className="right min-w-[400px] max-w-[440px]">
            <h1 className="mt-5 mb-3  text-[45px] leading-[120%] font-poppins ">Perfect Solution for Small Businesses</h1>
            <p className="mb-4 text-[18px] text-gray-200  font-poppins"> Pricing plans that fit like a glove.</p>
            <button
              className="md:inline-block block text-white font-medium sm:font-semibold 
            text-[12px] sm:text-[18px] hover:opacity-80  border-solid border-white text-center align-middle bg-secondary3 box-border px-[20x] py-[10px] sm:px-[28px] sm:py-[15px] sm:mr-[20px] max-w-[200px] sm:max-w-none border-[1.5px] leading-[117.02%] "
            >
              Start a Chat
            </button>
            <button
              onClick={() => router.push("/video")}
              className="md:inline-block block text-center mt-[12px] md:mt-0 align-middle text-secondary3 border-solid text-[12px] sm:text-[18px] hover:bg-[#d8913b]/20 border-[2.5px] px-[12px] py-[10px] sm:px-[28px] sm:py-[13px] bg-transparent max-w-[200px] sm:max-w-none border-secondary3 leading-[117.02%] font-medium sm:font-semibold  ="
            >
              Make Video Call
            </button>

            <div className="mt-11 mb-7 max-w-[157px] h-[1px] bg-dimgray "> </div>
            <Image alt="star image" src="/star.svg"  height={114} width={19} quality={60} className="mr-12 " />
            <p className="-mt-[7px] text-[18px] text-gray-200 leading-[181%] font-poppins "><span className="font-bold" >3 million calls </span>completed with a 96.8% 5 star rating.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BusinessSection;
