const express = require('express');
const router = express.Router();


// Controllers de usuarios
const {test} = require('../controllers/moviesController');

//Rutas

router.get('/test',test)

module.exports = router;