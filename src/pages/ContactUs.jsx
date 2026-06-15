import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";


const CONTACT_INFO = [
  {
    icon: FaEnvelope,
    title: "Email Us",
    details: "hello@nexus.com",
    link: "mailto:hello@nexus.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaPhone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    link: "tel:+15551234567",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    details: "123 Innovation Street, Silicon Valley, CA",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    details: "Mon - Fri: 9am - 6pm PST",
    color: "from-purple-500 to-pink-500",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    errors: {},
  });

  const validate = () => {
    let errs = {};
    if (!formData.name.trim()) errs.name = "Required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.message.trim()) errs.message = "Message required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0)
      return setStatus({ ...status, errors: errs });

    setStatus({ loading: true, success: false, errors: {} });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus({ loading: false, success: true, errors: {} });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus((s) => ({ ...s, success: false })), 4000);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Get in touch
            </h2>
            {CONTACT_INFO.map((info, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100"
              >
                <div
                  className={`p-3 rounded-xl bg-linear-to-r ${info.color} text-white`}
                >
                  <info.icon />
                </div>
                <div>
                  <h4 className="font-bold">{info.title}</h4>
                  {info.link ? (
                    <a href={info.link} className="text-indigo-600 text-sm">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-600">{info.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            <AnimatePresence>
              {status.success && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-2"
                >
                  <FaCheckCircle /> Message successfully sent!
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Name"
                  className="w-full p-3 border rounded-xl"
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Email"
                  className="w-full p-3 border rounded-xl"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your message"
                rows="5"
                className="w-full p-3 border rounded-xl"
              ></textarea>

              <button
                disabled={status.loading}
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition"
              >
                {status.loading ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
