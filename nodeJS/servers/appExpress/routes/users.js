var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.put('/edit', (req, res) => {
  res.end('petición put /users/edit');
});

router.post('/new/create', (req, res) => {
  res.end('petición post /users/new/create');
})

router.get('/view/:id', (req, res, next) => {
  const { id } = req.params;
  res.end(`La variable ID de la url es ${id}\n`);
});

module.exports = router;
