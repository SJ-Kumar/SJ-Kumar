import React, { useState } from "react";
import Blog from "./components/Blog";

const App = () => {
    const [blogs, setBlogs] = useState([]);

    const handleCreateBlog = (blog) => {
        setBlogs([...blogs, blog]);
    };

    const handleDeleteBlog = (blogId) => {
        setBlogs(blogs.filter((blog) => blog.id !== blogId));
    };

    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>{blog.title}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Enter a blog title"
                onChange={(e) => handleCreateBlog({ title: e.target.value })}
            />
            <button onClick={() => handleDeleteBlog(blogs[0].id)}>Delete Blog</button>
        </div>
    );
};

export default App;

