import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-nexus-900 text-slate-200 selection:bg-nexus-accent selection:text-nexus-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;