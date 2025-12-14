import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions'; // <-- NEW IMPORT
import Services from './components/Services';
import Outcomes from './components/Outcomes';
import CaseStudies from './components/CaseStudies';
import Method from './components/Method';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    // Added selection color for a premium feel when highlighting text
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30">
      
      {/* NOTE: I removed the <header> wrapper that was here.
        Your new Navbar.jsx handles the sticky header logic internally.
      */}
      <Navbar />

      <main>
        <Hero />
        
        {/* STRATEGY UPDATE: Show "Solutions" (Industry) before Technical Services */}
        <Solutions />
        
        <Services />
        
        {/* Tip: Since 'Solutions' now covers results, check if 'Outcomes' 
           is still needed. If it feels repetitive, you can delete this line later.
        */}
        <Outcomes />
        
        <CaseStudies />
        <Method />
        <About />
        <Contact />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;