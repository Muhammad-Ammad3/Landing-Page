import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const services = [
  { icon: 'gauge-high', title: 'Lightning Fast', desc: 'Optimized infrastructure ensures your apps run with minimal latency globally.', color: 'from-amber-500/20 to-orange-500/20 text-amber-600' },
  { icon: 'shield-halved', title: 'Enterprise Security', desc: 'Bank-grade encryption and compliance with SOC2, GDPR, and HIPAA standards.', color: 'from-emerald-500/20 to-teal-500/20 text-emerald-600' },
  { icon: 'globe', title: 'Global CDN', desc: 'Deploy your content to 250+ edge locations for instant delivery worldwide.', color: 'from-blue-500/20 to-indigo-500/20 text-blue-600' },
  { icon: 'chart-line', title: 'Advanced Analytics', desc: 'Real-time insights into your application performance and user behavior.', color: 'from-purple-500/20 to-fuchsia-500/20 text-purple-600' },
  { icon: 'code', title: 'Developer API', desc: 'Powerful REST and GraphQL APIs to integrate with your existing stack.', color: 'from-pink-500/20 to-rose-500/20 text-pink-600' },
  { icon: 'cloud', title: 'Cloud Storage', desc: 'Scalable object storage with built-in redundancy and disaster recovery.', color: 'from-cyan-500/20 to-blue-500/20 text-cyan-600' },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm font-bold tracking-widest uppercase text-indigo-600 mb-4"
          >
            Features
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Everything you need to scale
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} transition-transform group-hover:scale-110`}>
                <FontAwesomeIcon icon={service.icon} className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              
              <div className="mt-6 flex items-center text-indigo-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;