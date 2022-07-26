const router = require('express').Router();
const Teachers = require('../../models/teachers.model')

router.get('/', async (req, res) => {
    try {
        const result = await Teachers.getAll();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.get('/names', async (req, res) => {
    try {
        const result = await Teachers.getNames();
        const response = result.map((value) => value.nombre);
        res.json(response);
    } catch (error) {
        res.json({ error: error.message });
    }
})

module.exports = router;