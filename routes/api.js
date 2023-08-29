const express = require('express');
const router = express.Router();
const Day = require('../models/Day');

router.get('/days', async (req, res) => {
    try {
        const days = await Day.find();
        res.json(days);
    } catch (error) {
        console.error('Error fetching days:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
