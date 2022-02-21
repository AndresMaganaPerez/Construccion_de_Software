// variables, constantes, consola
let personaje = "Mario";
console.log(personaje);
console.warn(personaje)
console.error(personaje);
console.info(personaje);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// La siguiente manda un error
//console.log(i);

// alert, prompt, confirm

alert("Esto es una alerta");

const nombre = prompt("¿Cómo te llamas?");  // const: no se puede modificar después la variable
console.log(nombre);

const respuesta = confirm("¿Estás seguro?");
console.log(respuesta);

// Funciones tradicionales
function saltar(){
    console.log("Mario Salta");
}

saltar();

// Funciones modernas
// const funcion = (argumento) => resultado; Se utilizan funciones anónimas, no tiene nombre la función, solamente tiene sus
// argumentos y resultados.
// Técnicamente la funcion de abajo es anónima, pero debido a que no está asociada a alguna variable nunca se ejecutará.
() => console.log("Hola");


// En el ejemplo de abajo se asigno a una variable correr.
const correr = (personaje) => console.log(personaje + " corre");
correr(personaje);

// Arreglos
// const arreglo = ["elemento"];
const personajes = ["Luigi"];
console.log(personajes);

// Agrega elementos al arreglo
// arreglo.push("elemento")
personajes.push(personaje);

// Otra forma
personajes[2] = "Yoshi";

// Agrega espacios vacíos
personajes[4] = "Peach";

// Modifica la longitud del arreglo
personajes.length = 20;

console.log(personajes);

// Sacar elementos del arreglo
personajes.pop();

console.log(personajes);

// Se genera el nombre del atributo
personajes["Nivel"] = 1;

console.log(personajes);

document.getElementById("salida").innerHTML = "Aquí van las salidas para el laboratorio.";


