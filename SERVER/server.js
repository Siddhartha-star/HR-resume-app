// server.js

// Load environment variables from .env file
require('dotenv').config();

// Import modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import path module for serving static files
const config = require('./config/dbconfig');
const appConfig = require('./config/appconfig');
const userRoutes = require('./routes/userRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const jobRoutes = require('./routes/jobRoutes');
const errorMiddleware = require('./middleware/errorMiddleware'); // Import the error middleware

// Initialize the Express application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Serve static files from the "client/html" folder
//app.use(express.static(path.join(__dirname, '../CLIENT/html')));

// Route setup
app.use('/api/users', userRoutes);
app.use('/api/resumes', resumeRoutes);
app.use('/api/jobs', jobRoutes);

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../CLIENT/html/index.html'));
});

// Error handling middleware should be used after routes
app.use(errorMiddleware);

// Connect to MongoDB
mongoose.connect(config.db.uri, config.db.options)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(appConfig.port, () => {
    console.log(`Server running on http://localhost:${appConfig.port}`);
});
