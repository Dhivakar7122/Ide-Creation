const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const careerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true }
});

const Career = mongoose.model('Career', careerSchema);
module.exports = Career;
