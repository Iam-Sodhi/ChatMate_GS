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
  globalCallEnded: boolean;
  callInitiated: boolean;
  me: string;
  callUser: (id: string,callerName: string) => void; // Add the 'callUser' property with correct type
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
  
  const [callInitiated, setCallInitiated] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [globalCallEnded, setGlobalCallEnded] = useState(false); // Add globalCallEnded state

  const [name, setName] = useState("");

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
  const socket = useMemo(()=>io('https://chatmate-oszk.onrender.com'),[]) // here put the url of deployed server when deployed
  useEffect(() => {

      const setVideoStream=async()=>{
        try{
         const currentStream=await navigator.mediaDevices.getUserMedia(constraints);
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
      socket.on("callEnded", () => {
        setGlobalCallEnded(true); // Set globalCallEnded to true when a call is ended
      });
      setVideoStream();
  
  }, [socket]);

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

  const callUser = (id: string, callerName: string) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: callerName,
      });
      connectionRef.current = peer;
    });

    peer.on("stream", (currentStream) => {
      if(userVideo.current)
      {userVideo.current.srcObject = currentStream;}
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      setCallInitiated(false);
      peer.signal(signal);
    });
    setCallInitiated(true);

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    if (connectionRef.current) { // Check if connectionRef.current is not null
      connectionRef.current.destroy(); // Call destroy only if connectionRef.current is not null
      connectionRef.current = null; // Set connectionRef.current to null after destroying
    }

    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
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
        globalCallEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        callInitiated,
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