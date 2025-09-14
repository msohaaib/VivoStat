import React, { useState } from "react";
import { BsGrid3X3GapFill, BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import blogPosts from "../data/Blogpost";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [viewStyle, setViewStyle] = useState("grid");

  // Get unique categories from blogPosts
  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  // Filter and sort posts
  const filteredPosts = blogPosts
    .filter((post) => {
      if (selectedCategory !== "All" && post.category !== selectedCategory) {
        return false;
      }
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query)
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOption === "newest") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortOption === "oldest") {
        return new Date(a.date) - new Date(b.date);
      } else if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  return (
    <>
      {/* Header */}
      <div className="bg-[rgb(33,49,48)] py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-[rgb(250,250,255)] mb-8">
          Our Blogs
        </h1>
        <p className="text-lg text-center text-[rgb(244,242,242)] max-w-2xl mx-auto">
          Stay updated with the latest trends and insights from our team.
        </p>
      </div>

      {/* Filters and View Toggle */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-between mb-8 items-center">
          {/* Category Dropdown */}
          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 rounded-full font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[rgb(33,48,49)] transition-all duration-300 shadow-sm"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Search Bar */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts..."
              className="px-4 py-2 rounded-full bg-white text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(33,48,49)] transition-all duration-300 shadow-sm w-xl"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex gap-4">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-2.5 rounded-full font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[rgb(33,48,49)] transition-all duration-300 shadow-sm"
            >
              <option value="newest">Sort by: Newest to Oldest</option>
              <option value="oldest">Sort by: Oldest to Newest</option>
              <option value="title">Sort by: Title (A-Z)</option>
            </select>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewStyle("grid")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewStyle === "grid"
                    ? "bg-[rgb(33,48,49)] text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
                aria-label="Grid view"
              >
                <BsGrid3X3GapFill className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewStyle("list")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewStyle === "list"
                    ? "bg-[rgb(33,48,49)] text-white"
                    : "bg-white text-[rgb(33,48,49)] border border-gray-300 hover:bg-gray-50"
                }`}
                aria-label="List view"
              >
                <BsList className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div
          className={
            viewStyle === "grid"
              ? "grid md:grid-cols-3 gap-8"
              : "flex flex-col gap-6"
          }
        >
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className={
                viewStyle === "grid"
                  ? "bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                  : "bg-white shadow-md hover:shadow-xl transition duration-300 flex flex-col md:flex-row"
              }
            >
              <img
                src={post.image}
                alt={post.title}
                className={
                  viewStyle === "grid"
                    ? "w-full h-48 object-cover"
                    : "w-full md:w-1/3 h-48 object-cover"
                }
              />
              <div className={viewStyle === "grid" ? "p-5" : "p-5 flex-1"}>
                <Link to={`/blog/${post.id}`} className="hover:underline">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 text-sm mb-4">
                  {post.description.length > 100
                    ? post.description.slice(0, 100) + "..."
                    : post.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
