import { useState, useEffect, lazy } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { RiGalleryView, RiSettings3Line } from "react-icons/ri";
import SidebarItem from "../Component/SidebarItem";

const DashboardMainContent = lazy(() =>
  import("../Component/DashboardMainContent")
); // Lazy load for performance

const channels = [
  { name: "All Channels", icon: <RiGalleryView size={20} /> },
  { name: "Facebook", icon: <FaFacebookF size={20} /> },
  { name: "Twitter", icon: <FaTwitter size={20} /> },
  { name: "Instagram", icon: <FaInstagram size={20} /> },
  { name: "LinkedIn", icon: <FaLinkedinIn size={20} /> },
];

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState("All Channels");

  // Responsive sidebar collapse
  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden dark:bg-gray-900">
      {/* Topbar */}
      <header className="flex items-center justify-between bg-red-900 text-white px-4 py-3 shadow-md md:px-6">
        <div className="flex items-center space-x-6 md:space-x-10">
          <div className="font-bold text-lg md:text-xl">VivoStat</div>
          <nav className="flex space-x-4 md:space-x-6">
            <button
              className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Publish"
            >
              Publish
            </button>
            <button
              className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Engage"
            >
              Engage
            </button>
            <button
              className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Analyze"
            >
              Analyze
            </button>
            <button
              className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Template"
            >
              Template
            </button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://placehold.co/40x40" // Replace with optimized asset URL
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-white cursor-pointer md:w-10 md:h-10"
          />
        </div>
      </header>

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            isCollapsed ? "w-16" : "w-64"
          } bg-gray-100 border-r flex flex-col transition-all duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700`}
        >
          <div className="flex justify-end p-2">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-700"
              aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
              {isCollapsed ? (
                <FaChevronRight size={20} />
              ) : (
                <FaChevronLeft size={20} />
              )}
            </button>
          </div>
          <div className="flex-1 px-2 space-y-2 overflow-y-auto">
            {channels.map((channel) => (
              <SidebarItem
                key={channel.name}
                icon={channel.icon}
                label={channel.name}
                collapsed={isCollapsed}
                onClick={() => setSelectedChannel(channel.name)}
                isActive={selectedChannel === channel.name}
              />
            ))}
          </div>
          <div className="p-3 flex items-center space-x-2 border-t dark:border-gray-700">
            <RiSettings3Line
              size={20}
              className="text-gray-600 dark:text-gray-300"
            />
            {!isCollapsed && (
              <button
                className="text-blue-600 hover:underline text-sm dark:text-blue-400"
                aria-label="Manage Channels"
              >
                Manage Channels
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
          <DashboardMainContent selectedChannel={selectedChannel} />
        </main>
      </div>
    </div>
  );
}
