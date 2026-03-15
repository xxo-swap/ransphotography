import AtmosphericStills from "@/components/AtmosphericStills";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import HomePortfolio from "@/components/HomePortfolio";
import Philosophy from "@/components/Philosophy";
import SelectedWork from "@/components/SelectedWork";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomePortfolio />
      <SelectedWork />
      <Philosophy />
      <AtmosphericStills/>
      <Testimonial/>
      <FinalCTA/>
    </main>
  );
}