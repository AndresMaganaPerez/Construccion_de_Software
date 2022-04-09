const {request, response} = require("express");
const users = require('../models/users_model');

exports.general = (request, response, next) => {
    response.render('login');   /* Genera la primera vista a la que se llega */
}

exports.postLogin = (request, response, next) => {
    if (users.login(request.body.Username, request.body.Password)){
        request.session.username = request.body.Username;
        console.log(request.session.username);
        response.redirect('/general');
    } else {
        response.redirect('/');
    }
}

exports.logOut = (request, response, next) => { /* Función para destruir la sesión creada */
    request.session.destroy(() => {
        response.redirect('/');
    });
}
