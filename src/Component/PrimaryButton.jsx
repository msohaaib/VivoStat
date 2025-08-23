import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({ to, onClick, children, className, ariaLabel }) => {
  const baseClasses =
    "inline-block bg-[rgb(33,49,48)] text-[rgb(255,255,250)] px-4 py-3 rounded-xl w-max font-semibold font-semibold hover:bg-[rgb(255,255,250)] hover:text-[rgb(33,49,48)] border border-transparent hover:border hover:border-[rgb(33,49,48)] transition-colors duration-300";

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
