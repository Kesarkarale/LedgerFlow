 "use client";

import Link from "next/link";
import {
  Building2,
  Users,
  UserCheck,
  Boxes,
  Receipt,
  ShoppingCart,
  Wallet,
  IndianRupee,
  TrendingUp,
  ArrowUpRight,
  Bell,
  CalendarDays,
  Package,
  CreditCard,
} from "lucide-react";

const stats = [
  {
    title: "Today's Sales",
    value: "₹25,640",
    icon: IndianRupee,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Today's Purchase",
    value: "₹12,450",
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Customers",
    value: "245",
    icon: Users,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Products",
    value: "325",
    icon: Package,
    color: "from-orange-500 to-red-500",
  },
];

const modules = [
  {
    title: "Company",
    href: "/company",
    icon: Building2,
  },
  {
    title: "Ledger",
    href: "/ledger",
    icon: Wallet,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Suppliers",
    href: "/suppliers",
    icon: UserCheck,
  },
  {
    title: "Stock",
    href: "/stock-items",
    icon: Boxes,
  },
  {
    title: "Sales",
    href: "/sales",
    icon: Receipt,
  },
  {
    title: "Purchase",
    href: "/purchase",
    icon: ShoppingCart,
  },
  {
    title: "Payment",
    href: "/payment",
    icon: CreditCard,
  },
];

