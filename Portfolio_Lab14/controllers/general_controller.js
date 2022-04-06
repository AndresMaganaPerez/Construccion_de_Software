const {request, response} = require("express");

exports.general = (request, response, next) => {
    const session_user = request.session.username ? request.session.username : '';
    response.render('general', {Username: session_user});
}