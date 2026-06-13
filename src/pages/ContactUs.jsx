import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Get in touch</h2>
        <form className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
          <div className="grid grid-cols-1 gap-6">
            <input type="text" placeholder="Your Name" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
            <input type="email" placeholder="Your Email" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
            <textarea placeholder="How can we help?" rows="5" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
            <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;