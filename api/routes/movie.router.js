const express = require('express');
const { inserData, getData } = require('../controllers/movie.controller');
const router = express.Router();


router.post('/insert', inserData);
router.get('/get-data', getData);

module.exports = router;