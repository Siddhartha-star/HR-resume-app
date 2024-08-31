const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: String
    // Add other fields as necessary
});

module.exports = mongoose.model('User', userSchema);
