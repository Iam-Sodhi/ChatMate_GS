import InitialModal from "@/components/Channel/Modal/InitialModal";
import { ModeToggle } from "@/components/modeToggle";
import { db } from "@/lib/serverRelated/db";
import { initialProfile } from "@/lib/serverRelated/inititalProfile";
import { redirect } from "next/navigation";

export default async function Channel() {
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  if (server) {
    return redirect(`/channel/servers/${server.id}`);
  }
  return (
    <>
      <InitialModal />
      <ModeToggle />
    </>
  );
}
