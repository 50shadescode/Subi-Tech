import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import CaseStudies from "../components/CaseStudies"; // Updated import
import StudioDNA from "../components/StudioDNA";
import ContactFooter from "../components/ContactFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Hero />
      <BentoGrid />
      <CaseStudies /> {/* Swapped ProcessTimeline out for your new Case Studies */}
      <StudioDNA />
      <ContactFooter />
    </main>
  );
}