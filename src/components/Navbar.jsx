import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; // 1. Ye import add karein

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/" className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Nexus.
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-slate-600 hover:text-indigo-600 font-medium transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full" />
            </Link>
          ))}
          
          <Link
            to="/login" // Login page par jane ke liye
            className="px-6 py-2.5 bg-slate-900 text-white rounded-full font-semibold hover:bg-indigo-600 transition-all shadow-md"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? 'times' : 'bars'} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b shadow-2xl">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-semibold text-slate-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;