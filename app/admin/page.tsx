"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Background } from "@/components/Background";
import { ASSETS } from "@/components/assets";

const MODULES = [
  {
    icon: "/icons/icone1.png",
    title: "Track Expenses",
    description: "Review spend, categories, and anomaly flags in real time.",
    route: "/admin/track-expenses",
  },
  {
    icon: "/icons/icone2.png",
    title: "Automate Payments",
    description: "Manage schedules, approvals, and autopay workflows.",
    route: "/admin/automate-payments",
  },
  {
    icon: "/icons/icone3.png",
    title: "Secure Wallets",
    description: "Audit access, policies, and security posture across wallets.",
    route: "/admin/secure-wallets",
  },
  {
    icon: "/icons/icone4.png",
    title: "Send Money",
    description: "Oversee transfers, limits, and beneficiary controls.",
    route: "/admin/send-money",
  },
];

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem("smartwallet_admin_session");
    if (session !== "active") {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050915] text-[#eaf2ff]">
      <Background />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050915]/55 to-[#03060f]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(66,163,255,0.14)_0%,transparent_32%),radial-gradient(circle_at_80%_16%,rgba(96,144,255,0.12)_0%,transparent_34%)]" />

      <header className="relative z-20 w-full border-b border-[#1b2c56]/50 bg-[#060d22]/85 backdrop-blur-[10px]">
        <div className="mx-auto flex h-[78px] w-full max-w-[1200px] items-center justify-between px-6 sm:px-8">
          <div className="flex items-center gap-3">
            <Image src={ASSETS.logo} alt="SmartWallet" width={30} height={30} />
            <span className="bg-[linear-gradient(90deg,#2ec5ff_0%,#2fa8ff_45%,#5bd3ff_100%)] bg-clip-text text-[22px] font-semibold leading-[22px] text-transparent sm:text-[24px]">
              SmartWallet
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-[15px] font-semibold text-[#dbe7ff] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56bdff]/70 focus-visible:rounded-full px-[6px]"
            >
              Home
            </Link>
            <Link
              href="/login"
              onClick={() => {
                localStorage.removeItem("smartwallet_admin_session");
                localStorage.removeItem("smartwallet_admin_email");
              }}
              className="inline-flex h-[40px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-[18px] text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(42,157,255,0.32)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7bc9ff]"
            >
              Logout
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-78px)] w-full max-w-[1200px] flex-col gap-10 px-6 py-12 sm:px-8 sm:py-14 lg:py-16">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <Image src={ASSETS.logo} alt="SmartWallet" width={32} height={32} />
            <div>
              <p className="text-[14px] font-semibold text-[#9fc3ff]">SmartWallet</p>
              <h1 className="text-[30px] font-bold leading-[34px] text-white sm:text-[34px] sm:leading-[40px]">
                Admin Dashboard
              </h1>
              <p className="text-[15px] text-[#b8c6e2]">Control your SmartWallet platform</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/12 px-4 py-2 text-[14px] font-semibold text-[#dbe7ff] transition hover:border-white/20 hover:bg-white/10">
              System Status
            </button>
            <button className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-5 py-2 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(42,157,255,0.3)] transition hover:brightness-110">
              New Action
            </button>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {MODULES.map((module) => (
            <Link
              key={module.title}
              href={module.route}
              className="group relative block overflow-hidden rounded-[18px] border border-white/10 bg-[#0a132a]/70 p-6 shadow-[0_14px_40px_rgba(8,18,40,0.55)] backdrop-blur-[12px] transition hover:border-white/18 hover:shadow-[0_18px_48px_rgba(18,68,140,0.6)]"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(82,164,255,0.14)_0%,rgba(10,19,42,0)_70%)]" />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-[14px] bg-[#0e1b3a]">
                  <Image
                    src={module.icon}
                    alt={module.title}
                    width={72}
                    height={72}
                    className="h-[46px] w-[46px] object-contain drop-shadow-[0_0_12px_rgba(109,206,255,0.55)]"
                  />
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-white">{module.title}</h3>
                  <p className="text-[14px] text-[#b8c6e2]">{module.description}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 text-[13px] text-[#8fb5ff]">
                <span className="inline-flex items-center gap-1 rounded-full border border-[#2b4c85] bg-[#0c1632]/80 px-3 py-[6px] transition group-hover:border-[#54b7ff] group-hover:text-white">
                  View module
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-[#2b4c85] bg-[#0c1632]/80 px-3 py-[6px]">
                  Permissions
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
