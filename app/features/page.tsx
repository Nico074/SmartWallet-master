"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Background } from "@/components/Background";
import { ASSETS } from "@/components/assets";

const MODULES = [
  {
    title: "Track Expenses",
    summary: "Categorize spending, monitor wallet activity, and detect unusual patterns with live alerts.",
    bullets: [
      "Auto-categorize daily spend with trends over time",
      "Flag abnormal charges before they snowball",
      "See recurring subscriptions across wallets",
    ],
    useCases: [
      "Spot a 42% spike in cloud costs this week and alert ops instantly",
      "See food/transport spend month over month and trim waste",
      "Surface a duplicate SaaS subscription before renewal hits",
    ],
    example: "Finance gets a ping about a sudden vendor spike and pauses spend while investigating.",
    cta: "/admin/track-expenses",
  },
  {
    title: "Automate Payments",
    summary: "Create recurring payments, schedules, and approval workflows that run themselves.",
    bullets: [
      "Set monthly rent, vendor, and payroll cycles",
      "Route approvals before funds leave the wallet",
      "Pause or edit workflows without breaking audit trails",
    ],
    useCases: [
      "Run payroll on the 1st, auto-retry failures, and notify approvers",
      "Schedule vendor payouts weekly with built-in approvals",
      "Auto-hold large invoices until a manager okays them",
    ],
    example: "A weekly vendor batch runs automatically, holds one item for approval, and retries the rest if banks throttle.",
    cta: "/admin/automate-payments",
  },
  {
    title: "Secure Wallets",
    summary: "Audit access, catch risky sessions, and keep wallets compliant with policy.",
    bullets: [
      "Session/device visibility with anomaly alerts",
      "Policy checks and MFA enforcement",
      "Access controls for teams, vendors, and API keys",
    ],
    useCases: [
      "Get alerted on a new device login and revoke in seconds",
      "Review risky sessions and enforce MFA where missing",
      "Run policy checks weekly and export compliance snapshots",
    ],
    example: "A suspicious API token is flagged, policy scan forces rotation, and sessions from that IP are killed automatically.",
    cta: "/admin/secure-wallets",
  },
  {
    title: "Send Money",
    summary: "Transfer funds confidently with limits, statuses, and beneficiary controls.",
    bullets: [
      "Track pending, failed, and completed transfers",
      "Manage trusted beneficiaries and limits",
      "Keep approvals in-flow for sensitive transfers",
    ],
    useCases: [
      "Send to a contractor and monitor status with instant receipt",
      "Keep a trusted beneficiary list with per-recipient limits",
      "Review pending international wires before they leave",
    ],
    example: "A contractor payment is queued, checks limits, and routes for approval before release.",
    cta: "/admin/send-money",
  },
];

