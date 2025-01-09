import React from "react";

const BlogList = ({ blogs, selectBlog }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">All Blogs</h2>
      {blogs.length === 0 ? (
        <p className="text-gray-500 text-center">No blogs yet!</p>
      ) : (
        <ul className="space-y-4">
          {blogs.map((blog, index) => (
            <li
              key={index}
              className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => selectBlog(blog)}
            >
              <h3 className="text-xl font-bold text-blue-600">
                {blog.title || "Untitled Blog"}
              </h3>
              <p className="text-gray-700">
                {blog.content
                  ? blog.content.substring(0, 50)
                  : "No content available"}
                ...
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogList;
