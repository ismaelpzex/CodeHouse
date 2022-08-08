const router = require('express').Router();
const Offices = require('../../models/office.model');

router.get('/', async (req, res) => {
    try {
        const response = await Offices.find().populate(["director", {
            path: 'departments',
            populate: {
                path: "manager"
            }
        }]);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const response = await Offices.create(req.body);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;