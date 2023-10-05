import { Hash } from "lucide-react";
import UserAvatar from "../UserAvatar";
import { MobileToggle } from "../MobileToggle";
import { SocketIndicator } from "@/components/SocketIndicator";
import { ChatVideoButton } from "./ChatVideoButton";
import { UserButton } from "@clerk/nextjs";


interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}

export const ChatHeader = ({
  serverId,
  name,
  type,
  imageUrl
}: ChatHeaderProps) => {
  return (
    <div className="text-md fixed w-full md:w-[65%] lg:w-[85%]   font-semibold px-3 bg-secondary1 text-white z-10 flex items-center h-[72px] border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <Hash className="w-5 h-5 text-white mr-2" />
      )}
      {type === "conversation" && (
        <UserAvatar 
          src={imageUrl}
          className="h-8 w-8 md:h-8 md:w-8 mr-2"
        />
      )}
      <p className="font-semibold  text-[16px] sm:text-lg text-white">
        {name}
      </p>
      <div className="ml-auto flex items-center">
        {type === "conversation" && (
          <ChatVideoButton />
        )}
        <div className="md:hidden mr-3">
        <UserButton
          afterSignOutUrl="/channel"
          appearance={{
            elements: {
              avatarBox: "z-100 h-[30px] w-[30px]",
            },
          }}
        />
         </div>
        <SocketIndicator />
      </div>
    </div>
  )
}