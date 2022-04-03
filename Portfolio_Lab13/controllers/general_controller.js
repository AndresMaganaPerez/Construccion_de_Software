const {request, response} = require("express");

exports.general = (request, response, next) => {
    response.render('general');
}