import type { Metadata } from "next";

import "./globals.scss";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/components/providers";
import { Toast, ToastViewport } from "@/components/ui/Toast";

export const metadata: Metadata = {
  title: "Taleswyn",
  description: "Joy in Every Tale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="/main.js"></script>
      </head>
      <body>
        <ToastProvider>
          <Toast>
            <Navbar />
            {children}
            <Footer />
            <ToastViewport />
          </Toast>
        </ToastProvider>
      </body>
    </html>
  );
}
