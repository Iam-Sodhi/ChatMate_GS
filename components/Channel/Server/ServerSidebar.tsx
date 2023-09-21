import { currentProfile } from '@/lib/serverRelated/currentProfile';
import { db } from '@/lib/serverRelated/db';
import { redirect } from 'next/navigation';
import React from 'react';

type ServerSidebarProps = {
    serverId:string
};

const ServerSidebar:React.FC<ServerSidebarProps> = async({
    serverId
}:ServerSidebarProps) => {
    const profile = await currentProfile();

    if (!profile) {
      return redirect("/");
    }
    const server = await db.server.findUnique({
        where: {
          id: serverId,
        },
        include: {
          channels: {
            orderBy: {
              createdAt: "asc",
            },
          },
          members: {
            include: {
              profile: true,
            },
            orderBy: {
              role: "asc",
            }
          }
        }
      });
    return <div>Have a good coding</div>
}
export default ServerSidebar;