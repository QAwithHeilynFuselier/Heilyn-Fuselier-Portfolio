import { useState } from 'react';
import About from './components/About';
import Approach from './components/Approach';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';
import CurrentlyWorking from './components/CurrentlyWorking';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HomeFeatures from './components/HomeFeatures';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-zinc-100 focus:px-4 focus:py-2 focus:text-zinc-900"
      >
        Skip to content
      </a>
      <Navbar onContactClick={openContact} />
      <main id="main">
        <Hero />
        <HomeFeatures />
        <About />
        <CurrentlyWorking />
        <Projects />
        <Approach />
        <Expertise />
        <Contact onContactClick={openContact} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
