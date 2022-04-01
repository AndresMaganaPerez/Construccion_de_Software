const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.get("/", (request, response) => {
    response.render('sobreMi');
});

module.exports = router;