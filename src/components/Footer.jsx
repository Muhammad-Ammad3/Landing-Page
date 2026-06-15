// components/Footer.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // AnimatePresence import add kiya
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, faTwitter, faLinkedin, faInstagram, faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, faMapMarkerAlt, faArrowUp, faPaperPlane, faCheckCircle, faSpinner
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const footerLinks = {
    Product: [
      { name: 'Features', link: '/features' },
      { name: 'Pricing', link: '/pricing' },
      { name: 'Documentation', link: '/docs' },
      { name: 'API Reference', link: '/api' },
      { name: 'Changelog', link: '/changelog' }
    ],
    Company: [
      { name: 'About', link: '/about' },
      { name: 'Blog', link: '/blog' },
      { name: 'Careers', link: '/careers' },
      { name: 'Press', link: '/press' },
      { name: 'Contact', link: '/contact' }
    ],
    Resources: [
      { name: 'Community', link: '/community' },
      { name: 'Support', link: '/support' },
      { name: 'Status', link: '/status' },
      { name: 'Terms of Service', link: '/terms' },
      { name: 'Privacy Policy', link: '/privacy' }
    ],
    Legal: [
      { name: 'Security', link: '/security' },
      { name: 'Compliance', link: '/compliance' },
      { name: 'GDPR', link: '/gdpr' },
      { name: 'Cookies', link: '/cookies' },
      { name: 'License', link: '/license' }
    ]
  };

  const socialLinks = [
    { icon: faGithub, href: '#', name: 'GitHub', color: 'hover:bg-gray-600' },
    { icon: faTwitter, href: '#', name: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: faLinkedin, href: '#', name: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: faInstagram, href: '#', name: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: faFacebook, href: '#', name: 'Facebook', color: 'hover:bg-blue-600' }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) return;
    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1500);
  };

  React.useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-400 pt-20 pb-10 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl" />
          <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-pink-600/10 to-yellow-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-slate-800">
            <motion.div variants={itemVariants}>
              <a href="/" className="text-4xl font-extrabold text-white tracking-tight inline-block group">Nexus<span className="text-indigo-500">.</span></a>
              <p className="mt-4 text-slate-400 max-w-md">Building the next generation of tools for developers.</p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                {isSubscribed ? (
                  <div className="flex items-center space-x-3 p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl" />
                    <p className="text-green-400 font-semibold">Subscribed successfully!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <div className="flex gap-3">
                      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl outline-none text-white" />
                      <button type="submit" disabled={isSubscribing} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold">
                        {isSubscribing ? <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> : "Subscribe"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-bold mb-6 text-sm uppercase">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}><a href={link.link} className="hover:text-indigo-400 transition-colors">{link.name}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ y: -5 }} // Bounce effect via Framer Motion
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center z-50"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;