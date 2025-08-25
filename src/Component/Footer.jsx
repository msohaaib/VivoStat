import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-[rgb(46,68,67)] text-white mt-12 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 container mx-auto text-center py-4 px-2">
          <div className="w-full">
            <h3 className="text-left pb-4 font-semibold">About Us</h3>
            <p className="text-left font-extralight text-sm w-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              facilis sapiente dolores, id architecto, consequatur veritatis
              quam odio ex similique amet, vel libero.
            </p>
          </div>
          <div className="w-full">
            <h3 className="text-center pb-4 font-semibold">Quick Links</h3>
            <ul>
              <li className="py-1 hover:underline font-extralight text-sm">
                <Link to="/features">Features</Link>
              </li>
              <li className="py-1 hover:underline font-extralight text-sm">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="py-1 hover:underline font-extralight text-sm">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="py-1 hover:underline font-extralight text-sm">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="py-1 hover:underline font-extralight text-sm">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-center pb-4 font-semibold">Quick Links</h3>
            <ul>
              <li className="py-1 hover:underline font-extralight text-sm">
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li className="py-1 hover:underline font-extralight text-sm">
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li className="py-1 hover:underline font-extralight text-sm">
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between container mx-auto py-4">
          <Link
            to="/"
            className="text-3xl font-bold text-[rgb(250,250,255)]"
            aria-label="VivoStat Logo"
          >
            <p>VivoStat </p>
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/terms"
              className="text-[rgb(250,250,255)] hover:underline font-extralight text-sm"
            >
              Terms & Condition
            </Link>
            <Link
              to="/privacy"
              className="text-[rgb(250,250,255)] hover:underline font-extralight text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/support"
              className="text-[rgb(250,250,255)] hover:underline font-extralight text-sm"
            >
              Support
            </Link>
          </div>
        </div>
        <div className="h-[2px] rounded-3xl bg-gray-600"></div>
        <div className="bg-[rgb(33,49,48)] py-4 text-center">
          <p>&copy; 2025 VivoStat. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
