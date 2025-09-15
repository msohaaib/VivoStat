/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwrit_config";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState(""); // For success/error messages
  const navigate = useNavigate(); // For redirection after login

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(""); // Clear previous status

    // Validate form
    if (!form.email || !form.password) {
      setStatus("Email and password are required");
      setIsLoading(false);
      return;
    }

    try {
      // Check if a session is active and log out if necessary
      try {
        await account.get(); // Check if session exists
        await account.deleteSession("current"); // Log out current session
      } catch (sessionError) {
        // No active session, proceed normally
      }

      // Log in with Appwrite
      await account.createEmailPasswordSession(form.email, form.password);
      setStatus("Logged in successfully!");
      // Redirect to dashboard after a short delay to show success message
      setTimeout(() => navigate("/dashboard"), 1000); // Adjust route as needed
    } catch (error) {
      setStatus("Error: " + error.message);
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(33,49,48)] via-[rgb(33,49,76)] to-[rgb(33,49,48)] flex items-center justify-center p-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[rgb(33,49,48)] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[rgb(33,49,48)] rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6">
          <div className="text-center pb-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-[rgb(33,49,48)] to-[rgb(33,49,76)] rounded-2xl flex items-center justify-center text-white font-bold text-xl"
            >
              VS
            </motion.div>
            <h2 className="text-2xl font-bold text-white">Sign In</h2>
            <p className="text-slate-300">Access your account</p>
          </div>

          {/* Login Form */}
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleLogin}
            className="space-y-4"
          >
            {/* Email */}
            <div className="space-y-2">
              <label className="text-slate-200 block">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-slate-200 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, password: e.target.value }))
                  }
                  className="w-full px-3 py-2 pr-10 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <div className="flex justify-end text-sm">
              <button
                type="button"
                className="text-blue-400 hover:text-blue-300"
                onClick={() => alert("Forgot password feature coming soon!")}
              >
                Forgot password?
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[rgb(33,49,48)] to-[rgb(33,49,76)] hover:from-[rgb(33,49,76)] hover:to-[rgb(33,49,48)] text-white rounded-lg h-11 font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              {isLoading ? "Signing In..." : "Sign In →"}
            </button>
          </motion.form>
          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("Error") ? "text-red-400" : "text-green-400"
              }`}
            >
              {status}
            </p>
          )}
          <p className="text-slate-400 text-sm text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Create New Account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
