import { Package, ReceiptText, Users, Wallet } from "lucide-react";
import StatCard from "@/components/dashboard/stat-card";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Customers",
      value: "0",
      icon: Users,
      description: "Manage customer accounts",
    },
    {
      title: "Total Suppliers",
      value: "0",
      icon: Wallet,
      description: "Track supplier balances",
    },
    {
      title: "Stock Items",
      value: "0",
      icon: Package,
      description: "Inventory overview",
    },
    {
      title: "Monthly Vouchers",
      value: "0",
      icon: ReceiptText,
      description: "Sales, purchase and payment entries",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>
        <p className="text-sm text-slate-600">
          Welcome to LedgerFlow ERP.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
}
