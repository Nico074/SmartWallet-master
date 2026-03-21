import Image from "next/image";
import { ASSETS } from "./assets";

const QUICK_LINKS = ["Home", "Features", "Security", "Pricing", "FAQ"];
const RESOURCES = ["Help Center", "Blog", "Privacy Policy"];
const HELP = ["Tutores", "Terms of Service"];

export function Footer() {
  return (
    <footer className="relative z-20 mx-auto mt-[16px] w-full max-w-[1200px] rounded-[12px] border border-[rgba(120,180,255,0.18)] bg-[linear-gradient(180deg,rgba(9,18,40,0.54)_0%,rgba(6,12,28,0.46)_100%)] px-[18px] py-[24px] shadow-[0_0_26px_rgba(29,104,210,0.12)] backdrop-blur-[12px] sm:px-[24px] sm:py-[28px] lg:px-[30px] lg:py-[30px]">
      <div className="grid grid-cols-1 gap-[24px] border-b border-[rgba(108,164,246,0.2)] pb-[22px] lg:grid-cols-[360px_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-[12px]">
            <Image src={ASSETS.logo} alt="SmartWallet mark" width={28} height={28} />
            <h3 className="bg-[linear-gradient(90deg,#2ec5ff_0%,#2fa8ff_45%,#5bd3ff_100%)] bg-clip-text text-[34px] font-medium leading-[34px] text-transparent sm:text-[44px] sm:leading-[44px] lg:text-[30px] lg:leading-[30px]">
              SmartWallet
            </h3>
          </div>
          <p className="mt-[14px] w-full max-w-[320px] text-[16px] leading-[24px] text-[#c5d3ef] sm:text-[18px] sm:leading-[28px] lg:text-[15px] lg:leading-[24px]">
            SmartWallet — Simplifying your daily life with smart AI-powered wallet
            management.
          </p>
          <p className="mt-[18px] text-[13px] leading-[13px] text-[#8798c2] sm:text-[14px] sm:leading-[14px] lg:mt-[28px] lg:text-[14px] lg:leading-[14px]">
            © 2024 SmartWallet. All rights reserved.
          </p>
        </div>

        <div>
          <h4 className="text-[22px] font-semibold leading-[22px] text-white sm:text-[24px] sm:leading-[24px] lg:text-[18px] lg:leading-[18px]">Quick Links</h4>
          <ul className="mt-[12px] space-y-[6px]">
            {QUICK_LINKS.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="text-[18px] leading-[24px] text-[#cfdbf3] transition-colors duration-200 hover:text-[#5fc2ff] focus-visible:outline-none sm:text-[20px] sm:leading-[28px] lg:text-[14px] lg:leading-[20px]"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[22px] font-semibold leading-[22px] text-white sm:text-[24px] sm:leading-[24px] lg:text-[18px] lg:leading-[18px]">Resources</h4>
          <ul className="mt-[12px] space-y-[6px]">
            {RESOURCES.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="text-[18px] leading-[24px] text-[#cfdbf3] transition-colors duration-200 hover:text-[#5fc2ff] focus-visible:outline-none sm:text-[20px] sm:leading-[28px] lg:text-[14px] lg:leading-[20px]"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-full flex-col justify-between">
          <div>
            <h4 className="text-[22px] font-semibold leading-[22px] text-[#8f86ed] sm:text-[24px] sm:leading-[24px] lg:text-[18px] lg:leading-[18px]">Help</h4>
            <ul className="mt-[12px] space-y-[6px]">
              {HELP.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className="text-[18px] leading-[24px] text-[#cfdbf3] transition-colors duration-200 hover:text-[#5fc2ff] focus-visible:outline-none sm:text-[20px] sm:leading-[28px] lg:text-[14px] lg:leading-[20px]"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-end gap-[10px]">
            <a
              href="#"
              className="grid h-[26px] w-[26px] place-content-center rounded-full border border-[rgba(97,153,235,0.5)] bg-[rgba(17,58,120,0.62)] transition-transform duration-200 hover:scale-[1.05] lg:h-[28px] lg:w-[28px]"
              aria-label="facebook"
            >
              <Image src={ASSETS.icons.facebook} alt="" width={12} height={12} />
            </a>
            <a
              href="#"
              className="grid h-[26px] w-[26px] place-content-center rounded-full border border-[rgba(97,153,235,0.5)] bg-[rgba(17,58,120,0.62)] transition-transform duration-200 hover:scale-[1.05] lg:h-[28px] lg:w-[28px]"
              aria-label="twitter"
            >
              <Image src={ASSETS.icons.twitter} alt="" width={12} height={12} />
            </a>
            <a
              href="#"
              className="grid h-[26px] w-[26px] place-content-center rounded-full border border-[rgba(97,153,235,0.5)] bg-[rgba(17,58,120,0.62)] transition-transform duration-200 hover:scale-[1.05] lg:h-[28px] lg:w-[28px]"
              aria-label="linkedin"
            >
              <Image src={ASSETS.icons.linkedin} alt="" width={12} height={12} />
            </a>
          </div>
        </div>
      </div>
      <p className="pt-[14px] text-center text-[13px] leading-[13px] text-[#9eadd1] sm:text-[14px] sm:leading-[14px] lg:text-[14px] lg:leading-[14px]">
        Privacy Policy &gt; Terms of Service
      </p>
    </footer>
  );
}
