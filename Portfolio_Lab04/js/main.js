// Cuadrados y Cubos
function cuadrados() {
    let input_cuadrados = document.getElementById('numero_cuadrados');

    for (var i = 0; i <= input_cuadrados; i++){
      let k = i**2;
      document.getElementById('Cuadrados').innerHTML = k;
    }
    for (var i = 0; i<=input_cuadrados;i++){
      let j = i**3;
      document.getElementById('Cubos').innerHTML = j;
    }
}
