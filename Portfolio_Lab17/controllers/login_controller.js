const {request, response} = require("express");
const users = require('../models/users_model');

exports.general = (request, response, next) => {
    response.render('login');
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

exports.logOut = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/');
    });
}
