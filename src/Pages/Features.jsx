import React, { useState, useEffect, useRef } from "react";
import features, { tabs } from "../data/Features";
import { ImCross } from "react-icons/im";
import { FiArrowUpRight } from "react-icons/fi";
import PrimaryButton from "../Component/PrimaryButton";
import socailGrowth from "../assets/featureSection/social-media.png";

// Transform features data into cards
const cards = features.reduce(
  (acc, feature) => {
    // Add to 'all' tab
    acc.All.push({
      id: feature.id,
      icon: feature.icon,
      title: feature.name,
      content: feature.description,
      linkText: "Discover More",
    });

    // Add to 'core' or 'top' tab based on category
    const tabId = feature.category === "Core Features" ? "Core" : "Top";
    if (!acc[tabId]) {
      acc[tabId] = [];
    }
    acc[tabId].push({
      id: feature.id,
      icon: feature.icon,
      title: feature.name,
      content: feature.description,
      linkText: "Learn More",
    });

    return acc;
  },
  { All: [], Top: [], Core: [] } // Initialize with empty arrays for all tabs
);

const Features = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const popupRef = useRef(null); // Ref for the popup content

  const openPopup = (card) => {
    setSelectedCard(card);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isPopupOpen) {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isPopupOpen]);

  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  return (
    <>
      <div className="bg-[rgb(33,49,48)] py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-[rgb(250,250,255)] mb-8">
          One tool for all your social media needs
        </h1>
        <p className="text-lg text-center text-[rgb(244,242,242)] max-w-2xl mx-auto">
          Easily schedule posts, engage with your audience, and get insights
          that matter.
        </p>
      </div>
      <div className="container mx-auto my-8 flex flex-row min-h-screen">
        <div className="bg-white p-4 mb-4 rounded-md w-1/4">
          <div className="flex flex-col space-y-2">
            {tabs.map((tab) => (
              <div key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-md w-full text-left ${
                    activeTab === tab.id
                      ? "text-[rgb(33,48,49)] border-r-2 border-[rgb(33,48,49)] font-semibold bg-gray-200"
                      : "text-[rgb(33,48,49)]"
                  }`}
                >
                  {tab.label}
                </button>
                <hr className="border-[rgba(33,48,49,0.1)] rounded-md" />
              </div>
            ))}
          </div>
        </div>
        <div className="inner-div-2 bg-white p-4 rounded-md w-3/4 ml-4">
          <div className="mb-4 text-xl font-semibold">{activeTab}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cards[activeTab].map((card) => (
              <div
                key={card.id}
                className="card bg-gray-50 p-4 rounded-md shadow-sm flex flex-col border-1 border-transparent hover:border-1 hover:border-[rgb(33,48,49)] hover:bg-[rgba(33,48,49,0.1)] hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span className="text-2xl mr-2">{card.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-gray-600">{card.content}</p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openPopup(card);
                    }}
                    className="text-blue-500 hover:text-blue-700 hover:underline mt-2 inline-block"
                  >
                    {card.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isPopupOpen && selectedCard && (
          <div
            className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={handleOutsideClick}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative"
              ref={popupRef}
            >
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-[rgb(33,48,49)] hover:text-black"
              >
                <ImCross className="h-5 w-5" />
              </button>
              <h3 className="text-xl font-bold mb-4">{selectedCard.title}</h3>
              <p className="text-gray-700 mb-4">{selectedCard.content}</p>
            </div>
          </div>
        )}
      </div>
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
    </>
  );
};

export default Features;
