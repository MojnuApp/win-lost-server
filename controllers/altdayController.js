// controllers/DayController.js
const Day = require('../models/Day');

exports.createDay = async (req, res) => {
    const {
        userId,
        date,
        finishedWorks,
        notFinishedWorks,
        giftChoice,
        score,
        result,
    } = req.body;

    const day = new Day({
        userId,
        date,
        finishedWorks,
        notFinishedWorks,
        giftChoice,
        score,
        result,
    });

    try {
        const savedDay = await day.save();
        res.json(savedDay);
    } catch (error) {
        res.status(500).json({ error: 'Could not save day entry' });
    }
}
