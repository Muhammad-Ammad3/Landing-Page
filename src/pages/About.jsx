import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Our Mission</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We are building the future of developer tools. Our goal is to simplify complexity 
            and empower teams to ship faster, safer, and smarter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-100 h-80 rounded-3xl flex items-center justify-center">
            {/* Yahan aap apni team ya office ki photo laga sakte hain */}
            <span className="text-slate-400">Team Image / Illustration</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Why choose us?</h2>
            <p className="text-slate-600">
              Nexus was born out of a simple frustration: developers spend too much time on 
              infrastructure and not enough time building products. We fixed that.
            </p>
            <ul className="space-y-3">
              {['Innovation-first approach', 'Global team of experts', 'Scalable architecture'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                  <span className="text-indigo-500">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;