"use client";
import React, {useEffect, useCallback } from "react";
import { useSocketContext } from "@/context/SocketContext";
import {
} from "@mui/icons-material";
import LobbyForm from "./LobbyForm";
import VideoChatControl from "./VideoChatControl";
type VideoChatProps = {};
const VideoChat: React.FC<VideoChatProps> = () => {
  const {
    callAccepted,
    callInitiated,
    myVideo,
    userVideo,
    callEnded,
    globalCallEnded,
    stream,
    leaveCall,
  } = useSocketContext();

  const leaveChannel = useCallback(async () => {
    await leaveCall(); // You can call the leaveCall function from the context
  }, [leaveCall]);
  useEffect(() => {
    // Set the srcObject of myVideo when stream changes
    if (myVideo.current && stream) {
      myVideo.current.srcObject = stream;
    }

    if (globalCallEnded) { // Check the global call ended state
      leaveChannel(); // Leave the call when it's globally ended
    } else if (callEnded) { // Check the local call ended state
      if (myVideo.current) {
        myVideo.current.srcObject = null;
      }
      if (userVideo.current) {
        userVideo.current.srcObject = null;
      }
    }
  }, [stream, myVideo, userVideo, callEnded, callAccepted, callInitiated,globalCallEnded]);

  return (
    <>
      {/* {(callInitiated || callAccepted) && !callEnded ? (
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
                className={`w-full h-full bg-black object-cover  ${
                  callAccepted && !callEnded ? "block" : "hidden"
                }`}
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
      ) : (
        // Render the lobby form when the call is not accepted
        <LobbyForm />
      )} */}
      {((!callAccepted  || globalCallEnded) && !callInitiated) ? ( // Check the global call ended state
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
            className={`w-full h-full bg-black object-cover  ${
              callAccepted && !callEnded ? "block" : "hidden"
            }`}
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
    </>
  );
};
export default VideoChat;
