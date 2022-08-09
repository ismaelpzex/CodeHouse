const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeesSchema = new Schema({
    name: String,
    lastName: String,
    address: String,
    department: { type: Schema.Types.ObjectId, ref: 'department' }
});

module.exports = mongoose.model('employee', employeesSchema);