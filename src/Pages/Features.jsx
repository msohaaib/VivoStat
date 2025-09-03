// import React from "react";
// import PrimaryButton from "../Component/PrimaryButton";
// import { FiArrowUpRight } from "react-icons/fi";
// import NavLink from "../data/Navlinks";

// const Features = () => {
//   // Find the "Features" item and get its dropdown array
//   const featuresDropdown =
//     NavLink.find((feature) => feature.name === "Features")?.dropdown || [];

//   return (
//     <section className="bg-[rgb(255,255,250)] py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-screen-xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-[rgb(33,49,48)] mb-8">
//           Our Features
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
//           {featuresDropdown.map((item, index) => (
//             <div
//               key={item.name || index}
//               className="p-6 bg-white rounded-lg shadow-md"
//             >
//               <img
//                 src={item.icons}
//                 alt={item.name}
//                 className="w-12 h-12 mx-auto mb-4"
//               />
//               <h3 className="text-xl font-semibold text-[rgb(33,49,48)]">
//                 {item.name}
//               </h3>
//               <p className="text-sm text-[rgb(33,49,48)] mt-2">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//         <PrimaryButton to="/signup" aria-label="Sign Up Now">
//           Start 14-Day Free Trial{" "}
//           <FiArrowUpRight className="inline align-center" />
//         </PrimaryButton>
//       </div>
//     </section>
//   );
// };

// export default Features;

import React, { useState } from "react";

const Features = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const tabs = [
    { id: "tab1", label: "Tab 1" },
    { id: "tab2", label: "Tab 2" },
    { id: "tab3", label: "Tab 3" },
  ];

  const cards = {
    tab1: [
      {
        id: 1,
        title: "Card 1A",
        content: "This is the content of Card 1A.",
        icon: "⭐",
        linkText: "Learn More",
      },
      {
        id: 2,
        title: "Card 1B",
        content: "This is the content of Card 1B.",
        icon: "🌟",
        linkText: "Learn More",
      },
    ],
    tab2: [
      {
        id: 3,
        title: "Card 2A",
        content: "This is the content of Card 2A.",
        icon: "🔥",
        linkText: "Learn More",
      },
      {
        id: 4,
        title: "Card 2B",
        content: "This is the content of Card 2B.",
        icon: "💡",
        linkText: "Learn More",
      },
    ],
    tab3: [
      {
        id: 5,
        title: "Card 3A",
        content: "This is the content of Card 3A.",
        icon: "🚀",
        linkText: "Learn More",
      },
      {
        id: 6,
        title: "Card 3B",
        content: "This is the content of Card 3B.",
        icon: "🌍",
        linkText: "Learn More",
      },
    ],
  };

  const openPopup = (card) => {
    setSelectedCard(card);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg flex flex-row shadow-md">
      <div className="bg-white p-4 mb-4 rounded-md w-1/4">
        <div className="flex flex-col space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md w-full text-left ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="inner-div-2 bg-white p-4 rounded-md w-3/4 ml-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards[activeTab].map((card) => (
            <div
              key={card.id}
              className="card bg-gray-50 p-4 rounded-md shadow-sm flex items-start"
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
                  className="text-blue-500 hover:text-blue-700 underline mt-2 inline-block"
                >
                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isPopupOpen && selectedCard && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">{selectedCard.title}</h3>
            <p className="text-gray-700 mb-4">{selectedCard.content}</p>
            <button
              onClick={closePopup}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
