import { account, ID } from "./appwrit_config";

// Send OTP to email
export const sendOTP = async (email) => {
  try {
    // Generate a unique userId for OTP login
    const userId = ID.unique();
    const response = await account.createEmailSession(email);
    console.log("OTP sent:", response);
    alert("Check your email for the OTP code!");
    return { userId };
  } catch (error) {
    console.error("Error sending OTP:", error);
    alert(error.message || "Failed to send OTP");
  }
};

// Verify OTP
export const verifyOTP = async (userId, secret) => {
  try {
    const session = await account.createSession(userId, secret);
    console.log("Logged in successfully:", session);
    alert("Login successful!");
    return session;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    alert(error.message || "Failed to verify OTP");
  }
};
