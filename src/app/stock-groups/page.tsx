"use client";

import { useState } from "react";
import {
  Boxes,
  Plus,
  Search,
  Pencil,
  Trash2,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const stockGroups = [
  {
    id: 1,
    name: "Electronics",
    description: "Electronic Products",
    items: 125,
  },
  {
    id: 2,
    name: "Groceries",
    description: "Daily Grocery Items",
    items: 89,
  },
  {
    id: 3,
    name: "Stationery",
    description: "Office Supplies",
    items: 56,
  },
];

export default function StockGroupPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Stock Groups
          </h1>

          <p className="mt-1 text-slate-500">
            Organize inventory into categories.
          </p>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Group
        </Button>

      </div>

      <Card className="p-6">

        <div className="relative">

          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

          <Input
            placeholder="Search Stock Group..."
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
              <th className="p-4 text-left">Group</th>
              <th>Description</th>
              <th>Total Items</th>
              <th className="text-center">Actions</th>
            </tr>

          </thead>

          <tbody>

            {stockGroups
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

                      <div className="rounded-xl bg-indigo-100 p-3">

                        <Boxes className="text-indigo-600" />

                      </div>

                      <span className="font-semibold">
                        {item.name}
                      </span>

                    </div>

                  </td>

                  <td>{item.description}</td>

                  <td>

                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                      {item.items}
                    </span>

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
