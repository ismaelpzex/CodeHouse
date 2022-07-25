const router = require('express').Router();

router.get('/', (req, res) => {
    res.end('peticion get sobre /products')
});

router.put('/', (req, res) => {
    res.end('peticion put sobre /products')
});

router.post('/', (req, res) => {
    res.end('peticion post sobre /products')
});

router.delete('/', (req, res) => {
    res.end('peticion delete sobre /products')
});

router.put('/edit', (req, res) => {
    res.end('petiticon put en /products/edit')
})
module.exports = router;