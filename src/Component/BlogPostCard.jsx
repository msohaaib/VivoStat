import { Link } from "react-router-dom";

const BlogPostCard = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border border-[rgb(33,49,48)]/10 px-4 py-6 rounded-lg hover:border-[rgb(33,49,48)] transition-all duration-500"
        >
          <img
            src={post.image}
            className="w-full h-48 object-cover rounded-md mb-4"
            alt={post.title}
          />
          <Link to={`/blog/${post.id}`}>
            <h3 className="text-xl font-semibold text-[rgb(33,49,48)] mb-2 hover:underline">
              {post.title}
            </h3>
          </Link>
          <div className="text-sm text-[rgb(87,90,90)] mb-2">
            <span>{post.date}</span> | <span>{post.category}</span>
          </div>
          <p className="text-sm text-[rgb(87,90,90)]">{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPostCard;
