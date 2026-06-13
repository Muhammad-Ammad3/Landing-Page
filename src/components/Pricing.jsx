import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clsx } from 'clsx';

const Pricing = () => {
  const plans = [
    { name: 'Starter', price: '$29', period: '/mo', desc: 'Perfect for side projects', features: ['5 Projects', '10GB Storage', 'Basic Analytics', 'Community Support'], cta: 'Start Free Trial', popular: false },
    { name: 'Pro', price: '$79', period: '/mo', desc: 'For growing teams', features: ['Unlimited Projects', '100GB Storage', 'Advanced Analytics', 'Priority Support', 'Custom Domain', 'Team Members'], cta: 'Get Started', popular: true },
    { name: 'Enterprise', price: 'Custom', period: '', desc: 'For large organizations', features: ['Unlimited Everything', 'Dedicated Server', 'Custom SLA', '24/7 Phone Support', 'SSO & Audit Logs', 'Dedicated Account Manager'], cta: 'Contact Sales', popular: false },
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4">Pricing</h2>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Simple, transparent pricing</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Choose the plan that fits your growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={clsx(
                'relative p-8 rounded-3xl border transition-all duration-300 flex flex-col',
                plan.popular 
                  ? 'border-indigo-600 bg-white shadow-2xl scale-105 z-10' 
                  : 'border-slate-200 bg-slate-50/50 hover:border-indigo-200 hover:shadow-lg'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.desc}</p>
              </div>

              <div className="mb-8 flex items-baseline">
                <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-slate-500 ml-2 font-medium">{plan.period}</span>
              </div>

              <div className="flex-grow mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                      <FontAwesomeIcon icon="check" className="w-3 h-3 text-indigo-600" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={clsx(
                  'w-full py-4 rounded-xl font-bold transition-all duration-300',
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-indigo-500/25'
                    : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50'
                )}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;