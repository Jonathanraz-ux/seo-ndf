import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Outsourcing from "@/components/sections/Outsourcing";
import Technologies from "@/components/sections/Technologies";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/30">
      {/* Global Background Glow */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] opacity-50" />
      </div>

      <Hero />
      <Services />
      <Pricing />
      <Outsourcing />
      <Technologies />
      <WhyUs />
      <Process />
      <Portfolio />
      <Contact />
    </main>
  );
}
