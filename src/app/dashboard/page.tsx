import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Total Revenue",
    value: "₹4,82,450",
    change: "+12.8%",
    icon: DollarSign,
    positive: true,
  },
  {
    title: "Total Sales",
    value: "1,284",
    change: "+8.2%",
    icon: ShoppingCart,
    positive: true,
  },
  {
    title: "Customers",
    value: "324",
    change: "+18%",
    icon: Users,
    positive: true,
  },
  {
    title: "Stock Items",
    value: "842",
    change: "-2%",
    icon: Package,
    positive: false,
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-8 py-8">

        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              Welcome back 👋 Here's what's happening in your business today.
            </p>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-500">
            + Create Voucher
          </Button>
        </div>

        {/* Stats */}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <Card
              key={card.title}
              className="border-slate-800 bg-slate-900 text-white"
            >
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm text-slate-400">
                  {card.title}
                </CardTitle>

                <card.icon className="h-5 w-5 text-blue-400" />
              </CardHeader>

              <CardContent>
                <div className="text-3xl font-bold">
                  {card.value}
                </div>

                <div
                  className={`mt-3 flex items-center gap-1 text-sm ${
                    card.positive
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {card.positive ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}

                  {card.change} this month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tables */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          <Card className="border-slate-800 bg-slate-900 text-white">
            <CardHeader>
              <CardTitle>
                Recent Sales
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">

              {[
                {
                  customer: "Rahul Traders",
                  amount: "₹18,400",
                },
                {
                  customer: "ABC Pvt Ltd",
                  amount: "₹9,800",
                },
                {
                  customer: "Om Enterprises",
                  amount: "₹31,000",
                },
                {
                  customer: "Shree Agency",
                  amount: "₹7,200",
                },
              ].map((sale) => (
                <div
                  key={sale.customer}
                  className="flex items-center justify-between rounded-lg border border-slate-800 p-3"
                >
                  <div>
                    <p className="font-medium">
                      {sale.customer}
                    </p>

                    <p className="text-sm text-slate-400">
                      Invoice Paid
                    </p>
                  </div>

                  <span className="font-semibold text-green-400">
                    {sale.amount}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900 text-white">
            <CardHeader>
              <CardTitle>
                Low Stock Items
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">

              {[
                "HP Laptop",
                "Dell Mouse",
                "Printer Ink",
                "Keyboard",
                "Monitor",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-lg border border-slate-800 p-3"
                >
                  <div>
                    <p className="font-medium">
                      {item}
                    </p>

                    <p className="text-sm text-slate-400">
                      Quantity Low
                    </p>
                  </div>

                  <span className="rounded bg-red-500/20 px-3 py-1 text-sm text-red-400">
                    Low
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

        </div>

      </div>
    </main>
  );
}
