"use client"
import React from 'react';
import {useEffect, useState} from "react";
import {LiveKitRoom,VideoConference} from "@livekit/components-react"
import { Loader2 } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
type mediaRoomProps = {
    chatId:string;
    video:boolean;
    audio:boolean;
};

const mediaRoom:React.FC<mediaRoomProps> = ({
    chatId,video,audio
}:mediaRoomProps) => {
    const {user}=useUser();
    const [token,setToken]=useState("");
    useEffect(()=>{
        if(!user?.firstName || !user?.lastName) return;
        const name=`${user.firstName} ${user.lastName}`;
        (async()=>{
            try{
                const resp=await fetch(`/api/livekit?room=${chatId}&username=${name}`)
                const data=await resp.json();
                setToken(data.token);}
            catch(err){
                console.log(err);
            }
        })();
    },[user?.firstName,user?.lastName,chatId]);
    if(token){
        <div className='flex flex-col flex-1 justify-center items-center'>
            <Loader2 className='h-7 w-7  text-zinc-500 animate-spin my-4 '>
                <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                    Loading...
                </p>
            </Loader2>
        </div>
    }
    return (
        <LiveKitRoom   video={video}
        audio={audio}
        token={token}
        connect={true}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        data-lk-theme="default"
        >
            <VideoConference />

        </LiveKitRoom>

    )
}
export default mediaRoom;