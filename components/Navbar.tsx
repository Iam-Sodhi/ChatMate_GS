import React from 'react';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return  <section className="mt-5 mb-100px block mx-auto max-w-[1160px] bg-peachpuff md:px-[60px] px-[30px] text-secondary1 font-poppins">
      <div className=" flex justify-between items-center container ">

      
      <div className="flex justify-center items-center leading-[117.02%] cursor-pointer">
        <b className='text-[25px]'>
          Cha
          <span className=" text-[25px] tracking-[0.06em]">t</span>
        </b>
        <span className="font-extralight text-[25px]">Mate</span>
      </div>
       <nav className='flex'>
       <ul className='flex justify-evenly items-center font-light  text-[1rem] font-roboto gap-x-5'>
          <li  className='flex items-center justify-center cursor-pointer'>Contact</li>
          <li className='flex items-center justify-center cursor-pointer' >Services</li>
          <li className='flex items-center justify-center cursor-pointer'>Log In</li>
          <li className='bg-secondary3 box-border text-center align-middle text-[1rem]  text-white border-[1px] border-solid p-2 border-white hover:opacity-80 -mr-5 cursor-pointer'>Try it Free</li>
        </ul>
       </nav>
       </div>
    </section>
}
export default Navbar;