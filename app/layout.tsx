import { Toaster } from "react-hot-toast";
import { ClerkProvider } from '@clerk/nextjs'
 
import "./globals.css";
import { cn } from "@/lib/utils";
import { ContextProvider } from "@/context/SocketContext1";
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
        {/* <ContextProvider> */}

        {children}
        <Toaster position="top-right" />
        {/* </ContextProvider> */}

      </body>
    </html>
       </ClerkProvider>
  );
}
