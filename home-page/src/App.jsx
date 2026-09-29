import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import GlobalPresence from "./components/sections/GlobalPresence";
import OurDiverseClientele from "./components/sections/OurDiverseClientele";
import OurStory from "./components/sections/OurStory";
import Leadership from "./components/sections/Leadership";
import Testimonials from "./components/sections/Testimonials";
import CurrentTechFocus from "./components/sections/CurrentTechFocus";
import Services from "./components/sections/Services";
import ContactUs from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <GlobalPresence />
        <OurDiverseClientele />
        <OurStory />
        <Services />
        <CurrentTechFocus />
        <Leadership />
        <Testimonials />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
