"use client"
import React from 'react';
import ActionTooltip from '../ActionTooltip';
import { Plus } from 'lucide-react';
import { useModal } from '@/hooks/useModalStore';

type NavigationActionProps = {
    
};

const NavigationAction:React.FC<NavigationActionProps> = () => {
    const { onOpen } = useModal();
    return <div>
    <ActionTooltip
      side="right"
      align="center"
      label="Add a server"
    >
      <button
        onClick={() => onOpen("createServer")}
        className="group flex items-center"
      >
        <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] bg-white  transition-all overflow-hidden items-center justify-center bg-background group-hover:bg-secondary1 ">
          <Plus
            className="group-hover:text-white transition  text-secondary1"
            size={25}
          />
        </div>
      </button>
    </ActionTooltip>
  </div>
}
export default NavigationAction;