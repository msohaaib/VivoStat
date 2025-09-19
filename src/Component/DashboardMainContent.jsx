import React, { memo } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { RiGalleryView } from "react-icons/ri";

const ChannelIcon = memo(({ channel }) => {
  const icons = {
    "All Channels": <RiGalleryView size={20} className="text-gray-300" />,
    Facebook: <FaFacebookF size={20} className="text-blue-600" />,
    Twitter: <FaTwitter size={20} className="text-blue-400" />,
    Instagram: <FaInstagram size={20} className="text-pink-500" />,
    LinkedIn: <FaLinkedinIn size={20} className="text-blue-700" />,
  };
  return icons[channel] || <RiGalleryView size={20} />;
});

const DashboardMainContent = ({ selectedChannel }) => {
  const Header = memo(() => (
    <>
      <div className="flex flex-col p-4 bg-white shadow-sm dark:bg-gray-800">
        <div className="flex justify-between">
          <div className="flex items-center">
            {" "}
            <ChannelIcon channel={selectedChannel} />
            <h1 className="ml-2 text-xl font-semibold dark:text-white">
              {selectedChannel}
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-2 py-1 border rounded text-sm dark:border-gray-600 dark:text-white">
              List
            </button>
            <button className="px-2 py-1 border rounded text-sm dark:border-gray-600 dark:text-white">
              Calendar
            </button>
            <button className="px-2 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">
              + New Post
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center space-x-2 md:space-x-4 text-gray-300">
            <button>Queue</button>
            <button>Approval</button>
            <button>Sent</button>
          </div>
          <div className="flex items-center space-x-2">
            <select
              className="border rounded p-1 text-sm dark:border-gray-600 dark:text-white"
              aria-label="Filter by Channel"
            >
              <option>All Channels</option>
              <option>Facebook</option>
              <option>Twitter</option>
              <option>Instagram</option>
              <option>LinkedIn</option>
            </select>
            <select
              className="border rounded p-1 text-sm dark:border-gray-600 dark:text-white"
              aria-label="Timezone Settings"
            >
              <option>UTC-5</option>
              <option>UTC-6</option>
              <option>UTC-7</option>
              <option>UTC-8</option>
            </select>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 container mx-auto" />
    </>
  ));

  const Content = memo(() => {
    if (selectedChannel === "All Channels") {
      return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem)] bg-gray-50 animate-fade-in dark:bg-gray-800">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-blue-900">
              <svg
                className="w-8 h-8 text-blue-500 dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
            <h2 className="text-lg font-medium dark:text-white">
              Welcome to VivoStat
            </h2>
            <p className="text-gray-600 mt-2 dark:text-gray-300">
              Connect a channel to start scheduling posts
            </p>
            <div className="mt-4 space-x-2">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                aria-label="Connect a Channel"
              >
                + Connect a Channel
              </button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="p-4 bg-gray-50 h-[calc(100vh-8rem)] rounded-lg shadow-md dark:bg-gray-800">
        <p className="text-lg mb-4 dark:text-white">
          Manage {selectedChannel} posts and engagement here.
        </p>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2 dark:text-white">
            Recent Activity
          </h2>
          {/* Mock table as placeholder; replace with real data/component */}
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="p-2 text-left dark:text-white">Post</th>
                <th className="p-2 text-left dark:text-white">Date</th>
                <th className="p-2 text-left dark:text-white">Engagement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-600">
                <td className="p-2 dark:text-white">Sample Post 1</td>
                <td className="p-2 dark:text-white">2023-09-20</td>
                <td className="p-2 dark:text-white">150 likes</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <Content />
    </div>
  );
};

export default DashboardMainContent;
