const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        minLength: [3, 'username is shorter then minLength'],
        maxLength: 10
    },
    email: {
        type: String,
        required: true,
        match: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password: String,
    active: Boolean,
    rol: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }]
});

module.exports = mongoose.model('user', userSchema);