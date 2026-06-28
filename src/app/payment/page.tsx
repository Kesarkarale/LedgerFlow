"use client";

import { useMemo, useState } from "react";
import {
  Wallet,
  Save,
  Printer,
  Download,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ledgers = [
  "ABC Traders",
  "XYZ Enterprises",
  "Sai Electricals",
  "Shree Traders",
];

const accounts = [
  "Cash Account",
  "HDFC Bank",
  "ICICI Bank",
  "SBI Bank",
];

export default function PaymentPage() {

  const [voucherNo] = useState("PAY-1001");

  const [date, setDate] = useState("");

  const [ledger, setLedger] = useState("");

  const [account, setAccount] = useState("");

  const [paymentMode, setPaymentMode] =
    useState("Cash");

  const [amount, setAmount] =
    useState(0);

  const [reference, setReference] =
    useState("");

  const [chequeNo, setChequeNo] =
    useState("");

  const [remarks, setRemarks] =
    useState("");

  const total = useMemo(() => amount,[amount]);

  return (

<div className="space-y-8">

<div className="flex items-center justify-between">

<div>

<h1 className="flex items-center gap-3 text-3xl font-bold">

<Wallet className="text-blue-600"/>

Payment Voucher

</h1>

<p className="mt-2 text-slate-500">

Record supplier payments and expenses.

</p>

</div>

<div className="flex gap-3">

<Button variant="outline">

<Printer className="mr-2 h-4 w-4"/>

Print

</Button>

<Button variant="outline">

<Download className="mr-2 h-4 w-4"/>

PDF

</Button>

<Button className="bg-blue-600 hover:bg-blue-700">

<Save className="mr-2 h-4 w-4"/>

Save

</Button>

</div>

</div>

<div className="grid gap-6 lg:grid-cols-2">

<Card className="p-6">

<h2 className="mb-5 text-xl font-semibold">

Voucher Details

</h2>

<div className="space-y-4">

<Input
value={voucherNo}
readOnly
/>

<Input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
/>

<select
value={paymentMode}
onChange={(e)=>setPaymentMode(e.target.value)}
className="w-full rounded-lg border p-3"
>

<option>Cash</option>
<option>Bank</option>
<option>UPI</option>
<option>Cheque</option>
<option>NEFT</option>

</select>

<Input
placeholder="Reference Number"
value={reference}
onChange={(e)=>setReference(e.target.value)}
/>

<Input
placeholder="Cheque Number"
value={chequeNo}
onChange={(e)=>setChequeNo(e.target.value)}
/>

</div>

</Card>

<Card className="p-6">

<h2 className="mb-5 text-xl font-semibold">

Payment Details

</h2>

<div className="space-y-4">

<select
value={ledger}
onChange={(e)=>setLedger(e.target.value)}
className="w-full rounded-lg border p-3"
>

<option value="">

Select Ledger

</option>

{ledgers.map((item)=>(

<option
key={item}
value={item}
>

{item}

</option>

))}

</select>

<select
value={account}
onChange={(e)=>setAccount(e.target.value)}
className="w-full rounded-lg border p-3"
>

<option value="">

Select Account

</option>

{accounts.map((item)=>(

<option
key={item}
value={item}
>

{item}

</option>

))}

</select>

<Input
type="number"
placeholder="Amount"
value={amount}
onChange={(e)=>
setAmount(Number(e.target.value))
}
/>

<textarea
rows={5}
placeholder="Narration"
value={remarks}
onChange={(e)=>
setRemarks(e.target.value)
}
className="w-full rounded-lg border p-3"
/>

</div>

</Card>

</div>
        {/* ================= Summary ================= */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Narration */}

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Additional Information
          </h2>

          <div className="space-y-5">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Narration
              </label>

              <textarea
                rows={6}
                value={remarks}
                onChange={(e) =>
                  setRemarks(e.target.value)
                }
                className="w-full rounded-lg border p-3"
                placeholder="Payment narration..."
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Attachment
              </label>

              <Input type="file" />

            </div>

          </div>

        </Card>

        {/* Summary */}

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Payment Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Ledger</span>

              <span>{ledger || "-"}</span>

            </div>

            <div className="flex justify-between">

              <span>Account</span>

              <span>{account || "-"}</span>

            </div>

            <div className="flex justify-between">

              <span>Payment Mode</span>

              <span>{paymentMode}</span>

            </div>

            <div className="flex justify-between">

              <span>Reference</span>

              <span>{reference || "-"}</span>

            </div>

            <div className="flex justify-between">

              <span>Cheque No.</span>

              <span>{chequeNo || "-"}</span>

            </div>

            <hr />

            <div className="flex justify-between text-3xl font-bold text-blue-600">

              <span>Total Amount</span>

              <span>

                ₹{total.toLocaleString()}

              </span>

            </div>

            <div className="grid gap-3 pt-6">

              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() =>
                  alert("Payment Saved Successfully")
                }
              >

                <Save className="mr-2 h-4 w-4" />

                Save Voucher

              </Button>

              <Button
                variant="outline"
                onClick={() => window.print()}
              >

                <Printer className="mr-2 h-4 w-4" />

                Print Voucher

              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  alert("PDF Export Coming Soon")
                }
              >

                <Download className="mr-2 h-4 w-4" />

                Download PDF

              </Button>

            </div>

          </div>

        </Card>

      </div>

    </div>
  );
}
