import React, { useState } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "./PrimaryButton";
import { FiArrowUpRight } from "react-icons/fi";
motion;

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      priceMonthly: 9,
      features: [
        "1 User Account",
        "Real-Time Analytics",
        "Engagement with Social Media",
        "Limited User Dashboard Customization",
        "Basic Analytics",
        "AI-Assistance",
        "Channels : 3",
      ],
      to: "/signup",
    },
    {
      name: "Pro",
      priceMonthly: 25,
      features: [
        "1 User Account",
        "Advanced Analytics",
        "Engagement with Social Media",
        "Limited User Dashboard Customization",
        "Custom Report Generator",
        "Social Media Scheduler",
        "Multi-Channel Comparison",
        "AI-Assistance",
        "Channels : 8",
      ],
      to: "/signup",
    },
    {
      name: "Enterprise",
      priceMonthly: 69,
      features: [
        "Team Collaboration upto 5 Users",
        "Advanced Analytics",
        "Engagement with Social Media",
        "Advanced User Dashboard Customization",
        "Custom Report Generator",
        "Social Media Scheduler",
        "Multi-Channel Comparison",
        "AI-Assistance",
        "Advanced Engagement Tools",
        "Unlimited Custom Reports and Scheduling",
        "Team Collaboration (up to 5 users)",
        "Channels : Unlimited",
      ],
      to: "/signup",
    },
  ];

  return (
    <section className="bg-[rgb(255,255,250)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-[rgb(33,49,48)] mb-6 text-center">
          Pricing Plans
        </h2>
        <div className="flex justify-center mb-6 space-x-4 items-center flex-wrap">
          <p className="text-gray-600">Pay annually and save up to 20%</p>
          <div className="inline-flex items-center bg-[rgb(176,179,178)] rounded-full p-1 relative overflow-hidden">
            <motion.div
              className="absolute h-[80%] w-auto bg-[rgb(33,49,48)] rounded-full"
              animate={{ x: isAnnual ? "100%" : "0%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.button
              className={`px-4 py-2 rounded-full text-sm font-medium relative z-10`}
              onClick={() => setIsAnnual(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor: !isAnnual ? "rgb(33,49,48)" : "transparent",
                color: !isAnnual ? "white" : "rgb(33,49,48)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Monthly
            </motion.button>
            <motion.button
              className={`px-4 py-2 rounded-full text-sm font-medium relative z-10`}
              onClick={() => setIsAnnual(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor: isAnnual ? "rgb(33,49,48)" : "transparent",
                color: isAnnual ? "white" : "rgb(33,49,48)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              Annual (Save 20%)
            </motion.button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-[rgb(33,49,48)]/10 hover:border-[rgb(33,49,48)] transition-all duration-500"
            >
              <h3 className="text-xl font-semibold my-6 text-[rgb(33,49,48)]">
                {plan.name}
              </h3>
              <motion.p
                className="my-6"
                key={`${plan.name}-${isAnnual}`} // Ensure animation triggers on change
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p className="pt-1 text-5xl font-bold">
                  $
                  {isAnnual
                    ? Math.floor((plan.priceMonthly * 12 * 0.8) / 12)
                    : plan.priceMonthly}
                  /mo
                </p>
                {isAnnual && (
                  <span className="text-sm text-[rgb(33,49,48)]/70">
                    Billed annually (Save 20%)
                  </span>
                )}
                {!isAnnual && (
                  <span className="text-sm text-[rgb(33,49,48)]/70">
                    Billed monthly
                  </span>
                )}
              </motion.p>
              <PrimaryButton
                to={plan.to}
                ariaLabel={`Sign up for ${plan.name}`}
                className="my-6 rounded-xl"
              >
                Start 14-Day Free Trial{" "}
                <FiArrowUpRight className="inline align-center" />
              </PrimaryButton>
              <p className="font-semibold mt-4 text-[rgb(33,49,48)]">
                What we offer:
              </p>
              <ul className="space-y-2 list-disc px-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-base my-4 text-[rgb(33,49,48)]">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
