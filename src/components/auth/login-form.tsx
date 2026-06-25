"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { toast } from "sonner";

import AuthShell from "@/components/auth/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (key: "email" | "password", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      setIsLoading(true);

      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Invalid email or password");
        return;
      }

      toast.success("Login successful");
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while logging in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to access your LedgerFlow workspace, manage business accounts and continue your ERP operations."
      footerText="Don’t have an account?"
      footerLinkText="Create one"
      footerHref="/register"
      form={
        <form onSubmit={onSubmit} className="space-y-5">
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
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-slate-200">
                Password
              </Label>
              <Link
                href="#"
                className="text-xs font-medium text-blue-400 transition hover:text-blue-300"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => onChange("password", e.target.value)}
                className="h-12 rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-slate-500 focus-visible:border-blue-400/50 focus-visible:ring-2 focus-visible:ring-blue-500/20"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-base font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:from-blue-500 hover:to-violet-500"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign in to LedgerFlow"
            )}
          </Button>

          <p className="text-center text-xs leading-6 text-slate-400">
            By continuing, you agree to LedgerFlow’s{" "}
            <span className="text-slate-300">Terms of Service</span> and{" "}
            <span className="text-slate-300">Privacy Policy</span>.
          </p>
        </form>
      }
    />
  );
}
