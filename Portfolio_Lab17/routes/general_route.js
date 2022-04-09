const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const isAuth = require('./controllers/is-auth.js');

const generalController = require('../controllers/general_controller');

router.get("/", isAuth, generalController.general);

module.exports = router;