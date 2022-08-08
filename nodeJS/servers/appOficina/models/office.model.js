const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const officeSchema = new Schema({
    name: String,
    addres: String,
    departments: [{ type: Schema.Types.ObjectId, ref: 'department' }],
    director: [{ type: Schema.Types.ObjectId, ref: 'employee' }]
});

module.exports = mongoose.model('office', officeSchema);