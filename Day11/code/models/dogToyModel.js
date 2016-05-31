var mongoose = require('mongoose');

var dogToySchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    color: {type: String, required: true},
    squeaks: {type: Boolean, required: false}
});

module.exports = mongoose.model('DogToy', dogToySchema);
