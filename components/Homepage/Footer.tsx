"use client"
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion"
type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <section className="section pb-[30px] bg-primary2">
      <div className="mx-auto max-w-[1160px] ">
        <div className="flex justify-start flex-wrap object-fill  md:flex-nowrap md:justify-between items-start">
          <motion.div className="ml-0 mr-7 md:mr-5 max-w-[130px] md:max-w-none footerColumn"
           initial={{ opacity: 0.5, x: -100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration:0.6 }}
           viewport={{once: true}}>
            <Image
              src="/chatMate.svg"
              alt="logo"
              width={120}
              height={19}
              className="mt-6"
            />
            <p className="mt-3 md:mt-10 min-w-[135px] md:min-w-[190px] font-poppins text-[15px] leading-[160%] text-gray-200 ">
              Chat your way to the better day.
            </p>
          </motion.div>
          <div className="footerColumn hidden md:flex"></div>
          <div className="footerColumn">
            <h1 className="mt-5 mb-[10px] font-poppins text-[18px] font-medium ">
              Help
            </h1>
            <p className="font-poppins font-normal text-[13px] text-gray-200 ">
              Support
            </p>
            <p className="font-poppins font-normal text-[13px] text-gray-200 ">
              KnowledgeBase
            </p>
            <p className="font-poppins font-normal text-[13px] text-gray-200 ">
              Tutorials
            </p>
          </div>
          <div className="footerColumn">
            <h1 className="mt-5 mb-[10px] font-poppins text-[18px] font-medium ">
              Features
            </h1>
            <p className="font-poppins font-normal text-[13px] text-gray-200 ">
              Screen Sharing
            </p>
            <p className="font-poppins font-normal text-[13px] text-gray-200 ">
              IOS & Android apps
            </p>
            <p className="font-poppins font-normal text-[13px] text-gray-200 ">
              File Sharing
            </p>
            <p className="font-poppins font-normal text-[13px] text-gray-200 ">
              User Management
            </p>
          </div>
          <div className="footerColumn min-w-[120px] ">
            <h1 className="mt-5 mb-[10px] font-poppins text-[18px] font-medium ">
              Company
            </h1>
            <p className="font-poppins font-normal text-[13px] text-gray-200 ">
              About Us
            </p>
            <p className="font-poppins font-normal text-[13px] text-gray-200 ">
              Careers
            </p>
            <p className="font-poppins font-normal text-[13px] text-gray-200 ">
              Services
            </p>
          </div>
          <div className="footerColumn ml-0 md:ml-[15px] mr-0 mt-5 md:mt-0">
            <h1 className="md:mt-5 mb-[10px] font-poppins text-[18px] font-medium ">
              Contact Us
            </h1>
            <a
              href="mailto:chatmate@gmail.com"
              className="font-poppins font-normal text-[13px] text-gray-200 hover:text-secondary3 "
            >
              chatmate@gmail.com
            </a>
            <a
              href="tel:1-800-101-202"
              className="font-poppins font-normal text-[13px] text-gray-200 hover:text-secondary3"
            >
              1-800-101-202
            </a>
            <a
              href="https://www.google.com/maps/place/Gurdaspur,+Punjab+143521/@32.042692,75.3878159,14z/data=!3m1!4b1!4m6!3m5!1s0x391b926db4af6e6d:0x2fda9aabada0f98b!8m2!3d32.0413917!4d75.403086!16s%2Fg%2F11bc6lv3z9?entry=ttu"
              className="font-poppins font-normal text-[13px] text-gray-200 hover:text-secondary3"
            >
              Gurdaspur, Punjab
            </a>
          </div>
        </div>

        <p className="mt-[30px] text-[11px] sm:mt-[120px] font-poppins font-normal text-gray-200 sm:text-[12px] ">
          ©Copyright ChatMate Inc.
        </p>
      </div>
    </section>
  );
};
export default Footer;
