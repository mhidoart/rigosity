const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}
const userSchema = mongoose.Schema({
    email: reqString,
    password: reqString,
    firstName: reqString,
    lastName: reqString

})
module.exports = mongoose.model('users', userSchema)