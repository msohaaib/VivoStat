import React, { lazy, Suspense } from "react";
import socailGrowth from "../assets/CTA/CTABG.png";
import PrimaryButton from "../Component/PrimaryButton";
import { FiArrowUpRight } from "react-icons/fi";
const PricingSection = lazy(() => import("../Component/PricingSection"));

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      features: {
        "User Accounts": "1 User Account",
        "Real-Time Analytics": true,
        "Basic Analytics": true,
        "Advanced Analytics": false,
        "Custom Report Generator": false,
        "Unlimited Custom Reports": false,
        "Engagement with Social Media": true,
        "Social Media Scheduler": false,
        "Advanced Engagement Tools": false,
        "Limited User Dashboard Customization": true,
        "Advanced User Dashboard Customization": false,
        Channels: "3 Channels",
        "AI-Assistance": true,
        "Multi-Channel Comparison": false,
        "Team Collaboration": false,
      },
    },
    {
      name: "Pro",
      features: {
        "User Accounts": "1 User Account",
        "Real-Time Analytics": true,
        "Basic Analytics": false,
        "Advanced Analytics": true,
        "Custom Report Generator": true,
        "Unlimited Custom Reports": false,
        "Engagement with Social Media": true,
        "Social Media Scheduler": true,
        "Advanced Engagement Tools": false,
        "Limited User Dashboard Customization": true,
        "Advanced User Dashboard Customization": false,
        Channels: "8 Channels",
        "AI-Assistance": true,
        "Multi-Channel Comparison": true,
        "Team Collaboration": false,
      },
    },
    {
      name: "Enterprise",
      features: {
        "User Accounts": "Team Collaboration (up to 5 users)",
        "Real-Time Analytics": true,
        "Basic Analytics": false,
        "Advanced Analytics": true,
        "Custom Report Generator": true,
        "Unlimited Custom Reports": true,
        "Engagement with Social Media": true,
        "Social Media Scheduler": true,
        "Advanced Engagement Tools": true,
        "Limited User Dashboard Customization": false,
        "Advanced User Dashboard Customization": true,
        Channels: "Unlimited Channels",
        "AI-Assistance": true,
        "Multi-Channel Comparison": true,
        "Team Collaboration": true,
      },
    },
  ];

  const faqs = [
    {
      question: "What features are supported for each pricing plan?",
      answer:
        "Supporting structuring plans to meet your needs: Starter includes basic analytics and 3 channels, Pro offers advanced analytics and 8 channels, and Enterprise provides unlimited channels with team collaboration for up to 5 users. Detailed features are listed under each plan on the pricing page.",
    },
    {
      question: "What is the billing cycle for each plan?",
      answer:
        "Billing occurs monthly by default, with an option to switch to annual billing, offering a 20% discount (e.g., $7.20/mo for Starter annually vs. $9/mo monthly). Annual billing is billed upfront for the year.",
    },
    {
      question: "Does payment methods buffer accept?",
      answer:
        "We accept major credit cards, PayPal, and bank transfers. Payment details are processed securely via our payment gateway.",
    },
    {
      question: "What happens at the end of the 14-day trial?",
      answer:
        "The 14-day free trial ends automatically, and you will need to select a paid plan to continue using the service. No charges apply during the trial unless you upgrade early.",
    },
    {
      question: "Can I keep my three channels if I upgrade from Free plan?",
      answer:
        "Yes, upgrading from a free plan retains your existing channels, and you can add more based on your new plan's limit (e.g., 8 for Pro, unlimited for Enterprise).",
    },
    {
      question:
        "What if Buffer doesn't value my nonprofit organizations and charities?",
      answer:
        "We value all users, including nonprofits. Contact our support team for potential discounts or tailored plans for charitable organizations.",
    },
    {
      question: "When was the price of Buffer's last updated?",
      answer:
        "Pricing was last updated on August 27, 2025. Check back periodically for any future adjustments.",
    },
  ];

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PricingSection />
      </Suspense>
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-[rgb(33,49,48)] mb-6 text-center">
            Pricing Plans Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[rgb(33,49,48)]/10">
                  <th className="p-4 font-semibold text-[rgb(33,49,48)]">
                    Features
                  </th>
                  <th
                    className="p-4 font-semibold text-[rgb(33,49,48)]"
                    scope="col"
                  >
                    Starter
                  </th>
                  <th
                    className="p-4 font-semibold text-[rgb(33,49,48)] relative"
                    scope="col"
                  >
                    Pro
                  </th>
                  <th
                    className="p-4 font-semibold text-[rgb(33,49,48)]"
                    scope="col"
                  >
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(plans[0].features).map((category) => (
                  <tr
                    key={category}
                    className="border-t border-[rgb(33,49,48)]/10"
                  >
                    <td className="p-4 font-medium text-[rgb(33,49,48)]">
                      {category}
                    </td>
                    {plans.map((plan) => (
                      <td
                        key={`${plan.name}-${category}`}
                        className="p-4 text-[rgb(33,49,48)]"
                      >
                        {typeof plan.features[category] === "boolean"
                          ? plan.features[category]
                            ? "✓"
                            : "-"
                          : plan.features[category]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-[rgb(33,49,48)]/70 mt-6">
            Need more than 8 channels? The Enterprise plan is for you!
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        style={{
          backgroundImage: `url(${socailGrowth})`,
        }}
        className={
          "py-12 px-4 sm:px-6 lg:px-8 my-12 bg-cover bg-center bg-fixed"
        }
      >
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-black mb-8">
            Sign up today and take your social media Accounts to the next level!
          </p>
          <PrimaryButton to="/signup" aria-label="Sign Up Now">
            Start 14-Day Free Trial{" "}
            <FiArrowUpRight className="inline align-center" />
          </PrimaryButton>
        </div>
      </section>

      <section className="bg-[rgb(255,255,250)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-[rgb(33,49,48)] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <summary className="text-lg font-semibold text-[rgb(33,49,48)] cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-4 text-base text-[rgb(33,49,48)]/80">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
