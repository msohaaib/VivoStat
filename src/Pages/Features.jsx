import React from "react";
import { Link } from "react-router-dom";
import Analysis from "../assets/NavbarIcons/Analysis.png";
// Import other feature icons

const features = [
  {
    name: "Real-Time Analytics",
    icon: Analysis,
    description: "Display live metrics...",
  },
  // Add other features from NavLink
];

const Features = () => (
  <section className="bg-[rgb(255,255,250)] py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[rgb(33,49,48)] mb-8">
        Our Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={feature.icon}
              alt={feature.name}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[rgb(33,49,48)]">
              {feature.name}
            </h3>
            <p className="text-sm text-[rgb(33,49,48)] mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <Link
        to="/features"
        className="mt-8 inline-block bg-[rgb(33,49,48)] text-[rgb(255,255,250)] px-6 py-3 rounded font-semibold hover:bg-blue-600"
      >
        Explore Features
      </Link>
    </div>
  </section>
);

export default Features;
