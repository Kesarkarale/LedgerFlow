"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
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

      console.log("SIGNIN RES:", res);

      if (!res) {
        toast.error("No response from server");
        return;
      }

      if (res.error) {
        toast.error("Invalid email or password");
        return;
      }

      if (res.ok) {
        toast.success("Login successful");

        // hard redirect
        window.location.href = "/dashboard";
        return;
      }

      toast.error("Login failed");
    } catch (error) {
      console.error("LOGIN ERROR:", error);
      toast.error("Something went wrong while logging in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold tracking-tight text-white">
          Welcome back to LedgerFlow
        </CardTitle>
        <CardDescription className="text-slate-300">
          Sign in to continue managing your ERP workspace.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-200">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => onChange("email", e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-slate-200">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => onChange("password", e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-slate-400"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </Button>

          <p className="text-sm text-slate-300">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-medium text-white underline">
              Create one
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
