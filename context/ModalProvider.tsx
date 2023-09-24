"use client"
import { CreateChannelModal } from '@/components/Channel/Modal/CreateChannelModal';
import { CreateServerModal } from '@/components/Channel/Modal/CreateServerModal';
import { DeleteChannelModal } from '@/components/Channel/Modal/DeleteChannelModal';
import { DeleteMessageModal } from '@/components/Channel/Modal/DeleteMessageModal';
import { DeleteServerModal } from '@/components/Channel/Modal/DeleteServerModal';
import { EditChannelModal } from '@/components/Channel/Modal/EditChannelModal';
import { EditServerModal } from '@/components/Channel/Modal/EditServerModal';
import { InviteModal } from '@/components/Channel/Modal/InviteModal';
import { LeaveServerModal } from '@/components/Channel/Modal/LeaveServerModal';
import { MembersModal } from '@/components/Channel/Modal/MembersModal';
import { MessageFileModal } from '@/components/Channel/Modal/MessageFileModal';
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
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
      <DeleteMessageModal />
    </>
  )
}
export default ModalProvider;