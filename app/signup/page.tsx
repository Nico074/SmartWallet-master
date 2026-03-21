import Link from "next/link";
import Image from "next/image";
import { Background } from "@/components/Background";
import { ASSETS } from "@/components/assets";

export default function SignupPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050915] text-[#eaf2ff]">
      <Background />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#050915]/65 to-[#03060f] mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(66,163,255,0.16)_0%,transparent_32%),radial-gradient(circle_at_82%_18%,rgba(96,144,255,0.14)_0%,transparent_34%)]" />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1100px] items-center px-5 py-10 sm:px-8 sm:py-14 lg:py-16">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-5 text-center lg:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10"
            >
              <Image src={ASSETS.logo} alt="SmartWallet" width={20} height={20} />
              <span className="text-[13px] font-semibold tracking-tight text-[#cfe7ff]">
                Home
              </span>
            </Link>
            <h1 className="text-[32px] font-bold leading-[38px] tracking-[-0.5px] text-white sm:text-[38px] sm:leading-[46px] lg:text-[44px] lg:leading-[52px]">
              Join the fastest way to orchestrate your finances.
            </h1>
            <p className="text-[16px] leading-[26px] text-[#b8c6e2] sm:text-[17px] sm:leading-[27px]">
              Create your SmartWallet account to automate payments, track spending, and move money
              with confidence.
            </p>
            <div className="flex flex-wrap gap-3 text-[14px] text-[#8fb5ff]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2b4c85] bg-[#0c1632]/80 px-3 py-1">
                AI-powered controls
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#2b4c85] bg-[#0c1632]/80 px-3 py-1">
                Multi-wallet security
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[28px] bg-[radial-gradient(circle,rgba(80,150,255,0.18)_0%,rgba(11,22,53,0)_60%)] blur-2xl" />
            <div className="relative rounded-[20px] border border-white/12 bg-[#0a1227]/80 shadow-[0_18px_60px_rgba(10,26,68,0.55)] backdrop-blur-[12px]">
              <div className="flex items-center gap-3 border-b border-white/8 px-6 py-5">
                <Image src={ASSETS.logo} alt="SmartWallet" width={32} height={32} />
                <div>
                  <p className="text-[15px] font-semibold text-white">SmartWallet</p>
                  <p className="text-[17px] font-semibold text-white">Create Account</p>
                </div>
              </div>

              <form className="space-y-4 px-6 py-6 sm:space-y-5 sm:px-7 sm:py-7">
                <div className="space-y-2">
                  <label className="text-[14px] font-semibold text-[#dbe7ff]">Full name</label>
                  <input
                    type="text"
                    placeholder="Alex Carter"
                    className="h-[50px] w-full rounded-[12px] border border-white/12 bg-[#0c1733]/80 px-4 text-[15px] text-white outline-none transition focus:border-[#66c4ff] focus:ring-2 focus:ring-[#66c4ff]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-semibold text-[#dbe7ff]">Email</label>
                  <input
                    type="email"
                    placeholder="you@smartwallet.com"
                    className="h-[50px] w-full rounded-[12px] border border-white/12 bg-[#0c1733]/80 px-4 text-[15px] text-white outline-none transition focus:border-[#66c4ff] focus:ring-2 focus:ring-[#66c4ff]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-semibold text-[#dbe7ff]">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="h-[50px] w-full rounded-[12px] border border-white/12 bg-[#0c1733]/80 px-4 text-[15px] text-white outline-none transition focus:border-[#66c4ff] focus:ring-2 focus:ring-[#66c4ff]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-semibold text-[#dbe7ff]">Confirm password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="h-[50px] w-full rounded-[12px] border border-white/12 bg-[#0c1733]/80 px-4 text-[15px] text-white outline-none transition focus:border-[#66c4ff] focus:ring-2 focus:ring-[#66c4ff]/40"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-[32px] text-[18px] font-semibold leading-[18px] text-white shadow-[0_12px_28px_rgba(42,157,255,0.35)] transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7bc9ff]"
                >
                  Create Account
                </button>

                <p className="text-center text-[14px] text-[#b8c6e2]">
                  Already have an account?{" "}
                  <Link href="/login" className="font-semibold text-[#7bc8ff] hover:text-white">
                    Log in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
