import React from "react";

const BlogDetail = ({ blog, goBack, removeBlog, index }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <div className="flex justify-between">
        <button
          onClick={goBack}
          className="text-blue-500 font-medium hover:underline mb-4"
        >
          &larr; Back
        </button>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{blog.title}</h2>
      <p className="text-gray-700">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
