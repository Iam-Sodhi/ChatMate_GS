"use client";
import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
//pending
//socket-indicator in ui 8:22

type SocketContextType = {
  socket: any | null;
  isConnected: boolean;
};
const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
});

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected ] = useState(false);
  useEffect(() => {
    const socketInstance = new (io as any)(
      process.env.NEXT_PULIC_SITE_URL!,
      {
        path:"/api/sokcet/io",
        addTrailingSlash:false,
      }
    );

    socketInstance.on("connect",()=>{
        setIsConnected(true);
    });
    socketInstance.on("disconnect",()=>{
        setIsConnected(false);
    })
  },[]);

  return (
    <SocketContext.Provider value={{socket,isConnected}}>
        {children}
    </SocketContext.Provider>
  )
};
