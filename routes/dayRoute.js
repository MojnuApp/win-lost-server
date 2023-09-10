// routes/dayRoutes.js

const express = require('express');
const dayController = require('../controllers/dayController.js');
const verifyToken = require('../middlewares/verifyToken');
const daysController = require('../controllers/dayController');

const router = express.Router();

// ... other routes ...

router.get('/user-days', verifyToken, daysController.getUserDays);
router.delete('/:id', dayController.deleteDay);

module.exports = router;

