const {request, response} = require("express");

const Mensaje = require('../models/contacto_model');


exports.contacto = (request, response, next) => {
    response.render('contacto');
}

exports.postMensaje = (request, response) => {
    console.log("Posted");
    console.log(request.body);
    const nuevo_mensaje = new Mensaje(request.body.mensaje);
    nuevo_mensaje.save();
    response.setHeader('Set-Cookie', 'mensajes_cookies='+ nuevo_mensaje.texto); /* Cookies */
    response.redirect('/contacto/nuevomensaje');
};

exports.nuevomensaje = (request, response, next) => {
    response.render('contacto_nuevomensaje', {mensajesEJS: Mensaje.fetchMensajes(), msj_cookie: request.cookies.mensajes_cookies});
    /* console.log(request.get('Cookie').split('=')[1]); */
    console.log(request.cookies.mensajes_cookies);
}
