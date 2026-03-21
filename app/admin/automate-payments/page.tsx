"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Background } from "@/components/Background";
import { ASSETS } from "@/components/assets";

const STATS = [
  { label: "Active automations", value: "38", hint: "+3 this week", tone: "info" },
  { label: "Pending approvals", value: "6", hint: "Requires review", tone: "alert" },
  { label: "Failed payments", value: "2", hint: "Last 24h", tone: "alert" },
  { label: "Upcoming payments", value: "24", hint: "Next 7 days", tone: "neutral" },
];

const FLOWS = [
  { name: "Payroll cycle", schedule: "Monthly · 1st", status: "Running", amount: "$215,000" },
  { name: "Vendors weekly", schedule: "Weekly · Mon", status: "Running", amount: "$48,200" },
  { name: "Cloud credits", schedule: "Daily · 7:00", status: "Paused", amount: "$6,000" },
  { name: "Marketing boosts", schedule: "Weekly · Fri", status: "Pending approval", amount: "$12,400" },
];

const TIMELINE = [
  { time: "09:20", title: "Vendor batch processed", status: "Success" },
  { time: "08:05", title: "Cloud credits paused", status: "Paused" },
  { time: "Yesterday", title: "Payroll cycle executed", status: "Success" },
];

export default function AutomatePaymentsPage() {
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem("smartwallet_admin_session");
    if (session !== "active") router.replace("/login");
  }, [router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050915] text-[#eaf2ff]">
      <Background />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050915]/60 to-[#03060f]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,179,71,0.16)_0%,transparent_32%),radial-gradient(circle_at_86%_18%,rgba(96,144,255,0.14)_0%,transparent_34%)]" />

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
              className="inline-flex h-[40px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#ffa74f_0%,#ff7e3f_100%)] px-[18px] text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(255,142,79,0.36)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffc177]"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-78px)] w-full max-w-[1200px] flex-col gap-8 px-6 py-10 sm:px-8 sm:py-12">
        <section className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[12px] font-semibold uppercase tracking-[2px] text-[#ffc177]">
              Automations
            </span>
            <h1 className="text-[32px] font-bold leading-[38px] text-white sm:text-[38px] sm:leading-[44px]">
              Automate Payments
            </h1>
          </div>
          <div className="text-[13px] text-[#f2d9b3]">
            <Link href="/admin" className="text-[#ffc177] hover:text-white">
              Admin
            </Link>
            <span className="px-2 text-[#7a6b50]">/</span>
            <span>Automate Payments</span>
          </div>
          <p className="max-w-3xl text-[16px] leading-[26px] text-[#b8c6e2]">
            Orchestrate recurring payments, approvals, and workflows with clear controls and live visibility.
          </p>
          <div className="flex flex-wrap gap-3 text-[13px] text-[#ffc177]">
            <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] transition hover:border-[#ffc177] hover:text-white">
              All workflows
            </button>
            <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] transition hover:border-[#ffc177] hover:text-white">
              Needs approval
            </button>
            <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] transition hover:border-[#ffc177] hover:text-white">
              Paused
            </button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[16px] border border-white/10 bg-[#0b152d]/80 p-4 shadow-[0_14px_36px_rgba(10,26,68,0.5)] backdrop-blur-[10px] transition hover:border-white/18 hover:shadow-[0_18px_44px_rgba(18,68,140,0.55)]"
            >
              <p className="text-[13px] text-[#f2d9b3]">{stat.label}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[24px] font-semibold text-white">{stat.value}</span>
                <span className="text-[13px] font-semibold text-[#ffc177]">{stat.hint}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-6 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[18px] font-semibold text-white">Payment Workflows</h3>
                <p className="text-[14px] text-[#f2d9b3]">Control active schedules and approvals</p>
              </div>
              <button className="rounded-full border border-white/12 bg-[linear-gradient(90deg,#ffa74f_0%,#ff7e3f_100%)] px-4 py-[8px] text-[13px] font-semibold text-white transition hover:brightness-110">
                New automation
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {FLOWS.map((flow) => (
                <div
                  key={flow.name}
                  className="flex items-center justify-between rounded-[12px] border border-white/8 bg-white/5 px-4 py-3 text-[14px] text-[#dbe7ff] transition hover:border-white/16"
                >
                  <div>
                    <p className="font-semibold text-white">{flow.name}</p>
                    <p className="text-[12px] text-[#f2d9b3]">{flow.schedule}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">{flow.amount}</p>
                    <p className="text-[12px] text-[#9fb3d6]">{flow.status}</p>
                  </div>
                  <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] text-[12px] text-[#ffc177] transition hover:border-[#ffc177] hover:text-white">
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-5 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
              <h4 className="text-[16px] font-semibold text-white">Upcoming Schedule</h4>
              <div className="mt-3 space-y-3 text-[14px] text-[#f2d9b3]">
                {TIMELINE.map((item) => (
                  <div key={item.time} className="flex items-center justify-between rounded-[10px] border border-white/8 bg-white/5 px-3 py-2">
                    <span className="text-[12px] text-[#ffc177]">{item.time}</span>
                    <span className="text-white">{item.title}</span>
                    <span className="text-[12px] text-[#9fe8c6]">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-5 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
              <h4 className="text-[16px] font-semibold text-white">Controls</h4>
              <div className="mt-3 grid gap-3">
                <button className="rounded-[12px] border border-white/12 bg-white/5 px-3 py-3 text-[14px] font-semibold text-[#ffc177] transition hover:border-[#ffc177] hover:text-white">
                  Pause all
                </button>
                <button className="rounded-[12px] border border-white/12 bg-white/5 px-3 py-3 text-[14px] font-semibold text-[#ffc177] transition hover:border-[#ffc177] hover:text-white">
                  Approve pending
                </button>
                <button className="rounded-[12px] border border-white/12 bg-white/5 px-3 py-3 text-[14px] font-semibold text-[#ffc177] transition hover:border-[#ffc177] hover:text-white">
                  View audit log
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
