const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const filesystem = require('fs');

router.get("/", (request, response) => {
    response.write('<!doctype html>');
    response.write('<html class="no-js" lang="">');
    response.write('<head>');
    response.write('<meta charset="utf-8">');
    response.write('<title>Proyectos</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('<a href = "/">Inicio<br></a>');
    response.write('<a href = "/proyectos">Proyectos<br></a>');
    response.write('<a href = "/sobreMi">Sobre Mi<br></a>');
    response.write('<h1>Contacto<h1>');
    response.write('<h2>Número Telefónico</h2>');
    response.write('<p>443 105 1050</p>');
    response.write('<h2>Correo electrónico académico</h2>');
    response.write('<p>a01067963@tec.mx</p>');
    response.write('<h2>Déjame un mensaje</h2>');
    response.write('<form action="/contacto" method="POST">');
    response.write('<input name="mensaje" type="text">');
    response.write('<input type="submit" value="Enviar">');
    response.write('</form>');
    response.end();
});

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.post("/", (request, response) => {
    const datos = [];

    console.log("Mensaje enviado:");
    console.log(request.body);
    datos.push(request.body);
    console.log(datos);
    filesystem.writeFileSync('../mensajes.txt', datos.toString());
    /*
    response.redirect('/contacto/');
    response.write('<p>El mensaje que escribiste es: <br></p>');
    response.write(datos.toString());
    response.end();*/
});

/*router.post("/",(request, response)=>{
    const datos = [];
    request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
    });
    return request.on('end', () =>{
        console.log(datos);
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nuevo_dato = datos_completos.split('=')[1];
        console.log(nuevo_dato);
        response.write('<!doctype html>');
        response.write('<html class="no-js" lang="">');
        response.write('<head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Proyectos</title>');
        response.write('</head>');
        response.write('<body>');
        response.write('<a href = "/">Inicio</a>');
        response.write('<a href = "/proyectos">Proyectos</a>');
        response.write('<a href = "/sobreMi">Sobre Mi</a>');
        response.write('<h1>Contacto<h1>');
        response.write('<h2>Número Telefónico</h2>');
        response.write('<p>443 105 1050</p>');
        response.write('<h2>Correo electrónico académico</h2>');
        response.write('<p>a01067963@tec.mx</p>');
        response.write('<h2>Déjame un mensaje</h2>');
        response.write('<form action="/contacto" method="POST">');
        response.write('<input name="mensaje" type="text">');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<p>El mensaje que escribiste es: <br></p>');
        response.write(nuevo_dato);
        response.end();
});*/

module.exports = router;