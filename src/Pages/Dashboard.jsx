import { useState } from "react";
import profile from "../assets/HeroIcons/instagram.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { RiGalleryView } from "react-icons/ri";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState("All Channels");

  return (
    <div className="h-screen flex flex-col">
      {/* Topbar */}
      <header className="flex items-center justify-between bg-gray-800 text-white px-6 py-3 shadow">
        {/* Left side: Logo + Navigation */}
        <div className="flex items-center space-x-10">
          <div className="font-bold text-xl">MyLogo</div>
          <nav className="flex space-x-6">
            <button className="hover:text-gray-300">Publish</button>
            <button className="hover:text-gray-300">Engage</button>
            <button className="hover:text-gray-300">Analyze</button>
            <button className="hover:text-gray-300">Template</button>
          </nav>
        </div>

        {/* Right side: Profile Picture */}
        <div className="flex items-center space-x-4">
          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
          />
        </div>
      </header>

      {/* Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`${
            isCollapsed ? "w-16" : "w-64"
          } bg-gray-100 border-r flex flex-col transition-all duration-300`}
        >
          {/* Expand/Collapse button */}
          <div className="flex justify-end p-2">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1 rounded hover:bg-gray-200"
            >
              {isCollapsed ? (
                <FaChevronRight size={18} />
              ) : (
                <FaChevronLeft size={18} />
              )}
            </button>
          </div>

          {/* Channels */}
          <div className="flex-1 px-2 space-y-2">
            <SidebarItem
              icon={<RiGalleryView size={18} />}
              label="All Channels"
              collapsed={isCollapsed}
              onClick={() => setSelectedChannel("All Channels")}
              isActive={selectedChannel === "All Channels"}
            />
            <SidebarItem
              icon={<FaFacebookF size={18} />}
              label="Facebook"
              collapsed={isCollapsed}
              onClick={() => setSelectedChannel("Facebook")}
              isActive={selectedChannel === "Facebook"}
            />
            <SidebarItem
              icon={<FaTwitter size={18} />}
              label="Twitter"
              collapsed={isCollapsed}
              onClick={() => setSelectedChannel("Twitter")}
              isActive={selectedChannel === "Twitter"}
            />
            <SidebarItem
              icon={<FaInstagram size={18} />}
              label="Instagram"
              collapsed={isCollapsed}
              onClick={() => setSelectedChannel("Instagram")}
              isActive={selectedChannel === "Instagram"}
            />
            <SidebarItem
              icon={<FaLinkedinIn size={18} />}
              label="LinkedIn"
              collapsed={isCollapsed}
              onClick={() => setSelectedChannel("LinkedIn")}
              isActive={selectedChannel === "LinkedIn"}
            />
          </div>

          {/* Manage Channels */}
          <div className="p-3 border-t">
            <button className="text-blue-600 hover:underline text-sm">
              Manage Channels
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white">
          <h1 className="text-2xl font-semibold mb-4">{selectedChannel}</h1>
          <MainContent selectedChannel={selectedChannel} />
        </main>
      </div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, label, collapsed, onClick, isActive }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-3 p-2 rounded cursor-pointer transition ${
        isActive
          ? "bg-blue-100 text-blue-600"
          : "hover:bg-gray-200 text-gray-700"
      }`}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </div>
  );
}

// Dynamic Main Content Component
function MainContent({ selectedChannel }) {
  switch (selectedChannel) {
    case "All Channels":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ChannelCard name="Facebook" />
          <ChannelCard name="Twitter" />
          <ChannelCard name="Instagram" />
          <ChannelCard name="LinkedIn" />
        </div>
      );
    case "Facebook":
      return (
        <p>📘 Manage your Facebook posts, insights, and engagement here.</p>
      );
    case "Twitter":
      return (
        <p>
          🐦 View and schedule tweets, track engagement, and manage analytics.
        </p>
      );
    case "Instagram":
      return (
        <p>📸 Manage Instagram posts, reels, and audience insights here.</p>
      );
    case "LinkedIn":
      return (
        <p>
          💼 Track LinkedIn company page, posts, and professional engagement.
        </p>
      );
    default:
      return <p>Select a channel to view details.</p>;
  }
}

// Card for All Channels View
function ChannelCard({ name }) {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 mt-2">
        Connect and manage your {name} account.
      </p>
      <button className="mt-3 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
        Connect
      </button>
    </div>
  );
}
