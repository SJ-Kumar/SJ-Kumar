const express = require("express");
const app = express();
const mongoose = require("mongoose");
const socketio = require("socket.io");

// Connect to MongoDB
const MONGODB_URI = "mongodb://localhost:27017/blogs";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Define the Blog model
const BlogSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Blog = mongoose.model("Blog", BlogSchema);

// Create a socket server
const server = socketio(app);

// Listen for new connections
server.on("connection", (socket) => {
    // Listen for the "create-blog" event
    socket.on("create-blog", (blog) => {
        // Create a new blog
        const newBlog = new Blog({
            title: blog.title,
            content: blog.content,
        });
        newBlog.save((err, blog) => {
            if (err) {
                console.log("Error creating blog:", err);
            } else {
                console.log("Blog created:", blog);

                // Send the blog to all connected clients
                socket.broadcast.emit("new-blog", blog);
            }
        });
    });

    // Listen for the "delete-blog" event
    socket.on("delete-blog", (blogId) => {
        // Delete the blog
        Blog.findByIdAndRemove(blogId, (err, blog) => {
            if (err) {
                console.log("Error deleting blog:", err);
            } else {
                console.log("Blog deleted:", blog);

                // Send the blog to all connected clients
                socket.broadcast.emit("blog-deleted", blog);
            }
        });
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
