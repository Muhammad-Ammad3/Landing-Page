import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const servicesDetail = [
  { title: 'Lightning Fast', icon: 'gauge-high', desc: 'Our infrastructure is built for speed...', fullInfo: 'We use edge computing and global load balancing to ensure your app delivers content in milliseconds.' },
  { title: 'Enterprise Security', icon: 'shield', desc: 'Top-tier security for your data.', fullInfo: 'We provide SOC2 compliance, encrypted databases, and DDoS protection by default.' },
  // Aap baki services yahan add kar sakte hain
];

const ServicesPage = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600">Everything you need to build, deploy, and scale.</p>
        </motion.div>

        <div className="grid gap-12">
          {servicesDetail.map((service, index) => (
            <div key={index} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8">
              <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 text-lg mb-4">{service.desc}</p>
                <p className="text-slate-500">{service.fullInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;