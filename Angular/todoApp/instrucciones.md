#### TODO APP - Practica de CRUD básico

1 - Instalar Bootstrap OK!

````````
npm install bootstrap OK!

````````

2 - Poner la referencia de bootstrap en el fichero angular.json para que nuestra aplicacion reconozca tanto el css como js de bootstrap.
SIEMPRE que toqueis el fichero angular.json por algo. teneis que parar y volver a arrancar el servidor.
css : "node_modules/bootstrap/dist/css/bootstrap.min.css" OK
js : "node_modules/bootstrap/dist/js/bootstrap.min.js" OK

3 -- ¿Cuántos componentes necesito ? - 4
    - listaTareas
    - from
    - filtros
    - tareas

4 - Vamos a crear un interfaz de datos para nuestra Tarea. Intefaces van en singular.
````
ng generate inteface interfaces/nombreInterfaz --type=interface
ng g i interfaces/nombreInterfaz --type=interface

````
- id: number
- titulo: string;
- prioridad: string

Un interfaz es basicamente los campos de una tarea

5 - generar la maquetación, la vamos a generar desde el componente principal y vamos a ir generando los diferentes componentes con su maquetación dentro

6 - pasar el array de datos de app-component a lista-tareas INPUT

7- Evitar que se pueda insertar tareas vacias TITULO o PRIORIDAD

8- Evitar tareas duplicadas

9- usando como referencia el formulario de insercción realizar los filtros de prioridad y busqueda semantica



