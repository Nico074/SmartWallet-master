"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ASSETS } from "./assets";

const LINKS = ["Home", "Features", "Security", "Pricing", "FAQ", "Contact"];

export function Navbar() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("smartwallet_admin_session");
    setIsAdmin(session === "active");
    const handleStorage = () => {
      const nextSession = localStorage.getItem("smartwallet_admin_session");
      setIsAdmin(nextSession === "active");
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("smartwallet_admin_session");
    localStorage.removeItem("smartwallet_admin_email");
    setIsAdmin(false);
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-40 h-[80px] w-full border-b border-[#1b2c56]/60 bg-[#060d22]/80 backdrop-blur-[8px]">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-[16px] sm:px-[24px] lg:px-[28px]">
        <div className="flex items-center gap-[12px]">
          <Image src={ASSETS.logo} alt="SmartWallet mark" width={28} height={28} />
          <span className="bg-[linear-gradient(90deg,#2ec5ff_0%,#2fa8ff_45%,#5bd3ff_100%)] bg-clip-text text-[24px] font-medium leading-[24px] text-transparent sm:text-[30px] sm:leading-[30px]">
            SmartWallet
          </span>
        </div>

        <nav className="hidden items-center gap-[34px] text-[16px] font-semibold leading-[16px] text-[#edf3ff] lg:flex">
          {LINKS.map((link) => (
            <button
              key={link}
              type="button"
              className="transition-colors duration-200 hover:text-[#56bdff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56bdff]/70"
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-[12px] md:flex">
          {isAdmin ? (
            <>
              <Link
                href="/admin"
                className="text-[16px] font-semibold leading-[16px] text-[#dce8ff] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56bdff]/70 focus-visible:rounded-full px-[4px]"
              >
                Admin
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="text-[16px] font-semibold leading-[16px] text-[#dce8ff] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56bdff]/70 focus-visible:rounded-full px-[4px]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-[16px] font-semibold leading-[16px] text-[#dce8ff] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#56bdff]/70 focus-visible:rounded-full px-[4px]"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="inline-flex h-[42px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-[22px] text-[16px] font-semibold leading-[16px] text-white shadow-[0_12px_26px_rgba(42,157,255,0.35)] transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7bc9ff]"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
