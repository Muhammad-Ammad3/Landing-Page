import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-2">Create Account</h2>
        <p className="text-slate-500 mb-8">Join Nexus today.</p>
        <div className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-xl" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-xl" />
          <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold">Sign Up</button>
        </div>
        <p className="mt-6 text-center text-slate-600">
          Already have an account? <Link to="/login" className="text-indigo-600 font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default Signup;