var express = require('express');
var router = express.Router();
const Mensaje = require('../models/mensaje.model')

/* GET home page. */
router.get('/', async function (req, res, next) {
  const mensajes = await Mensaje.find().sort({ createdAt: -1 }).limit(5);
  mensajes.reverse();
  console.log(mensajes);
  res.render('index', { mensajes });
});

module.exports = router;
