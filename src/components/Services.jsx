// components/Services.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faShieldHalved, faGlobe, faChartLine, faCode, faCloud, faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const services = [
  { id: 1, icon: faGaugeHigh, title: 'Lightning Fast', desc: 'Optimized infrastructure for minimal latency.', fullDesc: 'Edge computing network delivering content in milliseconds with 99.9% uptime.', benefits: ['Global CDN', 'Auto-scaling'], color: 'text-amber-500' },
  { id: 2, icon: faShieldHalved, title: 'Enterprise Security', desc: 'Bank-grade encryption and compliance.', fullDesc: 'Data protected with 256-bit encryption, regular audits, and DDoS protection.', benefits: ['SOC2 Compliant', 'DDoS Protected'], color: 'text-emerald-500' },
  { id: 3, icon: faGlobe, title: 'Global CDN', desc: 'Deploy to 250+ locations worldwide.', fullDesc: 'Global network ensuring content is always close to your users.', benefits: ['250+ Locations', 'Instant Cache'], color: 'text-blue-500' },
  { id: 4, icon: faChartLine, title: 'Advanced Analytics', desc: 'Real-time insights and performance metrics.', fullDesc: 'Get detailed metrics and AI-powered insights to optimize your application.', benefits: ['Real-time Data', 'AI Insights'], color: 'text-purple-500' },
  { id: 5, icon: faCode, title: 'Developer API', desc: 'Powerful REST and GraphQL integration.', fullDesc: 'Comprehensive API to extend functionality and build custom integrations.', benefits: ['REST & GraphQL', 'Webhooks'], color: 'text-pink-500' },
  { id: 6, icon: faCloud, title: 'Cloud Storage', desc: 'Scalable storage with redundancy.', fullDesc: 'Store any amount of data with automatic backup and global redundancy.', benefits: ['Auto Backup', '99.999% Durability'], color: 'text-cyan-500' },
];

const Services = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Everything you need to scale</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Build, deploy, and scale with confidence.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
            >
              <FontAwesomeIcon icon={service.icon} className={`text-3xl mb-6 ${service.color}`} />
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.desc}</p>
              
              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="text-sm text-slate-500 mb-4">{service.fullDesc}</p>
                    <div className="space-y-2 mb-4">
                      {service.benefits.map(b => (
                        <div key={b} className="flex items-center gap-2 text-sm text-slate-700">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" /> {b}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <button className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                {expandedId === service.id ? 'Read Less' : 'Read More'} 
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;