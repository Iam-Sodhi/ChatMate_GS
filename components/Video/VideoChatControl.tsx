"use client";
import { useSocketContext } from "@/context/SocketContext";
import { Mic, MicOff, Phone, Videocam, VideocamOff } from "@mui/icons-material";
import Link from "next/link";
import React, { useState,useCallback } from "react";

type VideoChatControlProps = {};

const VideoChatControl: React.FC<VideoChatControlProps> = () => {

   const {leaveCall} =useSocketContext();
  const { stream } = useSocketContext();
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicrophoneOn, setIsMicrophoneOn] = useState(false);

  const toggleCamera = () => {
    // Toggle the camera
    const videoTrack = stream?.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
      setIsCameraOn(!videoTrack.enabled);
    }
  };
  const toggleMicrophone = () => {
    // Toggle the microphone
    const audioTrack = stream?.getAudioTracks()[0];
    console.log(audioTrack);
    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled;
      setIsMicrophoneOn(!audioTrack.enabled);
    }
  };
  const handleCallEnd = useCallback(async () => {
    await leaveCall(); // You can call the leaveCall function from the context
  }, [leaveCall]);

  return (
    <div className="fixed transform -translate-x-1/2 flex gap-3 bottom-5 left-[48%] ">
      <div className="controlContainer">
        <button className="bg-transparent z-50" onClick={toggleCamera}>
          {isCameraOn ? (
            <VideocamOff className="h-12 w-12" />
          ) : (
            <Videocam className="h-12 w-12" />
          )}
        </button>
      </div>

      <div className="controlContainer">
        <button className="bg-transparent" onClick={toggleMicrophone}>
          {isMicrophoneOn ? (
            <MicOff className="h-12 w-12" />
          ) : (
            <Mic className="h-12 w-12" />
          )}
        </button>
      </div>
        <div className="controlContainer">
            <button onClick={handleCallEnd}>
            <Phone className="h-12 w-12" />
            </button>
        </div>
    </div>
  );
};
export default VideoChatControl;
