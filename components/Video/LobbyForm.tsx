"use client";
import { SocketContext, useSocketContext } from "@/context/SocketContext1";
//import { useSocketContext } from "@/context/SocketContext";

import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";
import Image from "next/image";
import React, { useState, useEffect, useRef, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";

type LobbyFormProps = {};

const LobbyForm: React.FC<LobbyFormProps> = () => {

  const { name, setName, me, callUser, call, answerCall, callAccepted ,callEnded} =
    useSocketContext();
  const [copied, setCopied] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [ignored, setIgnored] = useState(false);
  const [myStream, setMyStream] = useState<MediaStream | null>(null);
  const myVideo = useRef<HTMLVideoElement | null>(null);

  const handleCopyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(me);
    //localStorage.setItem('userId', me); // Store the user's ID
    setTimeout(() => setCopied(false), 2000); // Reset the feedback message after 2 seconds
  };
  const handleIgnore = () => {
    setIgnored(true);
  };
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((currentStream) => {
      setMyStream(currentStream);
      if(myVideo.current)
      myVideo.current.srcObject = currentStream;
    });
  }, []);

  const handleCallClick = () => {
    if (idToCall.trim() === "") {
      toast.error("Receiver's ID cannot be empty");
      return;
    }

    if (idToCall === me) {
      toast.error("You cannot call yourself");
      return;
    }

    // If everything is valid, make the call
    callUser(idToCall, name);
  };
  return (
    <div className="relative h-screen overflow-hidden bg-black  text-black">
      <video
        ref={myVideo}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover block "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
        <div className="flex relative items-center justify-center py-8 bg-peachpuff rounded-md border  border-secondary1  mx-4">
          <div className="flex flex-col    pl-8 mr-6 mt-5 space-y-1 max-w-[140px] sm:max-w-[200px] ">
            <Image
              alt="logo"
              src="/logo.png"
              className="absolute top-4"
              quality={80}
              width={64}
              height={64}
            />
            <h3 className="font-semibold  tracking-tight leading-[120%] font-poppins text-[20px] sm:text-[24px] mb-4">
              Start Calling
            </h3>
            <p className="text-gray-900 font-poppins text-[14px] sm:text-sm">
              Let&apos;s See each other Faces
            </p>
          </div>
          <div className="pr-8 pt-0 grid gap-4">
            <div id="join-form" className="flex flex-col gap-y-3">
              <input
                name="Name"
                id="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-primary2/50 px-3 py-1 text-2xs-5 sm:text-[13px]  shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter Name"
              />
              <div
                className={`inline-flex items-center justify-center rounded-md text-2xs-2 sm:text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input  shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-1 pt-2 ${
                  copied ? "bg-secondary1" : "bg-primary2/50"
                }`}
              >
                <CopyToClipboard text={me} onCopy={handleCopyToClipboard}>
                  <span className={` rounded-md cursor-pointer pb-2 `}>
                    <Assignment />
                    {copied ? " Copied!" : "Copy Your ID"}
                  </span>
                </CopyToClipboard>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or
                  </span>
                </div>
              </div>
              <input
                name="Call"
                id="Call"
                value={idToCall}
                placeholder="Put Receiver's ID"
                onChange={(e) => setIdToCall(e.target.value)}
                className="flex h-9 w-full rounded-md border border-input bg-primary2/50 px-3 pb-1 text-2xs-5 sm:text-[13px]  shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <div className="h-9 rounded-md font-medium transition-colors bg-secondary3 hover:bg-secondary1 w-full flex justify-center items-center">
                <Phone
                  className=" text-white w-full  "
                  onClick={handleCallClick}
                />
              </div>
            </div>
          </div>
        </div>
        {!ignored && call.isReceivingCall && !callAccepted && !callEnded && (
          <div className="fixed bottom-0 left-0 right-0  p-4">
            <div className="bg-peachpuff p-4 rounded-lg shadow-lg text-white">
              <div className="text-2xl text-black font-poppins font-semibold mb-2">
                {call.name} is calling...
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={answerCall}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-300"
                >
                  Answer
                </button>
                <button
                  onClick={handleIgnore}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-300"
                >
                  Ignore
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default LobbyForm;
