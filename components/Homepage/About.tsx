"use client"
import Image from "next/image";
import React, { useRef } from "react";
import {motion,useScroll, useTransform} from "framer-motion"

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section id="about" className="section bg-primary2 "
    initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 0.5 }}>
      <div className="container mx-auto max-w-[1160px] text-center "
      > 
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
      viewport={{once: true}}>

           <h5 className="py-3 mb-2 text-[30px] sm:text-[45px] font-normal font-poppins text-black ">
            Instant Peer to Peer Call
           </h5>
           <p className="mx-auto max-w-[690px] mb-10 sm:mb-24 text-center text-gray-200 text-[18px] leading-[181%] font-poppins ">Our app provides a fun and easy way to connect with friends, family, and new people from all over the world. With a wide range of features, including private messaging, group chats, and voice and video calls, you can stay in touch with the people who matter to you most.</p>
      </motion.div>
           <motion.div
           ref={ref}
           style={{
            scale: scaleProgess,
            opacity: opacityProgess,
          }}
           >

           <Image alt="about Image" src="/about_Image.jpg" className="inline-block max-w-[200%] mb-[10px] sm:mb-0 sm:max-w-full" width={2098} height={1398}  quality={80}/>
           </motion.div>
      </div>
    </motion.section>
  );
};
export default About;
