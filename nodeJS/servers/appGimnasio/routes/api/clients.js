const router = require('express').Router();
const Client = require('../../models/client.model');

// router.get('/', (req, res, next) => {
//     Client.getAll()
//         .then(result => res.json(result))
//         .catch(err => res.json({ error: err.message }));
// });

router.get('/', async (req, res) => {
    try {
        const result = await Client.getAll();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.get('/older/:age', async (req, res) => {
    const { age } = req.params;
    try {
        const result = await Client.getByAge(age);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }
});

router.get('/between/:minAge/and/:maxAge', async (req, res) => {
    const { minAge, maxAge } = req.params
    try {
        const result = await Client.getByRangeAge(minAge, maxAge);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { insertId } = await Client.create(req.body);
        const response = await Client.getById(insertId);
        res.json(response || { error: 'id dont exist' });
    } catch (err) {
        res.json(err.message);
    }
});

router.put('/', (req, res, next) => {
    res.end('petición put');
});

router.delete('/', (req, res, next) => {
    res.end('petición delete');
});

module.exports = router;