"use client";
import { useSocketContext } from "@/context/SocketContext";
import { Assignment, Phone, PhoneDisabled } from "@mui/icons-material";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type LobbyFormProps = {};

const LobbyForm: React.FC<LobbyFormProps> = () => {
  const { name, setName, me, callUser,call,answerCall,callAccepted} = useSocketContext();
  const [copied, setCopied] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const[ignored, setIgnored] = useState(false);
  const handleCopyToClipboard = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the feedback message after 2 seconds
  };
  const handleIgnore = () => {
    setIgnored(true);
  };
  
  return (
    <section className="bg-gray-900 h-screen flex justify-center items-center">
      <div className="w-100 max-w-lg rounded-lg bg-gray-800 p-4">
        <div className="bg-gray-300 rounded-t-lg p-4 text-center text-2xl font-semibold">
          <p>👋 Make a call</p>
        </div>
        <div className="p-4">
          <form
            id="join-form"
            action=""
            autoComplete="off"
            noValidate
            className="flex flex-col gap-y-3"
          >
            <input
              name="Name"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-700 text-white  rounded-md p-2 focus:outline-none"
              placeholder="Enter Name"
            />
            <div className="flex gap-2">
              <CopyToClipboard text={me} onCopy={handleCopyToClipboard}>
                <span
                  className={` w-full text-lg h-9 pt-[7px] text-center rounded-md cursor-pointer ${
                    copied ? "bg-green-400" : "bg-gray-400"
                  }`}
                >
                  <Assignment />
                  {copied ? " Copied!" : "Copy Your ID"}
                </span>
              </CopyToClipboard>
            </div>
            <div className="flex ">
              <input
                name="Call"
                id="Call"
                value={idToCall}
                placeholder="Put the ID of "
                onChange={(e) => setIdToCall(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-md p-2 focus:outline-none"
              />
              <Phone
                className="ml-2 h-9 w-12 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md transition duration-300"
                onClick={() => callUser(idToCall, name)}
              />
            </div>
          </form>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
  {!ignored && call.isReceivingCall && !callAccepted && (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg text-white">
      <div className="text-2xl font-semibold mb-2">
        {call.name} is calling
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
  )}
</div>


    </section>
  );
};
export default LobbyForm;
