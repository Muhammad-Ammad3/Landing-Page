// components/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "Is there a free trial?", a: "Yes, we offer a 14-day free trial on all plans." },
  { q: "Can I cancel anytime?", a: "Absolutely, you can cancel your subscription at any time." },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 max-w-3xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      {faqs.map((faq, i) => (
        <div key={i} className="mb-4 border-b border-slate-200">
          <button className="w-full text-left py-4 font-semibold" onClick={() => setOpen(open === i ? null : i)}>
            {faq.q}
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden text-slate-600 pb-4">
                {faq.a}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};
export default FAQ;