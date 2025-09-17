import { useState } from "react";
import { motion } from "framer-motion";
import { account } from "../appwrite/appwrit_config";
import { Link } from "react-router-dom";
motion;
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus("Please enter your email");
      return;
    }

    setIsLoading(true);
    setStatus("");
    const resetUrl = import.meta.env.VITE_APP_URL + "/resetPassword";

    try {
      await account.createRecovery(email, resetUrl);
      setStatus("Password reset email sent! Check your inbox.");
    } catch (error) {
      setStatus("Error: " + error.message);
      console.error("Forgot password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(33,49,48)] via-[rgb(33,49,76)] to-[rgb(33,49,48)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Forgot Password
        </h2>
        <p className="text-slate-300 text-center mb-6">
          Enter your email to reset your password
        </p>

        <form onSubmit={handleForgotPassword} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400"
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[rgb(33,49,48)] to-[rgb(33,49,76)] text-white rounded-lg h-11 font-medium transition-all duration-300 hover:scale-[1.02]"
          >
            {isLoading ? "Processing..." : "Send Reset Link →"}
          </button>
        </form>

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
          Back to{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
