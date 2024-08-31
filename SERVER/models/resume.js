const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Resume schema
const resumeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    resumeContent: {
        type: String,
        required: true
    },
    // You can add other fields relevant to the resume
});

// Create the Resume model
module.exports = mongoose.model('Resume', resumeSchema);
