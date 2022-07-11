### CMR EMPLEADOS

1 - Crear una interfaz para empleado y para departamento.

    Empleado
        id: number,
        name: string,
        surname: string
        dni: string,
        email: string,
        photo: string,
        department: string,
        status: boolean,
    
    Departamento:
        id: number,
        title: string,
        numEmployees,

2 - Crear 2 servicios, uno para empleados y otro para departamentos y crearemos un array de datos para cada uno.

    Departamentos: Marketing, Dirección, Cuentas y Desarrollo.
    Empleados: dos empleados uno en Marketing y otro en Desarrollo.

3 - rutas que necesito
    1 - /home
    2 - /empleados
    3 - /nuevo-empleado
    4 - /empleado/:idempleado

4 - componentes que necesito
    1 - HomeComponent
    2 - ListaEmpleados
    3 - Form
    4 - VistaEmpleados
    5 - Header
    6 - Footer
    7 - EmpleadoCard

5 - Crear una maquetacion responsive con bootstrap, colocar los componentes trasversales y hacer funcionar la navegación del menu.

6 - En el componente listaEmpleados, hacer una peticion al servicio y traerse los empleados.

7 - Pintar los empleados, colocando un borde de color verde y un boton de color verde con el texto activo a cada empleado que este activo y un borde rojo, boton rojo, texto inactivo a los que no estén activos.

8 pintar el empleado en la vista de Empleado, recoger el parámetro activo de la ruta (el ID) y hacer una consulta al servicio con ese id para obtener el empleado.