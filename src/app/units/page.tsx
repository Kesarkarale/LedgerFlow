"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Ruler,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const units = [
  {
    id: 1,
    name: "Kilogram",
    short: "Kg",
    decimal: "Yes",
  },
  {
    id: 2,
    name: "Piece",
    short: "Pc",
    decimal: "No",
  },
  {
    id: 3,
    name: "Liter",
    short: "Ltr",
    decimal: "Yes",
  },
];

export default function UnitsPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Units Master
          </h1>

          <p className="text-slate-500 mt-2">
            Manage inventory measurement units.
          </p>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Unit
        </Button>

      </div>

      <Card className="p-6">

        <div className="relative">

          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

          <Input
            placeholder="Search Unit..."
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

              <th className="p-4 text-left">Unit</th>
              <th>Short Code</th>
              <th>Decimal Allowed</th>
              <th className="text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {units
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

                      <div className="rounded-xl bg-emerald-100 p-3">

                        <Ruler className="text-emerald-600" />

                      </div>

                      <span className="font-semibold">
                        {item.name}
                      </span>

                    </div>

                  </td>

                  <td>{item.short}</td>

                  <td>

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        item.decimal === "Yes"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.decimal}
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
