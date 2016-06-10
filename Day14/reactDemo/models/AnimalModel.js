var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
	name: {type: String, required: true},
	species: {type: String, required: true},
	habitat: {type: String, required: true},
	diet: {type: String, required: true}
});

module.exports = mongoose.model('Animal', animalSchema);
