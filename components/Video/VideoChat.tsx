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
    leaveCall,
    globalCallEnded,
    name,
    call
  } = useSocketContext();

  const leaveChannel = useCallback(async () => {
    await leaveCall(); // You can call the leaveCall function from the context
  }, [leaveCall]);
  useEffect(() => {
    // Set the srcObject of myVideo when stream changes
    if (myVideo.current && stream) {
      myVideo.current.srcObject = stream;
    }

    if (callEnded) { // Check the local call ended state
      if (myVideo.current) {
        myVideo.current.srcObject = null;
      }
      if (userVideo.current) {
        userVideo.current.srcObject = null;
      }
    }
  }, [stream, myVideo, userVideo, callEnded, callAccepted]);

  return (
    <>
      {!callAccepted ||globalCallEnded ? ( // Check the global call ended state
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
