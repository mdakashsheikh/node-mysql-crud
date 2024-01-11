const express = require('express');
const { inserData } = require('../controllers/movie.controller');
const router = express.Router();


router.post('/insert', inserData);

module.exports = router;