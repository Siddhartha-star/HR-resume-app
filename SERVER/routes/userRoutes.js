const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller');
const validateUser = require('../middleware/validationMiddleware');
const authenticate = require('../middleware/authMiddleware'); // Add this if you have authentication middleware

// User Registration
router.post('/signup', validateUser, UserController.registerUser);

// User Login
router.post('/login', UserController.loginUser);

// Get User Profile (requires authentication)
router.get('/profile', authenticate, UserController.getUserProfile); // Ensure you have this route if needed

module.exports = router;
