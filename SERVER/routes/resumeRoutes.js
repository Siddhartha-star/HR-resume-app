const express = require('express');
const router = express.Router();
const ResumeController = require('../controllers/resumecontroller'); // Ensure this path is correct

// Get all resumes
router.get('/', ResumeController.getAllResumes); // Ensure this method exists in ResumeController

// Get a single resume by ID
router.get('/:id', ResumeController.getResumeById); // Ensure this method exists in ResumeController

// Add other routes as needed

module.exports = router;

