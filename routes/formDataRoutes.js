// routes/formDataRoutes.js
const express = require('express');
const router = express.Router();
const formDataController = require('../controllers/formDataController');
const verifyToken = require('../middlewares/verifyToken');

// Define routes
router.post('/save', verifyToken, formDataController.saveFormData);
router.get('/api/form-data', verifyToken, formDataController.getFormData);

module.exports = router;
