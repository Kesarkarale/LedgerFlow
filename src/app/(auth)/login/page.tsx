import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between bg-slate-900 p-12 text-white">
          <div>
            <div className="inline-flex rounded-full border border-white/20 px-4 py-1 text-sm text-white/80">
              LedgerFlow ERP
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-tight">
              Welcome back to your ERP workspace.
            </h1>

            <p className="mt-4 max-w-xl text-base text-slate-300">
              Sign in to manage companies, inventory, vouchers, billing and reports
              in a clean professional dashboard.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-slate-300">
              LedgerFlow is designed for business owners and accountants to manage
              accounting workflows faster with a modern UI.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-10">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
