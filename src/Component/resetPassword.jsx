// src/components/ResetPassword.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { account } from "../appwrite/appwrit_config";
motion;
const ResetPassword = () => {
  const [form, setForm] = useState({ newPassword: "", confirmPassword: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [userId, setUserId] = useState("");
  const [secret, setSecret] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Parse query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userIdParam = params.get("userId");
    const secretParam = params.get("secret");
    if (!userIdParam || !secretParam) {
      setStatus("Invalid or expired reset link");
    } else {
      setUserId(userIdParam);
      setSecret(secretParam);
    }
  }, [location]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    if (!form.newPassword || !form.confirmPassword) {
      setStatus("Both password fields are required");
      setIsLoading(false);
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setStatus("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      await account.updateRecovery({
        userId: userId,
        secret: secret,
        password: form.newPassword,
      });
      setStatus("Password reset successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setStatus("Error: " + error.message);
      console.error("Reset password error:", error);
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
            <h2 className="text-2xl font-bold text-white">Reset Password</h2>
            <p className="text-slate-300">Enter your new password</p>
          </div>

          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleResetPassword}
            className="space-y-4"
          >
            {/* New Password */}
            <div className="space-y-2">
              <label className="text-slate-200 block">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                value={form.newPassword}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, newPassword: e.target.value }))
                }
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400"
                disabled={isLoading}
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="text-slate-200 block">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !userId || !secret}
              className="w-full bg-gradient-to-r from-[rgb(33,49,48)] to-[rgb(33,49,76)] hover:from-[rgb(33,49,76)] hover:to-[rgb(33,49,48)] text-white rounded-lg h-11 font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              {isLoading ? "Processing..." : "Reset Password →"}
            </button>
          </motion.form>

          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("Error") || status.includes("Invalid")
                  ? "text-red-400"
                  : "text-green-400"
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
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
