import React, { useState, useEffect } from "react";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import BlogDetail from "./components/BlogDetail";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");

    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs)); // Parse and set state
    }
  }, []);

  const addBlog = (blog) => {
    const updatedBlogs = [...blogs, blog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs)); // Save to localStorage
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          My Blog Page
        </h1>
        {selectedBlog ? (
          <BlogDetail
            blog={selectedBlog}
            goBack={() => setSelectedBlog(null)}
          />
        ) : (
          <>
            <BlogForm addBlog={addBlog} />
            <BlogList blogs={blogs} selectBlog={setSelectedBlog} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
