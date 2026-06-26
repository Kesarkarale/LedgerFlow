"use client";

import { useState } from "react";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Landmark,
  Calendar,
  Save,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function CompanyPage() {
  const [form, setForm] = useState({
    name: "",
    gst: "",
    phone: "",
    email: "",
    state: "",
    address: "",
    fyStart: "",
    fyEnd: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    console.log(form);

    alert("Company Saved Successfully");
  };

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Company Setup
        </h1>

        <p className="text-slate-500 mt-2">
          Configure your business information.
        </p>
      </div>

      <Card className="shadow-sm">

        <CardHeader>

          <CardTitle className="flex items-center gap-2">

            <Building2 className="h-6 w-6 text-blue-600" />

            Company Information

          </CardTitle>

        </CardHeader>

        <CardContent>

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <Label>Company Name</Label>

              <Input
                placeholder="ABC Pvt Ltd"
                value={form.name}
                onChange={(e) =>
                  handleChange("name", e.target.value)
                }
              />

            </div>

            <div>

              <Label>GST Number</Label>

              <Input
                placeholder="27ABCDE1234F1Z5"
                value={form.gst}
                onChange={(e) =>
                  handleChange("gst", e.target.value)
                }
              />

            </div>

            <div>

              <Label>Email</Label>

              <div className="relative">

                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>

                <Input
                  className="pl-10"
                  placeholder="company@gmail.com"
                  value={form.email}
                  onChange={(e)=>
                    handleChange("email",e.target.value)
                  }
                />

              </div>

            </div>

            <div>

              <Label>Phone</Label>

              <div className="relative">

                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>

                <Input
                  className="pl-10"
                  placeholder="+91 9876543210"
                  value={form.phone}
                  onChange={(e)=>
                    handleChange("phone",e.target.value)
                  }
                />

              </div>

            </div>

            <div>

              <Label>State</Label>

              <div className="relative">

                <Landmark className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>

                <Input
                  className="pl-10"
                  placeholder="Maharashtra"
                  value={form.state}
                  onChange={(e)=>
                    handleChange("state",e.target.value)
                  }
                />

              </div>

            </div>

            <div>

              <Label>Address</Label>

              <div className="relative">

                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>

                <Input
                  className="pl-10"
                  placeholder="Company Address"
                  value={form.address}
                  onChange={(e)=>
                    handleChange("address",e.target.value)
                  }
                />

              </div>

            </div>

            <div>

              <Label>Financial Year Start</Label>

              <div className="relative">

                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>

                <Input
                  className="pl-10"
                  type="date"
                  value={form.fyStart}
                  onChange={(e)=>
                    handleChange("fyStart",e.target.value)
                  }
                />

              </div>

            </div>

            <div>

              <Label>Financial Year End</Label>

              <div className="relative">

                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400"/>

                <Input
                  className="pl-10"
                  type="date"
                  value={form.fyEnd}
                  onChange={(e)=>
                    handleChange("fyEnd",e.target.value)
                  }
                />

              </div>

            </div>

          </div>

          <div className="mt-8">

            <Button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Save className="mr-2 h-4 w-4" />

              Save Company

            </Button>

          </div>

        </CardContent>

      </Card>

    </div>
  );
}
