### Receta form tipo mode.

1 - Importamos la libreria al app.module.ts que se llama ReactiveFormsModule

2 - Creamos un atributo dentro de la etiqueta form que se llama formGroup que contendrá el nombre del formulario

3 - necesitamos implementar el evento ngSubmit como en form-template, que llame a una funcion que no recibe parámetros.
    LA FUNCION GENERA UN OBJETO JSON

4 - a cada campo del formulario (input, select, textArea....) SOLO LE TENEMOS QUE AÑADIR UN ATRIBUTO formControlName con el nombre del campo

5 - inicializamos dentro del ts el objeto FormGroup, creado en el punto 2, donde tenemos la obligación de dar de alta cada uno de los campos.(Auí es donde ejecutaremos los validadores).


## ESTADOS DEL FORMULARIO
    - pristine (limpio)
    - dirty (sucio)
    - invalid (invalido)
    - valid (valido)
    - untoched (no tocado)
    - touched (tocado)
    - unsubmitted (sin enviar)
    - submitedd (enviado)