import { Empleado } from "src/app/interfaces/empleado.interface";

export const EMPLEADOS: Empleado[] = [
    {
        id: 1,
        name: 'Carlos',
        surname: 'el Bestia',
        dni: '12345678Z',
        email: 'tecomalamanounacabra@ipeservices.net',
        photo: 'https://randomuser.me/api/portraits/men/72.jpg',
        department: 1,
        status: true
    },
    {
        id: 2,
        name: 'Andrea',
        surname: 'la Tierna',
        dni: '66666666Y',
        email: 'l.latierna@ipeservices.net',
        photo: 'https://randomuser.me/api/portraits/women/60.jpg',
        department: 2,
        status: false
    },
    {
        id: 3,
        name: 'Dulce',
        surname: 'la Salvaje',
        dni: '66666665Y',
        email: 'd.lasalvaje@ipeservices.net',
        photo: 'https://randomuser.me/api/portraits/women/61.jpg',
        department: 2,
        status: true
    },
    {
        id: 4,
        name: 'Miguel',
        surname: 'el Callao',
        dni: '12345676Z',
        email: 'm.elcallao@ipeservices.net',
        photo: 'https://randomuser.me/api/portraits/men/73.jpg',
        department: 1,
        status: false
    }
]