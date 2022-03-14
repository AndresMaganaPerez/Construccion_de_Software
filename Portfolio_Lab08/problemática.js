// Porcentaje de una cantidad aleatoria

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let random = getRandomInt(101, 1);
let porciento = getRandomInt(101, 1);

console.log("Número: ", random);
console.log("Porcentaje: ", porciento);

let total = (porciento * random)/100;

console.log("Total: ", total);