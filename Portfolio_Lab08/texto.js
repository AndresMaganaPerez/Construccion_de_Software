let arr = ["Hola", "Hello", "Bonjour"];

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let random = getRandomInt(4, 1);

let palabra = arr[random];

//fs: filesystem

const filesystem = require('fs'); //fs es el modulo

filesystem.writeFileSync('texto.txt', palabra);
