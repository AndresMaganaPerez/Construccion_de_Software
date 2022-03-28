const express = require('express');
const router = express.Router()

router.get("/", (request, response) => {
    console.log("Someone has entered Peliculas New");
    response.write('<!doctype html>');
    response.write('<html class="no-js" lang="">');
    response.write('<head>');
    response.write('<meta charset="utf-8">');
    response.write('<title>Proyectos</title>');
    response.write('</head>');
    response.write('<body>');
    response.write('<a href = "/">Inicio<br></a>');
    response.write('<a href = "/sobreMi">Sobre Mi<br></a>');
    response.write('<a href = "/contacto">Contacto<br></a>');
    response.write('<h1>Proyectos<h1>');
    response.write('<h2>Medvsa</h2>');
    response.write('<p>Proyecto de marca de ropa. Basada en arte, con diferentes artistas.</p>');
    response.write('<h2>The Nobodies</h2>');
    response.write('<p>Banda de Rock, donde soy el baterista. Hemos tenido bastantes tocadas para ser contadas. La más grande ha sido en el Teletón, donde fue transmitido a nivel internacional.</p>');
    response.end();
});

module.exports = router;