// models/Day.js
const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    date: String,
    namaz: Number,
    // ... Define other fields ...
    quran: Number,
    noSmoking: Number,
    contactFamily: Number,
    jobApply: Number,
    exercise: Number,
    mernJob: Number,
    reactBook: Number,
    certificateStudy: Number,
    water: Number,
    word: Number,
    sleep: Number,
    importantWork: String,
    giftChoice: String,
    score: String,
    result: String
});

module.exports = mongoose.model('Day', daySchema);

