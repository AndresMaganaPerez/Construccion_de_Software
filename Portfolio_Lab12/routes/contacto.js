const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const filesystem = require('fs');

router.get("/", (request, response) => {
    response.render('contacto')
});


router.post("/", (request, response) => {
    response.render('contacto')
});

module.exports = router;