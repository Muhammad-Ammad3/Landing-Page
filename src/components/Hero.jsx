// components/Hero.jsx
import React, { useState } from 'react'; // useEffect ki zarurat nhi thi, remove kar diya
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'; // AnimatePresence yahan import kiya
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, faRocket, faCheckCircle, faArrowRight, faStar, faCode, faCloud, faShieldAlt
} from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // Stats aur UI data
  const stats = [
    { label: 'Active Users', value: '50K+', icon: faStar, trend: '+25%' },
    { label: 'Platform Uptime', value: '99.99%', icon: faCloud, trend: 'SLA' },
    { label: 'Integrations', value: '100+', icon: faCode, trend: 'Growing' },
    { label: 'Security', value: 'SOC2', icon: faShieldAlt, trend: 'Certified' }
  ];

  const features = ['No credit card required', '14-day free trial', 'Cancel anytime', '24/7 support'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 pt-20">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-[120px]" />
          <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          {/* Main Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Build faster with <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Modern Tools</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              The all-in-one platform for developers to build, deploy, and scale their applications with zero configuration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all">Start Building Free</button>
              <button onClick={() => setIsVideoModalOpen(true)} className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold border border-slate-200">Watch Demo</button>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white/70 p-6 rounded-2xl border border-white/50 shadow-lg">
                <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsVideoModalOpen(false)} className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden aspect-video flex items-center justify-center text-white">
              <button onClick={() => setIsVideoModalOpen(false)} className="absolute top-4 right-4 z-10 p-2 bg-white/20 rounded-full">✕</button>
              <p>Demo Video Placeholder</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;