export default function DashboardPage() {

  return (
      <AppLayout>
<div className="space-y-8">

{/* HERO */}

<div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 p-8 text-white shadow-xl">

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

<div>

<p className="text-blue-100">

Welcome Back 👋

</p>

<h1 className="mt-2 text-4xl font-bold">

LedgerFlow ERP Dashboard

</h1>

<p className="mt-4 max-w-2xl text-blue-100">

Manage Company, Inventory, Sales,
Purchase, GST, Customers,
Suppliers and Accounts
from one modern dashboard.

</p>

<div className="mt-6 flex gap-3">

<button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700">

+ Create Invoice

</button>

<button className="rounded-xl border border-white/30 bg-white/10 px-6 py-3">

View Reports

</button>

</div>

</div>

<div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

<div className="flex items-center gap-3">

<CalendarDays />

<div>

<p className="text-sm">

Today's Date

</p>

<h2 className="text-xl font-bold">

28 June 2026

</h2>

</div>

</div>

<div className="mt-8 flex items-center gap-3">

<Bell />

<div>

<p className="text-sm">

Notifications

</p>

<h2 className="text-xl font-bold">

5 Pending Tasks

</h2>

</div>

</div>

</div>

</div>

</div>

{/* KPI */}

<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

{stats.map((item)=>{

const Icon=item.icon;

return(

<div
key={item.title}
className="rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
>

<div className="flex items-center justify-between">

<div>

<p className="text-slate-500">

{item.title}

</p>

<h2 className="mt-3 text-3xl font-bold">

{item.value}

</h2>

<div className="mt-4 flex items-center gap-1 text-green-600">

<TrendingUp size={16}/>

12.5%

</div>

</div>

<div
className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-white`}
>

<Icon size={32}/>

</div>

</div>

</div>

);

})}

</div>

{/* QUICK MODULES */}

<div className="rounded-3xl bg-white p-8 shadow-lg">

<div className="mb-6 flex items-center justify-between">

<h2 className="text-2xl font-bold">

Quick Access

</h2>

<span className="text-sm text-slate-500">

ERP Modules

</span>

</div>

<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((item) => {

            const Icon = item.icon;

            return (

              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

                    <Icon size={28} />

                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-slate-400 transition group-hover:text-blue-600"
                  />

                </div>

                <h3 className="mt-5 text-lg font-semibold">

                  {item.title}

                </h3>

                <p className="mt-2 text-sm text-slate-500">

                  Open {item.title} Module

                </p>

              </Link>

            );

          })}

        </div>

      </div>

      {/* ================= Analytics ================= */}

      <div className="grid gap-6 xl:grid-cols-3">

        {/* Sales Chart */}

        <div className="xl:col-span-2 rounded-3xl bg-white p-8 shadow-lg">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold">

                Sales Analytics

              </h2>

              <p className="mt-1 text-sm text-slate-500">

                Monthly Sales Performance

              </p>

            </div>

            <button className="rounded-xl border px-4 py-2 hover:bg-slate-100">

              This Month

            </button>

          </div>

          <div className="mt-10 flex h-80 items-end justify-between gap-4">

            {[45, 70, 55, 90, 60, 120, 80, 100, 75, 140, 110, 160].map(
              (height, index) => (

                <div
                  key={index}
                  className="flex flex-1 flex-col items-center"
                >

                  <div
                    style={{
                      height: `${height}px`,
                    }}
                    className="w-full rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400 transition hover:scale-105"
                  />

                  <span className="mt-3 text-xs text-slate-500">

                    {
                      [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ][index]
                    }

                  </span>

                </div>

              )
            )}

          </div>

        </div>

        {/* Business Summary */}

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold">

            Business Summary

          </h2>

          <div className="mt-8 space-y-6">

            <div className="flex justify-between">

              <span>Total Sales</span>

              <span className="font-bold text-green-600">

                ₹4,25,650

              </span>

            </div>

            <div className="flex justify-between">

              <span>Total Purchase</span>

              <span className="font-bold text-blue-600">

                ₹2,18,450

              </span>

            </div>

            <div className="flex justify-between">

              <span>Total Expense</span>

              <span className="font-bold text-red-500">

                ₹54,000

              </span>

            </div>

            <div className="flex justify-between">

              <span>Net Profit</span>

              <span className="font-bold text-emerald-600">

                ₹1,53,200

              </span>

            </div>

            <hr />

            <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">

              <p className="text-sm">

                Growth

              </p>

              <h2 className="mt-2 text-4xl font-bold">

                +18.6%

              </h2>

              <p className="mt-2 text-sm">

                Compared to last month

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================= Inventory & Payments ================= */}

      <div className="grid gap-6 lg:grid-cols-2">
                {/* ================= Inventory Summary ================= */}

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold">

              Inventory Overview

            </h2>

            <Boxes className="text-blue-600" />

          </div>

          <div className="space-y-5">

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

              <span>Total Products</span>

              <span className="font-bold text-blue-600">

                325

              </span>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

              <span>Available Stock</span>

              <span className="font-bold text-green-600">

                307

              </span>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

              <span>Low Stock</span>

              <span className="font-bold text-orange-500">

                14

              </span>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

              <span>Out Of Stock</span>

              <span className="font-bold text-red-600">

                4

              </span>

            </div>

          </div>

        </div>

        {/* ================= Outstanding Payments ================= */}

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold">

              Outstanding Payments

            </h2>

            <Wallet className="text-green-600" />

          </div>

          <div className="space-y-5">

            {[
              {
                name: "ABC Traders",
                amount: "₹45,000",
              },
              {
                name: "Sai Suppliers",
                amount: "₹18,500",
              },
              {
                name: "Om Enterprises",
                amount: "₹9,850",
              },
            ].map((item) => (

              <div
                key={item.name}
                className="flex items-center justify-between rounded-xl border p-4 hover:bg-slate-50"
              >

                <div>

                  <h3 className="font-semibold">

                    {item.name}

                  </h3>

                  <p className="text-sm text-slate-500">

                    Pending

                  </p>

                </div>

                <span className="font-bold text-red-600">

                  {item.amount}

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ================= Recent Activity ================= */}

      <div className="grid gap-6 xl:grid-cols-2">

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="mb-6 text-2xl font-bold">

            Recent Activity

          </h2>

          <div className="space-y-6">

            {[
              "New Sales Invoice Created",
              "Supplier Payment Completed",
              "Customer Added",
              "Purchase Bill Saved",
              "Stock Updated",
            ].map((activity, index) => (

              <div
                key={index}
                className="flex items-center gap-4"
              >

                <div className="h-3 w-3 rounded-full bg-blue-600" />

                <div>

                  <p className="font-medium">

                    {activity}

                  </p>

                  <p className="text-sm text-slate-500">

                    Today

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* ================= Latest Invoices ================= */}

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="mb-6 text-2xl font-bold">

            Latest Invoices

          </h2>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead>

                <tr className="border-b">

                  <th className="p-3 text-left">

                    Invoice

                  </th>

                  <th className="p-3 text-left">

                    Customer

                  </th>

                  <th className="p-3 text-left">

                    Amount

                  </th>

                </tr>

              </thead>

              <tbody>

                {[
                  ["INV-1001", "ABC Traders", "₹15,000"],
                  ["INV-1002", "Sai Electricals", "₹22,500"],
                  ["INV-1003", "XYZ Mart", "₹8,950"],
                  ["INV-1004", "Ganesh Store", "₹13,400"],
                ].map((row) => (

                  <tr
                    key={row[0]}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="p-3 font-medium">

                      {row[0]}

                    </td>

                    <td className="p-3">

                      {row[1]}

                    </td>

                    <td className="p-3 font-semibold text-green-600">

                      {row[2]}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* ================= Footer Section ================= */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 p-8 text-white">
                <div className="grid gap-6 md:grid-cols-4">

          <div>

            <p className="text-blue-100 text-sm">

              Total Revenue

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              ₹4.25L

            </h2>

          </div>

          <div>

            <p className="text-blue-100 text-sm">

              Customers

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              245

            </h2>

          </div>

          <div>

            <p className="text-blue-100 text-sm">

              Products

            </p>

            <h2 className="mt-2 text-3xl font-bold">

              325

            </h2>

          </div>

          <div>

            <p className="text-blue-100 text-sm">

              Net Profit

            </p>

            <h2 className="mt-2 text-3xl font-bold text-green-300">

              ₹1.53L

            </h2>

          </div>

        </div>

        <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <div>

            <h3 className="text-2xl font-bold">

              LedgerFlow ERP

            </h3>

            <p className="mt-2 text-blue-100">

              Complete Business Management Software

            </p>

          </div>

          <div className="flex gap-3">

            <Link href="/sales">

              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100 transition">

                Sales

              </button>

            </Link>

            <Link href="/purchase">

              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100 transition">

                Purchase

              </button>

            </Link>

            <Link href="/payment">

              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-100 transition">

                Payment

              </button>

            </Link>

          </div>

        </div>

      </div>

    </div>
      </AppLayout>
  );

}
