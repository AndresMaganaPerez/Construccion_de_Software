const {request, response} = require("express");
const Users = require('../models/users_model');

exports.get = (request, response, next) => {
    response.render('signup');
    console.log('Hola');
}

exports.postSignup = (request, response, next) => {
    const nuevo_usuario = new Users(request.body.user, request.body.password);
    console.log('prueba');
    console.log(nuevo_usuario);
    nuevo_usuario.save()
        .then(() => {
            response.redirect('/');
        })
        .catch(err => {console.log(err);
        })
}

exports.logOut = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/');
    });
}

/*

 */
