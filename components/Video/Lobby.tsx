"use client"
import { useSocket } from '@/context/SocketProvider';
import React,{useState,useCallback} from 'react';
import {toast} from "react-hot-toast"
type LobbyProps = {
    
};

const Lobby:React.FC<LobbyProps> = () => {
    const {socket}=useSocket();
    console.log(socket);
    const [email,setEmail]=useState("");
    const [room,setRoom]=useState("");


    const handleSubmit=useCallback((e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        socket.emit('room:join',{email,room});  //name can be anything
    },[email,room,socket]);



    return <div className='flex flex-col'>
        <h1 className='text-center text-lg'>Lobby</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email id </label>
            <input type="email" className='bg-gray-300 m-10' id='email'name='email' onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor='room'>Room Number </label>
            <input type="text" className='bg-gray-300 m-10'   id='room' name='room' onChange={(e)=>{setRoom(e.target.value)}}/>
            <button className='bg-red-400 w-10 h-10'>
                Join
            </button>
        </form>
    </div>
}
export default Lobby;