const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const generalController = require('../controllers/general_controller');
const isAuth = require('../controllers/is-Auth');

router.get("/", isAuth, generalController.general);

module.exports = router;