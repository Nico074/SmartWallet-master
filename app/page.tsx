import { Background } from "@/components/Background";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent text-[#edf5ff] bg-[url('/bg/space.jpg')] bg-fixed bg-cover bg-top">
      <Background />
      <main className="relative z-10 w-full bg-transparent pb-[10px] sm:pb-[16px] lg:pb-[20px] bg-gradient-to-b from-transparent via-[#060b1f]/60 to-[#040712]">
        <Navbar />
        <Hero />
        <section className="relative z-20 w-full bg-transparent -mt-[210px] pb-[8px] sm:-mt-[270px] sm:pb-[10px] lg:-mt-[330px] lg:pb-[12px]">
          <Features />
          <h2 className="mt-[18px] text-center text-[30px] font-semibold leading-[30px] tracking-[-1px] text-[#f2f7ff] sm:mt-[22px] sm:text-[42px] sm:leading-[42px] lg:mt-[26px] lg:text-[58px] lg:leading-[58px]">
            Empoer Wallet, Made For You
          </h2>
        </section>
        <Footer />
      </main>
    </div>
  );
}
