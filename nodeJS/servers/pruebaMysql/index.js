const express = require('express');
require('dotenv').config();
require('./config/db');

const { getAll } = require('./model/alumno.model');
const app = express();

const PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
    const response = await getAll();
    res.json(response);
})
app.listen(PORT, () => {
    console.log('servidor escuchando en puerto ' + PORT);
});