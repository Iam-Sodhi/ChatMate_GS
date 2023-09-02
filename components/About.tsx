import Image from "next/image";
import React from "react";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <section id="about" className="section ">
      <div className="container mx-auto max-w-[1160px] text-center ">
           <h5 className="py-3 mb-2 text-[45px] font-normal font-poppins ">
            Instant Peer to Peer Call
           </h5>
           <p className="mx-auto max-w-[690px] mb-24 text-center text-gray-200 text-[18px] leading-[181%] font-poppins ">Our app provides a fun and easy way to connect with friends, family, and new people from all over the world. With a wide range of features, including private messaging, group chats, and voice and video calls, you can stay in touch with the people who matter to you most.</p>
           <Image alt="about Image" src="/aboutImage.jpg" className="inline-block max-w-full" width={2098} height={1398}  quality={80}/>
      </div>
    </section>
  );
};
export default About;
