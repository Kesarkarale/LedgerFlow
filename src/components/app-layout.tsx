"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="ml-72 flex min-h-screen flex-col">

        {/* Navbar */}

        <Navbar />

        {/* Content */}

        <main className="flex-1 overflow-y-auto p-8">

          <div className="mx-auto max-w-7xl">

            {children}

          </div>

        </main>

      </div>

    </div>
  );
}
