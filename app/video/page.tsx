import VideoChat from "@/components/Video/VideoChat";
import { ContextProvider } from "@/context/SocketContext1";
export default function Video(){

    return (
       <>

         
  <ContextProvider>

       <VideoChat /> 
  </ContextProvider>



       </>
    )
}
