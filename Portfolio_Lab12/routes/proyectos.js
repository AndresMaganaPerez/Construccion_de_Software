const express = require('express');
const router = express.Router()

router.get("/", (request, response) => {
    response.render('proyectos')
});

module.exports = router;