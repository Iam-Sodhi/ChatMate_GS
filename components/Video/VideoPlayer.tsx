import React from "react";
import Image from "next/image";
import {  useSocketContext } from "@/context/SocketContext";
type VideoPlayerProps = {};

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
  const { me,name, callAccepted, myVideo, userVideo, callEnded, stream, call } =useSocketContext();
console.log("stream :", stream);
    
    console.log('me in player ',me);
  return (
    <>
      <div className="video-player grid grid-cols-1  h-screen overflow-hidden">
       {stream && (
          
          <video
            className="video-player bg-black w-full h-full object-cover"
            autoPlay
            playsInline
            ref={myVideo}
          />
        )}
        {callAccepted && !callEnded && (
          <video
            className="video-player bg-black w-full h-[300px] "
            autoPlay
            playsInline
            ref={userVideo}
          />
        )}
        
      </div>
      <div
        id="controls"
        className="fixed bottom-[20px] left-[33%] flex  gap-[3em]"
      >
        <div
          className="control-container p-[20px] flex justify-center items-center  rounded-[50%]  cursor-pointer bg-yellow-300"
          id="camera-btn"
        >
          <Image
            alt=""
            src="/camera.png"
            width={100}
            height={100}
            className="h-full "
            quality={90}
          />
        </div>

        <div
          className="control-container p-[20px] flex justify-center items-center  rounded-[50%] cursor-pointer bg-yellow-300"
          id="mic-btn"
        >
          <Image
            alt=""
            src="/mic.png"
            width={100}
            height={100}
            className="h-full "
            quality={90}
          />
        </div>

          <div
            className="control-container p-[20px] flex justify-center items-center  rounded-[50%]  cursor-pointer bg-yellow-300"
            id="leave-btn"
          >
        <a href="lobby.html">
            <Image
              alt=""
              src="/phone.png"
              width={100}
              height={100}
              className="h-full "
              quality={90}
            />
        </a>
          </div>
      </div>
    </>
  );
};
export default VideoPlayer;
