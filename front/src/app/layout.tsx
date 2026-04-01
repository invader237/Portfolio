import type { Metadata } from "next";
import "./globals.css";

//import NavDrawer from "@/components/nav-drawer";
import AppProviders from "@/components/providers/app-providers";
import WipPopup from "@/components/wip-popup";

export const metadata: Metadata = {
  title: "Diego Trivino | Full Stack Developer",
  description:
    "Portfolio of Diego Trivino, a full stack developer. Explore projects, technical skills, and professional experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex min-h-screen flex-col items-center p-0"
      >
        <AppProviders>
          <WipPopup />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
