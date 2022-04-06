const users = [];

module.exports = class Users {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        users.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static login(username, password) {
        return true;
    }
}