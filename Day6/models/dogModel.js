var mongoose = require('mongoose');

var dogSchema = mongoose.Schema({
    name: {type: 'String', required: false},
    breed: {type: 'String', required: false},
    color: {type: 'String', required: false}
});

module.exports = mongoose.model('Dog', dogSchema);
