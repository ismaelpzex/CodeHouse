const router = require('express').Router();
const Employees = require('../../models/employees.model');

router.post('/', async (req, res) => {

    try {
        const response = await Employees.create(req.body);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:idEmpleado', async (req, res) => {
    const { idEmpleado } = req.params;
    try {
        let response = await Employees.findById(idEmpleado)
        res.status(200).json({ response });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = router;