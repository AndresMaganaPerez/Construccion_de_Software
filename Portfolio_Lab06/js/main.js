// Práctica Clase de Programación de Eventos
// document.getElementById("Proyectos").onclick(muestra_imagen());

function muestra_imagen() {
  document.getElementById("Portada").innerHTML = '<img src="https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="Wallpaper">';
}

let input_artista = document.getElementById("artista");

input_artista.onkeyup = () => {
  let div_respuesta =document.getElementById("respuesta");

  div_respuesta.innerHTML = "Tu artista favorito es " + input_artista.value;
}
