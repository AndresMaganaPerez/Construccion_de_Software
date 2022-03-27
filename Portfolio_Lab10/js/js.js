const filesystem = require('fs');

const http = require('http');

const server = http.createServer((request,response) => {
        if (request.url === '/') {
            response.write('<!doctype html>');
            response.write('<html class="no-js" lang="">');
            response.write('<head>');
            response.write('<meta charset="utf-8">');
            response.write('<title>Andrés Magaña</title>');
            response.write('</head>');
            response.write('<body>');
            response.write('<h1>Andrés Magaña Pérez<h1>');
            response.write('<p>¡Bienvenido a la página de Andrés Magaña!</p>');
            response.write('<p>Seleccione la opción que quiera conocer de Andrés.</p>');
            response.write('<a href = "/proyectos">Proyectos</a>');
            response.write('<a href = "/sobreMi">Sobre Mi</a>');
            response.write('<a href = "/contacto">Contacto</a>');
        }
        else if (request.url === '/proyectos'){
            response.write('<!doctype html>');
            response.write('<html class="no-js" lang="">');
            response.write('<head>');
            response.write('<meta charset="utf-8">');
            response.write('<title>Proyectos</title>');
            response.write('</head>');
            response.write('<body>');
            response.write('<a href = "/">Inicio</a>');
            response.write('<a href = "/sobreMi">Sobre Mi</a>');
            response.write('<a href = "/contacto">Contacto</a>');
            response.write('<h1>Proyectos<h1>');
            response.write('<h2>Medvsa</h2>');
            response.write('<p>Proyecto de marca de ropa. Basada en arte, con diferentes artistas.</p>');
            response.write('<h2>The Nobodies</h2>');
            response.write('<p>Banda de Rock, donde soy el baterista. Hemos tenido bastantes tocadas para ser contadas. La más grande ha sido en el Teletón, donde fue transmitido a nivel internacional.</p>');
        }
        else if (request.url === '/sobreMi'){
            response.write('<!doctype html>');
            response.write('<html class="no-js" lang="">');
            response.write('<head>');
            response.write('<meta charset="utf-8">');
            response.write('<title>Proyectos</title>');
            response.write('</head>');
            response.write('<body>');
            response.write('<a href = "/">Inicio</a>');
            response.write('<a href = "/proyectos">Proyectos</a>');
            response.write('<a href = "/contacto">Contacto</a>');
            response.write('<h1>Sobre Mi<h1>');
            response.write('<h2>Profesional</h2>');
            response.write('<p>Actualmente estoy estudiando la carrera de Ingeniería en Tecnologías de la Computación, en el Tecnológico de Monterrey. Estoy cursando 4to semestre.</p>');
            response.write('<h2>Deportivo</h2>');
            response.write('<p>Soy atleta de calistenia y street workout. He competido en diversos torneos, desde municipales hasta nacionales.</p>');
            response.write('<h2>Medvsa</h2>');
            response.write('<p>Medvsa es una marca de ropa de artistas, donde se imprimen diferentes obras de los artistas en prendas para después venderlas.</p>');
        }
        else if (request.url === '/contacto' && request.method === 'GET'){
            response.write('<!doctype html>');
            response.write('<html class="no-js" lang="">');
            response.write('<head>');
            response.write('<meta charset="utf-8">');
            response.write('<title>Proyectos</title>');
            response.write('</head>');
            response.write('<body>');
            response.write('<a href = "/">Inicio</a>');
            response.write('<a href = "/proyectos">Proyectos</a>');
            response.write('<a href = "/sobreMi">Sobre Mi</a>');
            response.write('<h1>Contacto<h1>');
            response.write('<h2>Número Telefónico</h2>');
            response.write('<p>443 105 1050</p>');
            response.write('<h2>Correo electrónico académico</h2>');
            response.write('<p>a01067963@tec.mx</p>');
            response.write('<h2>Déjame un mensaje</h2>');
            response.write('<form action="/contacto" method="POST">');
            response.write('<input name="mensaje" type="text">');
            response.write('<input type="submit" value="Enviar">');
            response.write('</form>');
        }
        else if (request.url === '/contacto' && request.method === 'POST'){
            const datos = [];
            request.on('data', (dato) => {
                console.log(dato);
                datos.push(dato);
            });
            return request.on('end', () =>{
               console.log(datos);
               const datos_completos = Buffer.concat(datos).toString();
               console.log(datos_completos);
               const nuevo_dato = datos_completos.split('=')[1];
               console.log(nuevo_dato);
                response.write('<!doctype html>');
                response.write('<html class="no-js" lang="">');
                response.write('<head>');
                response.write('<meta charset="utf-8">');
                response.write('<title>Proyectos</title>');
                response.write('</head>');
                response.write('<body>');
                response.write('<a href = "/">Inicio</a>');
                response.write('<a href = "/proyectos">Proyectos</a>');
                response.write('<a href = "/sobreMi">Sobre Mi</a>');
                response.write('<h1>Contacto<h1>');
                response.write('<h2>Número Telefónico</h2>');
                response.write('<p>443 105 1050</p>');
                response.write('<h2>Correo electrónico académico</h2>');
                response.write('<p>a01067963@tec.mx</p>');
                response.write('<h2>Déjame un mensaje</h2>');
                response.write('<form action="/contacto" method="POST">');
                response.write('<input name="mensaje" type="text">');
                response.write('<input type="submit" value="Enviar">');
                response.write('</form>');
                response.write('<p>El mensaje que escribiste es: <br></p>');
                response.write(nuevo_dato);
            });
        }
        else {
            response.statusCode = 404;
            response.write('<h1>404 ERROR</h1>');
        }
    }
);
server.listen(1000);