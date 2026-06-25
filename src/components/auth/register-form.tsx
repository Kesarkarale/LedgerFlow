"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, LockKeyhole, Mail, User2 } from "lucide-react";
import { toast } from "sonner";

import AuthShell from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (key: "name" | "email" | "password", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setIsLoading(true);

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Registration failed");
        return;
      }

      toast.success("Account created successfully");
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while creating account");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Set up your LedgerFlow workspace and start managing billing, inventory, accounting and business operations."
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerHref="/login"
      form={
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-200">
              Full name
            </Label>
            <div className="relative">
              <User2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="name"
                type="text"
                placeholder="Kesar Karale"
                value={formData.name}
                onChange={(e) => onChange("name", e.target.value)}
                className="h-12 rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-slate-500 focus-visible:border-blue-400/50 focus-visible:ring-2 focus-visible:ring-blue-500/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-200">
              Email address
            </Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => onChange("email", e.target.value)}
                className="h-12 rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-slate-500 focus-visible:border-blue-400/50 focus-visible:ring-2 focus-visible:ring-blue-500/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-slate-200">
              Password
            </Label>
            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="password"
                type="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) => onChange("password", e.target.value)}
                className="h-12 rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-slate-500 focus-visible:border-blue-400/50 focus-visible:ring-2 focus-visible:ring-blue-500/20"
              />
            </div>
            <p className="text-xs text-slate-400">
              Use at least 6 characters. You can strengthen this later with validation rules.
            </p>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-base font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:from-blue-500 hover:to-violet-500"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating account...
              </>
            ) : (
              "Create LedgerFlow account"
            )}
          </Button>

          <p className="text-center text-xs leading-6 text-slate-400">
            By creating an account, you agree to LedgerFlow’s{" "}
            <span className="text-slate-300">Terms of Service</span> and{" "}
            <span className="text-slate-300">Privacy Policy</span>.
          </p>
        </form>
      }
    />
  );
}
