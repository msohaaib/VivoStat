import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwrit_config";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Verifying your email...");
  const navigate = useNavigate();

  useEffect(() => {
    const userId = searchParams.get("userId");
    const secret = decodeURIComponent(searchParams.get("secret") || "");

    if (!userId || !secret) {
      setStatus(
        "Check your email and click the verification link to verify your account."
      );
      return;
    }

    const verifyEmail = async () => {
      try {
        await account.updateVerification(userId, secret);
        setStatus("Email verified successfully! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } catch (error) {
        setStatus(
          "Verification failed: " +
            (error?.message || "Invalid or expired verification link.")
        );
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(33,49,48)] via-[rgb(33,49,76)] to-[rgb(33,49,48)] flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
        <p>{status}</p>
        <button
          onClick={() => navigate("/login")}
          className="mt-4 px-4 py-2 bg-blue-600 rounded text-white"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Verify;
