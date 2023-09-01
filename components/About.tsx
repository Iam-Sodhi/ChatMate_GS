import React from 'react';

type AboutProps = {
    
};

const About:React.FC<AboutProps> = () => {
    
    return    <div className="absolute top-[67.56rem] left-[0rem] w-[90rem] h-[80.44rem] text-left text-[2.81rem] text-primary3 font-poppins">
    <div className="absolute top-[0rem] left-[0rem] bg-primary2 w-[90rem] h-[80.44rem]" />
    <div className="absolute top-[8.81rem] left-[28.88rem] leading-[112.52%]">
      Instant Conference Calls
    </div>
    <div className="absolute top-[14.5rem] left-[24.56rem] text-[1.13rem] leading-[181.02%] text-gray-200 text-center inline-block w-[43.19rem]">
      Our app provides a fun and easy way to connect with friends, family, and
      new people from all over the world. With a wide range of features,
      including private messaging, group chats, and voice and video calls, you
      can stay in touch with the people who matter to you most.
    </div>
    <img
      className="absolute top-[28.69rem] left-[11.69rem] w-[65.56rem] h-[43.69rem]"
      alt=""
      src="/group-4.svg"
    />
  </div>
}
export default About;