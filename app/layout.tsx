import { Toaster } from "react-hot-toast";
import { ClerkProvider } from '@clerk/nextjs'
 
import "./globals.css";
import ContextProvider from "@/context/SocketContext";
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
    <html lang="en"  >
      <body>
       <ClerkProvider >
       <ContextProvider>  
        {children}
        <Toaster position="top-right" />
        </ContextProvider >  
       </ClerkProvider>
      </body>
    </html>
  );
}
