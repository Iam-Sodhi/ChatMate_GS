import { currentProfile } from "@/lib/serverRelated/currentProfile";
import { db } from "@/lib/serverRelated/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type ServerIdPageProps={
    params: {
        serverId: string;
      }
}
export default async function ServerIdPage({
    params
  }: ServerIdPageProps) {
    const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        }
      }
    },
    include: {
      channels: {
        where: {
          name: "general"
        },
        orderBy: {
          createdAt: "asc"
        }
      }
    }
  })

  const initialChannel = server?.channels[0];

  if (initialChannel?.name !== "general") {
    return null;
  }

  return redirect(`/channel/servers/${params.serverId}/channels/${initialChannel?.id}`)
}