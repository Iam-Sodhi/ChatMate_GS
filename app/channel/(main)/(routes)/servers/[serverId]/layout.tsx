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
        <div 
        className="  invisible md:visible md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
          <ServerSidebar serverId={params.serverId} />
        </div>
        <main className="h-full md:pl-60">
          {children}
        </main>
      </div>
    );
  }