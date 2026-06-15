import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaRocket, FaStar, FaBuilding } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      icon: FaRocket,
      price: { monthly: 29, yearly: 23 },
      features: ['5 Projects', '10GB Storage', 'Basic Analytics', 'Email Support'],
      notIncluded: ['API Access', 'Custom Domain'],
      color: 'bg-blue-500',
    },
    {
      name: 'Pro',
      icon: FaStar,
      price: { monthly: 79, yearly: 63 },
      features: ['Unlimited Projects', '100GB Storage', 'Advanced Analytics', 'Priority Support', 'API Access'],
      notIncluded: [],
      color: 'bg-indigo-600',
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: FaBuilding,
      price: { monthly: 'Custom', yearly: 'Custom' },
      features: ['Everything in Pro', 'Unlimited Storage', '24/7 Phone Support', 'SLA Guarantee'],
      notIncluded: [],
      color: 'bg-slate-800',
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4">
          <span className={billingCycle === 'monthly' ? 'font-bold' : 'text-slate-500'}>Monthly</span>
          <button onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')} 
                  className="w-14 h-7 bg-indigo-600 rounded-full p-1 relative">
            <motion.div animate={{ x: billingCycle === 'monthly' ? 0 : 28 }} className="w-5 h-5 bg-white rounded-full shadow" />
          </button>
          <span className={billingCycle === 'yearly' ? 'font-bold' : 'text-slate-500'}>Yearly <span className="text-green-600 text-xs">(Save 20%)</span></span>
        </div>
      </section>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-20">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`bg-white p-8 rounded-3xl shadow-xl border-2 ${plan.popular ? 'border-indigo-500 scale-105' : 'border-transparent'}`}>
            <div className={`w-12 h-12 ${plan.color} rounded-xl flex items-center justify-center text-white mb-6`}>
              <plan.icon size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <div className="text-4xl font-extrabold mb-6">
              {typeof plan.price[billingCycle] === 'number' ? `$${plan.price[billingCycle]}` : 'Custom'}
              <span className="text-sm text-slate-500 font-normal">/mo</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map(f => <li key={f} className="flex items-center gap-2 text-slate-600"><FaCheck className="text-green-500" /> {f}</li>)}
              {plan.notIncluded.map(f => <li key={f} className="flex items-center gap-2 text-slate-400"><FaTimes /> {f}</li>)}
            </ul>
            <button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-indigo-600 transition">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;