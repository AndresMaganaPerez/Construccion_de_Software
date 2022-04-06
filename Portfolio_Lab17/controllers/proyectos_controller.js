const Proyecto = require('../models/proyectos_model');

exports.get = (request, response, next) => {
    Proyecto.fetchAll()
        .then(([rows, fieldData]) => {
            console.log(rows);
            response.render('proyectos', {proyectos: rows});
        })
        .catch(err => {
            console.log(err);
        });
};

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo_proyecto');
}

exports.post = (request, response, next) => {
    //console.log(request.body);
    const proyecto = new Proyecto(request.body.nombre, request.body.descripcion, request.body.imagen);
    console.log(proyecto);
    proyecto.save()
        .then(() => {
        response.redirect('/proyectos/');
    }) .catch(err => {
        console.log(err);
    })
}