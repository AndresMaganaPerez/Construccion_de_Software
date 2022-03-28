const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response) => {
    console.log("A user entered the main page.");
    response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Andrés Magaña</title><meta charset="utf-8"></meta></head>');
    response.write('<body>');
    response.write("<h1>Andrés Magaña</h1>");
    response.write('<p>¡Bienvenido a la página de Andrés Magaña!</p>');
    response.write('<p>Seleccione la opción que quiera conocer de Andrés.</p>');
    response.write('<a href = "/proyectos">Proyectos<br></a>');
    response.write('<a href = "/sobreMi">Sobre Mi<br></a>');
    response.write('<a href = "/contacto">Contacto<br></a>');
    response.write('</body>');
    response.end();
});

app.get('/pending', (request, response) => {
    response.statusCode(404);
    response.write("404 ERROR Not Found");
    response.end();
})

const proyectosRouter = require('../routes/proyectos.js');
app.use('/proyectos', proyectosRouter); //Anything that starts with /proyectos works with userRoutes

const contactoRouter = require('../routes/contacto.js');
app.use('/contacto', contactoRouter); //Anything that starts with /contacto works with userRoutes

app.listen(3000);

