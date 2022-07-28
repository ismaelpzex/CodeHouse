const router = require('express').Router();
const Client = require('../../models/client.model');

//METODO QUE RECUPERA TODOS LOS CLIENTES

// router.get('/', async (req, res) => {
//     try {
//         const result = await Client.getAll();
//         res.json(result);
//     } catch (err) {
//         res.json({ error: err.message });
//     }
// });

router.get('/', async (req, res) => {
    let { page, limit } = req.query;

    try {
        const { total, pages } = await Client.getInfo(limit);
        const info = {
            total: total,
            pages: parseInt(pages),
            next: `http://localhost:3000/api/clients?page=${parseInt(page) + 1}&limit=${limit}`,
            prev: `http://localhost:3000/api/clients?page=${parseInt(page) - 1}&limit=${limit}`
        }
        const result = await Client.getByPage(page, limit);
        res.json({
            info,
            result
        });
    } catch (error) {
        res.json({ error: error.message });
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
        res.json({ error: err.message });
    }
});

router.put('/:clientId', async (req, res, next) => {
    const { clientId } = req.params;
    try {
        const response = await Client.update(clientId, req.body);
        res.json(response);
    } catch (error) {
        res.json({ error: err.message });
    }
});

router.delete('/:clientId', async (req, res, next) => {
    const { clientId } = req.params;
    try {
        const result = await Client.remove(clientId);
        res.json(result);
    } catch (error) {
        res.json({ error: err.message });
    }
});

module.exports = router;