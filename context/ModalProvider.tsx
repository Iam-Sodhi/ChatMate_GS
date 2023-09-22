"use client"
import { CreateServerModal } from '@/components/Channel/Modal/CreateServerModal';
import { EditServerModal } from '@/components/Channel/Modal/EditServerModal';
import { InviteModal } from '@/components/Channel/Modal/InviteModal';
import { MembersModal } from '@/components/Channel/Modal/MembersModal';
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
      <EditServerModal/>
      <MembersModal />
    </>
  )
}
export default ModalProvider;