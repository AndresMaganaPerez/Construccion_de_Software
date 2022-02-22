# Introducción a las aplicaciones web, HTML5 y ciclo de vida de los sistemas de información
Andrés Magaña Pérez - A01067963

##Preguntas

**¿Cuál es la diferencia entre Internet y World Wide Web?**

World Wide Web, o también llamado como Web, es con lo que interactúan los usuarios dentro de internet. Internet son las conexiones de computadoras para que se pueda mover la información dentro de la web.

Ref: https://www.bbc.co.uk/newsround/47523993#:~:text=The%20world%20wide%20web%2C%20or,emails%20and%20files%20travel%20across.&text=The%20world%20wide%20web%20contains,roads%20like%20houses%20and%20shops.

**¿Cuáles son las partes de un URL?**

URL o Uniform Resource Locator, es un identificador específico de URI, Universal Resource Identifier. La URL se utiliza cuando un usuario realiza una solicitud a un servidor.
Una URL utilizada para HTTP o HTTPS consta de 4 partes:
Esquema. Identifica el protocolo que se usa para acceder al recurso buscado dentro de Internet. HTTP es sin SSL, y HTTPS es con SSL.
Host. El nombre del host identifica el host que tiene el recurso. Pueden estar junto con Port Numbers.
Camino. El camino identifica el recurso específico que el usuario busca dentro del host.
Query String. No aparece en todos los URLs. Va seguido del camino. Provee un hilo de información donde el recurso puede utilizarlo para algún propósito.

*scheme://host:port/path?query*

Ref: https://www.ibm.com/docs/en/cics-ts/5.1?topic=concepts-components-url

**¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?**

HTTP. Define métodos de petición para determinar la acción que se desea realizar dentro de un recurso determinado.
GET. Solicita una representación de un recurso determinado. Sólo recupera datos.
HEAD. Pide una respuesta idéntica a la petición GET, sin cuerpo de respuesta.
POST. Envía una identidad a un recurso específico, causando efectos en el servidor.
PUT. Reemplaza todas las peticiones del recurso destino con la carga útil de petición.
PATCH. Realiza modificaciones parciales a un recurso.
DELETE. Borra un recurso específico.

Ref: https://developer.mozilla.org/es/docs/Web/HTTP/Methods

**¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?**

Post. Porque envía una nueva identidad al recurso recurrido.
¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?
Get. Porque solicitas la representación del recurso deseado.
Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?
Es una respuesta que manda HTTP cuando la solicitud fue exitosa.

Ref: https://developer.mozilla.org/es/docs/Web/HTTP/Status/200

**¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?**

Se lanza cuando el enlace ha sido cambiado a otro o ha sido eliminado. Otra situación es que la URL está mal relacionada dentro de internet. Considero que sí es responsabilidad del desarrollador dar a conocer que su contenido dentro de la web ha sido movido a otro URL de manera clara, y además de asegurarse de que esté bien relacionada dentro de la web.

Ref: https://www.ionos.mx/digitalguide/paginas-web/creacion-de-paginas-web/que-significa-el-error-404-not-found/

**¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?**

El error 500 indica que hubo un error en el servidor del sitio web. Debido a que es por parte del servidor donde se encuentra el sitio web, es responsabilidad del desarrollador arreglar el error.

Ref: https://www.cdmon.com/es/blog/error-500-internal-server-error

**¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.**

Un atributo despreciado es aquel que ha sido actualizado por alguno nuevo. Algunos ejemplos son: Basefont, Center, Font, S, Strike, U, etc.

Ref: https://www.w3.org/TR/html401/conform.html#:~:text=A%20deprecated%20element%20or%20attribute,been%20outdated%20by%20newer%20constructs.&text=HTML%20presentational%20attributes%20have%20been,support%20by%20a%20user%20agent.

**¿Cuáles son las diferencias principales entre HTML 4 y HTML5?**

HTML 5 tiene una sintaxis compatible con HTML 4 y XHTML. Además, tiene etiquetas resumidas como <meta charset=”UTF-8”> o <!DOCTYPE html>. Se introducen nuevos elementos como: section, article, aside, header, footer, etc. También se agregan nuevos atributos, como: media, charset, autofocus, placeholder, etc.

Ref: https://blogs.ua.es/pi/2011/01/17/%C2%BFcuales-son-las-diferencias-entre-html4-xhtml-1-0-y-html5/#:~:text=Algunas%20de%20las%20principales%20diferencias,%2F%3E%20(XHTML%201.0).&text=HTML5%20permite%20incluir%20elementos%20de%20SVG%20y%20MathML.

**¿Qué componentes de estructura y estilo tiene una tabla?**

Una tabla contiene columnas y filas, celdas de encabezado. En cuanto a estilos, HTML cuenta con una gama muy básica de estilos para las tablas, sin embargo, al agregar CSS se amplían los estilos.

**¿Cuáles son los principales controles de una forma HTML5?**

* Color
* Fecha
* Hora y Fecha
* Correo
* Número
* Rango
* Hora
* URL

**¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente página para descubrirlo: http://html5test.com/ (Al responder la pregunta recuerda poner el navegador que utilizas)**

Chrome - 528 / 555.

**Sobre el ciclo de vida y desarrollo de los sistemas de información:**

**¿Cuál es el ciclo de vida de los sistemas de información?**

Es un enfoque por fases donde se involucra el análisis y diseño del sistema donde involucra un actividades del desarrollador y del usuario.

Ref: https://es.slideshare.net/MonicaNaranjo20/ciclo-de-vida-de-un-sistema-de-informacion-93192099#:~:text=Ciclo%20de%20vida%20de%20un%20sistema%20%EF%82%A7%20El%20ciclo%20de,del%20analista%20y%20del%20usuario.

**¿Cuál es el ciclo de desarrollo de sistemas de información?**

Metodología utilizada para el desarrollo de sistemas de información. Está compuesto por fases, como planificación, análisis, diseño y ejecución.

Ref: https://es.wikipedia.org/wiki/Systems_Development_Life_Cycle#:~:text=El%20ciclo%20de%20vida%20de%20desarrollo%20de%20sistemas%20(SDLC)%20es,etapa%20del%20ciclo%20de%20vida.
