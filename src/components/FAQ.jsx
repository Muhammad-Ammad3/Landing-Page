// components/FAQ.jsx
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaQuestionCircle,
  FaCreditCard,
  FaShieldAlt,
  FaCog,
  FaUserPlus,
  FaHeadset,
  FaCheckCircle
} from 'react-icons/fa';

const FAQ = () => {
  // ERROR FIX: Changed openIndex to openId to track by ID instead of array index
  const [openId, setOpenId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: FaQuestionCircle },
    { id: 'general', name: 'General', icon: FaCog },
    { id: 'billing', name: 'Billing', icon: FaCreditCard },
    { id: 'security', name: 'Security', icon: FaShieldAlt },
    { id: 'account', name: 'Account', icon: FaUserPlus },
    { id: 'support', name: 'Support', icon: FaHeadset }
  ];

  const faqs = [
    { id: 1, category: 'general', question: "Is there a free trial?", answer: "Yes! We offer a 14-day free trial on all our plans. No credit card required. You'll have full access to all features during the trial period.", popular: true },
    { id: 2, category: 'general', question: "Can I cancel anytime?", answer: "Absolutely! You can cancel your subscription at any time with just one click. No questions asked, and no hidden fees. Your access continues until the end of your billing period.", popular: true },
    { id: 3, category: 'billing', question: "What payment methods do you accept?", answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans. All payments are processed securely through Stripe.", popular: false },
    { id: 4, category: 'billing', question: "Do you offer discounts for annual billing?", answer: "Yes! When you choose annual billing, you save 20% compared to monthly payments. That's two months free every year!", popular: true },
    { id: 5, category: 'security', question: "Is my data secure?", answer: "Security is our top priority. We use bank-level 256-bit encryption, regular security audits, and comply with SOC2 and GDPR standards. Your data is never shared with third parties.", popular: true },
    { id: 6, category: 'security', question: "Do you offer two-factor authentication?", answer: "Yes, we support 2FA via authenticator apps (Google Authenticator, Authy) and SMS. It's highly recommended for all accounts to add an extra layer of security.", popular: false },
    { id: 7, category: 'account', question: "Can I upgrade or downgrade my plan?", answer: "Absolutely! You can change your plan at any time from your dashboard. Upgrades take effect immediately, and downgrades take effect at the next billing cycle.", popular: true },
    { id: 8, category: 'account', question: "How do I delete my account?", answer: "You can delete your account from the Settings page. Please note that this action is permanent and will remove all your data. Contact support if you need help.", popular: false },
    { id: 9, category: 'support', question: "What kind of support do you offer?", answer: "We offer email support for all plans, priority support for Pro users, and 24/7 phone support for Enterprise customers. Our average response time is under 2 hours.", popular: true },
    { id: 10, category: 'support', question: "Do you have documentation and tutorials?", answer: "Yes! We have comprehensive documentation, video tutorials, API references, and a community forum. All available for free to all users.", popular: false },
    { id: 11, category: 'general', question: "Can I use Nexus for my agency?", answer: "Definitely! Many agencies use Nexus to manage multiple client projects. We offer team accounts and agency discounts for 5+ team members.", popular: false },
    { id: 12, category: 'billing', question: "What is your refund policy?", answer: "We offer a 30-day money-back guarantee for all annual plans. Monthly plans can be canceled anytime with no further charges.", popular: false }
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const popularFaqs = faqs.filter(faq => faq.popular);

  // ERROR FIX: Toggle by ID
  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* ... (Background divs remain same) ... */}
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* ... (Header and Search logic remain same) ... */}
        
        {/* Popular Questions Section */}
        {searchTerm === '' && selectedCategory === 'all' && (
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <FaCheckCircle className="text-green-500" />
              <h3 className="text-lg font-semibold text-slate-900">Popular Questions</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {popularFaqs.slice(0, 4).map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => toggleFAQ(faq.id)} // ERROR FIX: Pass ID directly
                  className="text-left p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <p className="text-slate-700 group-hover:text-indigo-600 transition-colors">
                    {faq.question}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FAQ Accordion */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <motion.div key={faq.id} variants={itemVariants} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <button
                  onClick={() => toggleFAQ(faq.id)} // ERROR FIX: Pass ID directly
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-3 pr-4">
                    <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${faq.popular ? 'bg-indigo-500' : 'bg-slate-300'}`} />
                    <span className="text-lg font-semibold text-slate-900">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }} // ERROR FIX: Compare by ID
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openId === faq.id ? <FaChevronUp className="text-indigo-500" /> : <FaChevronDown className="text-slate-400" />}
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {openId === faq.id && ( // ERROR FIX: Compare by ID
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-slate-100">
                        <div className="flex items-start space-x-3">
                          <div className="w-1 h-auto bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full flex-shrink-0" />
                          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
             /* ... (No results found UI) ... */
             <div className="text-center py-12">
                <p className="text-slate-500 text-lg">No questions found matching your search.</p>
                <button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }} className="mt-4 text-indigo-600 font-semibold hover:text-indigo-700">Clear filters</button>
             </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;