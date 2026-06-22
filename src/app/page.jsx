import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import CaseStudies from "../components/CaseStudies";
import Outcomes from "../components/Outcomes";
import Method from "../components/Method";
import StudioDNA from "../components/StudioDNA";
import ResearchLab from "../components/ResearchLab"; // 1. Imported Research Lab
import ContactFooter from "../components/ContactFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden">
      {/* 1. Hero Section & Hard Trust Metrics */}
      <Hero />
      
      {/* 2. Solutions Layer (What We Build / Bento Grid) */}
      <BentoGrid />
      
      {/* 3. Selected Work (Proven Case Studies & Outcome Metrics Layout Balance) */}
      <CaseStudies />

      {/* 4. Business Outcomes (Strategic Value Layer Matrix) */}
      <Outcomes />

      {/* 5. Process Methodology (Understand -> Architect -> Build -> Deploy -> Optimize) */}
      <Method />
      
      {/* 6. Tech Infrastructure Matrix (Technologies We Master) */}
      {/* 7. Active R&D Initiatives & Leadership Ecosystem Capacity */}
      <StudioDNA />
      
      {/* 8. Active R&D Framework Layer Insertion */}
      <ResearchLab /> {/* 2. Placed perfectly here to expand technical credibility */}
      
      {/* 9. Lead Generation Capture & Final Conversion CTA */}
      <ContactFooter />
    </main>
  );
}