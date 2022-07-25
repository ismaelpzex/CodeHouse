const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/contacto', (req, res) => {
  res.end('petición get ruta /contacto');
});

module.exports = router;
