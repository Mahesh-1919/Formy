import Hero from "@/app/_components/Hero";
import ScrollerSection from "./_components/scrollerSection";

import FreeSection from "./_components/FreeSection";
import Templates from "./_components/Templates";
import CountComponent from "./_components/countComponent";
import Footer from "./_components/Footer";
import Services from "./_components/services";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-primary">
      <Hero />
      <ScrollerSection />
      <FreeSection />
      <Services />

      <Templates />
      <CountComponent />
      <Footer />
    </div>
  );
}
