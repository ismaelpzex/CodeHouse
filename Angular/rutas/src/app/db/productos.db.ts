import { Producto } from "../interfaces/producto.interface";

export const PRODUCTOS: Producto[] = [
    {
        id: 1,
        title: 'Leche desnatada',
        price: 0.59,
        stock: true,
        photo: 'https://www.alcampo.es/media/hc0/h23/10801781211166.jpg'
    },
    {
        id: 2,
        title: 'Gel de Baño',
        price: 2.68,
        stock: true,
        photo: 'https://www.latoja.com/manantiales/148-thickbox_default/gel-de-ba%C3%B1o-con-kukui-y-aloe-vera-550ml.jpg'
    },
    {
        id: 3,
        title: 'Merluza congelada',
        price: 5.45,
        stock: true,
        photo: 'https://d2ohdpvxj0yo9f.cloudfront.net/products/fi/filete-de-merluza-congelada-sin-piel-de-mercadona-1649683025.jpg'
    },
    {
        id: 4,
        title: 'Carne picada',
        price: 6.75,
        stock: true,
        photo: 'https://d2ohdpvxj0yo9f.cloudfront.net/products/ca/carne-picada-de-ternera-manuel-martinez-de-mercadona-1649684868.jpg'
    }
]
