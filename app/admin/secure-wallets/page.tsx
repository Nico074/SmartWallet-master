"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Background } from "@/components/Background";
import { ASSETS } from "@/components/assets";

const STATS = [
  { label: "Protected wallets", value: "18", hint: "All synced", tone: "positive" },
  { label: "High-risk alerts", value: "4", hint: "2 critical", tone: "alert" },
  { label: "Active sessions", value: "27", hint: "Live monitoring", tone: "info" },
  { label: "Policy compliance", value: "96%", hint: "+2% this week", tone: "positive" },
];

const ALERTS = [
  { title: "MFA disabled on Ops wallet", severity: "High", action: "Review" },
  { title: "New device access: SF-API-12", severity: "Medium", action: "Validate" },
  { title: "Unusual IP cluster detected", severity: "High", action: "Investigate" },
];

const ACCESS = [
  { name: "Finance Admins", level: "Full", members: 6 },
  { name: "Ops Team", level: "Approve transfers", members: 9 },
  { name: "Support", level: "View only", members: 12 },
];

const SESSIONS = [
  { device: "MacOS · Chrome", location: "SF, USA", status: "Active", time: "5m ago" },
  { device: "iOS · App", location: "NY, USA", status: "Active", time: "12m ago" },
  { device: "Windows · Edge", location: "Remote", status: "Idle", time: "34m ago" },
];

export default function SecureWalletsPage() {
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem("smartwallet_admin_session");
    if (session !== "active") router.replace("/login");
  }, [router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050915] text-[#eaf2ff]">
      <Background />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050915]/60 to-[#03060f]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(0,197,255,0.14)_0%,transparent_32%),radial-gradient(circle_at_86%_18%,rgba(96,144,255,0.14)_0%,transparent_34%)]" />

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
              className="inline-flex h-[40px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#27d1ff_0%,#5bb9ff_100%)] px-[18px] text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(62,201,255,0.32)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7be2ff]"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-78px)] w-full max-w-[1200px] flex-col gap-8 px-6 py-10 sm:px-8 sm:py-12">
        <section className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[12px] font-semibold uppercase tracking-[2px] text-[#6fdcff]">
              Security
            </span>
            <h1 className="text-[32px] font-bold leading-[38px] text-white sm:text-[38px] sm:leading-[44px]">
              Secure Wallets
            </h1>
          </div>
          <div className="text-[13px] text-[#9fe3ff]">
            <Link href="/admin" className="text-[#6fdcff] hover:text-white">
              Admin
            </Link>
            <span className="px-2 text-[#5f6b86]">/</span>
            <span>Secure Wallets</span>
          </div>
          <p className="max-w-3xl text-[16px] leading-[26px] text-[#b8c6e2]">
            Audit access, enforce policy, and resolve alerts across every SmartWallet.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[16px] border border-white/10 bg-[#0b152d]/80 p-4 shadow-[0_14px_36px_rgba(10,26,68,0.5)] backdrop-blur-[10px] transition hover:border-white/18 hover:shadow-[0_18px_44px_rgba(18,68,140,0.55)]"
            >
              <p className="text-[13px] text-[#9fe3ff]">{stat.label}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[24px] font-semibold text-white">{stat.value}</span>
                <span
                  className={`text-[13px] font-semibold ${
                    stat.tone === "alert" ? "text-[#ffb5bd]" : "text-[#6fdcff]"
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
                <h3 className="text-[18px] font-semibold text-white">Alerts</h3>
                <p className="text-[14px] text-[#9fe3ff]">Resolve before impact</p>
              </div>
              <button className="rounded-full border border-white/12 bg-white/5 px-4 py-[8px] text-[13px] font-semibold text-[#6fdcff] transition hover:border-[#6fdcff] hover:text-white">
                Review alerts
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {ALERTS.map((alert) => (
                <div
                  key={alert.title}
                  className="flex items-center justify-between rounded-[12px] border border-white/8 bg-white/5 px-4 py-3 text-[14px] text-[#dbe7ff] transition hover:border-white/16"
                >
                  <div>
                    <p className="font-semibold text-white">{alert.title}</p>
                    <p className="text-[12px] text-[#9fe3ff]">{alert.severity} priority</p>
                  </div>
                  <button className="rounded-full border border-white/12 bg-white/5 px-3 py-[6px] text-[12px] text-[#6fdcff] transition hover:border-[#6fdcff] hover:text-white">
                    {alert.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-5 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
              <h4 className="text-[16px] font-semibold text-white">Access Controls</h4>
              <div className="mt-3 space-y-3">
                {ACCESS.map((group) => (
                  <div key={group.name} className="flex items-center justify-between rounded-[12px] border border-white/8 bg-white/5 px-3 py-2">
                    <div>
                      <p className="text-white">{group.name}</p>
                      <p className="text-[12px] text-[#9fe3ff]">{group.level}</p>
                    </div>
                    <span className="text-[12px] text-[#dbe7ff]">{group.members} members</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-[12px] border border-white/12 bg-white/5 px-3 py-2 text-[13px] font-semibold text-[#6fdcff] transition hover:border-[#6fdcff] hover:text-white">
                  Update policy
                </button>
                <button className="flex-1 rounded-[12px] border border-white/12 bg-white/5 px-3 py-2 text-[13px] font-semibold text-[#ffb5bd] transition hover:border-[#ff9aa2] hover:text-white">
                  Revoke access
                </button>
              </div>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#0a1227]/75 p-5 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
              <h4 className="text-[16px] font-semibold text-white">Active Sessions</h4>
              <div className="mt-3 space-y-3 text-[14px] text-[#dbe7ff]">
                {SESSIONS.map((session) => (
                  <div key={session.device} className="flex items-center justify-between rounded-[12px] border border-white/8 bg-white/5 px-3 py-2">
                    <div>
                      <p className="text-white">{session.device}</p>
                      <p className="text-[12px] text-[#9fe3ff]">{session.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[12px] text-[#6fdcff]">{session.status}</p>
                      <p className="text-[12px] text-[#9fb3d6]">{session.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full rounded-[12px] border border-white/12 bg-white/5 px-3 py-2 text-[13px] font-semibold text-[#6fdcff] transition hover:border-[#6fdcff] hover:text-white">
                Terminate selected
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
