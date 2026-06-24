import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AuthSessionProvider from "@/components/providers/session-provider";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LedgerFlow",
  description: "Professional ERP for accounting, inventory, vouchers and business management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthSessionProvider>
          {children}
          <Toaster richColors position="top-right" />
        </AuthSessionProvider>
      </body>
    </html>
  );
}
