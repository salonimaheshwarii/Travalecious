const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define routes here

// Example route
router.get('/example', authController.exampleFunction);
router.post('/login', authController.login);

module.exports = router;
