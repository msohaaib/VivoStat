import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ to, onClick, children, className, ariaLabel }) => {
  const baseClasses =
    "inline-block bg-[rgb(255,255,250)] border w-max text-[rgb(33,49,48)] px-4 py-3 rounded-xl font-semibold hover:bg-[rgb(33,49,48)] hover:text-[rgb(255,255,250)] transition-colors duration-300";

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseClasses} ${className || ""}`}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className || ""}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
