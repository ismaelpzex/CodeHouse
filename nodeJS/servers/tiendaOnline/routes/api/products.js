const router = require('express').Router();
const { checkSchema, validationResult } = require('express-validator');


const { checkValidationErrors } = require('../../helpers/middlewares');
const createProductValidator = require('../../validators/createProducts.validator');

const User = require('../../models/user.model');
const Product = require('../../models/product.model');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }

});

router.get('/add/:idProduct', async (req, res) => {
    const { idProduct } = req.params;
    req.user.products.push(idProduct);
    await req.user.save();
    res.status(200).json({ success: 'Producto agregado' });
});

router.get('/cart', async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('products');
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
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