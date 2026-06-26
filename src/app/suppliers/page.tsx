"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Truck,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const suppliers = [
  {
    id: 1,
    name: "Shree Suppliers",
    mobile: "9876543210",
    email: "shree@gmail.com",
    city: "Pune",
    balance: "₹18,500",
  },
  {
    id: 2,
    name: "Sai Traders",
    mobile: "9988776655",
    email: "sai@gmail.com",
    city: "Mumbai",
    balance: "₹52,000",
  },
];

export default function SupplierPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Supplier Master
          </h1>

          <p className="text-slate-500 mt-1">
            Manage supplier records.
          </p>

        </div>

        <Button className="bg-blue-600 hover:bg-blue-700">

          <Plus className="mr-2 h-4 w-4" />

          Add Supplier

        </Button>

      </div>

      <Card className="p-6">

        <div className="relative">

          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

          <Input
            placeholder="Search Supplier..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </Card>

      <Card className="overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">Supplier</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>City</th>
              <th>Balance</th>
              <th className="text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {suppliers
              .filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (

                <tr
                  key={item.id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-orange-100 p-3">

                        <Truck className="text-orange-600" />

                      </div>

                      <span className="font-medium">
                        {item.name}
                      </span>

                    </div>

                  </td>

                  <td>{item.mobile}</td>

                  <td>{item.email}</td>

                  <td>{item.city}</td>

                  <td className="font-semibold">
                    {item.balance}
                  </td>

                  <td>

                    <div className="flex justify-center gap-3">

                      <button className="rounded-lg bg-blue-100 p-2">

                        <Pencil className="h-4 w-4 text-blue-600" />

                      </button>

                      <button className="rounded-lg bg-red-100 p-2">

                        <Trash2 className="h-4 w-4 text-red-600" />

                      </button>

                    </div>

                  </td>

                </tr>

              ))}

          </tbody>

        </table>

      </Card>

    </div>
  );
}
