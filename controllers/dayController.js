// controllers/dayController.js
const Day = require('../models/Day');

exports.createDay = async (req, res) => {
    try {
        const newDay = new Day(req.body);
        const savedDay = await newDay.save();
        res.json(savedDay);
    } catch (error) {
        console.error('Error saving day data:', error);
        res.status(500).json({ error: 'Error saving day data' });
    }
};
