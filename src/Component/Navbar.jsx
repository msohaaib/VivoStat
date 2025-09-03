import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLink from "../data/Navlinks";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="bg-[rgb(255,255,250)] text-[rgb(33,49,48)] shadow-md sticky top-0 z-50 w-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-5 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-[rgb(33,49,48)] order-1 flex items-center justify-center"
            aria-label="VivoStat Logo"
          >
            VivoStat
          </Link>

          {/* Nav Links */}
          <div
            className={`${
              isMenuOpen ? "block w-screen h-screen" : "hidden"
            } lg:flex justify-center lg:items-center lg:space-x-8 absolute lg:static top-full left-0 w-full bg-[rgb(255,255,250)] lg:bg-transparent px-4 py-4 lg:px-0 lg:py-0 order-2`}
          >
            <div
              className={`${
                isMenuOpen
                  ? "flex flex-col items-center justify-center text-center space-y-8 relative top-1/2 -translate-y-1/2"
                  : "flex lg:flex-row lg:space-x-8 lg:space-y-0"
              }`}
            >
              {NavLink.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={closeMenu}
                  className="block text-[rgb(33,49,48)] hover:text-[rgb(87,90,90)] font-semibold"
                  aria-label={link.name}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="lg:hidden flex flex-col space-y-3 items-center justify-center w-full">
                <SecondaryButton
                  onClick={closeMenu}
                  to="/login"
                  className="w-full rounded-xl font-semibold block"
                  aria-label="Login"
                >
                  Login
                </SecondaryButton>
                <PrimaryButton
                  to={"/signup"}
                  ariaLabel={`Sign up for ${"VivoStat"}`}
                  className="w-full my-6 rounded-xl block"
                >
                  Get Started Now
                </PrimaryButton>
              </div>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div
            className={`hidden sm:flex sm:space-x-2 items-center order-3 ${
              isMenuOpen ? "sm:hidden" : ""
            } lg:order-3 lg:flex lg:space-x-4`}
          >
            <SecondaryButton to="/login" aria-label="Login">
              Login
            </SecondaryButton>
            <PrimaryButton
              to={"/signup"}
              ariaLabel={`Sign up for ${"VivoStat"}`}
              className="rounded-xl"
            >
              Get Started Now
            </PrimaryButton>
          </div>

          {/* Hamburger Menu */}
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
