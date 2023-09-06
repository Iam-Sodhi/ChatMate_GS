import VideoChat from "@/components/Video/VideoChat";
import ContextProvider, { SocketContext } from "@/context/SocketContext";
import { SocketProvider } from "@/context/socketProvider";

export default function Video(){

    return (
       <>

         
   {/* <SocketProvider> */}

       <VideoChat /> 


   {/* </SocketProvider> */}

       </>
    )
}
