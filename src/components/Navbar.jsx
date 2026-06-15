// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown, faUser, faSignOutAlt, faCog, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const dropdownLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: faUser },
    { name: 'Settings', href: '/settings', icon: faCog },
    { name: 'Support', href: '/support', icon: faHeart }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold tracking-tighter text-indigo-600">
          Nexus<span className="text-purple-600">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className={`font-medium transition-colors ${isActive(link.href) ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}>
              {link.name}
            </Link>
          ))}
          
          {isLoggedIn ? (
            <div className="relative">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2 px-4 py-2 bg-indigo-50 rounded-full">
                <div className="w-8 h-8 bg-indigo-600 rounded-full text-white text-xs flex items-center justify-center font-bold">JD</div>
                <FontAwesomeIcon icon={faChevronDown} className="text-slate-500 text-xs" />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 p-2">
                    {dropdownLinks.map((link) => (
                      <Link key={link.name} to={link.href} className="flex items-center space-x-3 px-4 py-2 hover:bg-slate-50 rounded-lg text-slate-700">
                        <FontAwesomeIcon icon={link.icon} className="w-4 h-4" />
                        <span>{link.name}</span>
                      </Link>
                    ))}
                    <button onClick={() => setIsLoggedIn(false)} className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg mt-1">
                      <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-slate-600 font-semibold hover:text-indigo-600">Log In</Link>
              <Link to="/signup" className="px-6 py-2.5 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">Get Started</Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden bg-white border-b border-slate-200 overflow-hidden">
            <div className="p-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-slate-700">{link.name}</Link>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
                <Link to="/login" className="text-center font-semibold text-indigo-600">Log In</Link>
                <Link to="/signup" className="text-center bg-indigo-600 text-white py-3 rounded-xl font-semibold">Get Started</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;