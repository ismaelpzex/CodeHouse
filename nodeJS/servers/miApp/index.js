const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.end('petición GET sobre localhost/3000/');
});

app.post('/create', (req, resp) => {
    resp.end('peticion POST sobre ruta /create!');
});

app.put('/product/edit', (req, resp) => {
    resp.end('Petición put');
})

// let PORT = 3000;

// if (process.env.PORT) {
//     PORT = process.env.PORT;
// }

// const PORT = process.env.PORT ? process.env.PORT : 3000;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${process.env.PORT}`);
})