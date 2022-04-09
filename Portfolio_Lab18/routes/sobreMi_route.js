const express = require('express');
const router = express.Router()

const path = require('path');

const sobreMiController = require('../controllers/sobreMi_controller');
const isAuth = require('../controllers/is-Auth');

router.get("/", isAuth, sobreMiController.get);

module.exports = router;