"use client";
import React, {useEffect, useCallback, useContext } from "react";
//import { useSocketContext } from "@/context/SocketContext";
import { SocketContext, useSocketContext } from "@/context/SocketContext1";
import LobbyForm from "./LobbyForm";
import VideoChatControl from "./VideoChatControl";
type VideoChatProps = {};
const VideoChat: React.FC<VideoChatProps> = () => {

  const {
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    globalCallEnded,
    name,
    call
  } = useSocketContext();


  useEffect(() => {
    // Set the srcObject of myVideo when stream changes
    if (myVideo.current && stream) {
      myVideo.current.srcObject = stream;
    }

  
  }, [callAccepted]);

  return (
    <>
      {!callAccepted ||callEnded ? ( // Check the global call ended state
      <LobbyForm />
    ) : (
      <div>
      <div className="grid grid-cols-1 h-screen overflow-hidden">
        {stream && !callEnded && (
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className={` w-full h-full bg-black object-cover  ${
              callAccepted ? "smallFrame" : ""
            }`}
          />
        )}
        {callAccepted && !callEnded ? (
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className={`w-full h-full bg-black object-cover  block`}
          />
        ) : (
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className={`w-full h-full bg-black object-cover smallFrame`}
          />
        )}
      </div>
       <VideoChatControl />
    
    </div>
    )}
      {/* {((!callAccepted  || globalCallEnded) && !callInitiated) ? ( // Check the global call ended state
      <LobbyForm />
    ) : (
      <div>
      <div className="grid grid-cols-1 h-screen overflow-hidden">
        {stream && !callEnded && (
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className={` w-full h-full bg-black object-cover  ${
              callAccepted ? "smallFrame" : ""
            }`}
          />
        )}
        {callAccepted && !callEnded ? (
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className={`w-full h-full bg-black object-cover  block`}
          />
        ) : (
          <video
            playsInline
            ref={userVideo}
            autoPlay
            className={`w-full h-full bg-black object-cover smallFrame`}
          />
        )}
      </div>
       <VideoChatControl />
    
    </div>
    )} */}
    </>
  );
};
export default VideoChat;
