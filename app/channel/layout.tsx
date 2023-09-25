import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/context/theme-provider";
import ModalProvider from "@/context/ModalProvider";
import { SocketProvider } from "@/context/socketProvider";
import { QueryProvider } from "@/context/QueryProvider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div  suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="discord-theme"
          >  
          <SocketProvider >
          <ModalProvider />
               <QueryProvider >

                {children}
               </QueryProvider>
             
          </SocketProvider>
          </ThemeProvider>
      </div>
  );
}
