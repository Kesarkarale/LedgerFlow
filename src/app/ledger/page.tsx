"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ledgerData = [
  {
    id: 1,
    name: "Cash",
    group: "Cash-in-Hand",
    opening: "₹0",
    status: "Active",
  },
  {
    id: 2,
    name: "ABC Traders",
    group: "Sundry Debtors",
    opening: "₹25,000",
    status: "Active",
  },
  {
    id: 3,
    name: "XYZ Suppliers",
    group: "Sundry Creditors",
    opening: "₹18,500",
    status: "Active",
  },
];

export default function LedgerPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold">
            Ledger Master
          </h1>

          <p className="text-slate-500 mt-1">
            Manage all accounting ledgers.
          </p>

        </div>

        <Button className="bg-blue-600 hover:bg-blue-700">

          <Plus className="mr-2 h-4 w-4"/>

          Add Ledger

        </Button>

      </div>

      <Card className="p-6">

        <div className="flex gap-4">

          <div className="relative flex-1">

            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>

            <Input
              placeholder="Search Ledger..."
              className="pl-10"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />

          </div>

        </div>

      </Card>

      <Card className="overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="p-4 text-left">Ledger</th>

              <th className="text-left">Group</th>

              <th className="text-left">Opening</th>

              <th className="text-left">Status</th>

              <th className="text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {ledgerData
              .filter((item)=>
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item)=>(
                <tr
                  key={item.id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="p-4">

                    <div className="flex items-center gap-3">

                      <div className="rounded-xl bg-blue-100 p-3">

                        <Wallet className="text-blue-600"/>

                      </div>

                      <div>

                        <p className="font-medium">

                          {item.name}

                        </p>

                      </div>

                    </div>

                  </td>

                  <td>{item.group}</td>

                  <td>{item.opening}</td>

                  <td>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-green-700 text-sm">

                      {item.status}

                    </span>

                  </td>

                  <td>

                    <div className="flex justify-center gap-3">

                      <button className="rounded-lg bg-blue-100 p-2">

                        <Pencil className="h-4 w-4 text-blue-600"/>

                      </button>

                      <button className="rounded-lg bg-red-100 p-2">

                        <Trash2 className="h-4 w-4 text-red-600"/>

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
