"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Background } from "@/components/Background";
import { ASSETS } from "@/components/assets";

const STATS = [
  { label: "Total Spent (QTD)", value: "$128,400", change: "+6.2%", tone: "positive" },
  { label: "Monthly Spend", value: "$32,150", change: "+2.1%", tone: "neutral" },
  { label: "Recurring Spend", value: "$18,940", change: "42 rules", tone: "info" },
  { label: "Flagged Anomalies", value: "7", change: "3 awaiting review", tone: "alert" },
];

const CATEGORIES = [
  { name: "Cloud & Infra", amount: "$42,800", pct: 33, color: "#5bc8ff" },
  { name: "Vendors", amount: "$31,400", pct: 24, color: "#8c7bff" },
  { name: "Payroll", amount: "$27,600", pct: 21, color: "#5fe3c0" },
  { name: "Travel", amount: "$16,100", pct: 12, color: "#ffb347" },
  { name: "Other", amount: "$10,500", pct: 10, color: "#9fb3ff" },
];

const TRANSACTIONS = [
  { merchant: "Stripe", amount: "-$2,450", category: "Payments", status: "Cleared", time: "Today, 10:24" },
  { merchant: "AWS", amount: "-$6,120", category: "Cloud", status: "Pending", time: "Today, 09:02" },
  { merchant: "Notion", amount: "-$320", category: "SaaS", status: "Cleared", time: "Yesterday" },
  { merchant: "Delta", amount: "-$1,180", category: "Travel", status: "Flagged", time: "Yesterday" },
  { merchant: "VendorPay", amount: "-$8,400", category: "Vendors", status: "Under Review", time: "Mon" },
];

const ANOMALIES = [
  { title: "Unusual cloud spike", desc: "AWS us-east-1 spend +42% vs avg", severity: "High" },
  { title: "Travel above policy", desc: "Flight booked over $1,000 threshold", severity: "Medium" },
];

