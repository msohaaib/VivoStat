import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FiArrowUpRight } from "react-icons/fi";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      priceMonthly: "$9",
      priceAnnual: "$7.20/mo",
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
      priceMonthly: "$25",
      priceAnnual: "$20/mo",
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
      priceMonthly: "$69",
      priceAnnual: "$55/mo",
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
        <h2 className="text-3xl font-bold text-[rgb(33,49,48)] mb-8 text-center">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-[rgb(33,49,48)]/10 hover:border-[rgb(33,49,48)] transition-all duration-500"
            >
              <h3 className="text-xl font-semibold my-6 text-[rgb(33,49,48)]">
                {plan.name}
              </h3>
              {plan.priceAnnual ? (
                <>
                  <p className="my-6">
                    <p className="pt-1 text-5xl font-bold">
                      {plan.priceMonthly}{" "}
                    </p>
                    <span className="text-sm text-[rgb(33,49,48)]/70">
                      Annual: {plan.priceAnnual} (Save 20%)
                    </span>
                  </p>
                  <PrimaryButton
                    to={plan.to}
                    ariaLabel={`Sign up for ${plan.name}`}
                    className="my-6 rounded-xl"
                  >
                    Start 14-Day Free Trial{" "}
                    <FiArrowUpRight className="inline align-center" />
                  </PrimaryButton>
                </>
              ) : (
                <p className="mt-2 text-[rgb(33,49,48)]">{plan.priceMonthly}</p>
              )}
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
