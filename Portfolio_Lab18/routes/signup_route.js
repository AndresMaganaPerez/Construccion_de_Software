const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const signupController = require('../controllers/signup_controller');

router.get("/", signupController.get);

router.post("/", signupController.postSignup);

router.get("/logout", signupController.logOut);

module.exports = router;