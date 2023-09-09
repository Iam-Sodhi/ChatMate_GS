import { Toaster } from "react-hot-toast";
import { ClerkProvider } from '@clerk/nextjs'
 
import "./globals.css";
import ContextProvider from "@/context/SocketContext";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/context/theme-provider";
export const metadata = {
  title: "ChatMate: Connecting You Through Words and Faces.",
  description: "Discover a new way to communicate & connect with fast, easy & unlimited free chat today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <ClerkProvider >
    <html lang="en" suppressHydrationWarning >
      <body className={cn(
          "bg-white dark:bg-[#313338]"
        )}>
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >
       <ContextProvider>  
        {children}
        <Toaster position="top-right" />
        </ContextProvider >  
        </ThemeProvider>
      </body>
    </html>
       </ClerkProvider>
  );
}
