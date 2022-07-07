## Forms de tipo template

1 - Importamos en app-module.ts, la libreria formsModule, la misma que two way data

2 - Creamos la maqueta del formulario en html (con la etiqueta form)

3 - A este form le colocamos un nombre o template de la misma forma que lo haciamos en directivas e igualamos ese nombre a ngform de esta forma
            #nombreForm = "ngForm"

4 - creamos un evento de tipo submit (ngSubmit)="functionTs(nombreForm)" y llamará a una función en el ts. A esta función le pasamos como parámetro el nombre del formulario creado antes

5 - Todos los campos del formulario (input, checkbox, select, textarea...) OBLIGATORIAMENTE TIENE QUE LLEVAR UN NAME name="" Y UN ATRIBUTO ngModel (sin paréntesis ni corchetes) ngModel

6 - La función devolvera un objeto json con cada uno de los campos del formulario, con su name.