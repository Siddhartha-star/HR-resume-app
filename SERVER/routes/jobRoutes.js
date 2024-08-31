const express = require('express');
const router = express.Router();
const JobController = require('../controllers/jobcontroller');

// Search Jobs
router.get('/search', JobController.searchJobs);

// Get Job Details
router.get('/:id', JobController.getJobDetails);

module.exports = router;
