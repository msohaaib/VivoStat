import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavLink from "../data/Navlinks";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import logo from "../assets/Logo/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRefs = useRef([]);

  const toggleDropdown = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current.every((ref) => !ref || !ref.contains(event.target))
      ) {
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
          <Link
            to="/"
            className="text-2xl font-bold text-[rgb(33,49,48)] order-1 flex items-center justify-center"
            aria-label="VivoStat Logo"
          >
            <img src={logo} className="h-10 w-14" alt="VivoStat Logo" />
            <p>VivoStat </p>
          </Link>

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
                  className="relative group dropdown-bridge"
                  ref={
                    link.dropdown
                      ? (el) => (dropdownRefs.current[link.id] = el)
                      : null
                  }
                  onMouseEnter={() => link.dropdown && toggleDropdown(link.id)}
                  onMouseLeave={() => link.dropdown && toggleDropdown(link.id)}
                >
                  {!link.dropdown ? (
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className="block text-[rgb(33,49,48)] hover:text-[rgb(87,90,90)] font-semibold"
                      aria-label={link.name}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <div className="relative">
                      <div className="flex items-center">
                        <button
                          onClick={() => toggleDropdown(link.id)}
                          className="lg:hidden flex items-center text-[rgb(33,49,48)] font-semibold hover:text-[rgb(87,90,90)]"
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
                        <Link
                          to={link.path}
                          className="hidden lg:flex items-center text-[rgb(33,49,48)] font-semibold hover:text-[rgb(87,90,90)]"
                          aria-controls={`dropdown-${link.id}`}
                          aria-expanded={dropdownOpen === link.id}
                          aria-label={link.name}
                        >
                          {link.name}
                          <FaChevronDown
                            className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${
                              dropdownOpen === link.id ? "rotate-180" : ""
                            }`}
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                      {dropdownOpen === link.id && (
                        <div
                          id={`dropdown-${link.id}`}
                          className="relative lg:absolute left-0 mt-2 w-full sm:w-[28rem] md:w-[42rem] bg-[rgb(255,255,250)] text-[rgb(33,49,48)] rounded-b-lg shadow-lg p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-h-[60vh] overflow-y-auto z-50 sm:left-0 md:left-1/2 md:-translate-x-1/2"
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
                                <Link
                                  to={dropdownItem.path || "#"}
                                  className="font-semibold hover:text-[rgb(87,90,90)]"
                                  aria-label={dropdownItem.name}
                                >
                                  {dropdownItem.name}
                                </Link>
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
                <SecondaryButton
                  onClick={closeMenu}
                  to="/login"
                  className="w-full text-center rounded font-semibold"
                  aria-label="Login"
                >
                  Login
                </SecondaryButton>
                <SecondaryButton
                  onClick={closeMenu}
                  to="/signup"
                  aria-label="Get Started Now"
                >
                  Get Started Now
                </SecondaryButton>
              </div>
            </div>
          </div>

          {/* Auth Buttons (center for md, right for lg) */}
          <div
            className={`hidden sm:flex sm:space-x-2 items-center order-3 ${
              isMenuOpen ? "sm:hidden" : ""
            } lg:order-3 lg:flex lg:space-x-4`}
          >
            <SecondaryButton to="/login" aria-label="Login">
              Login
            </SecondaryButton>
            <PrimaryButton to="/signup" aria-label="Get Started Now">
              Get Started Now
            </PrimaryButton>
          </div>

          {/* Hamburger Menu (right, visible for md and below) */}
          <div className="lg:hidden order-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[rgb(33,49,48)] hover:text-[rgb(87,90,90)] rounded"
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
