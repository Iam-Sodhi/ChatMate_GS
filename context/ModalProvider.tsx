"use client"
import { CreateServerModal } from '@/components/Channel/Modal/CreateServerModal';
import { InviteModal } from '@/components/Channel/Modal/InviteModal';
import React, { useEffect, useState } from 'react';

type ModalProviderProps = {
    
};

const ModalProvider:React.FC<ModalProviderProps> = () => {
    
    const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal />
      <InviteModal />
    </>
  )
}
export default ModalProvider;