import type { Metadata } from "next";
import "./globals.css";

//import NavDrawer from "@/components/nav-drawer";
import WipPopup from "@/components/wip-popup";

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Portfolio personnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex min-h-screen flex-col items-center p-4"
      >
        <WipPopup />
          {children}
      </body>
    </html>
  );
}
