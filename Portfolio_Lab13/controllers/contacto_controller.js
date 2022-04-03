const {request, response} = require("express");
const mensajesJS = [{contenidoMensaje: 'Hola'}];

exports.contacto = (request, response, next) => {
    response.render('contacto', {mensajesEJS: mensajesJS});
}

exports.nuevomensaje = (request, response, next) => {
    response.render('contacto_nuevomensaje', {mensajesEJS: mensajesJS})
}

exports.mensajePost = (request, response, next) => {
    mensajesJS.push({contenidoMensaje: request.body.mensaje});
    response.redirect('/contacto/nuevomensaje');
}


/*
exports.getMensaje = (request, response, next) => {
    response.render('contacto',{
        mensaje: mensaje.fetchMensajes();
    });
};
 */
/*
exports.postMensaje = (request, response) => {
    console.log("Posted");
    console.log(request.body);
    const nuevo_mensaje = new Mensaje(request.body.mensaje);
    nueva_pelicula.save();
    //filesystem.writeFileSync('peliculas.txt', peliculas.toString());
    response.redirect('/peliculas/');
    response.end();
};
*/
