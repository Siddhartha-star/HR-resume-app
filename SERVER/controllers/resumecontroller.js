// Example implementation
const Resume = require('../models/resume'); // Ensure this path is correct

// Get all resumes
exports.getAllResumes = async (req, res) => {
    try {
        const resumes = await Resume.find();
        res.json({ success: true, resumes });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get a single resume by ID
exports.getResumeById = async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if (!resume) return res.status(404).json({ success: false, message: 'Resume not found' });
        res.json({ success: true, resume });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
