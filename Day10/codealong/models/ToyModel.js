var mongoose = require('mongoose');

var toySchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  smelly: {type: Boolean}
});

module.exports = mongoose.model('Toy', toySchema);

//5750b7eff952d2089ccc7361
//5751ac20ac413a80a0dafba3
