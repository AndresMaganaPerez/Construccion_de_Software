# Fundamentos de Javascript
Andrés Magaña Pérez - A01067963

# Preguntas a Responder
**¿Qué diferencias hay entre Java y Javascript?**

Primero que Java es un lenguaje compilado y Javascript es un lenguaje interpretado.
Javascript es un archivo de texto que se adhiere a los archivos de HTML y es interpretado
sin necesidad de compilarlo.

Otra diferencia es que Java es un lenguaje de programación *Orientada a Objetos Puro (OOP)*.
Javascript es un *lenguaje de prototipo*, puede emular la programación OOP.

**Ref:** https://www.hackaboss.com/blog/diferencias-javascript-java#:~:text=Java%20es%20un%20lenguaje%20de,organizaci%C3%B3n%20sin%20%C3%A1nimo%20de%20lucro.

**¿Qué métodos tiene el objeto Date?**

Date tiene los siguientes métodos:
* getFullYear(). obtiene el año con 4 dígitos YYYY.
* getMonth(). obtiene el mes como número 0-11.
* getDate(). regresa el día como número 9-10.
* getHours(). regresa la hora 0-23.
* getMinutes(). regresa los minutos 0-59.
* getSeconds(). regresa los segundos 0-59.
* getMiliseconds(). regresa los milisegundos 0-999.
* getTime(). regresa los milisegundos desde 1 de Enero de 1970.
* getDay(). regresa el día como número 0-6.
* Date.now(). regresa el tiempo actual.

**Ref:** https://www.w3schools.com/js/js_date_methods.asp

**¿Qué métodos tienen los arreglos?**

Arrays tiene los siguientes métodos:
* concat(). junta dos o más arreglos, y regresa una copia de la unión de estos.
* fill(). llena los espacios de un arreglo con un valor default.
* find(). regresa el primer valor del arreglo que pasa por una condición.
* every(). checa que los elementos del arreglo cumplan con una condición.
* indexOf(). busca un elemento del arreglo y regresa el índice de su posición.

**Ref:** https://www.w3schools.com/jsref/jsref_obj_array.asp

**¿Cómo se declara una variable con alcance local dentro de una función?**

Al declarar una variable con *let* dentro de una función, solamente se podrá utilizar
dentro de esa misma función. No podrá salir de ella.

**¿Qué implicaciones tiene utilizar variables globales dentro de funciones?**

Al utilizar variables globales en funciones pone en riesgo que este se modifique en algún
punto que no se quería modificar. O que modifique la función como no se planeaba.
