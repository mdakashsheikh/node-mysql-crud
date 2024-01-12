const express = require('express');
const { inserData, getData, editData, deleteData } = require('../controllers/movie.controller');
const router = express.Router();


router.post('/insert', inserData);
router.get('/get-data', getData);
router.post('/edit/:id', editData)
router.delete('/delete/:id', deleteData)

module.exports = router;