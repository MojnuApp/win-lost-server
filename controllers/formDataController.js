// controllers/formDataController.js
const FormData = require('../models/formDataModel');


const saveFormData = async (req, res) => {
    try {

        const formData = new FormData(req.body);
        const savedData = await formData.save();
        res.json(savedData);
    } catch (error) {
        console.error('Error saving Questions data:', error);
        res.status(500).json({ error: 'Error saving Questions data' });
    }
};

const getFormData = async (req, res) => {
    try {
        const userId = req.userId; // Get the user ID from the JWT token (middleware)
        const formData = await FormData.findOne({ userId });

        if (!formData) {
            return res.status(404).json({ message: 'No data found for this user.' });
        }

        return res.status(200).json(formData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    saveFormData,
    getFormData
};
