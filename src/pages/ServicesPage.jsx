import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGaugeHigh, FaShield } from "react-icons/fa6"; // Yeh icons fa6 mein hain

import { FaCheckCircle } from "react-icons/fa";

const servicesDetail = [
  {
    id: 1,
    title: "Lightning Fast Performance",
    icon: FaGaugeHigh,
    desc: "Experience blazing fast load times",
    fullInfo:
      "We use edge computing and CDN integration to ensure content delivery in milliseconds.",
    benefits: ["50ms response", "Global CDN", "Auto-scaling"],
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "Enterprise Security",
    icon: FaShield,
    desc: "Bank-grade security",
    fullInfo:
      "We provide SOC2 compliance and end-to-end encryption to keep your data safe.",
    benefits: ["256-bit encryption", "DDoS protection", "Backups"],
    color: "text-indigo-500",
  },
  // ... baaki items aap isi format mein rakhein
];

const ServicesPage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-slate-900">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesDetail.map((service) => (
            <motion.div
              key={service.id}
              layout
              className="bg-white p-6 rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-all"
              onClick={() =>
                setExpandedCard(expandedCard === service.id ? null : service.id)
              }
            >
              <service.icon className={`text-4xl mb-4 ${service.color}`} />
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-indigo-600 font-medium mb-4">{service.desc}</p>

              <AnimatePresence>
                {expandedCard === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className="text-slate-600 mb-4">{service.fullInfo}</p>
                    {service.benefits.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-slate-500"
                      >
                        <FaCheckCircle className="text-green-500" /> {b}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
