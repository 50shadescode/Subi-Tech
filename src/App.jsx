import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Navbar />
        </div>
      </header>

      <main>
        <Hero />
        <Services />
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
