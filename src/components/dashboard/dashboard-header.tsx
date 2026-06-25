"use client";

import { Bell, Building2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardHeader() {
  return (
    <header className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
            <Building2 className="h-3.5 w-3.5" />
            LedgerFlow Workspace
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Welcome back, Kesar 👋
            </h1>
            <p className="mt-1 text-sm text-slate-300">
              Here’s what’s happening across your accounts, inventory and billing today.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-80">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <Input
              placeholder="Search ledgers, vouchers, stock..."
              className="h-11 border-white/10 bg-slate-900/70 pl-10 text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-blue-500"
            />
          </div>

          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 border-white/10 bg-slate-900/60 text-slate-200 hover:bg-slate-800"
          >
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
