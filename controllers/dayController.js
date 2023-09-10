// controllers/dayController.js

const Day = require('../models/Day');

const dayController = {
    // ... other controller methods ...
    getUserDays: async (req, res) => {
        try {
            const userDays = await Day.find({ userId: req.userId });
            res.json(userDays);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user days' });
        }
    },

    deleteDay: async (req, res) => {
        const dayId = req.params.id;

        try {
            const deletedDay = await Day.findByIdAndRemove(dayId);
            res.json(deletedDay);
        } catch (error) {
            res.status(500).json({ error: 'Error deleting day' });
        }
    }
};

module.exports = dayController;

