const router = require('express').Router();
const employeesRouter = require('./api/employees');
const officesRouter = require('./api/offices');
const departmentsRouter = require('./api/departments');

router.use('/empleados', employeesRouter);
router.use('/oficinas', officesRouter);
router.use('/departamentos', departmentsRouter);

module.exports = router;