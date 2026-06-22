import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import CaseStudies from "../components/CaseStudies";
import Outcomes from "../components/Outcomes";
import Method from "../components/Method";
import StudioDNA from "../components/StudioDNA";
import ContactFooter from "../components/ContactFooter"; // Handles Section 12 conversion copy

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      {/* 1. Hero Section & Hard Trust Metrics */}
      <Hero />
      
      {/* 2. Solutions Layer (What We Build / Bento Grid) */}
      <BentoGrid />
      
      {/* 3. Selected Work (Proven Case Studies & Outcome Metrics) */}
      <CaseStudies />

      {/* 4. Business Outcomes (Strategic Value Layer) */}
      <Outcomes />

      {/* 5. Process Methodology (Understand -> Architect -> Build -> Deploy -> Optimize) */}
      <Method />
      
      {/* 6. Tech Infrastructure & Leadership Ecosystem Capacity */}
      <StudioDNA />
      
      {/* 7. Lead Generation Capture & Final Conversion CTA */}
      <ContactFooter />
    </main>
  );
}