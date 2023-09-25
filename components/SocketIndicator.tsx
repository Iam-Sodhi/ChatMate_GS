"use client";

import { Badge } from "@/components/ui/badge";
import { useSocket } from "@/context/socketProvider";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge 
        variant="outline" 
        className="bg-yellow-600 text-white border-none md:absolute right-[20%] md:right-[20%] lg:right-[15%]"
      >
        Fallback: Polling every 1s
      </Badge>
    )
  }

  return (
    <Badge 
      variant="outline" 
      className="bg-pink text-white border-none md:absolute md:right-[20%] lg:right-[15%]"
    >
      Live: Real-time updates
    </Badge>
  )
}