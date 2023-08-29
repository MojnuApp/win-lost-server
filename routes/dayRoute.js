// routes/dayRoutes.js
const express = require('express');
const router = express.Router();
const dayController = require('../controllers/dayController');

router.post('/', dayController.createDay);

module.exports = router;
