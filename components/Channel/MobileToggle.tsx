import { Menu } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavigationSidebar from "./Navigation/NavigationSidebar";
import ServerSidebar from "./Server/ServerSidebar";

export const MobileToggle = ({
  serverId
}: {
  serverId: string;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 flex  text-white text-lg font-extrabold gap-0">
        <div className="w-[72px]">
          <NavigationSidebar />
        </div>
        <div className="text-black dark:text-white w-full ">

        <ServerSidebar serverId={serverId} />
        </div>
      </SheetContent>
    </Sheet>
  )
}