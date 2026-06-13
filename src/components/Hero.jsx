import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
      {/* Refined Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-indigo-600 text-sm font-semibold mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
          </span>
          Version 2.0 is now live
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8"
        >
          Build faster with <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Modern Tools
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          The all-in-one platform for developers to build, deploy, and scale their applications with zero configuration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-1">
            Start Building Free
          </button>
          <button className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all border border-slate-200">
            Watch Demo
          </button>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { label: 'Active Users', value: '10K+' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Integrations', value: '50+' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm">
              <div className="text-4xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;