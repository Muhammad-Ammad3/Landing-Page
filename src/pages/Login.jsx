// pages/Login.jsx
import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
        <p className="text-slate-500 mb-8">Enter your details to access your account.</p>
        <div className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-xl" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-xl" />
          <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold">Sign In</button>
        </div>
      </div>
    </div>
  );
};
export default Login;