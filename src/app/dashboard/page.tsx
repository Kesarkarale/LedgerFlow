import {
  Building2,
  Users,
  UserCheck,
  Package,
  ShoppingCart,
  Receipt,
  Wallet,
  IndianRupee,
  TrendingUp,
  Boxes,
} from "lucide-react";

const stats = [
  {
    title: "Total Sales",
    value: "₹4,25,650",
    icon: IndianRupee,
    color: "bg-green-500",
  },
  {
    title: "Purchase",
    value: "₹2,18,450",
    icon: ShoppingCart,
    color: "bg-blue-500",
  },
  {
    title: "Customers",
    value: "245",
    icon: Users,
    color: "bg-purple-500",
  },
  {
    title: "Suppliers",
    value: "58",
    icon: UserCheck,
    color: "bg-orange-500",
  },
];

const shortcuts = [
  {
    title: "Company",
    icon: Building2,
    href: "/company",
  },
  {
    title: "Ledger",
    icon: Wallet,
    href: "/ledger",
  },
  {
    title: "Customers",
    icon: Users,
    href: "/customers",
  },
  {
    title: "Suppliers",
    icon: UserCheck,
    href: "/suppliers",
  },
  {
    title: "Stock Items",
    icon: Boxes,
    href: "/stock-items",
  },
  {
    title: "Sales Invoice",
    icon: Receipt,
    href: "/sales",
  },
  {
  title: "Purchase",
  icon: ShoppingCart,
  href: "/purchase",
},
{
  title: "Payment",
  icon: Wallet,
  href: "/payment",
},
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Dashboard
          </h1>

          <p className="text-slate-500 mt-1">
            Welcome back to LedgerFlow ERP 👋
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-700 transition">
          + Create Invoice
        </button>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`${item.color} h-14 w-14 rounded-xl flex items-center justify-center text-white`}
                >
                  <Icon size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Access */}

      <div className="rounded-2xl border bg-white p-6">

        <h2 className="text-xl font-semibold mb-5">
          Quick Access
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {shortcuts.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-xl border p-5 hover:border-blue-500 hover:bg-blue-50 transition"
              >
                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-blue-100 p-3 group-hover:bg-blue-600 transition">

                    <Icon
                      className="group-hover:text-white"
                      size={24}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Open Module
                    </p>

                  </div>

                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Business Overview */}

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-2xl border bg-white p-6">

          <h2 className="font-semibold text-lg">
            Today's Business
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex justify-between">
              <span>Total Sales</span>
              <span className="font-semibold">
                ₹25,640
              </span>
            </div>

            <div className="flex justify-between">
              <span>Purchase</span>
              <span className="font-semibold">
                ₹12,300
              </span>
            </div>

            <div className="flex justify-between">
              <span>Expenses</span>
              <span className="font-semibold">
                ₹4,800
              </span>
            </div>

            <div className="flex justify-between">
              <span>Profit</span>
              <span className="font-bold text-green-600">
                ₹8,540
              </span>
            </div>

          </div>

        </div>

        <div className="rounded-2xl border bg-white p-6">

          <h2 className="font-semibold text-lg">
            Inventory Summary
          </h2>

          <div className="mt-6 space-y-5">

            <div className="flex justify-between">
              <span>Total Products</span>
              <span className="font-semibold">
                325
              </span>
            </div>

            <div className="flex justify-between">
              <span>Low Stock</span>
              <span className="text-red-600 font-semibold">
                14
              </span>
            </div>

            <div className="flex justify-between">
              <span>Out Of Stock</span>
              <span className="text-red-600 font-semibold">
                4
              </span>
            </div>

            <div className="flex justify-between">
              <span>Available</span>
              <span className="text-green-600 font-semibold">
                307
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="rounded-2xl border bg-white p-6">

        <h2 className="text-xl font-semibold mb-5">
          Recent Activity
        </h2>

        <div className="space-y-4">

          <div className="flex items-center justify-between border-b pb-3">
            <div>
              <p className="font-medium">
                New Sales Invoice Created
              </p>
              <p className="text-sm text-gray-500">
                INV-10021
              </p>
            </div>

            <TrendingUp className="text-green-600" />
          </div>

          <div className="flex items-center justify-between border-b pb-3">
            <div>
              <p className="font-medium">
                Supplier Payment Done
              </p>

              <p className="text-sm text-gray-500">
                ₹15,000
              </p>
            </div>

            <Wallet className="text-blue-600" />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">
                New Customer Added
              </p>

              <p className="text-sm text-gray-500">
                ABC Traders
              </p>
            </div>

            <Users className="text-purple-600" />
          </div>

        </div>

      </div>

    </div>
  );
}
