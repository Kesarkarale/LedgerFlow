import DashboardHeader from "@/components/dashboard/dashboard-header";
import StatCard from "@/components/dashboard/stat-card";
import RecentVouchers from "@/components/dashboard/recent-vouchers";
import QuickActions from "@/components/dashboard/quick-actions";
import BusinessOverview from "@/components/dashboard/business-overview";

import {
  IndianRupee,
  Package,
  ReceiptText,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <DashboardHeader />

        {/* Top Stats */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="₹4,82,400"
            description="+12.4% from last month"
            icon={IndianRupee}
            accent="blue"
          />
          <StatCard
            title="Total Customers"
            value="1,248"
            description="+86 new customers"
            icon={Users}
            accent="violet"
          />
          <StatCard
            title="Stock Items"
            value="328"
            description="24 low stock items"
            icon={Package}
            accent="emerald"
          />
          <StatCard
            title="Monthly Vouchers"
            value="182"
            description="Sales, purchase & payment entries"
            icon={ReceiptText}
            accent="amber"
          />
        </section>

        {/* Main Grid */}
        <section className="grid gap-6 xl:grid-cols-3">
          <div className="space-y-6 xl:col-span-2">
            <BusinessOverview />
            <RecentVouchers />
          </div>

          <div className="space-y-6">
            <QuickActions />
          </div>
        </section>
      </div>
    </div>
  );
}
