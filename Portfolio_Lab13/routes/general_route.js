const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const generalController = require('../controllers/general_controller');

router.get("/", generalController.general);

module.exports = router;