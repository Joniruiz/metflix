const express = require('express');
const router = express.Router();

// Controllers de usuarios

const {test,register,login} = require('../controllers/usersControllers');

//Rutas

router.get('/test',test)
router.post('/register',register)
router.post('/login',login)
module.exports = router;