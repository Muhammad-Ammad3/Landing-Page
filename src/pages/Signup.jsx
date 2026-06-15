import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaSpinner,
} from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword)
      return alert("Passwords don't match!");
    if (!formData.agreeTerms) return alert("Please agree to terms.");

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Account created!");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 relative">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            {
              name: "fullName",
              label: "Full Name",
              type: "text",
              icon: FaUser,
            },
            { name: "email", label: "Email", type: "email", icon: FaEnvelope },
            {
              name: "password",
              label: "Password",
              type: showPassword ? "text" : "password",
              icon: FaLock,
            },
            {
              name: "confirmPassword",
              label: "Confirm Password",
              type: showPassword ? "text" : "password",
              icon: FaLock,
            },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {field.label}
              </label>
              <div className="relative">
                <field.icon className="absolute left-3 top-3.5 text-slate-400" />
                <input
                  name={field.name}
                  type={field.type}
                  required
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full pl-10 p-3 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
          ))}

          <label className="flex items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            I agree to Terms & Privacy
          </label>

          <button
            disabled={isLoading}
            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition flex justify-center"
          >
            {isLoading ? <FaSpinner className="animate-spin" /> : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-slate-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-bold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
