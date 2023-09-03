import VideoChat from "@/components/Video/VideoChat";
import ContextProvider from "@/context/SocketContext";

export default function Video(){

    return (
       <>

       {/* <Lobby /> */}
        <ContextProvider> 

       <VideoChat /> 
        </ContextProvider> 
       </>
    )
}
