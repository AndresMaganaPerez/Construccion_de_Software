const db = require("../utils/database");
const bcrypt = require('bcryptjs');
const users = [];

module.exports = class Users {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(_username, _password) {
        this.username = _username;
        this.password = _password;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        return bcrypt.hash(this.password, 12)
            .then ((crypt_pwd) => {
                db.execute('INSERT INTO usuarios (username, password) VALUES (?,?)',    /* Los signos de interrogación sirven para pasar parámetros através de javascript */
                [this.username, crypt_pwd])  /* Se pasan los atributos del objeto que utilizará la consulta de sql definida arriba. */
            })
            .catch((err) => {
                return err; /* Si ocurre un error en la consulta lo imprimirá en la terminal. */
            })
    }

    //Este método servirá para ver si existe un usuario o no.
    static comparison_login(username) {
        return db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
    }
}