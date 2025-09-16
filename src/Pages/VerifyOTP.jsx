import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwrit_config";

const VerifyOTP = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("Verifying OTP...");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = searchParams.get("userId");
    const secret = searchParams.get("secret");

    if (userId && secret) {
      const verifyOtp = async () => {
        try {
          setIsLoading(true);
          await account.updateVerification(userId, secret); // OTP verification
          setStatus("OTP verified successfully! Redirecting to dashboard...");
          setTimeout(() => navigate("/dashboard"), 2000);
        } catch (error) {
          console.error("OTP verification error:", error);
          setStatus(
            "Verification failed: " +
              (error.message || "Invalid OTP. Try again.")
          );
        } finally {
          setIsLoading(false);
        }
      };
      verifyOtp().catch((error) => {
        setStatus("Verification failed: " + error.message);
        setIsLoading(false);
      });
    } else {
      setStatus("Invalid verification link. Please try again.");
      setIsLoading(false);
    }
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[rgb(33,49,48)] via-[rgb(33,49,76)] to-[rgb(33,49,48)] flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
        {isLoading && <p>Verifying...</p>}
        <p>{status}</p>
        {status.includes("failed") && (
          <button
            onClick={() => navigate("/login")}
            className="mt-4 px-4 py-2 bg-blue-600 rounded text-white"
          >
            Back to Login
          </button>
        )}
      </div>
    </div>
  );
};

export default VerifyOTP;
