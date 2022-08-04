const router = require('express').Router();
const { checkSchema, validationResult } = require('express-validator');

const Product = require('../../models/product.model');
const { checkValidationErrors } = require('../../utils/middlewares');
const createProductValidator = require('../../validators/createProducts.validator');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }

});

router.post('/', checkSchema(createProductValidator), checkValidationErrors, async (req, res) => {
    try {
        const response = await Product.create(req.body);
        res.status(201).json(response);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }

});

router.put('/:idProduct', async (req, res) => {
    try {
        const response = await Product.findByIdAndUpdate(req.params.idProduct, req.body, { new: true });
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }

})

router.delete('/:idProduct', async (req, res) => {
    const { idProduct } = req.params;
    try {
        const resposne = await Product.findByIdAndRemove(idProduct);
        res.status(200).json(resposne);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

module.exports = router;