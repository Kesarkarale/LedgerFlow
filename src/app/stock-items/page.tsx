"use client";

import { useState } from "react";
import {
  Package,
  Plus,
  Search,
  Pencil,
  Trash2,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const items = [
  {
    id: 1,
    name: "HP Laptop",
    sku: "HP001",
    hsn: "8471",
    group: "Electronics",
    unit: "Pc",
    purchase: 45000,
    selling: 52000,
    stock: 12,
    gst: "18%",
  },
  {
    id: 2,
    name: "Dell Mouse",
    sku: "MS002",
    hsn: "8471",
    group: "Accessories",
    unit: "Pc",
    purchase: 350,
    selling: 550,
    stock: 85,
    gst: "18%",
  },
  {
    id: 3,
    name: "A4 Paper",
    sku: "A4001",
    hsn: "4802",
    group: "Stationery",
    unit: "Pack",
    purchase: 180,
    selling: 250,
    stock: 120,
    gst: "12%",
  },
];

export default function StockItemsPage() {
  const [search, setSearch] = useState("");

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Stock Items
          </h1>

          <p className="mt-2 text-slate-500">
            Manage all inventory products.
          </p>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Item
        </Button>

      </div>

      <Card className="p-6">

        <div className="relative">

          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

          <Input
            placeholder="Search Product..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </Card>

      <Card className="overflow-auto">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">Product</th>
              <th>SKU</th>
              <th>HSN</th>
              <th>Group</th>
              <th>Unit</th>
              <th>Purchase</th>
              <th>Selling</th>
              <th>GST</th>
              <th>Stock</th>
              <th className="text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4">

                  <div className="flex items-center gap-3">

                    <div className="rounded-xl bg-blue-100 p-3">

                      <Package className="text-blue-600" />

                    </div>

                    <span className="font-semibold">
                      {item.name}
                    </span>

                  </div>

                </td>

                <td>{item.sku}</td>

                <td>{item.hsn}</td>

                <td>{item.group}</td>

                <td>{item.unit}</td>

                <td>₹{item.purchase}</td>

                <td>₹{item.selling}</td>

                <td>{item.gst}</td>

                <td>

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      item.stock > 20
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.stock}
                  </span>

                </td>

                <td>

                  <div className="flex justify-center gap-2">

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
