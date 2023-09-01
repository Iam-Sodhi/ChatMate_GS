"use client";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast/headless";
import AgoraRTM from "agora-rtm-sdk";

type VideoChatProps = {};

const VideoChat: React.FC<VideoChatProps> = () => {
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const [agoraRTMInitialized, setAgoraRTMInitialized] = useState(false);
  const [channelName, setChannelName] = useState("");
  const [localUid, setLocalUid] = useState(
    String(Math.floor(Math.random() * 10000))
  );
  const [remoteUid, setRemoteUid] = useState("");

  // Initialize Agora RTM client
  const rtmClient = AgoraRTM.createInstance("c95d8e852e704e4c9ad370a6f719957e");
  useEffect(() => {
    // Initialize Agora RTM
    const initRTM = async () => {
      try {
        await rtmClient.login({ uid: localUid });
        setAgoraRTMInitialized(true);
      } catch (error: any) {
        toast.error("Error initializing Agora RTM: " + error.message);
      }
    };

    initRTM();

    return () => {
      // Clean up Agora RTM
      rtmClient.logout();
    };
  }, [localUid, rtmClient]);

  useEffect(() => {
    const startVideoChat = async () => {
      try {
        const localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        localVideoRef.current!.srcObject = localStream;

        // Create a peer connection. ICE servers are used to facilitate NAT traversal and help establish direct communication even when peers are behind firewalls or routers. In this case, it uses a STUN (Session Traversal Utilities for NAT) server provided by Google.
        const configuration = {
          iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        };
        const peerConnection = new RTCPeerConnection(configuration);

        //  // Add local stream to peer connection.This means that the local audio and video data will be sent through this connection to the remote peer.
        localStream.getTracks().forEach((track) => {
          peerConnection.addTrack(track, localStream);
        });

        //     // Handle remote tracks This event handler is responsible for handling incoming tracks (audio or video) from the remote peer. When the remote peer sends audio or video data, the ontrack event is triggered.
        peerConnection.ontrack = (event) => {
          const remoteStream = event.streams[0];
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = remoteStream;
          }
        };
        // Listen for ICE candidate events
        peerConnection.onicecandidate = (event) => {
          if (event.candidate) {
            // Send ICE candidate to the remote peer
            console.log(event.candidate);
            rtmClient.sendMessageToPeer(
              {
                text: JSON.stringify({
                  type: "candidate",
                  candidate: event.candidate,
                }),
              },
              remoteUid
            );
          }
        };
        // Send an offer signal to the remote peer
        // Replace 'remoteUid' with the actual UID of the remote user
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        rtmClient.sendMessageToPeer(
          { text: JSON.stringify({ type: "offer", offer: offer }) },
          remoteUid
        );
        // Listen for incoming signaling messages
        rtmClient.on("MessageFromPeer", ({ text }, peerId) => {
          if (text !== undefined) {
            const message = JSON.parse(text);

            if (message.type === "answer") {
              // Handle incoming answer signal
              peerConnection.setRemoteDescription(message.answer);
            } else if (message.type === "candidate") {
              // Handle incoming ICE candidate signal
              peerConnection.addIceCandidate(message.candidate);
            }
          }
        });
      } catch (error: any) {
        toast.error("Error accessing media device: " + error.message);
      }
    };

    if (agoraRTMInitialized) {
      startVideoChat();
    }
  }, [agoraRTMInitialized, remoteUid, rtmClient]);

  return (
    <>
      <div className="grid  grid-cols-2 gap-[2rem] ">
        <video
          ref={localVideoRef}
          className="video-player bg-black w-full h-[300px] "
          autoPlay
          playsInline
        />
        <video
          ref={remoteVideoRef}
          className="video-player bg-black w-full h-[300px] "
          autoPlay
          playsInline
        />
      </div>
      <div id="controls">
        <div className="control-container" id="camera-btn">
          <img src="icons/camera.png" />
        </div>

        <div className="control-container" id="mic-btn">
          <img src="icons/mic.png" />
        </div>

        <a href="lobby.html">
          <div className="control-container" id="leave-btn">
            <img src="icons/phone.png" />
          </div>
        </a>
      </div>
    </>
  );
};
export default VideoChat;
