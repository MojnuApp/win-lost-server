// models/DayModel.js
const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: false, // Specify that userId should be unique // You can also require userId, if it's always needed
    },
    date: String,
    finishedWorks: [String],
    notFinishedWorks: [String],
    giftChoice: String,
    score: String,
    result: String,

});

module.exports = mongoose.model('Day', daySchema);
