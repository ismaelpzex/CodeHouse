const mongoose = require('mongoose');
const Product = require('./models/product.model');

//conexión
(async () => {
    await mongoose.connect('mongodb://127.0.0.1/tienda-online');
    await Product.deleteMany({});
    //Crear un Producto
    await Product.create({
        name: 'Lapiz Rojo',
        description: 'Pinta cosas rojas',
        price: 14,
        departament: 'Oficina',
        avaliable: true,
        created_at: new Date()
    });
    await Product.create({
        name: 'Lapiz Rojo',
        description: 'Pinta cosas rojas',
        price: 14,
        departament: 'Oficina',
        avaliable: true,
        created_at: new Date()
    });
    await Product.create({
        name: 'Lapiz Rojo',
        description: 'Pinta cosas rojas',
        price: 14,
        departament: 'Oficina',
        avaliable: true,
        created_at: new Date()
    });
    await Product.create({
        name: 'Pantalón de pinzas',
        description: 'pa salir de fiestuki',
        price: 67,
        departament: 'moda',
        avaliable: false,
        created_at: new Date()
    });

    //RECUPERAR TODOS LOS DOCUMENTOS
    const prodcuts = await Product.find();
    console.log(prodcuts);

    //RECUPERAR DOCUMENTOS FILTRADOS
    const productsModa = await Product.find({ departament: 'moda', avaliable: true });
    console.log(productsModa);

    //RECUPERAR SOLO LOS NOMBRES DE LOS DOCUMENTOS
    const productsNombre = await Product.find().select({ name: 1, _id: 0 });
    console.log(productsNombre);

    //RECUPERAR SOLO LOS DOCUMENTOS A PARTIR DE UN PRECIO
    const productsPrecio = await Product.find({
        price: { $gt: 50 }, //Mayor
        // price: { $gte: 50 }, //Mayor o igual
        // price: { $lt: 50 }, //Menor
        // price: { $lte: 50 } //Menor o igual
        // price: 50 // IGUAL
    })
    console.log(productsPrecio);

    //RECUPERAR DOCUMENTOS A PARTIR DE VARIOS FILTROS
    const options = {
        $and: [
            { price: { $gt: 50 } },
            { avaliable: false }
        ]
    }
    const productosFiltroMultiple = await Product.find(options);
    console.log(productosFiltroMultiple);

    await mongoose.disconnect();
})();
