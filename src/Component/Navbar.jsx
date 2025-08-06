import React, { useState, useEffect, useRef } from "react";
import facebook from "../assets/NavbarIcons/facebook.svg";
import instagram from "../assets/NavbarIcons/instagram.svg";
import linkedin from "../assets/NavbarIcons/linkedin.svg";
import pinterest from "../assets/NavbarIcons/pinterest.svg";
import tiktok from "../assets/NavbarIcons/tiktok.svg";
import twitter from "../assets/NavbarIcons/twitter.svg";
import youtube from "../assets/NavbarIcons/youtube.svg";
import threads from "../assets/NavbarIcons/threads.svg";
import Analysis from "../assets/NavbarIcons/Analysis.png";
import Report from "../assets/NavbarIcons/report.png";
import Scedular from "../assets/NavbarIcons/socialMediaSchedular.png";
import MultiChannelComparison from "../assets/NavbarIcons/multiChannelComparison.png";
import CustomizeDashboard from "../assets/NavbarIcons/CustomizeDashboard.png";
import AIPoweredSuggestion from "../assets/NavbarIcons/AIPoweredSuggestions.png";
import { FaChevronDown } from "react-icons/fa";

const NavLink = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Features",
    path: "/features",
    dropdown: [
      {
        name: "Real-Time Analytics",
        icons: Analysis,
        description:
          "Display live metrics (likes, followers, engagement) for connected social media channels.",
      },
      {
        name: "Custom Report Generator",
        icons: Report,
        description:
          "Allow users to create and download PDF reports for selected channels and date ranges.",
      },
      {
        name: "Social Media Scheduler",
        icons: Scedular,
        description:
          "Schedule posts across channels with a calendar view and preview.",
      },
      {
        name: "Multi-Channel Comparison",
        icons: MultiChannelComparison,
        description:
          "Compare metrics (e.g., growth, engagement) across channels in a single chart.",
      },
      {
        name: "User Dashboard Customization",
        icons: CustomizeDashboard,
        description:
          "Let users customize their dashboard layout and save preferences for quick access.",
      },
      {
        name: "AI-Powered Content Boost",
        icons: AIPoweredSuggestion,
        description:
          "Suggests tailored content ideas and trending hashtags for each channel to enhance engagement.",
      },
    ],
  },
  {
    id: 3,
    name: "Channels",
    path: "/channels",
    dropdown: [
      {
        name: "Facebook",
        icons: facebook,
        description: "Connect with Facebook for social media insights.",
      },
      {
        name: "Instagram",
        icons: instagram,
        description: "Engage with your audience on Instagram.",
      },
      {
        name: "LinkedIn",
        icons: linkedin,
        description: "Professional networking and insights.",
      },
      {
        name: "TikTok",
        icons: tiktok,
        description: "Leverage TikTok for creative marketing.",
      },
      {
        name: "YouTube",
        icons: youtube,
        description: "Video marketing and analytics.",
      },
      {
        name: "Twitter",
        icons: twitter,
        description: "Stay updated with Twitter trends.",
      },
      {
        name: "Pinterest",
        icons: pinterest,
        description: "Visual discovery and inspiration.",
      },
      {
        name: "Threads",
        icons: threads,
        description: "Connect with your audience on Threads.",
      },
    ],
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Pricing",
    path: "/pricing",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[rgb(255,255,250)] text-[rgb(33,49,48)] py-4 shadow-md sticky top-0 z-50 w-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo (left) */}
          <a
            href="/"
            className="text-2xl font-bold text-[rgb(33,49,48)] order-1"
            aria-label="VivoStat Logo"
          >
            VivoStat
          </a>

          {/* Nav Links (center, lg only) */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex justify-center lg:items-center lg:space-x-8 absolute lg:static top-full left-0 w-full bg-[rgb(255,255,250)] lg:bg-transparent px-4 py-4 lg:px-0 lg:py-0 order-2`}
          >
            <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0">
              {NavLink.map((link) => (
                <div
                  key={link.id}
                  className="relative"
                  ref={link.dropdown ? dropdownRef : null}
                >
                  {!link.dropdown ? (
                    <a
                      href={link.path}
                      className="block text-[rgb(33,49,48)] hover:text-blue-400 font-semibold"
                      aria-label={link.name}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(link.id)}
                        className="flex items-center text-[rgb(33,49,48)] font-semibold hover:text-blue-400"
                        aria-controls={`dropdown-${link.id}`}
                        aria-expanded={dropdownOpen === link.id}
                        aria-label={`Toggle ${link.name} dropdown`}
                      >
                        {link.name}
                        <FaChevronDown
                          className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${
                            dropdownOpen === link.id ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {dropdownOpen === link.id && (
                        <div
                          id={`dropdown-${link.id}`}
                          className="absolute left-0 mt-2 w-full sm:w-[28rem] md:w-[42rem] bg-[rgb(255,255,250)] text-[rgb(33,49,48)] rounded-b-lg shadow-lg p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-h-[60vh] overflow-y-auto z-50 sm:left-0 md:left-1/2 md:-translate-x-1/2"
                        >
                          {link.dropdown.map((dropdownItem, index) => (
                            <div
                              key={index}
                              className="flex flex-col space-y-2"
                            >
                              <div className="flex items-center space-x-2">
                                <img
                                  src={dropdownItem.icons}
                                  alt={dropdownItem.name}
                                  className="w-5 sm:w-6 h-5 sm:h-6"
                                  style={{ fill: "currentColor" }}
                                />
                                <a
                                  href={dropdownItem.path || "#"}
                                  className="font-semibold hover:text-blue-400"
                                  aria-label={dropdownItem.name}
                                >
                                  {dropdownItem.name}
                                </a>
                              </div>
                              <p className="text-sm leading-snug">
                                {dropdownItem.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {/* Mobile/Tablet Auth Buttons (inside menu) */}
              <div className="lg:hidden mt-4 space-y-3">
                <a
                  href="/login"
                  className="block text-[rgb(33,49,48)] border border-[rgb(33,49,48)] py-2 px-4 rounded hover:bg-[rgb(33,49,48)] hover:text-[rgb(255,255,250)] text-center transition-colors duration-300"
                  aria-label="Login"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="block bg-[rgb(33,49,48)] text-[rgb(255,255,250)] py-2 px-4 rounded hover:bg-blue-600 text-center transition-colors duration-300"
                  aria-label="Get Started Now"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </div>

          {/* Auth Buttons (center for md, right for lg) */}
          <div
            className={`hidden sm:flex sm:space-x-2 items-center order-3 ${
              isMenuOpen ? "sm:hidden" : ""
            } lg:order-3 lg:flex lg:space-x-4`}
          >
            <a
              href="/login"
              className="text-[rgb(33,49,48)] border border-[rgb(33,49,48)] px-4 py-2 rounded font-semibold hover:bg-[rgb(33,49,48)] hover:text-[rgb(255,255,250)] transition-colors duration-300"
              aria-label="Login"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-[rgb(33,49,48)] w-max text-[rgb(255,255,250)] px-4 py-2 rounded font-semibold hover:bg-blue-600 transition-colors duration-300"
              aria-label="Get Started Now"
            >
              Get Started Now
            </a>
          </div>

          {/* Hamburger Menu (right, visible for md and below) */}
          <div className="lg:hidden order-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[rgb(33,49,48)] hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