export default function TrackExpensesPage() {
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem("smartwallet_admin_session");
    if (session !== "active") router.replace("/login");
  }, [router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050915] text-[#eaf2ff]">
      <Background />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050915]/60 to-[#03060f]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(66,163,255,0.16)_0%,transparent_32%),radial-gradient(circle_at_86%_18%,rgba(96,144,255,0.14)_0%,transparent_34%)]" />

      <header className="relative z-20 w-full border-b border-[#1b2c56]/50 bg-[#060d22]/85 backdrop-blur-[10px]">
        <div className="mx-auto flex h-[78px] w-full max-w-[1200px] items-center justify-between px-6 sm:px-8">
          <div className="flex items-center gap-3">
            <Image src={ASSETS.logo} alt="SmartWallet" width={30} height={30} />
            <span className="bg-[linear-gradient(90deg,#2ec5ff_0%,#2fa8ff_45%,#5bd3ff_100%)] bg-clip-text text-[22px] font-semibold leading-[22px] text-transparent sm:text-[24px]">
              SmartWallet
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin"
              className="text-[15px] font-semibold text-[#dbe7ff] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56bdff]/70 focus-visible:rounded-full px-[6px]"
            >
              Dashboard
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("smartwallet_admin_session");
                localStorage.removeItem("smartwallet_admin_email");
                router.push("/login");
              }}
              className="inline-flex h-[40px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-[18px] text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(42,157,255,0.32)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7bc9ff]"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-78px)] w-full max-w-[1200px] flex-col gap-8 px-6 py-10 sm:px-8 sm:py-12">
        <section className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[12px] font-semibold uppercase tracking-[2px] text-[#9fc3ff]">
              Expenses
            </span>
            <h1 className="text-[32px] font-bold leading-[38px] text-white sm:text-[38px] sm:leading-[44px]">
              Track Expenses
            </h1>
          </div>
          <div className="text-[13px] text-[#9fb3d6]">
            <Link href="/admin" className="text-[#7bc8ff] hover:text-white">
              Admin
            </Link>
            <span className="px-2 text-[#5f6b86]">/</span>
            <span>Track Expenses</span>
          </div>
          <p className="max-w-3xl text-[16px] leading-[26px] text-[#b8c6e2]">
            Monitor spend across wallets, catch anomalies early, and keep categories clean with live filters and exports.
          </p>
          <div className="flex flex-wrap gap-3 text-[13px] text-[#9fc3ff]">
            <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] transition hover:border-[#5bc8ff] hover:text-white">
              Last 30 days
            </button>
            <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] transition hover:border-[#5bc8ff] hover:text-white">
              Wallet: All
            </button>
            <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] transition hover:border-[#5bc8ff] hover:text-white">
              Categories
            </button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[16px] border border-white/10 bg-[#0b152d]/80 p-4 shadow-[0_14px_36px_rgba(10,26,68,0.5)] backdrop-blur-[10px] transition hover:border-white/18 hover:shadow-[0_18px_44px_rgba(18,68,140,0.55)]"
            >
              <p className="text-[13px] text-[#9fb3d6]">{stat.label}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[24px] font-semibold text-white">{stat.value}</span>
                <span
                  className={`text-[13px] font-semibold ${
                    stat.tone === "alert"
                      ? "text-[#ff9aa2]"
                      : stat.tone === "positive"
                      ? "text-[#7ee0a3]"
                      : "text-[#8fb5ff]"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-6 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[18px] font-semibold text-white">Category Breakdown</h3>
                <p className="text-[14px] text-[#9fb3d6]">Top categories by spend this month</p>
              </div>
              <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] text-[13px] text-[#9fc3ff] transition hover:border-[#5bc8ff] hover:text-white">
                Export CSV
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {CATEGORIES.map((cat) => (
                <div key={cat.name} className="space-y-1">
                  <div className="flex items-center justify-between text-[14px] text-[#dbe7ff]">
                    <span>{cat.name}</span>
                    <span className="text-[#9fb3d6]">{cat.amount}</span>
                  </div>
                  <div className="h-[10px] w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${cat.pct}%`, background: cat.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-6 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
            <h3 className="text-[18px] font-semibold text-white">Anomalies</h3>
            <p className="text-[14px] text-[#9fb3d6]">High-risk signals awaiting review</p>
            <div className="mt-4 space-y-4">
              {ANOMALIES.map((anomaly) => (
                <div
                  key={anomaly.title}
                  className="rounded-[14px] border border-[#ff9aa2]/30 bg-[#1a0f18]/50 p-4 shadow-[0_12px_30px_rgba(255,154,162,0.18)]"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[15px] font-semibold text-white">{anomaly.title}</p>
                    <span className="rounded-full border border-[#ff9aa2]/50 px-3 py-[4px] text-[12px] font-semibold text-[#ffb5bd]">
                      {anomaly.severity}
                    </span>
                  </div>
                  <p className="mt-1 text-[13px] text-[#e4dbe0]">{anomaly.desc}</p>
                  <div className="mt-3 flex gap-2">
                    <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] text-[12px] text-[#9fc3ff] transition hover:border-[#5bc8ff] hover:text-white">
                      Review
                    </button>
                    <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] text-[12px] text-[#9fc3ff] transition hover:border-[#5bc8ff] hover:text-white">
                      Snooze
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-6 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[18px] font-semibold text-white">Recent Transactions</h3>
                <p className="text-[14px] text-[#9fb3d6]">Live feed with status and categories</p>
              </div>
              <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] text-[13px] text-[#9fc3ff] transition hover:border-[#5bc8ff] hover:text-white">
                Filter
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {TRANSACTIONS.map((tx) => (
                <div
                  key={tx.merchant + tx.time}
                  className="flex items-center justify-between rounded-[12px] border border-white/8 bg-white/5 px-4 py-3 text-[14px] text-[#dbe7ff] transition hover:border-white/16"
                >
                  <div>
                    <p className="font-semibold text-white">{tx.merchant}</p>
                    <p className="text-[12px] text-[#9fb3d6]">{tx.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">{tx.amount}</p>
                    <p className="text-[12px] text-[#9fb3d6]">{tx.time}</p>
                  </div>
                  <span
                    className="rounded-full border px-3 py-[6px] text-[12px]"
                    style={{
                      borderColor:
                        tx.status === "Flagged"
                          ? "rgba(255,154,162,0.6)"
                          : tx.status === "Pending"
                          ? "rgba(255,179,71,0.6)"
                          : "rgba(117,227,176,0.6)",
                      color:
                        tx.status === "Flagged"
                          ? "#ffb5bd"
                          : tx.status === "Pending"
                          ? "#ffc989"
                          : "#9fe8c6",
                    }}
                  >
                    {tx.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-5 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
              <h4 className="text-[16px] font-semibold text-white">Filters</h4>
              <div className="mt-3 grid gap-3">
                <select className="h-[42px] rounded-[12px] border border-white/12 bg-[#0c1733]/80 px-3 text-[14px] text-white outline-none">
                  <option>Last 30 days</option>
                  <option>This quarter</option>
                  <option>Year to date</option>
                </select>
                <select className="h-[42px] rounded-[12px] border border-white/12 bg-[#0c1733]/80 px-3 text-[14px] text-white outline-none">
                  <option>All categories</option>
                  <option>Cloud</option>
                  <option>Travel</option>
                  <option>Vendors</option>
                </select>
                <select className="h-[42px] rounded-[12px] border border-white/12 bg-[#0c1733]/80 px-3 text-[14px] text-white outline-none">
                  <option>All wallets</option>
                  <option>Ops Wallet</option>
                  <option>Product Wallet</option>
                </select>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-[12px] border border-white/12 bg-white/5 px-3 py-2 text-[14px] text-[#9fc3ff] transition hover:border-[#5bc8ff] hover:text-white">
                    Apply
                  </button>
                  <button className="flex-1 rounded-[12px] border border-white/12 bg-white/5 px-3 py-2 text-[14px] text-[#9fc3ff] transition hover:border-[#5bc8ff] hover:text-white">
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-5 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
              <h4 className="text-[16px] font-semibold text-white">Quick Actions</h4>
              <div className="mt-3 grid gap-3">
                <button className="rounded-[12px] border border-white/12 bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-3 py-3 text-[14px] font-semibold text-white transition hover:brightness-110">
                  Add expense
                </button>
                <button className="rounded-[12px] border border-white/12 bg-white/5 px-3 py-3 text-[14px] font-semibold text-[#9fc3ff] transition hover:border-[#5bc8ff] hover:text-white">
                  Export report
                </button>
                <button className="rounded-[12px] border border-white/12 bg-white/5 px-3 py-3 text-[14px] font-semibold text-[#ffb5bd] transition hover:border-[#ff9aa2] hover:text-white">
                  Review anomalies
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
