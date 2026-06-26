"use client";

import { CalendarDays, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SalesPage() {
  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Sales Invoice
          </h1>

          <p className="mt-2 text-slate-500">
            Create GST sales invoices.
          </p>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          New Invoice
        </Button>

      </div>

      <Card className="p-6">

        <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-5">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Customer Name
              </label>

              <Input placeholder="Select Customer" />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Mobile Number
              </label>

              <Input placeholder="9876543210" />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                GST Number
              </label>

              <Input placeholder="27ABCDE1234F1Z5" />

            </div>

          </div>

          <div className="space-y-5">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Invoice No
              </label>

              <Input defaultValue="INV-1001" />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Invoice Date
              </label>

              <div className="relative">

                <CalendarDays className="absolute left-3 top-3 h-4 w-4 text-gray-500" />

                <Input
                  type="date"
                  className="pl-10"
                />

              </div>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Payment Mode
              </label>

              <select className="w-full rounded-lg border p-3">

                <option>Cash</option>
                <option>UPI</option>
                <option>Bank</option>
                <option>Credit</option>

              </select>

            </div>

          </div>

        </div>

      </Card>

    </div>
  );
}
