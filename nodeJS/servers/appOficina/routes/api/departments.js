const router = require('express').Router();
const Departments = require('../../models/department.model');
const Employees = require('../../models/employees.model');

router.post('/', async (req, res) => {
    try {
        let response = await Departments.create(req.body);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:idDepartment', async (req, res) => {
    const { idDepartment } = req.params;
    try {
        const response = await Departments.findById(idDepartment).populate('manager');
        const employees = await Employees.find({ department: idDepartment });
        console.log(employees);
        res.status(200).json(new Object({
            Departament: response,
            Empleados: employees
        }));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = router;