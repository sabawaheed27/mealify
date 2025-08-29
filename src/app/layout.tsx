import type { Metadata } from "next";
import "./globals.css";
import { UserContextProvider } from "@/utils/contexts";
import Navbar from "@/component/Navbar";


export const metadata: Metadata = {
  title: "Meal App",
  description: "Food app using context & dynamic routing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <UserContextProvider>
          <Navbar />
        {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
