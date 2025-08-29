import React from "react";
import PrimaryButton from "../Component/PrimaryButton";
import { FiArrowUpRight } from "react-icons/fi";
import NavLink from "../data/Navlinks";

const Features = () => {
  // Find the "Features" item and get its dropdown array
  const featuresDropdown =
    NavLink.find((feature) => feature.name === "Features")?.dropdown || [];

  return (
    <section className="bg-[rgb(255,255,250)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[rgb(33,49,48)] mb-8">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {featuresDropdown.map((item, index) => (
            <div
              key={item.name || index}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <img
                src={item.icons}
                alt={item.name}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[rgb(33,49,48)]">
                {item.name}
              </h3>
              <p className="text-sm text-[rgb(33,49,48)] mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <PrimaryButton to="/signup" aria-label="Sign Up Now">
          Start 14-Day Free Trial{" "}
          <FiArrowUpRight className="inline align-center" />
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Features;
