import React from "react";
import Hero from "../Component/Hero";
import FeatureSection from "../Component/FeatureSections";
import { Link } from "react-router-dom";
import socail from "../assets/featureSection/social-media.jpg";
import PricingSection from "../Component/PricingSection";
import PrimaryButton from "../Component/PrimaryButton";
import { FiArrowUpRight } from "react-icons/fi";
import latestPost from "../data/latestPost";
import socailGrowth from "../assets/CTA/CTABG.png";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="bg-[rgb(255,255,250)] py-12 px-4 sm:px-6 lg:px-8 my-12">
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
            <PrimaryButton to="/features" aria-label="View Supported Channels">
              Learn More <FiArrowUpRight className="inline align-center" />
            </PrimaryButton>
          </div>
          {/* Right Side: Image */}
          <div className="sm:w-1/2 flex justify-center">
            <img
              src={socail}
              alt="Social media dashboard preview"
              className="w-full max-w-xl h-96 rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <FeatureSection />
      <PricingSection />

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

      {/* Latest Posts */}
      <section className="container mx-auto bg-[rgb(255,255,250)] my-16">
        <h2 className="text-3xl font-bold text-[rgb(33,49,48)] mb-12 text-center">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {latestPost.map((post) => (
            <div
              key={post.id}
              className="border border-[rgb(33,49,48)]/10 px-4 py-6 rounded-lg hover:border-[rgb(33,49,48)] transition-all duration-500"
            >
              <img
                src={post.img}
                className="w-full h-48 object-cover rounded-md mb-4"
                alt="Post Image"
              />
              <Link to={`/blog/${post.id}`}>
                <h3 className="text-xl font-semibold text-[rgb(33,49,48)] mb-4 hover:underline">
                  {post.title}
                </h3>
              </Link>
              <p className="text-sm text-[rgb(87,90,90)]">{post.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
