const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const loginController = require('../controllers/login_controller');

router.get("/", loginController.general);

router.post("/", loginController.postLogin);

router.get("/logout", loginController.logOut);

module.exports = router;