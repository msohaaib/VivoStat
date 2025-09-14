import { useState, useEffect, useRef } from "react";
import channel from "../data/Channels"; // Adjusted import to match lowercase export
import { ImCross } from "react-icons/im";
import socailGrowth from "../assets/featureSection/social-media.png";
import { FiArrowUpRight } from "react-icons/fi";
import PrimaryButton from "../Component/PrimaryButton";

const Channels = () => {
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
          Our Channels
        </h1>
        <p className="text-lg text-center text-[rgb(244,242,242)] max-w-2xl mx-auto">
          Explore the social media platforms we support to enhance your online
          presence.
        </p>
      </div>
      <div className="container mx-auto my-8 min-h-screen">
        <div className="bg-white p-4 rounded-md max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {channel.map((feature) => (
              <div
                key={feature.id}
                className="card bg-gray-50 p-4 rounded-md shadow-sm flex flex-col items-start border-1 border-transparent hover:border-1 hover:border-[rgb(33,48,49)] hover:bg-[rgba(33,48,49,0.1)] hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span className="text-2xl mr-2">{feature.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.content}</p>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openPopup(feature);
                    }}
                    className="text-blue-500 hover:text-blue-700 hover:underline mt-2 inline-block"
                  >
                    {feature.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isPopupOpen && selectedCard && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"
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

export default Channels;
