const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.get("/", (request, response) => {
    response.render('general');
});

module.exports = router;