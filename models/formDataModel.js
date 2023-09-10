// models/formDataModel.js
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    quitHabits: [String],
    buildHabits: [String],
    lifeObjective: String,
    birthdate: String
});

module.exports = mongoose.model('FormData', formDataSchema);
