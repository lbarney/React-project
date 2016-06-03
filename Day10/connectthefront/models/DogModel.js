var mongoose = require('mongoose');

var ToyModel = require('./ToyModel.js');

var dogSchema = new mongoose.Schema({
  name: {type: String, required: true},
  breed: {type: String, required: true},
  badBreath: {type: Boolean},
  legs: {type: Number},
  favToys: [{type: mongoose.Schema.Types.ObjectId, ref: 'Toy'}]
});

module.exports = mongoose.model('Dog', dogSchema);
