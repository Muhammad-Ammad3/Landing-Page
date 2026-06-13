import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Documentation', 'API'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  };

  const socialLinks = [
    { icon: 'github', href: '#', name: 'Github' },
    { icon: 'twitter', href: '#', name: 'Twitter' },
    { icon: 'linkedin', href: '#', name: 'Linkedin' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="/" className="text-3xl font-extrabold text-white tracking-tight">
              Nexus<span className="text-indigo-500">.</span>
            </a>
            <p className="mt-4 text-slate-500 max-w-sm leading-relaxed">
              Building the next generation of tools for developers. Fast, secure, and infinitely scalable.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <FontAwesomeIcon icon="envelope" className="w-5 h-5 text-indigo-500" />
                <span>hello@nexus.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <FontAwesomeIcon icon="map-marker-alt" className="w-5 h-5 text-indigo-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-indigo-400 transition-all duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Nexus Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300"
                aria-label={social.name}
              >
                <FontAwesomeIcon icon={['fab', social.icon]} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;