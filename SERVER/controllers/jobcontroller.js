const Job = require('../models/job');

// Post a new job
exports.createJob = async (req, res) => {
    try {
        const { title, location, category, description } = req.body;
        const job = new Job({ title, location, category, description });
        await job.save();
        res.status(201).json({ success: true, job });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Search jobs
exports.searchJobs = async (req, res) => {
    try {
        const { title, location, category } = req.query;
        const query = {};
        if (title) query.title = { $regex: title, $options: 'i' };
        if (location) query.location = { $regex: location, $options: 'i' };
        if (category) query.category = category;
        const jobs = await Job.find(query);
        res.json({ success: true, jobs });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get job details
exports.getJobDetails = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
        res.json({ success: true, job });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
