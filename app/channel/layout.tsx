import { ThemeProvider } from "@/context/theme-provider";
import {cn} from "@/lib/utils"

export default function ChannelLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className={cn(" dark:bg-[#313338]")}>
            <ThemeProvider 
             attribute="class"
             defaultTheme="dark"
             enableSystem={false}
             storageKey="chatMate-theme">

          {children}
            </ThemeProvider>
        </div>
    );
  }