import { useSocketContext } from '@/context/SocketContext';
import React from 'react';
type NotificationsProps = {
    
};

const Notifications:React.FC<NotificationsProps> = () => {
    const {answerCall,call,callAccepted}=useSocketContext();
    return <>
      {call.isReceivingCall && !callAccepted && (
        <div className='flex justify-center'>
            <h1>{call.name} is calling.</h1>
            <p onClick={answerCall} className='w-full'>Answer</p>
        </div>
      )}
    </>
}
export default Notifications;