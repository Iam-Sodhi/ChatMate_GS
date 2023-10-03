import { currentProfile } from "@/lib/serverRelated/currentProfile";
import { db } from "@/lib/serverRelated/db";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

interface InviteCodePageProps{
    params:{
        inviteCode:string,
    };
};
export default async function InviteCodePage(
    {params}:InviteCodePageProps
)  {
  // const toastMessage=()=>{
  //   toast.error("Firstly sign-in. Only then use this invite url.");
  // }
    const profile = await currentProfile();
    if (!profile) {
      redirect("/channel");
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