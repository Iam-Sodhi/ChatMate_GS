import ServerSidebar from "@/components/Channel/Server/ServerSidebar";
import { currentProfile } from "@/lib/serverRelated/currentProfile";
import { db } from "@/lib/serverRelated/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export  default async function ServerIdLayout({
    children,
    params
  }: {
    children: React.ReactNode;
    params:{serverId:string}
  }) {
    const profile =await currentProfile();
    if(!profile) {
        return redirectToSignIn();
    }
    const server= await db.server.findUnique({
        where: {
            id: params.serverId,
            members: {
              some: {
                profileId: profile.id
              }
            }
          }
    })
    if (!server) {
        return redirect("/channel");
      }
    return (
        
        <div className="h-full">
      <div className=" w-full h-screen bg-pink dark:bg-[#313338] md:w-[calc(100%-288px)] ">

          {children}
      </div>
          <div 
        className="  invisible md:visible md:flex h-full w-0 md:w-72 z-20 flex-col fixed right-0 inset-y-0">
          <ServerSidebar serverId={params.serverId} />
        </div>
      </div>
    );
  }