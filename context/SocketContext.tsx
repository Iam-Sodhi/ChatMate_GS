"use client";
import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

interface SocketContextType {
  call: any; // Replace 'any' with the appropriate type for 'call'
  callAccepted: boolean;
  myVideo: React.MutableRefObject<HTMLVideoElement | null>;
  userVideo: React.MutableRefObject<HTMLVideoElement | null>;
  stream: MediaStream | undefined; // Add the 'stream' property with correct type
  name: string; // Add the 'name' property with correct type
  setName: React.Dispatch<React.SetStateAction<string>>; // Add the 'setName' property with correct type
  callEnded: boolean;
  me: string;
  callUser: (id: string) => void; // Add the 'callUser' property with correct type
  leaveCall: () => void;
  answerCall: () => void;
}

export const SocketContext = createContext<SocketContextType | null>(null);


export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [stream, setStream] = useState<MediaStream | undefined>();
  const [me, setMe] = useState("");
  const myVideo = useRef<HTMLVideoElement | null>(null);
  const userVideo = useRef<HTMLVideoElement | null>(null);
  const connectionRef = useRef<Peer.Instance | null>(null);
  const [call, setCall] = useState<any>({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");

  const socket = useMemo(()=>io('https://chatmate-oszk.onrender.com'),[]) // here put the url of deployed server when deployed
  useEffect(() => {

      const setVideoStream=async()=>{
        try{
         const currentStream=await navigator.mediaDevices.getUserMedia({video: true, audio: true })
         setStream(currentStream);
         if(myVideo.current){
          myVideo.current.srcObject = currentStream;
         }
         socket.on("me", (id) => setMe(id));

         socket.on("callUser", ({ from, name: callerName, signal }) => {
           setCall({ isReceivingCall: true, from, name: callerName, signal });
         });
        }
        catch(error:any){
          console.log("Error accesing camera ",error);
        }
      }

      setVideoStream();
     
  
  }, []);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream:stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: call.from });
    });

    peer.on("stream", (currentStream) => {
      if(userVideo.current){

        userVideo.current.srcObject = currentStream;
      }
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id: string) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });

    peer.on("stream", (currentStream) => {
      if(userVideo.current)
      {userVideo.current.srcObject = currentStream;}
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current!.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
}

export const useSocketContext=()=>{
  const context= useContext(SocketContext);
  if(context===null){
    throw new Error("useActiveSectionContext must be used wihtin a ActieSectionContextProvider");
  }
  return context;
}