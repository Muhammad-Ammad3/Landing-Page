import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};
export default Home;