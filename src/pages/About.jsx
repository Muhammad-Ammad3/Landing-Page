import { useState } from "react";
import { motion } from "framer-motion";

// Constants moved outside to improve render performance
const TEAM_MEMBERS = [
  {
    name: "John Anderson",
    role: "CEO & Founder",
    bio: "Former Google engineer with 15+ years of experience.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Tech lead at Microsoft, passionate about scalable systems.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Product",
    bio: "Expert in developer tools and intuitive UX design.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Emily Watson",
    role: "Lead Developer",
    bio: "Open source contributor and full-stack architect.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    social: { github: "#", linkedin: "#", twitter: "#" },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-indigo-600 font-bold tracking-widest text-sm">
              ABOUT US
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mt-6 mb-8">
              Building the <span className="text-indigo-600">Future</span> of
              Developer Tools
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We simplify complexity to help teams ship faster, safer, and
              smarter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission/Vision Tabs */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center gap-4 mb-12">
            {["mission", "vision"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-bold transition ${activeTab === tab ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"}`}
              >
                Our {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-10 bg-slate-900 rounded-3xl text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4 capitalize">
              Our {activeTab}
            </h2>
            <p className="text-lg text-slate-300">
              {activeTab === "mission"
                ? "To democratize access to powerful infrastructure for every team globally."
                : "A world where developers spend 90% of their time creating value, not managing infrastructure."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Meet Our Team
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  loading="lazy"
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-indigo-600 text-sm mb-2">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
