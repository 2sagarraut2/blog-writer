import React from "react";

const BlogList = ({ blogs, selectBlog, removeBlog }) => {
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">
        All Blogs
      </h2>
      {blogs.length === 0 ? (
        <p className="text-gray-500 text-center italic">
          No blogs available. Start by adding one!
        </p>
      ) : (
        <ul className="space-y-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow"
            >
              <li
                className="flex-1 cursor-pointer"
                onClick={() => selectBlog(blog)}
              >
                <h3 className="text-2xl font-bold text-blue-500 mb-2">
                  {blog.title || "Untitled Blog"}
                </h3>
                <p className="text-gray-700 text-sm">
                  {blog.content
                    ? `${blog.content.substring(0, 80)}...`
                    : "No content available"}
                </p>
              </li>
              <button
                onClick={() => removeBlog(index)}
                className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-md font-medium transition-all"
              >
                &times; Delete
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogList;
