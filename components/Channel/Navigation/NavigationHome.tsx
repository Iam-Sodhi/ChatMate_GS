"use client"
import React from 'react';
import ActionTooltip from '../ActionTooltip';
import { Home, Plus } from 'lucide-react';
import { useModal } from '@/hooks/useModalStore';
import { useRouter } from 'next/navigation';

type NavigationHomeProps = {
    
};

const NavigationHome:React.FC<NavigationHomeProps> = () => {
    const router =useRouter();
    return     <div>
    <ActionTooltip
      side="right"
      align="center"
      label="Go to Homepage"
    >
      <a
        href='/'
        className="group flex items-center"
      >
        <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] bg-white  transition-all overflow-hidden items-center justify-center bg-background group-hover:bg-secondary1 ">
          <Home
            className="group-hover:text-white transition  text-secondary1"
            size={25}
          />
        </div>
      </a>
    </ActionTooltip>
  </div>
}
export default NavigationHome;