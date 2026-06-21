import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import ProcessTimeline from "../components/ProcessTimeline";
import StudioDNA from "../components/StudioDNA";
import ContactFooter from "../components/ContactFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Hero />
      <BentoGrid />
      <ProcessTimeline />
      <StudioDNA />
      <ContactFooter />
    </main>
  );
}