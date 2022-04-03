const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const filesystem = require('fs');

var mensajeJS;
mensajeJS = '';

router.get("/", (request, response) => {
    response.render('contacto', {mensajeEJS: mensajeJS });
});


router.post("/", (request, response) => {
    console.log(request.body);
    console.log(request.body.mensaje);
    mensajeJS = request.body.mensaje;
    filesystem.writeFileSync('mensajes.txt', mensajeJS);
    response.redirect('/contacto');
});

module.exports = router;