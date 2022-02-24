// Cuadrados y Cubos
function cuadrados() {
    let x = document.getElementById('numero_cuadrados').value;

    // let x = 5;
    let cuadrados = [];
    let cubos = [];

    for (var i = 0; i <= x; i++){
      cuadrados.push(i**2);
      cubos.push(i**3);
    }
    console.log(cuadrados);
    console.log(cubos);

    // Solución con .innerHTML
    /*let out_cuadrados = document.getElementById("Cuadrados");
      out_cuadrados.innerHTML = 'Los cuadrados del arreglo son: ' + cuadrados;
    let out_cubos = document.getElementById("Cubos");
      out_cubos.innerHTML = 'Los cubos del arreglo son: ' + cubos;*/

    // Solución con document.write()
    document.write(`<p id="Cuadrados">Los cuadrados del uno hasta el número ingresado son: ${cuadrados}</p>`);
    document.write(`<p id="Cubos">Los cubos del uno hasta el número ingresado son: ${cubos}</p>`);
}

// Suma Aleatoria
let sum = document.getElementById("suma_aleatoria");

let x = getRandomInt(100);
let y = getRandomInt(100);

sum.innerHTML = `${x} + ${y}`;

let startTime = new Date();

function suma_aleatoria() {
  let endTime = new Date();
  let difTiemp = endTime - startTime;
  difTiemp /= 1000;
  let seconds = Math.round(difTiemp);

  let z = x + y;

  let input = document.getElementById("resp_suma").value;
  let comp = document.getElementById("comprobacion");
  let tiemp = document.getElementById("tiempo");

  if (input == z){
    comp.innerHTML = `El resultado es correcto: ${x} + ${y} = ${z}`;
  } else {
    comp.innerHTML = `Incorrecto, el resultado es: ${x} + ${y} = ${z}`;
  }
  tiemp.innerHTML = `Tu tiempo de respuesta fue: ${seconds} segundos`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Negativos, Ceros y Positivos
function negativos_ceros_positivos(){
  let arr = document.getElementById("arreglo_num").value;
  let split_arr = arr.split(',').map(Number);

  // console.log(split_arr);
  let neg = 0;
  let ceros = 0;
  let pos = 0;

  for (let i = 0; i <= split_arr.length; i++){
    if (split_arr[i] < 0){
      neg++;
    }
    if (split_arr[i] === 0){
      ceros++;
    }
    if (split_arr[i] > 0){
      pos++;
    }
  }

  let cant_neg = document.getElementById("negativos");
  let cant_cer = document.getElementById("ceros");
  let cant_pos = document.getElementById("positivos");

  cant_neg.innerHTML = `La cantidad de negativos en tu arreglo es: ${neg}`;
  cant_cer.innerHTML = `La cantidad de ceros en tu arreglo es: ${ceros}`;
  cant_pos.innerHTML = `La cantidad de positivos en tu arreglo es: ${pos}`;
}

// Promedios
function promedios(){
  let arr = document.getElementById("arreglo_num_prom").value;
  let split_arr = arr.split(',').map(Number);

  // console.log(split_arr);
  let sum = 0;

  for (let i = 0; i < split_arr.length; i++){
    sum += split_arr[i];
  }

  let prom = sum/split_arr.length;

  // console.log(sum);

  let prom_resp = document.getElementById("promedio_resp");

  prom_resp.innerHTML = `El promedio de los números ingresados es: ${prom}`;
}

// Promedios
function inverso(){
  let num = document.getElementById("num").value;
  let arr = Array.from(num.toString());

  console.log(arr);

  let inv = arr.reverse();

  let resp = document.getElementById("num_inv");
  resp.innerHTML = `El inverso del número ingresado es: ${inv}`;
}
