// app.js

const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const cors = require('cors');
const dotenv = require('dotenv');
// const 

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRouter); // Prefix all routes defined in exampleRoutes with /api

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
