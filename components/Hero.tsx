"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ASSETS } from "./assets";

const FLOATING_PARTICLES = [
  { left: 210, top: 160, size: 8, delay: 0.1 },
  { left: 600, top: 110, size: 10, delay: 0.45 },
  { left: 1170, top: 180, size: 7, delay: 0.7 },
  { left: 970, top: 290, size: 9, delay: 0.2 },
  { left: 1220, top: 430, size: 8, delay: 0.6 },
];

const ELECTRIC_LINES = [
  { width: 180, top: 156, left: 812, rotate: -12, delay: 0.2 },
  { width: 156, top: 190, left: 840, rotate: 8, delay: 0.8 },
  { width: 130, top: 228, left: 866, rotate: -18, delay: 1.3 },
];

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const headX = useTransform(springX, [-1, 1], [-8, 8]);
  const headY = useTransform(springY, [-1, 1], [-6, 6]);
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
    <section
      className="relative h-[840px] w-full bg-cover bg-center sm:h-[960px] lg:h-[1080px]"
      style={{
        backgroundImage: `url('${ASSETS.heroCardsBg}')`,
        backgroundPosition: "center top",
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
        mouseX.set(x);
        mouseY.set(y);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.div
        className="pointer-events-none absolute right-[6%] top-[104px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(67,179,255,0.28)_0%,rgba(49,116,255,0.06)_52%,transparent_72%)] blur-[24px] sm:h-[420px] sm:w-[420px] lg:right-[14%] lg:top-[132px] lg:h-[500px] lg:w-[500px]"
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {FLOATING_PARTICLES.map((p, index) => (
        <motion.span
          key={index}
          className="pointer-events-none absolute rounded-full bg-[#2ea8ff] shadow-[0_0_24px_rgba(44,160,255,0.75)]"
          style={{ left: `${p.left}px`, top: `${p.top}px`, width: `${p.size}px`, height: `${p.size}px` }}
          animate={{ y: [0, -14, 0], opacity: [0.35, 0.95, 0.35] }}
          transition={{
            duration: 5.8 + index * 0.5,
            delay: p.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="pointer-events-none absolute right-[10%] top-[145px] hidden h-[420px] w-[420px] rounded-full border border-[#42a8ff]/20 lg:block"
        style={{ x: headX, y: headY }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[13%] top-[178px] hidden h-[350px] w-[350px] rounded-full border border-[#42a8ff]/16 lg:block"
        style={{ x: headX, y: headY }}
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[540px] bg-[linear-gradient(180deg,rgba(7,11,26,0)_0%,rgba(7,11,26,0.1)_28%,rgba(7,11,26,0.78)_66%,rgba(7,11,26,0.97)_100%)]" />

      {ELECTRIC_LINES.map((line, index) => (
        <motion.span
          key={index}
          className="pointer-events-none absolute hidden h-[2px] rounded-full bg-[linear-gradient(90deg,rgba(114,230,255,0)_0%,rgba(114,230,255,0.9)_50%,rgba(114,230,255,0)_100%)] shadow-[0_0_16px_rgba(114,230,255,0.9)] lg:block"
          style={{
            width: `${line.width}px`,
            top: `${line.top}px`,
            left: `${line.left}px`,
            rotate: `${line.rotate}deg`,
          }}
          animate={{ opacity: [0.15, 1, 0.15], scaleX: [0.85, 1.08, 0.85] }}
          transition={{
            duration: 2.8,
            delay: line.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative mx-auto h-full w-full max-w-[1200px] px-[20px] pt-[96px] sm:px-[28px] sm:pt-[110px] lg:pt-[124px]">
        <div className="w-full max-w-[700px]">
          <h1 className="text-[42px] font-bold leading-[50px] tracking-[-1px] text-white sm:text-[50px] sm:leading-[58px] lg:text-[58px] lg:leading-[66px]">
            <span className="block">Simplify Your Daily Life</span>
            <span className="block">
              with{" "}
              <span className="bg-[linear-gradient(95deg,#8b76ff_0%,#5f9bff_56%,#37b3ff_100%)] bg-clip-text text-transparent">
                AI-Powered
              </span>
            </span>
            <span className="block">Wallet Management</span>
          </h1>

          <p className="mt-[20px] w-full max-w-[620px] text-[18px] font-medium leading-[32px] tracking-[0px] text-[#c8d6f0] sm:mt-[22px] sm:text-[20px] sm:leading-[34px] lg:mt-[24px] lg:text-[20px] lg:leading-[36px]">
            Let our smart AI manage your wallets, track your expenses, and automate your
            transactions. Secure, efficient,
          </p>

          <div className="mt-[24px] flex flex-wrap items-center gap-[12px] sm:mt-[28px] sm:gap-[14px] lg:mt-[30px] lg:gap-[16px]">
            <Link
              href={isAdmin ? "/admin" : "/signup"}
              className="inline-flex h-[52px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#5564ff_0%,#2fa8ff_100%)] px-[32px] text-[18px] font-semibold leading-[18px] text-white shadow-[0_12px_28px_rgba(42,157,255,0.35)] transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7bc9ff] sm:h-[54px] sm:px-[36px] sm:text-[19px] sm:leading-[19px] lg:h-[56px] lg:px-[40px] lg:text-[20px] lg:leading-[20px]"
            >
              Get Started
            </Link>
            <Link
              href={isAdmin ? "/admin" : "/login"}
              className="inline-flex h-[52px] items-center justify-center rounded-full border border-[#d5e8ff] px-[32px] text-[18px] font-semibold leading-[18px] text-[#f4f8ff] transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cde4ff] sm:h-[54px] sm:px-[36px] sm:text-[19px] sm:leading-[19px] lg:h-[56px] lg:px-[40px] lg:text-[20px] lg:leading-[20px]"
            >
              {isAdmin ? "Go to Admin" : "Log In"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
