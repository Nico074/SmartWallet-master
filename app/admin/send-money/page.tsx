"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Background } from "@/components/Background";
import { ASSETS } from "@/components/assets";

const STATS = [
  { label: "Transfers today", value: "124", hint: "$184,200", tone: "info" },
  { label: "Pending transfers", value: "9", hint: "$21,400", tone: "neutral" },
  { label: "Failed transfers", value: "1", hint: "$1,100", tone: "alert" },
  { label: "Beneficiaries", value: "54", hint: "+3 this week", tone: "positive" },
];

const TRANSFERS = [
  { to: "Nova Inc", amount: "$8,200", status: "Pending", time: "Today 09:10" },
  { to: "Payroll Batch", amount: "$96,000", status: "Success", time: "Today 07:45" },
  { to: "Cloud Ops", amount: "$3,400", status: "Success", time: "Yesterday" },
  { to: "Vendor X", amount: "$1,180", status: "Failed", time: "Yesterday" },
];

const BENEFICIARIES = [
  { name: "Acme Corp", type: "Vendor", limit: "$20,000" },
  { name: "Payroll", type: "Internal", limit: "$200,000" },
  { name: "Travel Wallet", type: "Internal", limit: "$50,000" },
  { name: "Marketing", type: "Vendor", limit: "$35,000" },
];

export default function SendMoneyPage() {
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem("smartwallet_admin_session");
    if (session !== "active") router.replace("/login");
  }, [router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050915] text-[#eaf2ff]">
      <Background />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050915]/60 to-[#03060f]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(178,125,255,0.16)_0%,transparent_32%),radial-gradient(circle_at_86%_18%,rgba(96,144,255,0.14)_0%,transparent_34%)]" />

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
              className="inline-flex h-[40px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#b67bff_0%,#ff6adf_100%)] px-[18px] text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(214,140,255,0.36)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d1a6ff]"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-78px)] w-full max-w-[1200px] flex-col gap-8 px-6 py-10 sm:px-8 sm:py-12">
        <section className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[12px] font-semibold uppercase tracking-[2px] text-[#d1a6ff]">
              Transfers
            </span>
            <h1 className="text-[32px] font-bold leading-[38px] text-white sm:text-[38px] sm:leading-[44px]">
              Send Money
            </h1>
          </div>
          <div className="text-[13px] text-[#d8c4ff]">
            <Link href="/admin" className="text-[#d1a6ff] hover:text-white">
              Admin
            </Link>
            <span className="px-2 text-[#7a6b50]">/</span>
            <span>Send Money</span>
          </div>
          <p className="max-w-3xl text-[16px] leading-[26px] text-[#b8c6e2]">
            Execute transfers, manage beneficiaries, and keep limits and statuses in check.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[16px] border border-white/10 bg-[#0b152d]/80 p-4 shadow-[0_14px_36px_rgba(10,26,68,0.5)] backdrop-blur-[10px] transition hover:border-white/18 hover:shadow-[0_18px_44px_rgba(18,68,140,0.55)]"
            >
              <p className="text-[13px] text-[#d8c4ff]">{stat.label}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[24px] font-semibold text-white">{stat.value}</span>
                <span
                  className={`text-[13px] font-semibold ${
                    stat.tone === "alert" ? "text-[#ffb5bd]" : "text-[#d1a6ff]"
                  }`}
                >
                  {stat.hint}
                </span>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-6 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[18px] font-semibold text-white">Send Transfer</h3>
                <p className="text-[14px] text-[#d8c4ff]">Quick action for priority transfers</p>
              </div>
              <button className="rounded-full border border-white/12 bg-[linear-gradient(90deg,#b67bff_0%,#ff6adf_100%)] px-4 py-[8px] text-[13px] font-semibold text-white transition hover:brightness-110">
                Review pending
              </button>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input
                className="h-[48px] rounded-[12px] border border-white/12 bg-[#0c1733]/80 px-4 text-[14px] text-white outline-none"
                placeholder="Recipient / Beneficiary"
              />
              <input
                className="h-[48px] rounded-[12px] border border-white/12 bg-[#0c1733]/80 px-4 text-[14px] text-white outline-none"
                placeholder="Amount (USD)"
              />
              <select className="h-[48px] rounded-[12px] border border-white/12 bg-[#0c1733]/80 px-3 text-[14px] text-white outline-none">
                <option>Transfer type</option>
                <option>Domestic</option>
                <option>International</option>
              </select>
              <select className="h-[48px] rounded-[12px] border border-white/12 bg-[#0c1733]/80 px-3 text-[14px] text-white outline-none">
                <option>Wallet</option>
                <option>Ops Wallet</option>
                <option>Product Wallet</option>
              </select>
              <textarea
                className="h-[100px] rounded-[12px] border border-white/12 bg-[#0c1733]/80 px-4 py-3 text-[14px] text-white outline-none sm:col-span-2"
                placeholder="Note or purpose"
              />
            </div>
            <div className="mt-4 flex gap-2">
              <button className="rounded-[12px] border border-white/12 bg-[linear-gradient(90deg,#b67bff_0%,#ff6adf_100%)] px-4 py-3 text-[14px] font-semibold text-white transition hover:brightness-110">
                Send transfer
              </button>
              <button className="rounded-[12px] border border-white/12 bg-white/5 px-4 py-3 text-[14px] font-semibold text-[#d1a6ff] transition hover:border-[#d1a6ff] hover:text-white">
                Save draft
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-5 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
              <h4 className="text-[16px] font-semibold text-white">Recent Transfers</h4>
              <div className="mt-3 space-y-3 text-[14px] text-[#dbe7ff]">
                {TRANSFERS.map((t) => (
                  <div key={t.to} className="flex items-center justify-between rounded-[12px] border border-white/8 bg-white/5 px-3 py-2">
                    <div>
                      <p className="text-white">{t.to}</p>
                      <p className="text-[12px] text-[#9fb3d6]">{t.time}</p>
                    </div>
                    <p className="text-white">{t.amount}</p>
                    <span
                      className="rounded-full border px-3 py-[6px] text-[12px]"
                      style={{
                        borderColor:
                          t.status === "Failed"
                            ? "rgba(255,154,162,0.6)"
                            : t.status === "Pending"
                            ? "rgba(255,179,71,0.6)"
                            : "rgba(117,227,176,0.6)",
                        color:
                          t.status === "Failed"
                            ? "#ffb5bd"
                            : t.status === "Pending"
                            ? "#ffc989"
                            : "#9fe8c6",
                      }}
                    >
                      {t.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-5 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
              <h4 className="text-[16px] font-semibold text-white">Beneficiaries</h4>
              <div className="mt-3 space-y-3 text-[14px] text-[#dbe7ff]">
                {BENEFICIARIES.map((b) => (
                  <div key={b.name} className="flex items-center justify-between rounded-[12px] border border-white/8 bg-white/5 px-3 py-2">
                    <div>
                      <p className="text-white">{b.name}</p>
                      <p className="text-[12px] text-[#d8c4ff]">{b.type}</p>
                    </div>
                    <p className="text-[12px] text-[#9fb3d6]">Limit {b.limit}</p>
                    <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] text-[12px] text-[#d1a6ff] transition hover:border-[#d1a6ff] hover:text-white">
                      Manage
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full rounded-[12px] border border-white/12 bg-white/5 px-3 py-2 text-[13px] font-semibold text-[#d1a6ff] transition hover:border-[#d1a6ff] hover:text-white">
                Add beneficiary
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
