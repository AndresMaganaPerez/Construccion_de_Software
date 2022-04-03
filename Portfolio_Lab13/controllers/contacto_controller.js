const {request, response} = require("express");
//const mensajesJS = [{contenidoMensaje: 'Hola'}];

const Mensaje = require('../models/contacto_model');

exports.contacto = (request, response, next) => {
    response.render('contacto');
}

exports.nuevomensaje = (request, response, next) => {
    response.render('contacto_nuevomensaje', {mensajesEJS: Mensaje.fetchMensajes()})
}

/*
exports.mensajePost = (request, response, next) => {
    mensajesJS.push({contenidoMensaje: request.body.mensaje});
    response.redirect('/contacto/nuevomensaje');
}*/

/*
exports.getMensaje = (request, response, next) => {
    response.render('contacto',{
        mensaje: mensaje.fetchMensajes();
    });
};
 */

exports.postMensaje = (request, response) => {
    console.log("Posted");
    console.log(request.body);
    const nuevo_mensaje = new Mensaje(request.body.mensaje);
    nuevo_mensaje.save();
    //filesystem.writeFileSync('peliculas.txt', peliculas.toString());
    response.redirect('/contacto/nuevomensaje');
};
