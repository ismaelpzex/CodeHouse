### Receta para input

    - paso 1: Crear una propiedad de html personalizada con el nombre que sea, dentro de la etiqueta del componente
    - paso 2: Crear una propiedad de clase dentro del ts del componente decorada con @Input(), esa propiedad tiene que tener el mismo nombre que la puesta en html

### Receta par output

    - paso 1: Creamos una propiedad personalizada decorada por @Output. Esta propiedad es un evento personalizado es de tipo EventEmitter.
    - paso 2: Inicializo la propiedad creada en el constructor como new EventEmitter();.
    - paso 3: Recojo el valor que quiero enviar y lo emito al padre a través de un evento emit del output.
    - paso 4: En la etiqueta del componente creo un evento personalizado ()="" entre los paréntesis pongo el nombre del output y entre las comillas la función que llamará cuando reciba la emisión. Pasándole como parámetro $event.
    - paso 5: Creo la función en el componente padre y realizo con el dato lo que necesite (push()).