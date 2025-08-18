import React from "react";
import Hero from "../Component/Hero";
import FeatureSection from "../Component/FeatureSections";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="bg-[rgb(255,255,250)] py-12 px-4 sm:px-6 lg:px-8 my-8">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center gap-8 overflow-hidden">
          {/* Left Side: Text Content */}
          <div className="sm:w-1/2 space-y-8 sm:pr-4">
            <h2 className="text-3xl font-bold text-[rgb(33,49,48)]">
              Manage all social media in one place
            </h2>
            <p className="text-base text-[rgb(33,49,48)] leading-relaxed">
              Streamline your social media strategy with VivoStat. Connect and
              manage platforms like Facebook, Instagram, LinkedIn, and more from
              a single dashboard. Monitor performance, schedule posts, and gain
              insights effortlessly.
            </p>
            <Link
              to="/features"
              className="inline-block bg-[rgb(33,49,48)] text-[rgb(255,255,250)] px-6 py-3 rounded font-semibold hover:bg-blue-600 transition-colors duration-300"
              aria-label="View Supported Channels"
            >
              Learn More
            </Link>
          </div>
          {/* Right Side: Dummy Image */}
          <div className="sm:w-1/2 flex justify-center">
            <img
              src="https://placehold.co/640x384"
              alt="Social media dashboard preview"
              className="w-full max-w-xl h-96 rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
      <FeatureSection />
    </div>
  );
};

export default Home;
