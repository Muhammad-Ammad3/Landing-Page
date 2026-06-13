import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing'; // Purana component re-use karenge

const PricingPage = () => {
  const comparisons = [
    { feature: 'Projects', starter: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'Storage', starter: '10GB', pro: '100GB', enterprise: 'Unlimited' },
    { feature: 'Analytics', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
    { feature: 'API Access', starter: '❌', pro: '✅', enterprise: '✅' },
    { feature: 'Custom Domain', starter: '❌', pro: '✅', enterprise: '✅' },
    { feature: 'Support', starter: 'Email', pro: 'Priority', enterprise: '24/7 Phone' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section for Pricing */}
      <section className="pt-32 pb-16 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6"
          >
            Transparent <span className="text-indigo-600">Plans</span>
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Whether you're a solo dev or a global team, we have a plan that scales with you.
          </p>
        </div>
      </section>

      {/* Pricing Cards Component */}
      <div className="py-10">
        <Pricing /> 
      </div>

      {/* Comparison Table */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Compare Features</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 text-slate-900">
                <th className="py-4 font-bold uppercase tracking-wider">Feature</th>
                <th className="py-4 font-bold text-center">Starter</th>
                <th className="py-4 font-bold text-center">Pro</th>
                <th className="py-4 font-bold text-center text-indigo-600">Enterprise</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-5 font-medium">{row.feature}</td>
                  <td className="py-5 text-center">{row.starter}</td>
                  <td className="py-5 text-center font-semibold">{row.pro}</td>
                  <td className="py-5 text-center font-bold text-indigo-600">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Need a custom solution?</h2>
        <p className="text-indigo-100 mb-8 text-xl">Contact our team for personalized enterprise plans and dedicated support.</p>
        <button className="px-10 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all">
          Contact Sales
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;