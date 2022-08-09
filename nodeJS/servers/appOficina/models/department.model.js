const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    name: String,
    description: String,
    manager: { type: Schema.Types.ObjectId, ref: 'employee' }
});

module.exports = mongoose.model('department', departmentSchema);