import { Toaster } from "react-hot-toast";
import "./globals.css";
export const metadata = {
  title: "ChatMate",
  description: "Discover a new way to communicate & connect with fast, easy & unlimited free chat today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <ContextProvider> */}

        {children}
        <Toaster position="top-right" />
        {/* </ContextProvider> */}
      </body>
    </html>
  );
}
