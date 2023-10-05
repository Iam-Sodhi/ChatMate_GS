"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useModal } from '@/hooks/useModalStore';
import { ServerWithMembersWithProfiles } from '@/types';
import { MemberRole } from '@prisma/client';
import { ChevronDown, LogOut, PlusCircle, Settings, Trash, UserPlus, Users } from 'lucide-react';
import React from 'react';

type ServerHeaderProps = {
    server: ServerWithMembersWithProfiles;
    role?:MemberRole
};

const ServerHeader:React.FC<ServerHeaderProps> = ({
    server,role
}:ServerHeaderProps) => {
    const {onOpen}=useModal();
    
    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = isAdmin || role === MemberRole.MODERATOR;
  
    return (
        <DropdownMenu >
        <DropdownMenuTrigger
          className="focus:outline-none" 
          asChild
        >
          <button
            className="w-full text-lg font-semibold px-3 flex items-center h-[72px] border-neutral-200 dark:border-neutral-800 border-b-2 bg-secondary3 dark:bg-secondary3 text-white  transition"
          >
            {server.name}
            <ChevronDown className="h-6 w-6 ml-2  text-lg font-extrabold  hover:translate-y-[2px]" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 text-xs font-medium bg-white dark:bg-[#1E1F22] text-black dark:text-neutral-400 space-y-[2px]"
        >
          {isModerator && (
            <DropdownMenuItem
              onClick={() => onOpen("invite", { server })}
              className="text-secondary3 dark:text-secondary3 hover:text-secondary3/90 px-3 py-2 text-sm cursor-pointer"
            >
              Invite People
              <UserPlus className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {isAdmin && (
            <DropdownMenuItem
              onClick={() => onOpen("editServer", { server })}
              className="px-3 py-2 text-sm cursor-pointer"
            >
              Server Settings
              <Settings className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {isAdmin && (
            <DropdownMenuItem
              onClick={() => onOpen("members", { server })}
              className="px-3 py-2 text-sm cursor-pointer"
            >
              Manage Members
              <Users className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {isModerator && (
            <DropdownMenuItem
              onClick={() => onOpen("createChannel")}
              className="px-3 py-2 text-sm cursor-pointer"
            >
              Create Channel
              <PlusCircle className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {isModerator && (
            <DropdownMenuSeparator />
          )}
          {isAdmin && (
            <DropdownMenuItem
              onClick={() => onOpen("deleteServer", { server })}
              className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
            >
              Delete Server
              <Trash className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
          {!isAdmin && (
            <DropdownMenuItem
              onClick={() => onOpen("leaveServer", { server })}
              className="text-rose-500 px-3 py-2 text-sm cursor-pointer"
            >
              Leave Server
              <LogOut className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    )
}
export default ServerHeader;