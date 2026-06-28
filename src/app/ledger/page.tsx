 "use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Plus,
  Pencil,
  Trash2,
  Search,
  Save,
  Printer,
  Download,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Ledger = {
  id: number;
  name: string;
  group: string;
  mobile: string;
  gst: string;
  balance: number;
  address: string;
};

const groups = [
  "Sundry Debtors",
  "Sundry Creditors",
  "Cash-in-Hand",
  "Bank Accounts",
  "Direct Expenses",
  "Indirect Expenses",
  "Sales Account",
  "Purchase Account",
];

export default function LedgerPage() {

  const [search, setSearch] = useState("");

  const [ledgerName, setLedgerName] =
    useState("");

  const [group, setGroup] =
    useState(groups[0]);

  const [mobile, setMobile] =
    useState("");

  const [gst, setGst] =
    useState("");

  const [balance, setBalance] =
    useState(0);

  const [address, setAddress] =
    useState("");

  const [ledgers, setLedgers] =
    useState<Ledger[]>([
      {
        id: 1,
        name: "ABC Traders",
        group: "Sundry Debtors",
        mobile: "9876543210",
        gst: "27ABCDE1234F1Z5",
        balance: 25000,
        address: "Pune",
      },
      {
        id: 2,
        name: "XYZ Suppliers",
        group: "Sundry Creditors",
        mobile: "9988776655",
        gst: "27PQRSX4567A1Z2",
        balance: 18000,
        address: "Mumbai",
      },
    ]);

  const filtered = useMemo(() => {

    return ledgers.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [search, ledgers]);

  const addLedger = () => {

    if (!ledgerName) return;

    setLedgers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: ledgerName,
        group,
        mobile,
        gst,
        balance,
        address,
      },
    ]);

    setLedgerName("");
    setMobile("");
    setGst("");
    setBalance(0);
    setAddress("");

  };

  const deleteLedger = (id:number)=>{

    setLedgers((prev)=>
      prev.filter((x)=>x.id!==id)
    );

  };

  return (

<div className="space-y-8">

<div className="flex items-center justify-between">

<div>

<h1 className="flex items-center gap-3 text-3xl font-bold">

<BookOpen className="text-blue-600"/>

Ledger Master

</h1>

<p className="mt-2 text-slate-500">

Manage all business ledgers.

</p>

</div>

<Button
onClick={addLedger}
className="bg-blue-600 hover:bg-blue-700"
>

<Plus className="mr-2 h-4 w-4"/>

Create Ledger

</Button>

</div>

<div className="grid gap-6 lg:grid-cols-3">

<Card className="p-6">

<h2 className="mb-5 text-xl font-semibold">

Create Ledger

</h2>

<div className="space-y-4">

<Input
placeholder="Ledger Name"
value={ledgerName}
onChange={(e)=>
setLedgerName(e.target.value)
}
/>

<select
value={group}
onChange={(e)=>
setGroup(e.target.value)
}
className="w-full rounded-lg border p-3"
>

{groups.map((g)=>(

<option
key={g}
value={g}
>

{g}

</option>

))}

</select>

<Input
placeholder="Mobile Number"
value={mobile}
onChange={(e)=>
setMobile(e.target.value)
}
/>

<Input
placeholder="GST Number"
value={gst}
onChange={(e)=>
setGst(e.target.value)
}
/>

<Input
type="number"
placeholder="Opening Balance"
value={balance}
onChange={(e)=>
setBalance(Number(e.target.value))
}
/>

<textarea
rows={4}
placeholder="Address"
value={address}
onChange={(e)=>
setAddress(e.target.value)
}
className="w-full rounded-lg border p-3"
/>

<Button
onClick={addLedger}
className="w-full"
>

<Save className="mr-2 h-4 w-4"/>

Save Ledger

</Button>

</div>

</Card>
  "use client";

import { useMemo, useState } from "react";
import {
  BookOpen,
  Plus,
  Pencil,
  Trash2,
  Search,
  Save,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Ledger = {
  id: number;
  name: string;
  group: string;
  mobile: string;
  gst: string;
  balance: number;
  address: string;
};

const groups = [
  "Sundry Debtors",
  "Sundry Creditors",
  "Cash-in-Hand",
  "Bank Accounts",
  "Direct Expenses",
  "Indirect Expenses",
  "Sales Account",
  "Purchase Account",
];

export default function LedgerPage() {

  const [search, setSearch] = useState("");

  const [ledgerName, setLedgerName] =
    useState("");

  const [group, setGroup] =
    useState(groups[0]);

  const [mobile, setMobile] =
    useState("");

  const [gst, setGst] =
    useState("");

  const [balance, setBalance] =
    useState(0);

  const [address, setAddress] =
    useState("");

  const [ledgers, setLedgers] =
    useState<Ledger[]>([
      {
        id: 1,
        name: "ABC Traders",
        group: "Sundry Debtors",
        mobile: "9876543210",
        gst: "27ABCDE1234F1Z5",
        balance: 25000,
        address: "Pune",
      },
      {
        id: 2,
        name: "XYZ Suppliers",
        group: "Sundry Creditors",
        mobile: "9988776655",
        gst: "27PQRSX4567A1Z2",
        balance: 18000,
        address: "Mumbai",
      },
    ]);

  const filtered = useMemo(() => {

    return ledgers.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [search, ledgers]);

  const addLedger = () => {

    if (!ledgerName) return;

    setLedgers((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: ledgerName,
        group,
        mobile,
        gst,
        balance,
        address,
      },
    ]);

    setLedgerName("");
    setMobile("");
    setGst("");
    setBalance(0);
    setAddress("");

  };

  const deleteLedger = (id:number)=>{

    setLedgers((prev)=>
      prev.filter((x)=>x.id!==id)
    );

  };

  return (

<div className="space-y-8">

<div className="flex items-center justify-between">

<div>

<h1 className="flex items-center gap-3 text-3xl font-bold">

<BookOpen className="text-blue-600"/>

Ledger Master

</h1>

<p className="mt-2 text-slate-500">

Manage all business ledgers.

</p>

</div>

<Button
onClick={addLedger}
className="bg-blue-600 hover:bg-blue-700"
>

<Plus className="mr-2 h-4 w-4"/>

Create Ledger

</Button>

</div>

<div className="grid gap-6 lg:grid-cols-3">

<Card className="p-6">

<h2 className="mb-5 text-xl font-semibold">

Create Ledger

</h2>

<div className="space-y-4">

<Input
placeholder="Ledger Name"
value={ledgerName}
onChange={(e)=>
setLedgerName(e.target.value)
}
/>

<select
value={group}
onChange={(e)=>
setGroup(e.target.value)
}
className="w-full rounded-lg border p-3"
>

{groups.map((g)=>(

<option
key={g}
value={g}
>

{g}

</option>

))}

</select>

<Input
placeholder="Mobile Number"
value={mobile}
onChange={(e)=>
setMobile(e.target.value)
}
/>

<Input
placeholder="GST Number"
value={gst}
onChange={(e)=>
setGst(e.target.value)
}
/>

<Input
type="number"
placeholder="Opening Balance"
value={balance}
onChange={(e)=>
setBalance(Number(e.target.value))
}
/>

<textarea
rows={4}
placeholder="Address"
value={address}
onChange={(e)=>
setAddress(e.target.value)
}
className="w-full rounded-lg border p-3"
/>

<Button
onClick={addLedger}
className="w-full"
>

<Save className="mr-2 h-4 w-4"/>

Save Ledger

</Button>

</div>

</Card>
        {/* ================= Summary & Actions ================= */}

      <div className="grid gap-6 lg:grid-cols-2">

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">
            Ledger Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">

              <span>Total Ledgers</span>

              <span className="font-semibold">

                {ledgers.length}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Total Balance</span>

              <span className="font-semibold text-green-600">

                ₹
                {ledgers
                  .reduce(
                    (sum, item) => sum + item.balance,
                    0
                  )
                  .toLocaleString()}

              </span>

            </div>

            <div className="flex justify-between">

              <span>Filtered Records</span>

              <span>

                {filtered.length}

              </span>

            </div>

            <hr />

            <div className="rounded-lg bg-slate-100 p-4">

              <h3 className="font-semibold">

                Ledger Groups

              </h3>

              <ul className="mt-3 space-y-2 text-sm text-slate-600">

                {groups.map((g) => (

                  <li key={g}>

                    • {g}

                  </li>

                ))}

              </ul>

            </div>

          </div>

        </Card>

        <Card className="p-6">

          <h2 className="mb-5 text-xl font-semibold">

            Quick Actions

          </h2>

          <div className="grid gap-4">

            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() =>
                alert("Ledger Saved Successfully")
              }
            >

              <Save className="mr-2 h-4 w-4"/>

              Save Ledger

            </Button>

            <Button
              variant="outline"
              onClick={() =>
                window.print()
              }
            >

              <Printer className="mr-2 h-4 w-4"/>

              Print Ledger List

            </Button>

            <Button
              variant="outline"
              onClick={() =>
                alert("Excel Export Coming Soon")
              }
            >

              <Download className="mr-2 h-4 w-4"/>

              Export Excel

            </Button>

            <Button
              variant="outline"
              onClick={() =>
                alert("PDF Export Coming Soon")
              }
            >

              <Download className="mr-2 h-4 w-4"/>

              Download PDF

            </Button>

          </div>

          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4">

            <h3 className="font-semibold text-blue-700">

              Information

            </h3>

            <p className="mt-2 text-sm text-slate-600">

              Manage all customer, supplier, bank,
              cash and expense ledgers from one place.
              Search, edit and delete ledgers easily.

            </p>

          </div>

        </Card>

      </div>

    </div>

  );

}