export default function FeaturesPage() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const session = typeof window !== "undefined" ? localStorage.getItem("smartwallet_admin_session") : null;
    setIsAdmin(session === "active");
    const handleStorage = () => {
      const next = localStorage.getItem("smartwallet_admin_session");
      setIsAdmin(next === "active");
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050915] text-[#eaf2ff]">
      <Background />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050915]/65 to-[#03060f]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(66,163,255,0.14)_0%,transparent_32%),radial-gradient(circle_at_84%_18%,rgba(96,144,255,0.12)_0%,transparent_34%)]" />

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
              href="/"
              className="text-[15px] font-semibold text-[#dbe7ff] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56bdff]/70 focus-visible:rounded-full px-[6px]"
            >
              Home
            </Link>
            {isAdmin ? (
              <Link
                href="/admin"
                className="inline-flex h-[40px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-[18px] text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(42,157,255,0.32)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7bc9ff]"
              >
                Admin Dashboard
              </Link>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/login"
                  className="text-[15px] font-semibold text-[#dbe7ff] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56bdff]/70 focus-visible:rounded-full px-[6px]"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex h-[40px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-[18px] text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(42,157,255,0.32)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7bc9ff]"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-10 sm:px-8 sm:py-14">
        <section className="rounded-[20px] border border-white/12 bg-[#0a1227]/80 p-8 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-3xl space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[12px] font-semibold uppercase tracking-[2px] text-[#9fc3ff]">
                Product modules
              </span>
              <h1 className="text-[32px] font-bold leading-[38px] text-white sm:text-[40px] sm:leading-[46px]">
                Everything your wallet needs, in one smart system
              </h1>
              <p className="text-[16px] leading-[26px] text-[#b8c6e2]">
                SmartWallet combines tracking, automation, security, and transfers into a cohesive platform. See what each module does with real examples and benefits.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {isAdmin ? (
                <Link
                  href="/admin"
                  className="inline-flex h-[48px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-[20px] text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(42,157,255,0.35)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7bc9ff]"
                >
                  Go to Admin
                </Link>
              ) : (
                <>
                  <Link
                    href="/signup"
                    className="inline-flex h-[48px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-[20px] text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(42,157,255,0.35)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7bc9ff]"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex h-[48px] items-center justify-center rounded-full border border-[#d5e8ff] px-[18px] text-[16px] font-semibold text-[#f4f8ff] transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cde4ff]"
                  >
                    Log In
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Unified control",
              body: "Track, automate, secure, and send from one workspace—no context switching.",
            },
            {
              title: "Signal over noise",
              body: "Live alerts, clean breakdowns, and ready-to-export reports keep teams aligned.",
            },
            {
              title: "Policy-first moves",
              body: "Approvals, limits, and compliance checks stay baked in, not bolted on.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[16px] border border-white/10 bg-[#0b152d]/70 p-5 shadow-[0_14px_36px_rgba(10,26,68,0.48)] backdrop-blur-[10px] transition hover:border-white/16 hover:shadow-[0_18px_44px_rgba(18,68,140,0.5)]"
            >
              <p className="text-[14px] uppercase tracking-[2px] text-[#9fc3ff]">{item.title}</p>
              <p className="mt-2 text-[15px] leading-[24px] text-[#cfe0ff]">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8">
          {MODULES.map((module, idx) => (
            <div
              key={module.title}
              className="rounded-[20px] border border-white/12 bg-[#0b152d]/75 p-6 shadow-[0_18px_46px_rgba(10,26,68,0.55)] backdrop-blur-[12px] transition hover:border-white/18 hover:shadow-[0_20px_52px_rgba(18,68,140,0.58)]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[12px] font-semibold uppercase tracking-[2px] text-[#9fc3ff]">
                    Module {idx + 1}
                  </div>
                  <h2 className="text-[24px] font-semibold text-white sm:text-[26px]">{module.title}</h2>
                  <p className="text-[15px] leading-[24px] text-[#b8c6e2]">{module.summary}</p>
                </div>
                <Link
                  href={module.cta}
                  className="inline-flex h-[42px] items-center justify-center rounded-full border border-[#2b4c85] bg-[#0c1632]/80 px-[16px] text-[14px] font-semibold text-[#9fc3ff] transition hover:border-[#54b7ff] hover:text-white"
                >
                  See it in action
                </Link>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-3 rounded-[16px] border border-white/10 bg-white/5 p-4 text-[14px] text-[#dbe7ff]">
                  <p className="text-[15px] font-semibold text-white">What you get</p>
                  <ul className="space-y-2">
                    {module.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-[#7bc8ff]">•</span>
                        <span className="text-[#cfe0ff]">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[16px] border border-white/10 bg-[#0c1733]/70 p-4 shadow-[0_12px_32px_rgba(10,26,68,0.5)]">
                  <p className="text-[13px] uppercase tracking-[1.5px] text-[#9fc3ff]">Use cases</p>
                  <ul className="mt-2 space-y-2">
                    {module.useCases.map((u) => (
                      <li key={u} className="flex gap-2 text-[14px] leading-[22px] text-[#dbe7ff]">
                        <span className="text-[#7bc8ff]">•</span>
                        <span>{u}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 rounded-[12px] border border-white/10 bg-white/5 px-3 py-3 text-[13px] text-[#cfe0ff]">
                    {module.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-[20px] border border-white/12 bg-[linear-gradient(120deg,rgba(85,100,255,0.25)_0%,rgba(47,168,255,0.18)_48%,rgba(7,11,26,0.6)_100%)] p-8 shadow-[0_22px_54px_rgba(10,26,68,0.55)] backdrop-blur-[14px]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-[13px] uppercase tracking-[2px] text-[#dbe7ff]">Ready when you are</p>
              <h3 className="text-[26px] font-semibold text-white sm:text-[30px]">Try the full SmartWallet suite</h3>
              <p className="text-[15px] leading-[24px] text-[#cfe0ff]">
                Join with your team, keep controls tight, and ship faster payments without losing oversight.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {isAdmin ? (
                <Link
                  href="/admin"
                  className="inline-flex h-[48px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-[20px] text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(42,157,255,0.35)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7bc9ff]"
                >
                  Go to Admin
                </Link>
              ) : (
                <>
                  <Link
                    href="/signup"
                    className="inline-flex h-[48px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-[20px] text-[16px] font-semibold text-white shadow-[0_12px_28px_rgba(42,157,255,0.35)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7bc9ff]"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex h-[48px] items-center justify-center rounded-full border border-[#d5e8ff] px-[18px] text-[16px] font-semibold text-[#f4f8ff] transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cde4ff]"
                  >
                    Log In
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
