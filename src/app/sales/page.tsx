"use client";

import { useMemo, useState } from "react";
import {
  Plus,
  Trash2,
  Save,
  Printer,
  Download,
  Receipt,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type InvoiceItem = {
  id: number;
  product: string;
  hsn: string;
  qty: number;
  unit: string;
  rate: number;
  gst: number;
  discount: number;
};

const customers = [
  "ABC Traders",
  "XYZ Enterprises",
  "Shree Ganesh Mart",
  "Sai Electricals",
];

const productList = [
  {
    name: "HP Laptop",
    hsn: "8471",
    rate: 52000,
    gst: 18,
    unit: "Pc",
  },
  {
    name: "Dell Mouse",
    hsn: "8471",
    rate: 550,
    gst: 18,
    unit: "Pc",
  },
  {
    name: "Keyboard",
    hsn: "8471",
    rate: 850,
    gst: 18,
    unit: "Pc",
  },
];

export default function SalesPage() {
  const [invoiceNo] = useState("INV-1001");

  const [customer, setCustomer] = useState("");

  const [invoiceDate, setInvoiceDate] = useState("");

  const [paymentMode, setPaymentMode] = useState("Cash");

  const [notes, setNotes] = useState("");

  const [items, setItems] = useState<InvoiceItem>([
    {
      id: 1,
      product: "",
      hsn: "",
      qty: 1,
      unit: "Pc",
      rate: 0,
      gst: 18,
      discount: 0,
    },
  ]);

  const updateItem = (
    id: number,
    key: keyof InvoiceItem,
    value: any
  ) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              [key]: value,
            }
          : item
      )
    );
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        product: "",
        hsn: "",
        qty: 1,
        unit: "Pc",
        rate: 0,
        gst: 18,
        discount: 0,
      },
    ]);
  };

  const removeItem = (id: number) => {
    setItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      return (
        sum +
        item.qty * item.rate -
        item.discount
      );
    }, 0);
  }, [items]);

  const gstAmount = useMemo(() => {
    return items.reduce((sum, item) => {
      const amount =
        item.qty * item.rate - item.discount;

      return sum + (amount * item.gst) / 100;
    }, 0);
  }, [items]);

  const grandTotal = subtotal + gstAmount;

  return (
          <div className="grid gap-6 lg:grid-cols-2">

        {/* Customer Details */}

        <Card className="p-6">

          <h2 className="mb-6 text-xl font-semibold">
            Customer Details
          </h2>

          <div className="space-y-5">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Customer
              </label>

              <select
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-600"
              >

                <option value="">
                  Select Customer
                </option>

                {customers.map((item) => (

                  <option key={item}>
                    {item}
                  </option>

                ))}

              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Mobile Number
              </label>

              <Input placeholder="9876543210" />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <Input placeholder="customer@email.com" />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                GST Number
              </label>

              <Input placeholder="27ABCDE1234F1Z5" />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Billing Address
              </label>

              <textarea
                rows={4}
                placeholder="Enter Billing Address"
                className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-600"
              />

            </div>

          </div>

        </Card>

        {/* Invoice Details */}

        <Card className="p-6">

          <h2 className="mb-6 text-xl font-semibold">
            Invoice Details
          </h2>

          <div className="space-y-5">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Invoice Number
              </label>

              <Input
                value={invoiceNo}
                readOnly
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Invoice Date
              </label>

              <Input
                type="date"
                value={invoiceDate}
                onChange={(e) =>
                  setInvoiceDate(e.target.value)
                }
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Due Date
              </label>

              <Input type="date" />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Payment Mode
              </label>

              <select
                value={paymentMode}
                onChange={(e) =>
                  setPaymentMode(e.target.value)
                }
                className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-blue-600"
              >

                <option>Cash</option>
                <option>UPI</option>
                <option>Card</option>
                <option>Bank Transfer</option>
                <option>Credit</option>

              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Reference Number
              </label>

              <Input placeholder="Optional" />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Sales Person
              </label>

              <Input placeholder="Admin" />

            </div>

          </div>

        </Card>

      </div>
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold flex items-center gap-3">

            <Receipt className="text-blue-600" />

            Sales Invoice

          </h1>

          <p className="text-slate-500 mt-2">
            Create GST compliant sales invoices.
          </p>

        </div>

        <div className="flex gap-3">

          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>

          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            PDF
          </Button>

          <Button className="bg-blue-600 hover:bg-blue-700">
            <Save className="mr-2 h-4 w-4" />
            Save Invoice
          </Button>

        </div>

      </div>
    {/* ================= ITEM TABLE ================= */}

<Card className="p-6">

  <div className="mb-6 flex items-center justify-between">

    <div>

      <h2 className="text-xl font-semibold">
        Invoice Items
      </h2>

      <p className="text-sm text-slate-500">
        Add products for this invoice
      </p>

    </div>

    <Button onClick={addItem}>

      <Plus className="mr-2 h-4 w-4" />

      Add Item

    </Button>

  </div>

  <div className="overflow-x-auto">

    <table className="min-w-full border">

      <thead className="bg-slate-100">

        <tr>

          <th className="border p-3">Product</th>

          <th className="border p-3">HSN</th>

          <th className="border p-3">Qty</th>

          <th className="border p-3">Unit</th>

          <th className="border p-3">Rate</th>

          <th className="border p-3">GST %</th>

          <th className="border p-3">Discount</th>

          <th className="border p-3">Amount</th>

          <th className="border p-3">Action</th>

        </tr>

      </thead>

      <tbody>

        {items.map((item) => {

          const amount =
            item.qty * item.rate - item.discount;

          return (

            <tr key={item.id}>

              {/* Product */}

              <td className="border p-2">

                <select
                  value={item.product}
                  onChange={(e) => {

                    const selected =
                      productList.find(
                        (p) =>
                          p.name === e.target.value
                      );

                    updateItem(
                      item.id,
                      "product",
                      e.target.value
                    );

                    if (selected) {

                      updateItem(
                        item.id,
                        "hsn",
                        selected.hsn
                      );

                      updateItem(
                        item.id,
                        "rate",
                        selected.rate
                      );

                      updateItem(
                        item.id,
                        "gst",
                        selected.gst
                      );

                      updateItem(
                        item.id,
                        "unit",
                        selected.unit
                      );

                    }

                  }}
                  className="w-44 rounded border p-2"
                >

                  <option value="">
                    Select
                  </option>

                  {productList.map((p) => (

                    <option
                      key={p.name}
                      value={p.name}
                    >

                      {p.name}

                    </option>

                  ))}

                </select>

              </td>

              {/* HSN */}

              <td className="border p-2">

                <Input
                  value={item.hsn}
                  readOnly
                />

              </td>

              {/* Qty */}

              <td className="border p-2">

                <Input
                  type="number"
                  value={item.qty}
                  onChange={(e) =>
                    updateItem(
                      item.id,
                      "qty",
                      Number(e.target.value)
                    )
                  }
                />

              </td>

              {/* Unit */}

              <td className="border p-2">

                <Input
                  value={item.unit}
                  readOnly
                />

              </td>

              {/* Rate */}

              <td className="border p-2">

                <Input
                  type="number"
                  value={item.rate}
                  onChange={(e) =>
                    updateItem(
                      item.id,
                      "rate",
                      Number(e.target.value)
                    )
                  }
                />

              </td>

              {/* GST */}

              <td className="border p-2">

                <Input
                  type="number"
                  value={item.gst}
                  onChange={(e) =>
                    updateItem(
                      item.id,
                      "gst",
                      Number(e.target.value)
                    )
                  }
                />

              </td>

              {/* Discount */}

              <td className="border p-2">

                <Input
                  type="number"
                  value={item.discount}
                  onChange={(e) =>
                    updateItem(
                      item.id,
                      "discount",
                      Number(e.target.value)
                    )
                  }
                />

              </td>

              {/* Amount */}

              <td className="border p-2 text-center font-semibold text-blue-600">

                ₹{amount.toLocaleString()}

              </td>

              {/* Delete */}

              <td className="border p-2 text-center">

                <Button
                  size="icon"
                  variant="destructive"
                  onClick={() =>
                    removeItem(item.id)
                  }
                >

                  <Trash2 className="h-4 w-4" />

                </Button>

              </td>

            </tr>

          );

        })}

      </tbody>

    </table>

  </div>

</Card>
