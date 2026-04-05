import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Security } from "@/components/sections/Security";
import { Storage } from "@/components/sections/Storage";
import { Channels } from "@/components/sections/Channels";
import { Share } from "@/components/sections/Share";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Security />
        <Storage />
        <Channels />
        <Share />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
