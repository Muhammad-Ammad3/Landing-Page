// components/Pricing.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faRocket,
  faStar,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { clsx } from "clsx";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      id: 1,
      name: "Starter",
      icon: faRocket,
      price: { monthly: 29, yearly: 23 },
      period: { monthly: "/mo", yearly: "/mo" },
      desc: "Perfect for side projects",
      features: [
        "5 Projects",
        "10GB Storage",
        "Basic Analytics",
        "Community Support",
      ],
      notIncluded: ["API Access", "Custom Domain"],
      color: "from-blue-500 to-cyan-500",
      savings: "Save $72/year",
    },
    {
      id: 2,
      name: "Pro",
      icon: faStar,
      price: { monthly: 79, yearly: 63 },
      period: { monthly: "/mo", yearly: "/mo" },
      desc: "For growing teams",
      features: [
        "Unlimited Projects",
        "100GB Storage",
        "Advanced Analytics",
        "Priority Support",
        "API Access",
      ],
      popular: true,
      color: "from-indigo-600 to-purple-600",
      savings: "Save $192/year",
    },
    {
      id: 3,
      name: "Enterprise",
      icon: faBuilding,
      price: { monthly: "Custom", yearly: "Custom" },
      period: { monthly: "", yearly: "" },
      desc: "For large organizations",
      features: [
        "Unlimited Everything",
        "Dedicated Server",
        "Custom SLA",
        "24/7 Phone Support",
        "SSO",
      ],
      color: "from-slate-700 to-slate-900",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Simple, transparent pricing
          </h2>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span
              className={
                billingCycle === "monthly"
                  ? "text-slate-900 font-bold"
                  : "text-slate-500"
              }
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle((prev) =>
                  prev === "monthly" ? "yearly" : "monthly",
                )
              }
              className="w-16 h-8 bg-indigo-600 rounded-full p-1 flex items-center"
            >
              <motion.div
                animate={{ x: billingCycle === "monthly" ? 0 : 32 }}
                className="w-6 h-6 bg-white rounded-full shadow"
              />
            </button>
            <span
              className={
                billingCycle === "yearly"
                  ? "text-slate-900 font-bold"
                  : "text-slate-500"
              }
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -10 }}
              className={clsx(
                "bg-white p-8 rounded-3xl shadow-xl border",
                plan.popular
                  ? "border-indigo-500 ring-2 ring-indigo-500"
                  : "border-slate-100",
              )}
            >
              {plan.popular && (
                <div className="text-xs font-bold text-indigo-600 uppercase mb-4">
                  Most Popular
                </div>
              )}
              <div
                className={`w-12 h-12 rounded-xl bg-linear-to-r ${plan.color} flex items-center justify-center mb-6`}
              >
                <FontAwesomeIcon icon={plan.icon} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6">{plan.desc}</p>

              <div className="mb-8">
                <span className="text-4xl font-extrabold">
                  $
                  {typeof plan.price.monthly === "number"
                    ? plan.price[billingCycle]
                    : plan.price.monthly}
                </span>
                <span className="text-slate-400 font-medium">
                  {plan.period[billingCycle]}
                </span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 text-xs"
                    />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button
                className={clsx(
                  "w-full py-3 rounded-xl font-bold transition",
                  plan.popular
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-100 text-slate-900",
                )}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
