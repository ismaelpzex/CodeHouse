const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    department: String,
    avaliable: Boolean,
    created_at: Date
});

productSchema.virtual('price_taxes').get(function () {
    return this.price * 1.21;
});

productSchema.methods.sameDepartment = function () {
    return this.model('product').find({ department: this.department });
};

productSchema.statics.avaliables = function () {
    return this.model('product').find({ avaliable: true });
};

module.exports = mongoose.model('product', productSchema);