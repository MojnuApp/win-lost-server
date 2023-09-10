// routes/DayRoutes.js
const express = require('express');
const altdayController = require('../controllers/altdayController');
const router = express.Router();

router.post('/create', altdayController.createDay);

module.exports = router;
