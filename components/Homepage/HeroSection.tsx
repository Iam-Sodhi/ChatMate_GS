"use client"
import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import { Typewriter } from 'react-simple-typewriter'
import {motion} from "framer-motion"
type HeroSectionProps = {
};

const HeroSection: React.FC<HeroSectionProps> = () => {
  const router =useRouter();
  return (
   <motion.div initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 0.5 }}>
  
    <Navbar />
    <section className="section block  bg-peachpuff  sm:pt-[18vh]  lg:min-h-screen text-left text-[1.13rem] text-white font-roboto">
      <div className="container block mx-auto max-w-[1160px]">
        <div className="flexbox  flex flex-col  items-start sm:flex-row sm:justify-center justify-between sm:items-center">
          <div className="left-block mb-5 sm:mb-0   sm:mr-[15px] md:mr-[60px] md:min-w-[340px] sm:min-w-[292px] sm:max-w-[345px] lg:max-w-[500px] sm:min-h-[341.5px]   ">
           <motion.p className="sd:mb-7 mb-5 text-[35px] sm:text-[37px] lg:text-[65px] md:text-[45px] leading-[112.52%] font-semibold font-poppins text-secondary1 block min-h-[78px] sm:min-h-[83px] md:min-h-[101px] lg:min-h-[146px] "  initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{delay:0.15, duration:1}}><motion.span
         
           >Where </motion.span><Typewriter
            words={['Text Meets Talk.', 'Words meet Faces.',' Friends Connect.']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1000}
          /></motion.p>
            <motion.p className=" my-[20px] max-w-[320px] md:max-w-none md:mb-[32px] text-[15px] font-medium leading-[129%] sm:text-[18px] font-roboto "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
            }}
            >
              Discover a new way to communicate & connect with fast, easy & unlimited free chat today!
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
            }}>
              
            <button onClick={()=>router.push("/channel")}  className="md:inline-block block text-white font-medium   font-roboto
            text-[12px] mr-0 object-fill sm:text-[18px] hover:bg-secondary1  border-solid border-white text-center align-middle bg-secondary3 box-border  py-[11px]  px-[36px] sm:px-[34px]  sm:py-[15px] rounded-sm sm:mr-[20px] max-w-[200px] sm:max-w-none border-[1.5px] leading-[117.02%] ">
                Start Text Chat
           </button>
           <button onClick={()=>router.push("/video")} className="sm:inline-block block font-roboto text-center mt-[10px] lg:mt-0 align-middle text-secondary3 border-solid text-[12px] sm:text-[18px] hover:text-secondary1 hover:border-secondary1 border-[2.5px] px-[32px] py-[10px] sm:px-[28px] sm:py-[15px] rounded-sm bg-transparent max-w-[200px] sm:max-w-none border-secondary3 leading-[117.02%] font-medium sm:font-semibold  =">
                Make Video Call
           </button>
            </motion.div>
          </div>
          <motion.div className="right-block text-left  max-w-[500px] sm:max-w-none mt-[20px] sm:mt-0  "
           initial={{ opacity: 0, scale: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           viewport={{once:true}}
           >
            <Image src="/group.jpg" alt=""
            height={100} width={613} 
            quality={75}
            className="h-auto max-w-[100%] inline-block" />
          </motion.div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};
export default HeroSection;
