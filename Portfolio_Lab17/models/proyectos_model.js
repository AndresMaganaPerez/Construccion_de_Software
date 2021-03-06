const db = require('../utils/database');

module.exports = class Proyecto {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre, nueva_descripcion, nueva_imagen) {
        this.nombre = nuevo_nombre;
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        return db.execute('INSERT INTO proyectos (nombre, descripcion, imagen) VALUES (?,?,?)',
            [this.nombre, this.descripcion, this.imagen]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM proyectos');
    }
}