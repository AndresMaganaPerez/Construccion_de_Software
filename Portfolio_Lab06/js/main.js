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

let boton_foto = document.getElementById("muestra_foto_coach");

function mostrar_foto_coach() {
  let div_foto_coach = document.getElementById("foto_coach");
  div_foto_coach.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BcXNpzFh4pGXQ66b90UoisUil8-MNlKlVw&usqp=CAU">'
  boton_foto.onclick = limpiar_foto;
}

function limpiar_foto() {
  let div_foto_coach = document.getElementById("foto_coach")
  div_foto_coach.innerHTML = '';
  boton_foto.onclick = mostrar_foto_coach;
}

boton_foto.onclick = mostrar_foto_coach;
