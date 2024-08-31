const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Job schema
const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    // You can add other fields relevant to the job
});

// Create the Job model
module.exports = mongoose.model('Job', jobSchema);
