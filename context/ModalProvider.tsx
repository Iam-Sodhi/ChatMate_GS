"use client"
import { CreateServerModal } from '@/components/Channel/Modal/CreateServerModal';
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
  
    </>
  )
}
export default ModalProvider;