const {request, response} = require("express");
const Users = require('../models/users_model');
const bcrypt = require('bcryptjs');

exports.general = (request, response, next) => {
    response.render('login');
}

exports.postLogin = (request, response, next) => {
    Users.comparison_login(request.body.Username) /* Esta es una promesa. Realiza la consulta del usuario ingresado en forms, dentro de la bd. */
        .then(([rows, fieldData]) => {  /* then (como condicional if). Lo que hace es, se llegó a ejecutar, haz lo que sigue. Rows: referencia para las columnas de la tabla (nombres de las columnas). fieldData: la información que contiene las tablas. */
            console.log(rows);
            if (rows.length > 0) {  /* Se utiliza rows.length para recuperar el número de filas que regresó la consulta */
                const usuario = new Users(rows[0].username, rows[0].password); /* Se hace referencia al usuario que ya está registrado en la bd. */
                bcrypt.compare(request.body.Password, usuario.password)   /* Compara las contraseñas ingresadas en el forms de Login */
                    .then((doMatch) => {  /* Genera una función anónima llamada doMatch */
                        if (doMatch) {  /* Compara las contraseñas ingresadas en el forms de Login */
                            request.session.isLoggedIn = true;  /* request.session se utiliza para generar una variable de sesión. Lo que sigue es el nombre de la variable que se utiliza. Y se iguala al valor que se quiere utilizar en la variable de sesión.*/
                            request.session.user = usuario;     /* Se ingresan a la variable de sesión, el usuario y la contraseña del objeto creado anteriormente. */
                            return request.session.save((err) => { /* Guarda las variables de sesión con método de las variables de sesión .save . */
                                response.redirect('/general');  /* Después de guardar las variables de sesión, ya te lleva al interior de la página web.*/
                            });
                        }
                        response.redirect('/'); /* Si la contraseña está mal escrita, se mantiene en el login */
                    }).catch((err) => { /* No se logró realizar la consulta a la bd, manténme en el login. */
                    response.redirect('/');
                });
            } else {
                response.redirect('/');
            }
        })
        .catch(err => {
            console.log(err);
        });



    /*if (users.login(request.body.Username, request.body.Password)){
        request.session.username = request.body.Username;
        console.log(request.session.username);
        response.redirect('/general');
    } else {
        response.redirect('/');
    }*/
}

exports.logOut = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/');
    });
}
