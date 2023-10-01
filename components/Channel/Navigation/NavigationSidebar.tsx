import { ModeToggle } from "@/components/modeToggle";
import { currentProfile } from "@/lib/serverRelated/currentProfile";
import { db } from "@/lib/serverRelated/db";
import { redirect } from "next/navigation";
import React from "react";
import NavigationAction from "./NavigationAction";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserButton } from "@clerk/nextjs";
import NavigationItem from "./NavigationItem";
import { Home } from "lucide-react";
import NavigationHome from "./NavigationHome";

type NavigationSidebarProps = {};

const NavigationSidebar: React.FC<NavigationSidebarProps> = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }
  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return (
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-peachpuff py-3">
      <NavigationAction />
      <Separator className="h-[2.5px] bg-secondary1 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <div className="invisible md:visible">
        <UserButton
          afterSignOutUrl="/channel"
          appearance={{
            elements: {
              avatarBox: "z-100 h-[48px] w-[48px]",
            },
          }}
        />
         </div>
        <NavigationHome />
        <ModeToggle />
      </div>
    </div>
  );
};
export default NavigationSidebar;
