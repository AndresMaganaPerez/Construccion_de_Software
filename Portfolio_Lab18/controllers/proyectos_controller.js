const Proyecto = require('../models/proyectos_model');

exports.get = (request, response, next) => {
    Proyecto.fetchAll()     /* Promesa se utiliza para continuar con la programación asíncrona al realizar consulta de datos de la bd. */
        .then(([rows, fieldData]) => {  /* then (como condicional if). Lo que hace es, se llegó a ejecutar, haz lo que sigue. Rows: referencia para las columnas de la tabla (nombres de las columnas). fieldData: la información que contiene las tablas. */
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