import { currentProfile } from "@/lib/serverRelated/currentProfile";
import { db } from "@/lib/serverRelated/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface InviteCodePageProps{
    params:{
        inviteCode:string,
    };
};
export default async function InviteCodePage(
    {params}:InviteCodePageProps
)  {
    const profile = await currentProfile();
  
    if (!profile) {
      return redirectToSignIn();
    }
  
    if (!params.inviteCode) {
      return redirect("/channel");
    }
  
    const existingServer = await db.server.findFirst({
      where: {
        inviteCode: params.inviteCode,
        members: {
          some: {
            profileId: profile.id
          }
        }
      }
    });
  
    if (existingServer) {
      return redirect(`/channel/servers/${existingServer.id}`);
    }
  
    const server = await db.server.update({
      where: {
        inviteCode: params.inviteCode,
      },
      data: {
        members: {
          create: [
            {
              profileId: profile.id,
            }
          ]
        }
      }
    });
  
    if (server) {
      return redirect(`/channel/servers/${server.id}`);
    }
    
    return null;
  }