var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    fname: {type: String, required: true},
    lname: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);
