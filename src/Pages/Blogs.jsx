import React from "react";
import PrimaryButton from "../Component/PrimaryButton";
import blogPosts from "../data/Blogpost";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Blogs</h1>
        <p className="text-lg text-gray-600 mt-2">
          Stay updated with the latest trends and insights from our team.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date}</span>
              </div>
              <PrimaryButton
                className="mt-4 w-full"
                to={`/blog/${post.id}`}
                aria-label={`Read ${post.title}`}
              >
                Read More
              </PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
