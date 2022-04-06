const mensajes = [];

module.exports = class Mensaje {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(texto) {
        this.texto = texto;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        mensajes.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchMensajes() {
        return mensajes;
    }
}