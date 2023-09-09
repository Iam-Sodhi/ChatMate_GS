import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/context/theme-provider";
import ModalProvider from "@/context/ModalProvider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="discord-theme"
          >
              <ModalProvider />
                {children}
          </ThemeProvider>
      </div>
  );
}
