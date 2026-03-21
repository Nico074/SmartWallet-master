import Image from "next/image";
import Link from "next/link";

type FeatureCard = {
  icon: string;
  title: string;
  description: string;
};

const CARDS: FeatureCard[] = [
  {
    icon: "/icons/icone1.png",
    title: "Track Expenses",
    description: "View and categorize all your expenses easily.",
  },
  {
    icon: "/icons/icone2.png",
    title: "Automate Payments",
    description: "Schedule and automate recurring payments",
  },
  {
    icon: "/icons/icone3.png",
    title: "Secure Wallets",
    description: "Your wallets protected with top-notch security",
  },
  {
    icon: "/icons/icone4.png",
    title: "Send Money",
    description: "Send money effortlessly to anyone, anytime.",
  },
];

function IconStage({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="relative h-[112px] w-full overflow-hidden rounded-[14px] sm:h-[122px] lg:h-[126px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          width={480}
          height={300}
          quality={100}
          unoptimized
          style={{
            WebkitMaskImage:
              "radial-gradient(118% 92% at 50% 48%, rgba(0,0,0,1) 38%, rgba(0,0,0,0.82) 60%, rgba(0,0,0,0.26) 78%, rgba(0,0,0,0) 95%)",
            maskImage:
              "radial-gradient(118% 92% at 50% 48%, rgba(0,0,0,1) 38%, rgba(0,0,0,0.82) 60%, rgba(0,0,0,0.26) 78%, rgba(0,0,0,0) 95%)",
          }}
          className="h-[98px] w-auto object-contain object-center mix-blend-screen opacity-95 drop-shadow-[0_0_12px_rgba(92,192,255,0.42)] transition-all duration-200 group-hover:-translate-y-[2px] group-hover:drop-shadow-[0_0_18px_rgba(109,206,255,0.58)] sm:h-[106px] lg:h-[110px]"
        />
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section className="relative z-20 mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-[16px] px-[20px] sm:grid-cols-2 sm:gap-[20px] sm:px-[24px] lg:grid-cols-4 lg:gap-[20px] lg:px-[28px]">
      {CARDS.map((card) => (
        <Link
          key={card.title}
          href="/features"
          className="group relative block h-[284px] w-full border border-white/10 bg-[#0b1635]/40 shadow-[0_6px_26px_rgba(16,66,146,0.14)] backdrop-blur-[10px] transition-[border-color,box-shadow,transform] duration-200 hover:border-white/20 hover:shadow-[0_10px_32px_rgba(31,116,233,0.2)] sm:h-[298px] lg:h-[300px]"
        >
          <div className="px-[16px] pt-[16px] sm:px-[18px] sm:pt-[18px] lg:px-[18px] lg:pt-[18px]">
            <IconStage icon={card.icon} title={card.title} />
            <h3 className="mt-[12px] text-[23px] font-semibold leading-[27px] tracking-[-0.4px] text-white sm:mt-[14px] sm:text-[24px] sm:leading-[28px] lg:mt-[14px] lg:text-[28px] lg:leading-[31px]">
              {card.title}
            </h3>
            <p className="mt-[8px] max-w-[240px] text-[14px] font-medium leading-[22px] text-[#bfd0ef] sm:text-[15px] sm:leading-[23px] lg:text-[15px] lg:leading-[24px]">
              {card.description}
            </p>
            <span className="mt-[12px] inline-flex items-center gap-2 text-[13px] font-semibold text-[#7bc8ff] transition group-hover:text-white">
              Learn more
              <span className="text-[#9fc3ff] group-hover:text-white">→</span>
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
