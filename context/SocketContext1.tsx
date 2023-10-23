"use client"
import React, { createContext, useState, useRef, useEffect, useContext } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import { useRouter } from 'next/navigation';
interface SocketContextType {
    call: any; // Replace 'any' with the appropriate type for 'call'
    callAccepted: boolean;
    myVideo: React.MutableRefObject<HTMLVideoElement | null>;
    userVideo: React.MutableRefObject<HTMLVideoElement | null>;
    stream: MediaStream | undefined; // Add the 'stream' property with correct type
    name: string; // Add the 'name' property with correct type
    setName: React.Dispatch<React.SetStateAction<string>>; // Add the 'setName' property with correct type
    callEnded: boolean;
    globalCallEnded: boolean;
    me: string;
    callUser: (id: string,callerName: string) => void; // Add the 'callUser' property with correct type
    leaveCall: () => void;
    answerCall: () => void;
  }

  
const SocketContext = createContext<SocketContextType | null>(null);
const constraints={
    video:{
      width:{
        min:640 , ideal:1920, max:1920
      },
      height:{
        min:480 , ideal:1080, max:1080
      },
    },
    audio:true
   }
const socket = io('https://chatmate-oszk.onrender.com');

const ContextProvider = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [globalCallEnded, setGlobalCallEnded] = useState(false);
  const [stream, setStream] = useState<MediaStream | undefined>();
  const [name, setName] = useState('');
  const [call, setCall] = useState<any>({});
  const [me, setMe] = useState('');

  const myVideo = useRef<HTMLVideoElement | null>(null);
  const userVideo = useRef<HTMLVideoElement | null>(null);
  const connectionRef = useRef<Peer.Instance | null>(null);
 
  const router =useRouter();
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        if(myVideo.current)
        myVideo.current.srcObject = currentStream;
      });

    socket.on('me', (id) => setMe(id));

    socket.on('callUser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answerCall', { signal: data, to: call.from });
    });

    peer.on('stream', (currentStream) => {
        if(userVideo.current){
            userVideo.current.srcObject = currentStream;
          }
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id: string) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
    });

    peer.on('stream', (currentStream) => {
        if(userVideo.current)
      userVideo.current.srcObject = currentStream;
    });

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    if (connectionRef.current)
    connectionRef.current.destroy();

   router.push("/");
    //window.location.reload();
  };

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      globalCallEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
export const useSocketContext=()=>{
    const context= useContext(SocketContext);
    if(context===null){
      throw new Error("useActiveSectionContext must be used wihtin a ActieSectionContextProvider");
    }
    return context;
  }