// models/Student.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    major: { type: String, required: true },
    enrollment_date: { type: Date, required: true },
    gpa: { type: Number, required: true },
});

module.exports = mongoose.model('Student', StudentSchema);
