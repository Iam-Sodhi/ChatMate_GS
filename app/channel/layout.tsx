import { cn } from "@/lib/utils";
import ThemeContextProvider from "@/context/theme-provider";
import ModalProvider from "@/context/ModalProvider";
import { SocketProvider } from "@/context/socketProvider";
import { QueryProvider } from "@/context/QueryProvider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
          <ThemeContextProvider>  
          <SocketProvider >
          <ModalProvider />
               <QueryProvider >

                {children}
               </QueryProvider>
             
          </SocketProvider>
          </ThemeContextProvider>
  );
}
