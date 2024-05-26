import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ProModal from "@/components/pro-modal";

import CrispChat from "@/components/crisp-chat";
import { ToasterProvider } from "@/components/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius",
  description: "AI Platform",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}

          <ProModal />
          <ToasterProvider />
          <CrispChat />
        </body>
      </html>
    </ClerkProvider>
  );
}
