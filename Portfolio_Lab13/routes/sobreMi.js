const express = require('express');
const router = express.Router()

const path = require('path');

const sobreMiController = require('../controllers/sobreMi_controller');

router.get("/", sobreMiController.get);

module.exports = router;