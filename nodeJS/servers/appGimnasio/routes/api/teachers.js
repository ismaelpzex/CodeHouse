const router = require('express').Router();
const Teachers = require('../../models/teachers.model');
const Clients = require('../../models/client.model');

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
});

router.get('/clients', async (req, res) => {
    try {
        const teachers = await Teachers.getAll();
        for (let teacher of teachers) {
            teacher.clientes = await Clients.getByteacherId(teacher.id);
        }
    } catch (error) {
        res.json(err);
    }
});

router.get('/:teacherId', async (req, res) => {
    const { teacherId } = req.params;
    try {
        const result = await Teachers.getById(teacherId);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const { insertId } = await Teachers.create(req.body);
        const response = await Teachers.getById(insertId);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;