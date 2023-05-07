const express = require('express');
const multer = require('multer'); // Middleware for handling file uploads
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Destination folder for storing uploaded files

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission for PDF upload
app.post('/upload', upload.single('pdfFile'), (req, res) => {
    // Get form data from request body
    const { title, author } = req.body;
    // Get uploaded file details from multer
    const { originalname, mimetype, path } = req.file;

    // Perform processing with the uploaded file (e.g., save to database, send notifications, etc.)
    // Replace this with your actual processing logic

    // Send success response
    res.status(200).json({ message: 'PDF uploaded successfully' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
